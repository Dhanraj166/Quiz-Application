import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import User from './components/User'
import Quiz from './components/Quiz'
import Result from './components/Result'
import { createContext, useState } from 'react'

export const quizContext = createContext();
function App() {
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);
  const [nav, setNav] = useState(false);

  return (
    <>
      <BrowserRouter>
        <quizContext.Provider value={{ user, setUser, score, setScore, nav, setNav }}>
          <Routes>
            <Route path='/' element={<User />} />
            <Route path='/quiz' element={nav ? <Quiz /> : < Navigate to="/" />} />
            <Route path='/result' element={<Result />} />
          </Routes>
        </quizContext.Provider>
      </BrowserRouter >
    </>
  )
}

export default App