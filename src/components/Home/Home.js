import React from 'react'
import DataAnalysis from "../../assets/DataAnalysis.png"
import DataWrangling from "../../assets/DataWrangling.png"
import bunny from "../../assets/bunny.jpeg"
export default function Home() {
  return (
    <React.Fragment>
      <div style={{ background: "#f7f9fb", width: "1440px", height: "640px", display: "flex", flexDirection: "column", gap: "30px", justifyContent: "center", alignItems: "flex-start" , overflowX:"hidden"}}>
        <div style={{ width: "1000px", height: "150px", position: "relative", left: "200px", bottom: "30px" }}>
          <p style={{ fontSize: "24px", fontWeight: "500" }}>Upcoming Certifications</p>
          <div style={{ background: "#ffffff", width: "1000px", height: "120px", borderRadius: "4px", border: "1px solid #c6ebf5", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
            <img src={DataAnalysis} alt="data-analytics" style={{ width: "60px", height: "60px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <div style={{ color: "grey", background: "#f6f5f5", fontSize: "10px", fontWeight: "bold", padding: "5px", borderRadius: "10px" }}>CERTIFICATION &nbsp;|&nbsp; ATTEMPT 1</div>
              <div style={{ fontSize: "15px" }}>DATA ANALYSIS</div>
              <div style={{ fontSize: "15px" }}>CERTIFICATION</div>
              <div style={{ color: "grey", background: "#c3e9ed", fontSize: "10px", fontWeight: "bold", padding: "5px", borderRadius: "10px" }}>COMPLETED &nbsp;|&nbsp; 21 MAR 2022</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontSize: "14px" }}>Exam Structure</div>
              <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                <div style={{ fontSize: "12px" }}>Round1</div>
                <div style={{ background: "#c2d3e1", borderRadius: "10px", width: "40px", height: "20px", fontSize: "12px", paddingLeft: "10px" }}>MCQ</div>
                <div style={{ background: "#c2d3e1", borderRadius: "10px", width: "60px", height: "20px", fontSize: "12px", paddingLeft: "10px" }}>CODING</div>
              </div>
              <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                <div style={{ fontSize: "12px" }}>Round2</div>
                <div style={{ background: "#c2d3e1", borderRadius: "10px", height: "20px", paddingLeft: "10px", paddingRight: "10px", fontSize: "12px" }}>PROJECT</div>
              </div>
            </div>
            <button style={{ height: "30px", borderRadius: "15px", background: "white", border: "1px solid #5aa7e4", color: "#5aa7e4" }}>VIEW EXAM DETAILS</button>
          </div>
        </div>
        <div style={{ width: "1000px", height: "340px", position: "relative", left: "200px", display: "flex", flexDirection: "column"}}>
          <p style={{ fontSize: "24px", fontWeight: "500" }}>Continue Learning</p>
          <div style={{ position: "relative", left: "515px", bottom: "10px", color: "#5aa7e4", fontWeight: "bold", fontSize: "14px" }}>VIEW MODULE DETAILS</div>
          <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
            <div style={{ display: "flex", flexDirection: "row", background: "#ffffff", width: "700px", height: "250px", borderRadius: "4px", border: "1px solid #c6ebf5", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.1)" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <img src={DataWrangling} alt="" style={{ width: "60px", height: "60px" }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <div style={{ fontSize: "15px" }}>DATA WRANGLING &</div>
                      <div style={{ fontSize: "15px" }}>VISUALIZATION</div>
                      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <img src={bunny} alt="avatar" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                        <div style={{ color: "#5aa7e4", fontSize: "12px", fontWeight: "500" }}>Test Instructor</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-end", position: "relative", left: "50px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                      <div style={{ fontSize: "12px" }}>Live Sessions</div>
                      <div style={{ background: "#c3e9ed", borderRadius: "10px", height: "8px", width: "150px" }}>
                        <div style={{ position: "relative", bottom: "15px", fontSize: "10px", color: "#72c8d1" }}>0/13</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                      <div style={{ fontSize: "12px" }}>Assignments</div>
                      <div style={{ background: "#c3e9ed", borderRadius: "10px", height: "8px", width: "150px" }}>
                        <div style={{ position: "relative", bottom: "15px", fontSize: "10px", color: "#72c8d1" }}>0/3</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                      <div style={{ fontSize: "12px" }}>MCQ Quiz</div>
                      <div style={{ background: "#c3e9ed", borderRadius: "10px", height: "8px", width: "150px" }}>
                        <div style={{ position: "relative", bottom: "15px", fontSize: "10px", color: "#72c8d1" }}>0/6</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ height: "251px", width: "1px", background: "#c3e9ed", position: "relative", left: "100px", top: "0px" }}></div>
                <div style={{ display: "flex", flexDirection: "column", position: "relative", left: "170px", justifyContent: "center", gap: "20px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <div style={{ fontSize: "14px", fontWeight: "500" }}>Today's Plan</div>
                    <div style={{ fontSize: "10px", color: "grey" }}>21 March 2022</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", color: "#2899f2", fontSize: "14px", fontWeight: "500" }}>
                    <div>Data Transformation using</div>
                    <div>Pandas-3</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", gap: "25px", alignItems: "center" }}>
                    <div style={{ color: "grey", fontSize: "12px" }}>Daily Feedback</div>
                    <div style={{ color: "#72c8d1", fontSize: "10px" }}><em>opens at 07:30 PM</em></div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <button style={{ background: "#f6f5f5", height: "30px", width: "170px", borderRadius: "15px", color: "black", border: "none", fontSize: "12px", fontWeight: "500" }}>JOIN LIVE SESSION</button>
                    <div style={{ color: "grey", fontSize: "10px", position: "relative", left: "25px" }}>BEGINS AT 07:30 PM</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ background: "#ffffff", width: "300px", height: "250px", borderRadius: "4px", border: "1px solid #c6ebf5", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.1)" }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "flex-start", gap: "10px", position: "relative", left: "50px" }}>
                <p style={{ fontSize: "15px" }}>Progress Overview</p>
                <div style={{ borderRadius: "4px", border: "1px solid #c3e9ed", height: "50px", width: "200px" }}>
                  <div style={{ display: "flex", flexDirection: "row", gap: "80px", justifyContent: "space-evenly", alignItems: "center" }}>
                    <p style={{ fontSize: "20px", fontWeight: "400" }}>0%</p>
                    <p style={{ fontSize: "12px", color: "#565656" }}>Overall Grade</p>
                  </div>
                  <div style={{ width: "180px", height: "7px", background: "#ecdcdc", borderRadius: "10px", position: "relative", bottom: "20px", left: "10px" }}></div>
                </div>
                <div style={{ borderRadius: "4px", border: "1px solid #c3e9ed", height: "50px", width: "200px" }}>
                  <div style={{ display: "flex", flexDirection: "row", gap: "80px", justifyContent: "space-evenly", alignItems: "center" }}>
                    <p style={{ fontSize: "20px", fontWeight: "400" }}>0%</p>
                    <p style={{ fontSize: "12px", color: "#565656" }}>Attendance</p>
                  </div>
                  <div style={{ width: "180px", height: "7px", background: "#ecdcdc", borderRadius: "10px", position: "relative", bottom: "20px", left: "10px" }}></div>
                </div>
                <p style={{ color: "#5aa7e4", fontWeight: "bold", fontSize: "12px" }}>VIEW DETAILED PROGRESS</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}
