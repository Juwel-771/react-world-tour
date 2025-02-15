import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }, [])
    return (
        <div>
            <h2>Countries:  {countries.length} </h2>
            {
                countries.map(allCountry => <Country country = {allCountry}></Country>)
            }
        </div>
    )
}

export default Countries;