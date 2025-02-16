import { useEffect, useState } from 'react';
import './Country.css'

const Country = ({country, handlevisitedCountry, handleVisitedFlag}) => {
    
    const {name, flags, population, area, cca3} = country;

    const [visit, setVisit] = useState(false);

    const handleVisit = () => {
        setVisit(!visit);
    }
    

    return (
        <div className={`countryStyle && ${visit ? 'visited':'non-visited'} `}>
            <h3 style={{color: visit ? 'black' : 'white'}}>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={handleVisit}> {visit ? 'Traveled' : 'Going'} </button>
            <button onClick={()=>handlevisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Visit Flag</button>
        </div>
    );
};
            
export default Country;