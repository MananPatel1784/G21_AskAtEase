import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

export const SpaceContext = createContext(null);

function useSpaces() {
  const [spaces, dispatch] = useReducer(spaceReducer, []);

  useEffect(() => {
    async function fetchSpaces() {
      try {
        const response = await axios.get(`${API_URL}/api/spaces`);
        dispatch({ type: "all", spaces: response.data });
      } catch (error) {
        console.error("Error fetching spaces:", error.message);
      }
    }
    fetchSpaces();
  }, []);

  return { spaces, dispatch };
}

export function SpaceProvider({ children }) {
  const { spaces, dispatch } = useSpaces();

  return (
    <SpaceContext.Provider value={{ spaces, dispatch }}>
      {children}
    </SpaceContext.Provider>
  );
}

function spaceReducer(spaces, action) {
  switch (action.type) {
    case "add": {
      return [
        ...spaces,
        {
          _id: action._id,
          name: action.name,
          description: action.description,
          questions: action.questions,
        },
      ];
    }
    case "all": {
      return action.spaces;
    }
    default: {
      console.error(`Unknown action type: ${action.type}`);
      return spaces;
    }
  }
}
