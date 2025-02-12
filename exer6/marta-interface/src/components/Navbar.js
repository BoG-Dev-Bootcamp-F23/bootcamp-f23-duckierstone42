//This is the navbar.
import "./Navbar.css"
import stations from "../server/stationData.js";
import Station from "./Station.js"
export default function Navbar({color, setStation, stationList, allStations}) {
    
    return (<div className="navbar">
        <div className="selectStation">Select your starting station</div>
        <Station stationName="All Stations" stationList={stationList} setStation={setStation}/>
        {allStations[color]?.map( (station) => {
             return <Station stationName={station} stationList={stationList} setStation={setStation}/>;
            
        })}

    </div>);
}