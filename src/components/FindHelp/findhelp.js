import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './findhelp.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';
import ExitButton from '../Home/exit-btn';


let resources = [
    {
        "name": "Behavioral Health Services at Y Social Impact Center - Seattle",
        "accessibility": "Mobility, Hearing",
        "resourceType": "Emotional Support",
        "address": "2100 24th Avenue South, Suite 250, Seattle, WA, 98144",
        "phone": "206-382-5340",
        "description": "Offers behavioral health services including mental health and addiction treatment as well as psychiatric care and medication management, for people of all ages. Includes both remote and in-person counseling",
        "coordinates": [47.58408, -122.30126]
    },
    {
        "name": "Behavioral Health Counseling and Wraparound Services at You Grow Girl! at South Seattle",
        "accessibility": "Mobility",
        "resourceType": "Emotional Support",
        "address": "2200 Rainier Avenue South, Suite 201, Seattle, WA, 98144",
        "phone": "206-417-9904",
        "description": "Provides in-home, virtual, and community-based individual and family outpatient therapy, case management and support groups",
        "coordinates": [47.58348, -122.30169]
    },
    {
        "name": "Mental Health Services at Seattle Indian Health Board",
        "accessibility": "Mobility, Hearing",
        "resourceType": "Emotional Support",
        "address": "611 12th Avenue South, Seattle, WA, 98104",
        "phone": "206-324-9360",
        "description": "Offers individual, couples and family counseling. Services include medications and medication management. Counseling addresses issues such as anxiety, post traumatic stress disorder and depression. Helps those with co-occurring disorders. Two weeks' notice required for interpreter services.",
        "coordinates": [47.59708, -122.31796]
    },
    {
        "name": "Behavioral Health Services at International Community Health Services' International District Clinic",
        "accessibility": "Mobility",
        "resourceType": "Emotional Support",
        "address": "720 8th Avenue South, Seattle, WA 98104",
        "phone": "206-788-3700",
        "description": "The behavioral health provider works jointly with patients, primary care providers and other health care team members to evaluate and treat any health concerns affected by behavior.",
        "coordinates": [47.59613, -122.32218]
    },
    {
        "name": "Young Adult Counseling at Sound's Broadway/First Hill Clinic",
        "accessibility": "Vision",
        "resourceType": "Emotional Support",
        "address": "600 Broadway, Suite 170, Seattle, WA 98122",
        "phone": "206-302-2600",
        "description": "Offers counseling focused on the needs of young adults, particularly the college student population. Specific issues include: - Depression - Anxiety - School Problems - Family Transitions - Social Skills - Trauma - Academic & Career Planning - LGBTQ Identity - Suicide prevention Services are offered one on one or in group therapy.",
        "coordinates": [47.60779, -122.32007]
    },
    {
        "name": "Outpatient Mental Health Services at Valley Cities at Pike Place",
        "accessibility": "",
        "resourceType": "Emotional Support",
        "address": "1537 Western Avenue, Seattle, WA, 98101",
        "phone": "253-833-7444",
        "description": "Provides mental health services for children, adolescents, adults, and seniors, including individual, family, and group counseling. Care Teams help clients with the full range of mental health and substance use disorder issues, including depression, anxiety, bipolar disorder, PTSD, personality disorders, substance use disorders, ADHD, schizophrenia, disruptive behavior disorders, and autism spectrum disorders.",
        "coordinates": [47.608980, -122.342230]
    },
    {
        "name": "Eastside Legal Assistance Program",
        "accessibility": "",
        "resourceType": "Legal Aid",
        "address": "Bellevue, WA 98005",
        "phone": "(425) 747-7274",
        "description": "Provides free legal help and resources on civil legal issues to low-income residents in King County, including legal advice, help obtaining protection orders, court support, and representation.",
        "coordinates": [47.6141688, -122.1684029]
    },
    {
        "name": "Family Violence Appellate Project",
        "accessibility": "",
        "resourceType": "Legal Aid",
        "address": "1239 120th Avenue NE, Suite J Bellevue, WA 98005",
        "phone": "(360) 680-1030",
        "description": "Provides free legal representation to domestic violence survivors at the appellate level, focusing on cases where trial court decisions put survivors at serious risk.",
        "coordinates": [47.62226, -122.181050]
    },
    {
        "name": "King County Bar Association Pro Bono Services",
        "accessibility": "Hearing",
        "resourceType": "Legal Aid",
        "address": "1200 5th Avenue, Suite 700 Seattle, WA 98101",
        "phone": "(206) 267-7100",
        "description": "Provides free legal assistance to eligible, low-income King County residents in areas including housing, debt, family law, and criminal record vacating.",
        "coordinates": [47.60842, -122.333050]
    },
    {
        "name": "Legal Voice",
        "accessibility": "Hearing",
        "resourceType": "Legal Aid",
        "address": "907 Pine Street, Suite 500 Seattle, WA 98101",
        "phone": "(206) 682-9522",
        "description": "Protects the legal rights of women and LGBTQ people in the Northwest by providing legal information and resources on issues like gender-based violence and family law.",
        "coordinates": [47.613500, -122.331550]
    },
    {
        "name": "Neighborhood Legal Clinics",
        "accessibility": "Vision",
        "resourceType": "Legal Aid",
        "address": "King County Bar Association 1200 5th Ave, Suite 700 Seattle, WA 98101",
        "phone": "(253) 480-6125",
        "description": "Provides free legal help to low-income individuals, including legal advice, limited services, self-help materials, and representation. Specialized programs for distinct populations.",
        "coordinates": [47.60842, -122.333050]
    },
    {
        "name": "Northwest Justice Project - Main Office",
        "accessibility": "",
        "resourceType": "Legal Aid",
        "address": "401 Second Avenue South, Suite 407 Seattle, WA 98225",
        "phone": "(206) 464-1519",
        "description": "Provides free legal help to eligible low-income individuals including advice, education, limited services, and representation. Specialized programs for various populations.",
        "coordinates": [47.598550, -122.331980]
    },
    {
        "name": "Protection Order Advocacy Program (Kent)",
        "accessibility": "Hearing",
        "resourceType": "Legal Aid",
        "address": "Maleng Regional Justice Center 401 4th Avenue North, Room 2B Kent, WA 98032",
        "phone": "(206) 477-3758",
        "description": "Provides free assistance to individuals seeking a domestic violence protection order, with in-person and virtual appointments available.",
        "coordinates": [47.3845357, -122.2385061]
    },
    {
        "name": "Protection Order Advocacy Program (Seattle)",
        "accessibility": "Hearing",
        "resourceType": "Legal Aid",
        "address": "King County Courthouse 516 3rd Avenue, Room C213 Seattle, WA 98104",
        "phone": "(206) 477-1103",
        "description": "Provides free assistance to individuals seeking a domestic violence protection order, with in-person and virtual appointments available.",
        "coordinates": [47.6026184, -122.3305267]
    },
    {
        "name": "Kitsap - Northwest Justice Project - Bremerton Satellite Office",
        "accessibility": "",
        "resourceType": "Legal Aid",
        "address": "400 Warren Avenue, Suite 350 Bremerton, WA 98337",
        "phone": "(360) 377-6378",
        "description": "Provides free legal help to low-income individuals including advice, education, limited services, and representation. Specialized programs for various populations.",
        "coordinates": [47.5660761, -122.6326909]
    },
    {
        "name": "Asian Counseling & Referral Food Bank",
        "accessibility": "",
        "resourceType": "Food Bank",
        "address": "919 South King Street, Seattle, Washington 98104",
        "phone": "(206) 292-5714",
        "description": "Serves all Pacific Islanders/Asians of Seattle and also the general public.",
        "coordinates": [47.598221, -122.320152]
    },
    {
        "name": "Ballard Food Bank",
        "accessibility": "",
        "resourceType": "Food Bank",
        "address": "5130 Leary Avenue NW, Seattle, WA 98107",
        "phone": "(206) 789-7800",
        "description": "Serves zip codes 98107 and 98117; most of 98199. Services include children's clothing, a professional closet, hygiene items, Baby Cupboard, and emergency food.",
        "coordinates": [47.665570, -122.380200]
    },
    {
        "name": "Beacon Avenue Food Bank",
        "accessibility": "",
        "resourceType": "Food Bank",
        "address": "6230 Beacon Avenue South, Seattle, Washington 98108",
        "phone": "(206) 722-5105",
        "description": "Open Wednesday and Friday from 12 p.m. to 2 p.m.",
        "coordinates": [47.54675, -122.300380]
    },
    {
        "name": "Blessed Sacrament",
        "accessibility": "Hearing, Vision",
        "resourceType": "Food Bank",
        "address": "5050 Eighth N.E., Seattle, WA 98105",
        "phone": "(206) 930-6005",
        "description": "Open Friday 10:30 a.m. to Noon.",
        "coordinates": [47.666490, -122.318970]
    },
    {
        "name": "CAMP Food Bank",
        "accessibility": "",
        "resourceType": "Food Bank",
        "address": "722 18th Avenue, Seattle, WA 98122",
        "phone": "(206) 812-4956",
        "description": "Open Wednesday Noon to 4:00 p.m., Thursday and Friday 9:00 a.m. to 1:00 p.m. Offers a Baby Cupboard and emergency bags of groceries.",
        "coordinates": [47.608770, -122.308530]
    },
    {
        "name": "Cherry Street Food Bank/Northwest Harvest",
        "accessibility": "Mobility",
        "resourceType": "Food Bank",
        "address": "11 Cherry Street, Seattle, Washington 98104",
        "phone": "(206) 625-0755",
        "description": "Open Monday, Wednesday, and Friday 9:00 a.m. to 5:30 p.m., Thursday 9:00 a.m. to 5:00 p.m. Offers groceries, formula, and referrals to holiday meal programs.",
        "coordinates": [47.6025289, -122.3339095]
    },
    {
        "name": "Chicken Soup Brigade - Lifelong AIDS Alliance",
        "accessibility": "",
        "resourceType": "Food Bank",
        "address": "1002 East Seneca, Seattle, WA 98122",
        "phone": "(206) 957-1662",
        "description": "Serves hot meals and provides Meals on Wheels for low-income seniors and the disabled.",
        "coordinates": [47.6124265, -122.3191055]
    },
    {
        "name": "City of Seattle Human Services Department Emergency Food Programs",
        "accessibility": "",
        "resourceType": "Food Bank",
        "address": "700 5th Seattle, WA 98124-4215",
        "phone": "",
        "description": "Supports local food banks and centers in Seattle and King County. Contact for public aid like food stamps and the USDA Commodity Supplemental Program.",
        "coordinates": [47.5964465, -122.3272887]
    },
    {
        "name": "Downtown Food Bank",
        "accessibility": "Vision",
        "resourceType": "Food Bank",
        "address": "1531 Western, Seattle, WA 98101",
        "phone": "(206) 626-6462",
        "description": "Provides a free soup kitchen, holiday meals, cleaning supplies, and other items to families in poverty.",
        "coordinates": [47.608874, -122.342124]
    },
    {
        "name": "El Centro de la Raza",
        "accessibility": "Vision",
        "resourceType": "Food Bank",
        "address": "2524 16th Avenue South, Seattle, WA 98144",
        "phone": "(206) 329-7960",
        "description": "Serves zip codes 98108, 98144, and parts of 98108. Programs include Baby Cupboard, food deliveries, and a multi-service center offering various assistance.",
        "coordinates": [47.5804548, -122.311444]
    },
    {
        "name": "Carolyn Downs Center",
        "accessibility": "Mobility, Vision",
        "resourceType": "Medical Care",
        "address": "2101 E Yesler Wy # 150, Seattle, WA 98122",
        "phone": "206-299-1900",
        "description": "Provides high-quality, culturally appropriate primary care to a diverse community, regardless of ability to pay. M, Th, F: 9am-5pm, Tu, W: 9am-8:30pm. Call for appointment.",
        "coordinates": [47.60132, -122.30448]
    },
    {
        "name": "After-Hours Clinic",
        "accessibility": "",
        "resourceType": "Medical Care",
        "address": "2101 E Yesler Wy, Seattle, WA 98122",
        "phone": "(206) 709-7199",
        "description": "After-hours care for acute conditions with a sliding fee scale based on income. M-F: 6pm-9pm; Sa, Su: 11am-5pm.",
        "coordinates": [47.60132, -122.30448]
    },
    {
        "name": "Harborview Medical Center",
        "accessibility": "Mobility",
        "resourceType": "Medical Care",
        "address": "325 9th Ave 3rd Floor, Seattle",
        "phone": "206-520-5000",
        "description": "Outpatient medical and surgical services. M, W, Th, F: 8am-4:30pm. Tu: 8am-8pm.",
        "coordinates": [47.6039206, -122.32427]
    },
    {
        "name": "Pioneer Square Clinic",
        "accessibility": "Mobility, Hearing",
        "resourceType": "Medical Care",
        "address": "206 3rd Ave South, Seattle",
        "phone": "206-744-1500",
        "description": "Primary health care for adults. Tu, Th, F: 8:05am-4pm; W: 9am-4pm.",
        "coordinates": [47.6005795, -122.3298941]
    },
    {
        "name": "Third Avenue Center",
        "accessibility": "Mobility",
        "resourceType": "Medical Care",
        "address": "2028 3rd Ave, Seattle",
        "phone": "206-521-1231",
        "description": "General medical care. M, Tu, Th, F: 8am-4pm. W: 8am-4pm.",
        "coordinates": [47.6131777, -122.3415876]
    },
    {
        "name": "Holly Park Clinic",
        "accessibility": "Vision",
        "resourceType": "Medical Care",
        "address": "3815 S Othello St, Seattle",
        "phone": "206-788-3500",
        "description": "General medical care. M-Sa: 8am-5pm.",
        "coordinates": [47.5368328, -122.2836073]
    },
    {
        "name": "International Dist. Clinic",
        "accessibility": "",
        "resourceType": "Medical Care",
        "address": "720 8th Ave South, Seattle",
        "phone": "206-788-3700",
        "description": "General medical care. M-Sa: 8am-5pm.",
        "coordinates": [47.5961337, -122.322052]
    },
    {
        "name": "45th Street Clinic",
        "accessibility": "Mobility",
        "resourceType": "Medical Care",
        "address": "1629 N 45th St, Seattle",
        "phone": "206-633-3350",
        "description": "General medical care. M-F, 8am-5:30pm; 1st & 3rd W: 9:30am-5:30pm.",
        "coordinates": [47.6611317, -122.337728]
    },
    {
        "name": "Abused Deaf Women’s Advocacy Services (ADWAS)",
        "accessibility": "Mobility, Hearing",
        "resourceType": "Shelter",
        "address": "8623 Roosevelt Way NE, Seattle, WA 98115",
        "phone": "206-922-7088",
        "description": "Operates a domestic violence shelter for women. Shelter is fully accessible for women who are Deaf, Deafblind, or hard-of-hearing.",
        "coordinates": [47.6919352, -122.3179392]
    },
    {
        "name": "Broadview Shelter & Transitional Housing",
        "accessibility": "Vision",
        "resourceType": "Shelter",
        "address": "1501 N 45th St, Seattle, WA 98103",
        "phone": "206-299-2500",
        "description": "Provides a confidential shelter for survivor-headed families with children. Serves trans clients who identify as female or male who have children.",
        "coordinates": [47.6611649, -122.3389334]
    },
    {
        "name": "REACH Center of Hope",
        "accessibility": "Vision",
        "resourceType": "Shelter",
        "address": "7465 South 112th Street, Seattle, WA 98105",
        "phone": "425-321-4816",
        "description": "Provides intake for overnight shelter for families. Can serve women fleeing domestic violence. ID required.",
        "coordinates": [47.5025632, -122.2389167]
    },
    {
        "name": "Mary's Place",
        "accessibility": "Vision",
        "resourceType": "Shelter",
        "address": "1830 9th Ave, Seattle, WA 98101",
        "phone": "206-621-8474",
        "description": "Women and family shelter for those struggling with homelessness.",
        "coordinates": [47.6154787, -122.3338194]
    }
]

