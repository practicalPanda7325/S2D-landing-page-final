import React from "react";
import './index.css';
 
const Home = () => {
    return (
        <div class="home">
            <div className="head">
                <div>
                <img src="/icon/stack-too-deep-icon.jpeg" alt="Stack Too Deep Icon" 
                className="stack-too-deep-icon"></img>
                </div>
                <div className="title">
                    <p className="stack-too-deep">
                        STACK
                    </p>
                    <p className="stack-too-deep">
                        TOO
                    </p>
                    <p className="stack-too-deep">
                        DEEP
                    </p>
                </div>
            </div>
            <div className="dets">
                <p className="dets-title">
                    RUNS FROM:
                </p>
                <p className="dets-value">
                    15th March - 17th March
                </p>
                <p className="dets-title">
                    HAPPENING:
                </p>
                <p className="dets-value">
                    Roorkee, India
                </p>
            </div>
            <p className="description">
            StackTooDeep is the inaugural ethereum focused hackathon conducted by Blockchain Society 
            IIT Roorkee. It aims to foster a culture of web3 development in our campus and promotes
            decentralized innovation!
            </p>
        </div>
    );
};
 
export default Home;