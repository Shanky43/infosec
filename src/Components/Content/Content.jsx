import React, { useEffect, useState } from 'react';
import './content.css';
import Tabv1 from '../../Pages/ContentTabs/Tabv1/Tabv1';
import Tabv2 from '../../Pages/ContentTabs/Tabv2/Tabv2';
import Tabv3 from '../../Pages/ContentTabs/Tabv3/Tabv3';
import Tabv4 from '../../Pages/ContentTabs/Tabv4/Tabv4';
import Tabv5 from '../../Pages/ContentTabs/Tabv5/Tabv5';
import ChangePasswordTab from '../../Pages/ContentTabs/ChangePassowrdTab/ChangePasswordTab';

import UpdateUserForm from '../../Pages/UpdateUserForm/UpdateUserForm';

const Content = () => {
    const [activeTab, setActiveTab] = useState('tabv1');
    const [whichTab, setWhichTab] = useState(false)

    useEffect(() => {
        const storedTab = localStorage.getItem('activeTab');
        setActiveTab(storedTab || 'tabv5');
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        localStorage.setItem('activeTab', tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'tabv1':
                if (whichTab) {
                    return <UpdateUserForm setWhichTab={setWhichTab} />
                } else {
                    return <Tabv1 setWhichTab={setWhichTab} />;
                }
            case 'tabv2':
                return <Tabv2 />;
            case 'tabv3':
                return <Tabv3 setActiveTab={setActiveTab}/>;
            case 'tabv4':
                return <Tabv4 />;
            case 'tabv5':
                return <Tabv5 />;
            case 'tabv6':
                return <ChangePasswordTab />;
            default:
                return null;
        }
    };

    return (
        <div className="main-content-center ">
            <div className="content-center">
                <div className="tab-organism">
                    {activeTab !== 'tabv6' ? (
                        <div className="frame29">
                            <div
                                className={`tabv1 ${activeTab === 'tabv1' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tabv1')}
                            >
                                <div className="frame27">
                                    <p className="tab1name">Update profile</p>
                                </div>
                            </div>
                            <div
                                className={`tabv2 ${activeTab === 'tabv2' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tabv2')}
                            >
                                <div className="frame31">
                                    <p className="tab2name">Company Details</p>
                                </div>
                            </div>
                            <div
                                className={`tabv3 ${activeTab === 'tabv3' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tabv3')}
                            >
                                <div className="frame31-0">
                                    <p className="tab2name">Contact Details</p>
                                </div>
                            </div>
                            <div
                                className={`tabv4 ${activeTab === 'tabv4' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tabv4')}
                            >
                                <div className="frame31-1">
                                    <p className="tab4name">Privacy</p>
                                </div>
                            </div>
                            <div
                                className={`tabv5 ${activeTab === 'tabv5' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tabv5')}
                            >
                                <div className="frame31-2">
                                    <p className="tab5name">Security</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            className={`tabv6 ${activeTab === 'tabv6' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tabv6')}
                        >
                            <div className="frame31-3">
                                <p className="tab5name">Change Password</p>
                            </div>
                        </div>
                    )}

                    <hr className="mt-0" style={{ border: '1px solid #3BA3DD' }} />
                    {activeTab !== 'tabv5' ? (
                        <div className="tabscontent">{renderTabContent()}</div>
                    ) : (
                        <div className="tabscontent" style={{ backgroundColor: 'white' }}>
                            {renderTabContent()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Content;