function MapAccessibility(props) {
    const [activeButton, setActiveButton] = useState(null);

    function accessibilityClicked(event) {
        const value = event.target.value;
        props.setAccessibility(value);
        setActiveButton(value);
    }

    useEffect(() => {
        if (props.clearCriteriaTriggered) {
            setActiveButton(null);
            props.setClearCriteriaTriggered(false);
        }
    }, [props.clearCriteriaTriggered]);

    return (
        <div className="card map">
            <div className="card-body">
                <h2 className="card-title">Filter by Accessibility Needs</h2>
                <button
                    type="button"
                    className={`btn btn-info btn-lg map-btn ${activeButton === 'Mobility' ? 'pressed' : ''}`}
                    value="Mobility"
                    onClick={accessibilityClicked}
                >
                    Mobility
                </button>
                <button
                    type="button"
                    className={`btn btn-info btn-lg map-btn ${activeButton === 'Hearing' ? 'pressed' : ''}`}
                    value="Hearing"
                    onClick={accessibilityClicked}
                >
                    Hearing
                </button>
                <button
                    type="button"
                    className={`btn btn-info btn-lg map-btn ${activeButton === 'Vision' ? 'pressed' : ''}`}
                    value="Vision"
                    onClick={accessibilityClicked}
                >
                    Vision
                </button>
            </div>
        </div>
    );
}

