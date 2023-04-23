import React from 'react'
import "./ModulesPage.css"
import topic from "../../assets/topic.svg"
import moduleQuiz from "../../assets/moduleQuiz.svg"
import assignment from "../../assets/assignment.svg"
import Topic from '../../components/Modules/Topic/Topic'
import Quiz from '../../components/Modules/Quiz/Quiz'
import Assignment from '../../components/Modules/Assignment/Assignment'
import { Routes, Route, Link } from 'react-router-dom'
export default function ModulesPage() {
    return (
        <React.Fragment>
            <div style={{ width: "200px", height: "640px", background: "#e6eef2", marginLeft: "105px" }}>
                <div style={{ display: "flex", flexDirection: "column", paddingLeft: "20px" }}>
                    <div className='div-link' style={{ display: "flex", flexDirection: "row" }}>
                        <img className='active-video-icon' src={topic} alt="video-icon" />
                        <p><Link to="/module/topic">Python Loops</Link></p>
                    </div>
                    <div className='div-link' style={{ display: "flex", flexDirection: "row" }}>
                        <img src={moduleQuiz} alt="quiz-icon" />
                        <p><Link to="/module/quiz">Quiz-1: Data Types</Link></p>
                    </div>
                    <div className='div-link'>
                        <Link to="/module/assignment">
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <img src={assignment} alt="assignment-task" />
                                <p>Assignment-1:</p>
                            </div>
                            <p style={{ position: "absolute", top: "235px", left: "130px" }}>Operators | Loops</p>
                        </Link>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Topic />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/assignment" element={<Assignment />} />
                <Route path="/topic" element={<Topic />} />
            </Routes>
        </React.Fragment>
    )
}
