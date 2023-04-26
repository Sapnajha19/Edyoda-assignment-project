import React from 'react'
import calendar from "../../../assets/calendar.svg"
import clockBlue from "../../../assets/clockBlue.svg"
import message from "../../../assets/message.png"
export default function Assignment() {
    return (
        <React.Fragment>
            <div style={{ background: "#f7f9fb", width: "1130px", height: "638px", position: "absolute", top: "110px", left: "308px" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingLeft: "120px", paddingRight: "120px" }}>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>Assignment-1: Operators | Loops</p>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p style={{ fontSize: "20px", fontWeight: "semibold", position: "absolute", top: "0px", right: "220px" }}>3</p>
                            <p style={{ color: "#6d6b6b", position: "absolute", top: "30px", right: "220px" }}>Problems</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p style={{ fontSize: "20px", fontWeight: "semibold" }}>100</p>
                            <p style={{ color: "#6d6b6b", position: "absolute", top: "30px", right: "120px" }}>Total Score</p>
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft: "120px", position: "absolute", top: "50px" }}>
                    <p style={{ color: "#6d6b6b" }}>20 December 2021</p>
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>Assignment Details</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "80px" }}>
                    <div style={{ background: "#ffffff", width: "900px", height: "120px", borderRadius: "4px", border: "1px solid #a4cae9", boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.1)" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <p style={{ fontSize: "20px", fontWeight: "semibold" }}>3</p>
                                <p style={{ color: "#6d6b6b", fontSize: "15px" }}>Problems</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <p style={{ fontSize: "20px", fontWeight: "semibold" }}>100</p>
                                <p style={{ color: "#6d6b6b", fontSize: "15px" }}>Total Score</p>
                            </div>
                            <div style={{ height: "100px", width: "1px", background: "#6d6b6b" }}></div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div>Start:</div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                                    <img src={calendar} alt="calendar-icon" style={{ height: "15px", width: "15px" }} />
                                    <p style={{ color: "#6d6b6b", fontSize: "15px" }}>20 Dec 2021</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                                    <img src={clockBlue} alt="clock-icon" style={{ height: "15px", width: "15px" }} />
                                    <p style={{ color: "#6d6b6b", fontSize: "15px" }}>07:30 PM</p>
                                </div>
                            </div>
                            <div>
                                <div>Due:</div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                                    <img src={calendar} alt="calendar-icon" style={{ height: "15px", width: "15px" }} />
                                    <p style={{ color: "#6d6b6b", fontSize: "15px" }}>26 Dec 2021</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                                    <img src={clockBlue} alt="clock-icon" style={{ height: "15px", width: "15px" }} />
                                    <p style={{ color: "#6d6b6b", fontSize: "15px" }}>11:59 PM</p>
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
