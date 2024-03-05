import React from "react";
import './faq.css';
 
const FAQ = () => {
    return (
          <div>
            <h2>Frequently Asked Questions</h2>
            <div className="QnA">
                <p className="Q">
                    Team size
                </p>
                <p className="A">
                    1-4
                </p>
            </div>
            <div className="QnA">
                <p className="Q">
                Registration costs?
                </p>
                <p className="A">
                Nada
                </p>
            </div>
            <div className="QnA">
                <p className="Q">
                    Who can participate?
                </p>
                <p className="A">
                Any student at IIT Roorkee is eligible to take part in this hackathon.
                </p>
            </div>
            <div className="QnA">
                <p className="Q">
                    What can we build?
                </p>
                <p className="A">
                StackTooDeep is an Ethereum focused hackathon so any project that is built in the
                 Ethereum ecosystem would be eligible for judging. This also includes building on any
                  EVM compatible chains like Arbitrum, Polygon,Optimism, etc.
                </p>
            </div>
            <div className="QnA">
                <p className="Q">
                    What if I don't have a team or an idea?
                </p>
                <p className="A">
                If you dont have a team you can either hack solo or ask someone to join your 
                in the Discord channel. If you are having problems with idea formation, you can ask 
                for help to any BlocSoc member in the channel or in person.
                </p>
            </div>
            <div className="QnA">
                <p className="Q">
                    Who are eligible for UniDAO track?
                </p>
                <p className="A">
                Only members who were part of the UniDAO cohort conducted by BlocSoc IITR would be eligible for that track.<br></br>
                 Everyone else is eligible to submit their projects in the open track.
                </p>
            </div>
            <div className="QnA">
                <p className="Q">
                    Who are eligible for fresher's track?
                </p>
                <p className="A">
                Only members who were part of the UniDAO cohort conducted by BlocSoc IITR would be eligible for that track.<br></br>
                Everyone else is eligible to submit their projects in the open track.
                </p>
            </div>
          </div>
    );
};
 
export default FAQ;