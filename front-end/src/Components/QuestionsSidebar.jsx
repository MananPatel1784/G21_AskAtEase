import React from 'react';

const Question = () => {
  return (
    <>
      <div className="flex-col gap-y-10 bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] font-lexend rounded-xl" style={{
        paddingLeft: "15px",
        paddingRight: "15px",
        width: "20%",
        marginTop: "20px",
        marginLeft: "10px",
      }}>
        <div className="my-1" style={{
          paddingTop: "10px",
        }}>
          <h1 className="text-center">Questions</h1>
          <div style={{ borderBottom: "2px solid #000", paddingBottom: "8px" }}>
          </div>

          <div> 
            <div className="flex" style={{
              paddingTop: "10px",
            }}>
              <button className="text-center hover:font-bold transition duration-200"> Questions for you </button>
            </div>
            <div className="flex gap-0.1 my-5">
              <button className="text-center hover:font-bold transition duration-200"> Answer requests </button>
            </div>
            <div className="flex gap-0.1 my-5" style={{
              paddingBottom: "100px",
            }}>
              <button className="text-center hover:font-bold transition duration-200"> Drafts </button>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default Question;