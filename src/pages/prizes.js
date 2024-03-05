import React from "react";
import "./prizes.css";

const Prizes = () => {
    return (
        <div className="page">
            <div className="contri">
                <div className="total-pool">
                    <p className="prize-pool">
                        PRIZE POOL
                    </p>
                    <p className="dollar">
                        $2,300
                    </p>
                </div>    
                <hr></hr> 
                <p className="title">
                    ORGANIZER
                </p>
                <div className="stacktoodeep">
                    <p>
                        StackTooDeep
                    </p>
                    <p>
                        Upto $1900
                    </p>
                </div>
                <p className="title">
                    PARTNERS
                </p>
                <p className="partners">
                    Polygon<br></br>
                    Upto $350
                </p>
                <p className="partners">
                    Blockflow<br></br>
                    Multiple Prizes
                </p>
                <p className="partners">
                    Replit<br></br>
                    Upto $50
                </p>

            </div>
            <div className="distribution">
                <div className="Track">
                    <p className="track-name">
                        Open Track
                    </p>
                    <p className="track-desc">
                    This track is open to all IITR students. Every project submitted in the 
                    hackathon is eligible for this track!
                    </p>
                    <div className="prize">
                        <p class="grand-prize">
                            Open Track - Grand Prize: $1200
                        </p>
                        <p className="prize-nos">
                            3 PRIZES
                        </p>
                        <p className="prize-desc">
                            Prizes worth 99.6k INR to be distributed among top 3 teams.
                        </p>
                    </div>
                </div>
                <div className="Track">
                    <p className="track-name">
                        Fresher Track
                    </p>
                    <p className="track-desc">
                    This track is open to all teams exclusively consisting of freshers. 
                    Freshers who perform well will get direct interview opportunities at BlocSocIITR.
                    </p>
                    <div className="prize">
                        <p class="grand-prize">
                            Fresher Track - Grand Prize: $300
                        </p>
                        <p className="prize-nos">
                            3 PRIZES
                        </p>
                        <p className="prize-desc">
                            Prizes worth 25k INR to be distributed among top 3 teams.
                        </p>
                    </div>
                </div>
                <div className="Track">
                    <p className="track-name">
                        UniDAO
                    </p>
                    <p className="track-desc">
                        This track is open to all teams which consist at least ONE uniDAO member.
                    </p>
                    <div className="prize">
                        <p class="grand-prize">
                           Pool Prize: $400
                        </p>
                        <p className="prize-nos">
                            3 PRIZES
                        </p>
                        <p className="prize-desc">
                            Prizes worth 33.2k INR to be distributed among top 3 teams.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Prizes;