import React from "react";

const Logout = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.box}>
        <div style={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
            style={styles.iconSvg}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v15a2.25 2.25 0 002.25 2.25h6a2.25 2.25 0 002.25-2.25V15M18 8.25l3 3-3 3M21 11.25H9"
            />
          </svg>
        </div>
        <p style={styles.text}>Oh no! You're leaving...<br />Are you sure?</p>
        <div style={styles.buttons}>
          <button style={{ ...styles.button, ...styles.noButton }}>
            No, keep me in
          </button>
          <button style={{ ...styles.button, ...styles.logoutButton }}>
            Yes, log me out
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    width: "300px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  icon: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    marginBottom: "16px",
  },
  iconSvg: {
    width: "40px",
    height: "40px",
  },
  text: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px", 
  },
  button: {
    borderRadius: "20px",
    padding: "10px 16px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
  },
  noButton: {
    backgroundColor: "#AD3B29", 
    color: "#ffffff",
  },
  logoutButton: {
    backgroundColor: "#ffffff",
    color: "#AD3B29", 
    border: "1px solid #AD3B29", 
  },
};

export default Logout;
