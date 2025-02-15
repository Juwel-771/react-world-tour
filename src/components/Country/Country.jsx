const Country = ({country}) => {
    const {name} = country;
    return (
        <div>
            <p>Name: {name.common} </p>           
        </div>
    );
};
            
export default Country;