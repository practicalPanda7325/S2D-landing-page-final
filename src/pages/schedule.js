import React from "react";
import "./schedule.css";

const Schedule = () => {
    return (
        <div className="shell">
            <div className="timeline">
                <div className="circle1" >
                </div>
                <div className="circle">
                </div>
                <div className="circle">
                </div>
                <div className="circle">
                </div>
                <div className="circle">
                </div>
            </div>
            <div className="list">
                <div className="sched">
                    <p className="event-name">
                        Registration Starts
                    </p>
                    <p className="date">
                        8 MARCH 2024
                    </p>
                    <p className="time">
                        3 AM IST
                    </p>
                </div>
                <div className="list">
                    <div className="sched">
                        <p className="event-name">
                            Registration Ends
                        </p>
                        <p className="date">
                            15 MARCH 2024
                        </p>
                        <p className="time">
                            11:59 PM IST
                        </p>
                    </div>
                </div>
                <div className="list">
                    <div className="sched">
                        <p className="event-name">
                            Hackathon Starts
                        </p>
                        <p className="date">
                            15 MARCH 2024
                        </p>
                        <p className="time">
                            12 PM IST
                        </p>
                    </div>
                </div>
                <div className="list">
                    <div className="sched">
                        <p className="event-name">
                            Hackathon Ends
                        </p>
                        <p className="date">
                            17 MARCH 2024
                        </p>
                        <p className="time">
                            12 PM IST
                        </p>
                    </div>
                </div>
                <div className="list">
                    <div className="sched">
                        <p className="event-name">
                            Closing Ceremony
                        </p>
                        <p className="date">
                            17 MARCH 2024
                        </p>
                        <p className="time">
                            7 PM IST
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Schedule;