function MapResourceType(props) {
    const [checkedState, setCheckedState] = useState({
        'Shelter': false,
        'Legal Aid': false,
        'Medical Care': false,
        'Food Bank': false,
        'Emotional Support': false,
    });

    function handleCheckboxChange(event, resourceType) {
        const isChecked = event.target.checked;
        setCheckedState({
            ...checkedState,
            [resourceType]: isChecked,
        });

        if (isChecked) {
            props.setResourceType(resourceType);
        } else {
            props.removeResourceType(resourceType);
        }
    }

    useEffect(() => {
        if (props.clearCriteriaTriggered) {
            setCheckedState({
                'Shelter': false,
                'Legal Aid': false,
                'Medical Care': false,
                'Food Bank': false,
                'Emotional Support': false,
            });
        }
    }, [props.clearCriteriaTriggered]);

    return (
        <div className="card map">
            <div className="card-body">
                <h2 className="card-title">Type of Resource</h2>
                {Object.keys(checkedState).map((resourceType) => (
                    <ResourceTypeButton
                        key={resourceType}
                        resourceType={resourceType}
                        checked={checkedState[resourceType]}
                        typeClicked={(event) => handleCheckboxChange(event, resourceType)}
                    />
                ))}
            </div>
        </div>
    );
}

function ClearMap(props) {
    function handleClearClick() {
        props.clearCriteria();
        props.setClearCriteriaTriggered(true); // trigger clearing checkboxes and reset activeButton
    }

    return (
        <div className="card map">
            <div className="card-body">
                <h2 className="card-title">Clear Filters</h2>
                <button type="button" className="btn btn-info btn-lg map-btn" onClick={handleClearClick}>
                    Clear
                </button>
            </div>
        </div>
    );
}

