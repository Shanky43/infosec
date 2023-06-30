import React from 'react'
import "./tabv3.css"

const Tabv3 = () => {
  return (
    <div className='tab3'>
      <div className="frame163">
        {/* contact person name starts here */}
        <div className="contactPersonName">
          <div className="ContactPerson">
            <p>Contact Person Name</p>
          </div>
          <div className="userContactName">
            <p>{"Mr. Saurabh Sable"}</p>
          </div>
        </div>
        {/* Person contact number starts here  */}
        <div className="personContactNumber">
          <div className="ContactNumber">
            <p>Contact Number</p>
          </div>
          <div className="userContactNumber">
            <p>{"9632587410"}</p>
          </div>
        </div>

        {/* Email address starts here */}
        <div className="ContactEmailAdress">
          <div className="EmailAdress">
            <p>Email Address</p>
          </div>
          <div className="userEmailAddress">
            <p>{"xyz232@gmail.com"}</p>
          </div>
        </div>
        {/* designation start here */}
        <div className="ContactDesignationSection">
          <div className="ContactDesignation">
            <p>Designation</p>
          </div>
          <div className="userContactDesignation">
            <p>{"UI/UX Designer"}</p>
          </div>
        </div>
        {/* edit button start here  */}
        <div className="editContactDetails">
          <div className="contactEdit">
            <p>Edit</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Tabv3