import React, { useState } from 'react'
import "./tabv1.css"

function SocialMedia(props) {
    const { media, links } = props
    return (
        <>
            <div className="SocialMediaSection">
                <p>{media}</p>
            </div>
            <div className="semiCol">
                <p>:</p>
            </div>
            <div className="allSocialMediaLinks">
                <div className="links">
                    <p>{links}</p>
                </div>
                <div className="editSection">
                    <div className="editbutton">
                        <p>Edit</p>
                    </div>
                </div>
            </div>

        </>
    )
}

const Tabv1 = () => {
    const [showEdit, setShowEdit] = useState(false)


    return (

        <div className='tabv1section '>
            <div className="group165">
                <div className="group165textandicon">
                    <div className="fullnameSection">
                        <div className="fullname">
                            <p>Full Name :</p>
                        </div>
                        <div className="usernameSection">
                            <p>{"Shankar"}</p>
                        </div>
                    </div>
                    <div className="Editsection">
                        <div className="edit" onClick={() => setShowEdit(true)}>
                            <p>Edit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group166">
                <div className="group166TextandIcon">
                    <div className="group68">
                        <div className="designationSection">
                            <div className="designation">
                                <p>Designation :</p>
                            </div>
                            <div className="usersDesignation">
                                <p> {"Full stackweb developer"}</p>
                            </div>
                        </div>
                        <div className="Editsection">
                            <div className="edit" onClick={() => setShowEdit(true)}>
                                <p>Edit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group167">
                <div className="group167textandicon">
                    <div className="emailSection">
                        <div className="emailAddress">
                            <div className="email">
                                <p>Email Address :</p>
                            </div>
                            <div className="userEmail">
                                <p>{"abcd@gmail.com"}</p>
                            </div>
                        </div>
                        <div className="Editsection">
                            <div className="edit" onClick={() => setShowEdit(true)}>
                                <p>Edit</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="group168">
                <div className="group168textandicon">
                    <div className="DOBSection">
                        <div className="DOBaddress">
                            <div className="DOB">
                                <p>Date of Birth :</p>
                            </div>
                            <div className="userDOB">
                                <p>{"02/02/2222"}</p>
                            </div>
                        </div>
                        <div className="Editsection">
                            <div className="edit" onClick={() => setShowEdit(true)}>
                                <p>Edit</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="group169">
                <div className="group169textandicon">
                    <div className="ContactNumberSection">
                        <div className="ContactSection">
                            <div className="Contact">
                                <p>Contact Number :</p>
                            </div>
                            <div className="userContact">
                                <p>{"78945612587"}</p>
                            </div>
                        </div>
                        <div className="Editsection">
                            <div className="edit" onClick={() => setShowEdit(true)}>
                                <p>Edit</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="group170">
                <div className="group170textandicon">
                    <div className="citySection">
                        <div className="cityAddress">
                            <div className="city">
                                <p>City :</p>
                            </div>
                            <div className="userCity">
                                <p>{"Pune"}</p>
                            </div>
                        </div>
                        <div className="Editsection">
                            <div className="edit" onClick={() => setShowEdit(true)}>
                                <p>Edit</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="group171">
                <div className="group171textandicon">
                    <div className="ProfilesectionWithEdit">
                        <div className="ProfileSection">
                            <div className="Profile">
                                <p>Profile Picture </p>
                            </div>

                        </div>
                        <div className="UpdateSection">
                            <div className="update" onClick={() => setShowEdit(true)}>
                                <p>Update</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="group172">
                <div className="socialMedia">
                    <p>Social Media</p>
                </div>
            </div>

            <div className="socialMediaLinks">
                <div className="group85">
                    <SocialMedia media={"LinkedIn"} links={"https://www.linkedin.com"} />
                </div>
                <div className="group86">
                    <SocialMedia media={"Twitter"} links={"https://twitter.com"} />
                </div>
                <div className="group87">
                    <SocialMedia media={"Facebook"} links={"https://www.facebook.com"} />
                </div>
                <div className="group88">
                    <SocialMedia media={"Instagram"} links={"https://www.instagram.com"} />
                </div>
                <div className="group89">
                    <SocialMedia media={"Other"} links={"https://www.behance.net"} />
                </div>
            </div>

            {showEdit === true ? <div>
                <div className="options">
                    <div className="cancelSection" onClick={() => setShowEdit(false)}>
                        <div className="cancelbutton" >
                            <p>Cancel</p>
                        </div>
                    </div>
                    <div className="saveSection">
                        <div className="savebutton">
                            <p>Save</p>
                        </div>
                    </div>
                </div>
            </div> : null}
        </div>

    )
}

export default Tabv1