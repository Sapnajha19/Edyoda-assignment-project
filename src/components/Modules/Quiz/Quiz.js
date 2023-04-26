import React from 'react'
import calendar from "../../../assets/calendar.svg"
import clockBlue from "../../../assets/clockBlue.svg"
import message from "../../../assets/message.png"
export default function Quiz() {
    return (
        <React.Fragment>
            <div style={{ background: "#f7f9fb", width: "1130px", height: "638px", position: "absolute", top: "110px", left: "308px" }}>
                <div style={{ paddingLeft: "110px" }}>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>Quiz-1: Data Types</p>
                    <p style={{ color: "#6d6b6b", paddingBottom: "20px" }}>16 December 2021, Thursday</p>
                    <p style={{ fontSize: "15px", fontWeight: "semibold" }}>Quiz Details</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ background: "#ffffff", width: "900px", height: "120px", borderRadius: "4px", border: "1px solid #a4cae9", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.1)" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <p style={{ fontSize: "20px", fontWeight: "semibold" }}>10</p>
                                <p style={{ color: "#6d6b6b", fontSize: "14px" }}>Questions</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <p style={{ fontSize: "20px", fontWeight: "semibold" }}>-</p>
                                <p style={{ color: "#6d6b6b", fontSize: "14px" }}>Duration</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <p style={{ fontSize: "20px", fontWeight: "semibold" }}>125</p>
                                <p style={{ color: "#6d6b6b", fontSize: "14px" }}>Total Score</p>
                            </div>
                            <div style={{ height: "100px", width: "1px", background: "#6d6b6b" }}></div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div>Start:</div>
                                <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                                    <img src={calendar} alt="calendar-icon" style={{ height: "15px", width: "15px" }} />
                                    <p style={{ color: "#6d6b6b", fontSize: "14px" }}>16 Dec 2021</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                                    <img src={clockBlue} alt="clock-icon" style={{ height: "15px", width: "15px" }} />
                                    <p style={{ color: "#6d6b6b", fontSize: "14px" }}>07:30 PM</p>
                                </div>
                            </div>
                            <div>
                                <div>Due:</div>
                                <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                                    <img src={calendar} alt="calendar-icon" style={{ height: "15px", width: "15px" }} />
                                    <p style={{ color: "#6d6b6b", fontSize: "14px" }}>19 Dec 2021</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                                    <img src={clockBlue} alt="clock-icon" style={{ height: "15px", width: "15px" }} />
                                    <p style={{ color: "#6d6b6b", fontSize: "14px" }}>11:59 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={message} alt="message-icon" style={{height:"40px", height:"40px", position:"absolute",  bottom:"20px", right:"20px"}}/>
            </div>
        </React.Fragment>
    )
}
