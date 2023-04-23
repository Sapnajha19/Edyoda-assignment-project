import React from 'react'
import informationCircle1 from "../../../assets/informationCircle1.svg"
import topic from "../../../assets/topic.svg"
import videocam from "../../../assets/videocam.svg"
import document from "../../../assets/document.svg"
export default function Topic() {
    return (
        <React.Fragment>
            <div style={{ background: "#f7f9fb", width: "1130px", height: "638px", position: "absolute", top: "110px", left: "308px" }}>
                <div style={{ paddingLeft: "210px" }}>
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>Python Loops</p>
                    <p style={{ color: "#5f5c5c" }}>15 December 2021, Wednesday, 07:30 PM</p>
                </div>
                <p style={{ color: "#0d8dfa", fontSize: "14px", fontWeight: "bold", paddingLeft: "800px" }}>DAILY FEEDBACK</p>
                <div className='a' style={{ display: "flex", flexDirection: "row", gap: "20px", justifyContent: "center", paddingRight: "41px" }}>
                    <div style={{ background: "white", borderTop: "1px solid #c6ebf5", borderLeft: "1px solid #c6ebf5", borderRight: "1px solid #c6ebf5", borderRadius: "4px 4px 0 0", display: "flex", flexDirection: "row", alignItems: "center", boxShadow: "2px 0 0 0 rgba(0, 0, 0, 0.1)", paddingLeft: "15px", paddingRight: "15px" }}>
                        <img src={informationCircle1} alt="info-icon" style={{ height: "20px", width: "20px" }} />
                        <p style={{ fontWeight: "bold", fontSize: "14px" }}>SESSION PLAN</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <img src={topic} alt="video=icon" style={{ height: "20px", width: "20px" }} />
                        <p style={{ color: "#5f5c5c", fontWeight: "bold", fontSize: "14px" }}>PRE-WATCH VIDEOS</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <img src={videocam} alt="" style={{ height: "20px", width: "20px" }} />
                        <p style={{ color: "#5f5c5c", fontWeight: "bold", fontSize: "14px" }}>SESSION RECORDING</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <img src={document} alt="" style={{ height: "20px", width: "20px" }} />
                        <p style={{ color: "#5f5c5c", fontWeight: "bold", fontSize: "14px" }}>REFERENCES</p>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ background: "#ffffff", height: "400px", width: "700px", borderLeft: "1px solid #c6ebf5", borderRight: "1px solid #c6ebf5", borderBottom: "1px solid #c6ebf5", borderTop: "1px solid #c6ebf5", borderRadius: "0 4px 4px 4px", boxSizing: "border-box", paddingLeft: "50px" }}>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Session Plan</p>
                        <p style={{ color: "#5f5c5c" }}>LIVE session is about to start. Please stay tuned.</p>
                        <button style={{ padding: "10px", borderRadius: "15px", border: "none", fontSize: "12px", fontWeight: "semibold" }}>JOIN LIVE SESSION</button>
                        <p style={{ color: "black" }}>Sub-Topics</p>
                        <p style={{ color: "#5f5c5c" }}>1. Sorting and Indexing Dataframe</p>
                        <p style={{ color: "#5f5c5c" }}>2. Filtering Dataframe</p>
                        <p style={{ color: "#5f5c5c" }}>3. Usage of loc and iloc fucntions</p>
                        <p style={{ color: "black", paddingTop: "20px" }}>Session Details</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
