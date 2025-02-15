import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountry, setvisitedCountry] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }, []);

    const handlevisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry, country];
        setvisitedCountry(newVisitedCountry);
    }

    return (
        <div>
            <h2>Countries:  {countries.length} </h2>
            <div>
                <h4>Visited Country: {visitedCountry.length} </h4>
                <ul>
                    <li>
                        {
                            visitedCountry.map(country => <li key={country.cc3}> {country.name.common} </li>)
                        }
                    </li>
                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(allCountry => <Country 
                    key = {allCountry.tId} 
                    handlevisitedCountry = {handlevisitedCountry} 
                    country = {allCountry}>
                    
                    </Country>)
            }
            </div>
        </div>
    )
}

export default Countries;