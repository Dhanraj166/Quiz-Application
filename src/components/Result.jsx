import { useContext } from "react"
import { quizContext } from "../App"
import { useNavigate } from "react-router-dom";

function Result() {
    const navigate = useNavigate();
    const { user, score, setScore } = useContext(quizContext);
    return (
        <>
            <div className="container">
                <div className="score-wrap">
                    <h1>{user} you got </h1>
                    <div className="score-ring">
                        <span className="score-num">{score}</span>
                        <span className="score-total">of 10</span>
                    </div>
                </div>
                <button className="btn-home" onClick={() => {
                    navigate('/')
                    setScore(0)
                }}>Goto home page</button>
            </div>
        </>
    )
}

export default Result