import React from 'react';
import './findhelp.css';

export default function FindHelp(props) {
    return (
        // header section of the page
        <div className="find-help-container">
            <img className="find-help-image" src="/img/find-help.png"/>
            <div className="find-help-content">
                <div className="find-help-title">Find Help in King County</div>
                <div className="find-help-description">
                    <span>Explore resources on an interactive map to connect with support services near you. Watch videos and read articles for additional guidance and empowerment.</span><br /><br />
                    <span className="find-help-crisis-info">In crisis? Get immediate help:</span><br /><br />
                    <span className="find-help-crisis-info">National Domestic Violence Hotline: </span>
                    <span className="find-help-crisis-info-underline">1-800-799-7233<br /></span>
                    <span className="find-help-crisis-info">King County Domestic Violence Hotline: </span>
                    <span className="find-help-crisis-info-underline">1-877-737-0242</span>
                </div>
            </div>

            {/* map section of page */}
            <div className="find-help-section">
                <div className="find-help-subtitle">Resources Near Seattle</div>

                    {/* filtering by type of resource */}
                    <div className="find-help-resources">
                    <div className="find-help-category">Type of Resource</div>
                        <div className="resource-item">
                            <div className="resource-icon" />
                            <div className="resource-name">Shelter</div>
                        </div>
                        <div className="resource-item">
                            <div className="resource-icon" />
                            <div className="resource-name">Crisis Hotline</div>
                        </div>
                        <div className="resource-item">
                            <div className="resource-icon" />
                            <div className="resource-name">Legal Aid</div>
                        </div>
                        <div className="resource-item">
                            <div className="resource-icon" />
                            <div className="resource-name">Medical Care</div>
                        </div>
                        <div className="resource-item">
                            <div className="resource-icon" />
                            <div className="resource-name">Childcare</div>
                        </div>
                        <div className="resource-item">
                            <div className="resource-icon" />
                            <div className="resource-name">Food Bank</div>
                        </div>
                        <div className="resource-item">
                            <div className="resource-icon" />
                            <div className="resource-name">Counseling</div>
                        </div>
                    </div>

                {/* filtering by accessibilty options */}
                <div className="find-help-accessibility">
                    <div className="find-help-category">Accessibility</div>
                    <div className="accessibility-options">
                        <div className="accessibility-option">All</div>
                        <div className="accessibility-option">Mobility</div>
                        <div className="accessibility-option">Hearing</div>
                        <div className="accessibility-option">Vision</div>
                    </div>
                </div>

                {/* clear filter option */}
                <div className="find-help-clear-filters">
                    <div className="find-help-category">Clear Filters</div>
                    <div className="clear-all-filters">Clear All Filters</div>
                </div>
            </div>

            {/* placeholder map */}
            <img className="find-help-map" src="/img/placeholder-map.png" alt="placeholder map" />

            {/* Resources for Escaping */}
            <div className="find-help-subtitle">Resources for Escaping</div>

        </div>
    );
}
