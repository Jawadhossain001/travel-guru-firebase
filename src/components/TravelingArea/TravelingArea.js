import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './TravelingArea.css';

const TravelingArea = (props) => {
    const [showArea, setShowArea] = useContext( UserContext );
    const {title, description, img} = props.place;

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "border-box",
        width: "98%",
        border:"3px solid #ff9100",
        borderRadius:"20px",
        margin:"2px"
      };
    return (
        <div  
            className="card-image" style={backgroundImageStyle} 
            onClick={() => setShowArea(props.place)}>
            <h2 className="place-name">{title}</h2>
        </div>
    );
};

export default TravelingArea;