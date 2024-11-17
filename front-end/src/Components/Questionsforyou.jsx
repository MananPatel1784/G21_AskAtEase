import React from 'react';
import styled from 'styled-components';
import star from './Assets/star.webp';
import cross from './Assets/cross.webp';
import arrow from './Assets/Downarrow.webp';


const Button = styled.button`
   margin-right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 10px;
  border-radius: 70%;
  transition: all 0.3s ease;

  &:hover {
    background-color: lightgray;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  img {
    display: block;
  }
`;

const StyledButton = styled.button`
  margin-left: ${(props) => (props.first ? '0' : '70px')};
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c44242;
    border: 2px solid black;
    border-radius: 5px;
  }
`;

const Questionsforyou = () => {
    return (
  <div style={{ display: 'flex', height: '70vh' }}>
            <div
                className="flex-col gap-y-10 bg-gradient-to-b from-[#F0D9C4] to-[#ff9797] font-lexend rounded-xl"
                style={{
                    width: '40%',
                    marginTop: '20px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <div
                    className="my-1"
                    style={{
                        marginLeft: '15px',
                        paddingTop: '10px',
                        display: 'flex',
                    }}
                >
                    <img src={star} width={20} height={0.5} alt="Star Icon" />
                    <h1 style={{ marginLeft: '5px', marginBottom: '0' }}>
                        Questions for you
                    </h1>
                </div>
                <div
                    style={{
                        borderBottom: '1px solid gray',
                        paddingBottom: '5px',
                        marginTop: '0',
                    }}
                ></div>
                <div style={{fontSize:'25px',marginLeft: '15px', marginTop: '5px',display: 'flex', justifyContent: 'space-between'}}>
                <h1>What is 1 * 2 * 3 * 15 = ?</h1>
                <Button>
    <img src={cross} width={15} alt="icon" />
  </Button>
                </div>
                <div style={{fontSize:'12px',marginLeft: '15px',}}>
                    <p>No answer yet</p>
                    <p>Last followed 51m</p>
            </div>
                <div style={{ fontSize: '18px',marginLeft:'30px',}}>
                <StyledButton>Answer</StyledButton>
                <StyledButton style={{marginLeft: '70px'}}>Follow</StyledButton>
                <StyledButton style={{marginLeft: '70px'}}>Pass</StyledButton>
            </div>
                <div
                    style={{
                        marginTop: '5px',
                        borderBottom: '1px solid gray',
                        display: 'flex',
                    }}
                ></div>
                <div>
                    <div style={{fontSize:'25px',marginLeft: '15px',display: 'flex', justifyContent: 'space-between' }}>
                        <h1>What is -13-6-2+5*4 = ?</h1>
                       <Button>
    <img src={cross} width={15} alt="icon" />
  </Button>
                    </div>
                    <p style={{fontSize:'12px',marginLeft: '15px',}}>1 answer</p>
                    <p style={{fontSize:'12px',marginLeft: '15px',}}>Last followed 1h</p>
            </div>
            <div style={{fontSize: '18px',marginLeft:'30px'}}>
                <StyledButton>Answer</StyledButton>
                <StyledButton style={{marginLeft: '70px'}}>Follow</StyledButton>
                <StyledButton style={{marginLeft: '70px'}}>Pass</StyledButton>
            </div>
            <div
                    style={{
                        marginTop: '5px',
                        borderBottom: '1px solid gray',
                        display: 'flex',
                    }}
                ></div>
                <div>
                    <div style={{fontSize:'25px',marginLeft: '15px',display: 'flex', justifyContent: 'space-between' }}>
                        <h1>What is the diversity at LPU in all aspects?</h1>
                        <Button>
    <img src={cross} width={15} alt="icon" />
  </Button>
                    </div>
                    <p style={{fontSize:'12px',marginLeft: '15px',}}>No answer yet</p>
                    <p style={{fontSize:'12px',marginLeft: '15px',}}>Last followed 1h</p>
            </div>
            <div style={{fontSize: '18px',marginLeft:'30px'}}>
                <StyledButton>Answer</StyledButton>
                <StyledButton style={{marginLeft: '70px'}}>Follow</StyledButton>
                <StyledButton style={{marginLeft: '70px'}}>Pass</StyledButton>
            </div>

        <div style={{ display:'flex',borderBottom: "2px solid #000", paddingBottom: "8px" }}>
                </div>
                <div>
                    <h1 style={{display:'flex', justifyContent: 'center'}}>More</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button><img src={arrow} width={10}/></Button>
                </div>

                <div style={{ display:'flex',borderBottom: "2px solid #000", paddingBottom: "8px" }}>
                </div>
                <div style={{fontSize:'20px',marginLeft: '15px'}}>
                    <h1>Add 5 topics you know about</h1>
                </div>
                <div style={{fontSize: '12px',marginLeft: '15px'}}>
                    <p>You'll get better questions if you add more specific topics.</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <StyledButton>Add topics</StyledButton>
                </div>
        </div>
   </div>
    );
};

export default Questionsforyou;