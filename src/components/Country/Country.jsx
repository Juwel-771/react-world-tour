import { useEffect, useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    
    console.log(country)
    const {name, flags, population, area, cca3} = country;

    const [visit, setVisit] = useState(true);

    const handleVisit = () => {
        setVisit(!visit);
    }
    
    return (
        <div className='countryStyle'>
            <h3>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={handleVisit}> {visit ? 'Going' : 'Traveled'} </button>
        </div>
    );
};
            
export default Country;