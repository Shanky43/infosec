import React from 'react'
import "./tabv2.css"


const Tabv2 = () => {
    return (
        <div className='CompanyDetails'>
            <div className="frame162">
                <div className="group112">
                    <div className="userName">
                        <div className="user">
                            <div className='userSymbol'>
                                <p>{"AK"}</p>
                            </div>
                        </div>
                        <div className='group66'>
                            <div className="CompanyName">
                                <p>{"Company Name"}</p>
                            </div>
                            <div className="DisplayName">
                                <p>{"Display name"}</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* website section start here */}
                <div className="group64">
                    <div className="website">
                        <p>Website</p>
                    </div>
                    <div className="websiteLink">
                        <p>{"https://infosec-future.com/"}</p>
                    </div>
                </div>
                {/* description section start here */}
                <div className="CompanyDescriptionSection">
                    <div className="descr">
                        <p>Description</p>
                    </div>
                    <div className="userDescription">
                        <p>
                            InfoSec Future - based in Delhi, India - is an emerging provider of IT Security Training and Services to corporations and aspiring IT Professionals. It is well equipped with internationally certified instructors to impart the skills needed to secure one’s information in an increasingly connected world.InfoSec Future addresses the entire spectrum of information security training with live and practical demo.Welcome to the world of Hacking and Security.
                        </p>
                    </div>
                </div>
                {/* Register Number Section start here */}
                <div className="RegisterNumberSection">
                    <div className="RegisterNumber">
                        <p>Registration Number</p>
                    </div>
                    <div className="userNumber">
                        <p>{"78945612587"}</p>
                    </div>
                </div>

                {/* Number of employee section start here */}
                

            </div>

        </div>
    )
}

export default Tabv2