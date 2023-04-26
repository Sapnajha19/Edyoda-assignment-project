import React, { useState } from 'react'
import "./HomePage.css"
import edyodaLogo from "../../assets/edyodaLogo.png"
import bunnyLogo from "../../assets/bunnyLogo.png"
import home from "../../assets/home.png"
import homeDark from "../../assets/homeDark.png"
import module from "../../assets/module.png"
import moduleDark from "../../assets/module Dark.png"
import instructor from "../../assets/instructor.png"
import instructorDark from "../../assets/instructorDark.png"
import Home from "../../components/Home/Home"
import ModulesPage from '../ModulesPage/ModulesPage'
import { Routes, Route, Link } from 'react-router-dom'
import InstructorPage from '../InstructorPage'
export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", background: "#ffffff" }}>
        <div><img src={edyodaLogo} alt="website-logo" style={{ height: "50px", width: "150px", paddingLeft: "50px" }} /></div>
        <div style={{ display: "flex", flexDirection: "row", paddingRight: "70px", alignItems: "center", gap: "20px" }}>
          <div>Hi Test Learner!</div>
          <div><img src={bunnyLogo} alt="avatar" style={{ height: "40px", width: "35px", borderRadius: "50%" }} /></div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", background: "#192854", height: "55px", alignItems: "center", gap: "20px" }}>
        <div className="container">
          <div className="title" onClick={toggleDropdown}>
            DS031221
            <div className={`triangle ${isOpen ? "up" : "down"}`} />
          </div>

          {isOpen && (
            <div className="dropdown">
              <div className='dropdown-text'>Select Program</div>
              <div style={{ display: "flex", flexDirection: "row", color: "#ffffff", border: "none", background: "none" }}>
                <button>ECRD</button>
                <button>FSR222222</button>
                <button>DS261121</button>
                <button>DS031221</button>
              </div>
            </div>
          )}
        </div>
        <div style={{ color: "#ffffff", fontSize: "20px" }}>Data Scientist Program</div>
      </div>
      <div style={{ height: "649px", width: "105px", background: "#192854", position: "absolute", top: "100px", display: "flex", flexDirection: "column" }}>
        <div style={{ background: `${activeLink === 'home' ? "#e6eef2" : "#192854"}`, width: "100%", height: "80px", position: "relative", top: "9px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Link className='link' to="/" onClick={() => handleLinkClick("home")}>
            <img src={activeLink === 'home' ? home : homeDark} alt="home-icon" style={{ height: "30px", width: "30px" }} />
            <div className='links' style={{ color: `${activeLink === 'home' ? "#04032B" : "#ffffff"}` }}>HOME</div>
          </Link>
        </div>
        <div style={{ background: `${activeLink === 'module' ? "#e6eef2" : "#192854"}`, width: "100%", height: "80px", position: "relative", top: "9px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Link className='link' to="/module" onClick={() => handleLinkClick("module")}>
            <img src={activeLink === 'module' ? module : moduleDark} alt="module-icon" style={{ height: "30px", width: "30px" , paddingLeft:"10px"}} />
            <div className='links' style={{ color: `${activeLink === 'module' ? "#04032B" : "#ffffff"}` }}>MODULES</div>
          </Link>
        </div>
        <div style={{ background: `${activeLink === 'instructor' ? "#e6eef2" : "#192854"}`, width: "100%", height: "80px", position: "relative", top: "9px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Link className='link' to="/instructor" onClick={() => handleLinkClick("instructor")}>
            <img src={activeLink === 'instructor' ? instructor : instructorDark} alt="instructor-icon" style={{ height: "30px", width: "30px" , paddingLeft:"25px"}} />
            <div className='links' style={{ color: `${activeLink === 'instructor' ? "#04032B" : "#ffffff"}` }}>INSTRUCTORS</div>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module/*" element={<ModulesPage />} />
        <Route path="/instructor" element={InstructorPage} />
      </Routes>
    </React.Fragment>
  )
}