function ResourceTypeButton(props) {
    const resourceType = props.resourceType;
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                checked={props.checked}
                value={resourceType}
                id={resourceType}
                onChange={props.typeClicked}
            />
            <label className="form-check-label" htmlFor={resourceType}>
                {resourceType}
            </label>
        </div>
    );
}

function MapColumnLeft(props) {
    return (
        <div className="column left">
            <MapResourceType
                setResourceType={props.setResourceType}
                removeResourceType={props.removeResourceType}
                clearCriteriaTriggered={props.clearCriteriaTriggered}
                setClearCriteriaTriggered={props.setClearCriteriaTriggered}
            />
            <MapAccessibility
                setAccessibility={props.setAccessibility}
                clearCriteriaTriggered={props.clearCriteriaTriggered}
                setClearCriteriaTriggered={props.setClearCriteriaTriggered}
            />
            <ClearMap clearCriteria={props.clearCriteria} setClearCriteriaTriggered={props.setClearCriteriaTriggered} />
        </div>
    );
}

function MapColumnRight(props) {
    const position = [47.608770, -122.308530];

    const markers = props.displayResources.map((resource, index) => (
        <Marker
            key={index}
            position={resource.coordinates}
            icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
        >
            <Popup>
                <MarkerCard
                    name={resource.name}
                    image={resource.image}
                    alt={resource.alt}
                    description={resource.description}
                    address={resource.address}
                    phone={resource.phone}
                    resourceType={resource.resourceType}
                />
            </Popup>
        </Marker>
    ));

    return (
        <div className="column right">
            <div className="card map">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '700px' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {markers}
                </MapContainer>
            </div>
        </div>
    );
}

