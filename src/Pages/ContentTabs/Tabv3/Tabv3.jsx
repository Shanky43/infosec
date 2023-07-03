import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./tabv3.css";

const Tabv3 = ({ setActiveTab }) => {
  const { userDetails } = useSelector((state) => ({
    userDetails: state.InfosecReducer.infosecdata.infosecData,
  }));

  // Define dummy data as fallback
  const dummyData = {
    fullName: "John Doe",
    contactnumber: "1234567890",
    emailaddress: "johndoe@example.com",
    designation: "UI/UX Designer",
  };

  const [contactPersonName, setContactPersonName] = useState('');
  const [personContactNumber, setPersonContactNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [designation, setDesignation] = useState('');

  useEffect(() => {
    if (userDetails && userDetails.length > 0) {
      setContactPersonName(userDetails[0].fullName || '');
      setPersonContactNumber(userDetails[0].contactnumber || '');
      setEmailAddress(userDetails[0].emailaddress || '');
      setDesignation(userDetails[0].designation || '');
    } else {
      // Use dummy data as fallback
      setContactPersonName(dummyData.fullName);
      setPersonContactNumber(dummyData.contactnumber);
      setEmailAddress(dummyData.emailaddress);
      setDesignation(dummyData.designation);
    }
  }, [userDetails]);

  const handleEditButton = () => {
    setActiveTab("tabv1");
  };

  return (
    <div className='tab3'>
      <div className="frame163">
        {/* contact person name starts here */}
        <div className="contactPersonName">
          <div className="ContactPerson">
            <p>Contact Person Name</p>
          </div>
          <div className="userContactName">
            <p>{contactPersonName}</p>
          </div>
        </div>
        {/* Person contact number starts here  */}
        <div className="personContactNumber">
          <div className="ContactNumber">
            <p>Contact Number</p>
          </div>
          <div className="userContactNumber">
            <p>{personContactNumber}</p>
          </div>
        </div>

        {/* Email address starts here */}
        <div className="ContactEmailAdress">
          <div className="EmailAdress">
            <p>Email Address</p>
          </div>
          <div className="userEmailAddress">
            <p>{emailAddress}</p>
          </div>
        </div>
        {/* designation start here */}
        <div className="ContactDesignationSection">
          <div className="ContactDesignation">
            <p>Designation</p>
          </div>
          <div className="userContactDesignation">
            <p>{designation}</p>
          </div>
        </div>
        {/* edit button start here  */}
        <div className="editContactDetails" onClick={handleEditButton}>
          <div className="contactEdit">
            <p>Edit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabv3;
