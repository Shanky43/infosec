import React, { useState } from 'react';
import './content.css';

const Content = () => {
    const [activeTab, setActiveTab] = useState('tabv1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='main-content-center'>
            <div className='content-center'>
                <div className="tab-organism">
                    <div className="frame29">
                        <div
                            className={`tabv1 ${activeTab === 'tabv1' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tabv1')}
                        >
                            {/* Content for tabv1 */}
                        </div>
                        <div
                            className={`tabv2 ${activeTab === 'tabv2' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tabv2')}
                        >
                            {/* Content for tabv2 */}
                        </div>
                        <div
                            className={`tabv3 ${activeTab === 'tabv3' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tabv3')}
                        >
                            {/* Content for tabv3 */}
                        </div>
                        <div
                            className={`tabv4 ${activeTab === 'tabv4' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tabv4')}
                        >
                            {/* Content for tabv4 */}
                        </div>
                        <div
                            className={`tabv5 ${activeTab === 'tabv5' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tabv5')}
                        >
                            {/* Content for tabv5 */}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Content;
