import { useContext, useEffect, useRef, useState } from 'react'
import { quizContext } from '../App'
import { useNavigate } from 'react-router-dom';

function User() {
  const navigate = useNavigate();
  const { setUser, setNav } = useContext(quizContext);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  },[])

  function startQuiz() {
    if (name.trim() === "") {
      setError("Please enter your name");
      return;
    }
    setUser(name);
    setNav(true);
    navigate('/quiz');
  }

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <input
      ref={inputRef}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {error && <h3 style={{ color: "#f84a4a", fontSize: "30px"}}>{error}</h3>}

      <button className="btn-start" onClick={startQuiz}>Start quiz</button>
    </div>
  );
}

export default User;