import React,{useRef} from 'react'

const StartQuiz = ({setUsername }) => {
    const inputRef = useRef();

    const handleClick = () => {
      inputRef.current.value && setUsername(inputRef.current.value);
    };
  
    return (
      <div className="start">
        <input
          className="startInput"
          placeholder="enter your name"
          ref={inputRef}
        />
        <button className="startButton" onClick={handleClick}>
          Start
        </button>
      </div>
    );
}

export default StartQuiz