import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

export const QuestionsContext = createContext(null);

function useQuestions() {
  const [questions, dispatch] = useReducer(questionsReducer, []);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get(`${API_URL}/api/questions`);
        dispatch({ type: "all", questions: response.data });
      } catch (error) {
        console.error("Error fetching questions:", error.message);
      }
    }
    fetchQuestions();
  }, []);

  return { questions, dispatch };
}

export function QuestionsProvider({ children }) {
  const { questions, dispatch } = useQuestions();

  return (
    <QuestionsContext.Provider value={{ questions, dispatch }}>
      {children}
    </QuestionsContext.Provider>
  );
}

function questionsReducer(questions, action) {
  switch (action.type) {
    case "all": {
      return action.questions;
    }
    default: {
      console.error(`Unknown action type: ${action.type}`);
      return questions;
    }
  }
}
