import React, { useState } from 'react'
import "./ModulesPage.css"
import topic from "../../assets/topic.svg"
import activeTopic from "../../assets/activeTopic.svg"
import moduleQuiz from "../../assets/moduleQuiz.svg"
import activeModuleQuiz from "../../assets/activeModuleQuiz.svg"
import assignment from "../../assets/assignment.svg"
import activeAssignment from "../../assets/activeAssignment.svg"
import Topic from '../../components/Modules/Topic/Topic'
import Quiz from '../../components/Modules/Quiz/Quiz'
import Assignment from '../../components/Modules/Assignment/Assignment'
import { Routes, Route, Link } from 'react-router-dom'
export default function ModulesPage() {
    const [activeLink, setActiveLink] = useState("topic");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <React.Fragment>
            <div style={{ width: "200px", height: "640px", background: "#e6eef2", marginLeft: "105px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className='div-link' style={{ width: "100%", display: "flex", flexDirection: "row", background: `${activeLink === 'topic' ? "#d2dee7" : "#e6eef2"}`, padding: "10px" }}>
                        <img className='active-video-icon' src={activeLink === 'topic' ? activeTopic : topic} alt="video-icon" />
                        <Link className='links' to="/module/topic" onClick={() => handleLinkClick("topic")}><p style={{ color: "#161c2e" }}>Python Loops</p></Link>
                    </div>
                    <div className='div-link' style={{ width: "100%", display: "flex", flexDirection: "row", background: `${activeLink === 'quiz' ? "#d2dee7" : "#e6eef2"}`, color: "#161c2e", padding: "10px" }}>
                        <img src={activeLink === 'quiz' ? activeModuleQuiz : moduleQuiz} alt="quiz-icon" />
                        <Link className='links' to="/module/quiz" onClick={() => handleLinkClick("quiz")}><p style={{ color: "#161c2e" }}>Quiz-1: Data Types</p></Link>
                    </div>
                    <div className='div-link' style={{ width: "100%", height: "60px", background: `${activeLink === 'assignment' ? "#d2dee7" : "#e6eef2"}`, color: "#161c2e", padding: "10px" }}>
                        <Link className='links' to="/module/assignment" onClick={() => handleLinkClick("assignment")}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <img src={activeLink === 'assignment' ? activeAssignment : assignment} alt="assignment-task" />
                                <p style={{ color: "#161c2e" }}>Assignment-1:</p>
                            </div>
                            <p style={{ position: "absolute", top: "255px", left: "130px", color: "#161c2e" }}>Operators | Loops</p>
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