function MarkerCard(props) {
    return (
        <div className="marker-card">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h2>Details:</h2>
            <ul>
                <li>Resource: {props.resourceType}</li>
                <li>Phone Number: {props.phone}</li>
                <li>Address: {props.address}</li>
            </ul>
        </div>
    );
}

export default function FindHelp(props) {
    const [filterCriteria, setCriteria] = useState({ accessibility: '', resource: [] });
    const [clearCriteriaTriggered, setClearCriteriaTriggered] = useState(false);

    const displayResources = resources.filter((resource) => {
        if (filterCriteria.accessibility === '' || resource.accessibility.includes(filterCriteria.accessibility)) {
            if (filterCriteria.resource.length === 0) {
                return resource;
            } else {
                for (let i = 0; i < filterCriteria.resource.length; i++) {
                    if (resource.resourceType === filterCriteria.resource[i]) {
                        return resource;
                    }
                }
            }
        }
        return null;
    });

    function setAccessibility(accessibility) {
        setCriteria({ ...filterCriteria, accessibility });
    }

    function setResourceType(resourceAdded) {
        setCriteria({ ...filterCriteria, resource: [...filterCriteria.resource, resourceAdded] });
    }

    function removeResourceType(resourceRemoved) {
        const removedResources = filterCriteria.resource.filter((element) => element !== resourceRemoved);
        setCriteria({ ...filterCriteria, resource: removedResources });
    }

    function clearCriteria() {
        setCriteria({ accessibility: '', resource: [] });
        setClearCriteriaTriggered(true);
    }

    return (
        <div className="find-help-container">
            <div class="hero">
                <div class="hero-text">
                    <h1>Find Help in King County</h1>
                    <p>Explore resources on an interactive map to connect with support services near you. Watch videos
                        and read articles for additional guidance and empowerment.</p>
                </div>


                <img className="find-help-image" src="/img/find-help.png" alt="Find Help" />

                {/* Exit Button */}
                <div className='exit-btn-find-help'>
                    <ExitButton />
                </div>

            </div>
            <br />
            <div className="find-help-description">
                <span className="find-help-crisis-info">In crisis? Get immediate help:</span>
                <br />
                <span className="find-help-crisis-info">National Domestic Violence Hotline: </span>
                <span className="find-help-crisis-info-underline">1-800-799-7233</span>
                <br />
                <span className="find-help-crisis-info">King County Domestic Violence Hotline: </span>
                <span className="find-help-crisis-info-underline">1-877-737-0242</span>
            </div>
            <br />

            <div className="row">
                <h1 class="map-title"> Locate Resources in King County </h1>
                <MapColumnLeft
                    setAccessibility={setAccessibility}
                    setResourceType={setResourceType}
                    removeResourceType={removeResourceType}
                    clearCriteria={clearCriteria}
                    clearCriteriaTriggered={clearCriteriaTriggered}
                    setClearCriteriaTriggered={setClearCriteriaTriggered}
                />
                <MapColumnRight displayResources={displayResources} />
            </div>
        </div>
    );
}
