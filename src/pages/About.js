import {useState, useEffect} from "react";


function About (props) {

    const [about, setAbout] =useState(null);

    // function to make api call
    const getAboutData = async () => {
        // make api call and get response
        const response = await fetch(props.URL + "about");
        // turn response into js object
        const data = await response.json();
        // set about state to the recieved data
        setAbout(data); 
    };

    // make innitial call for data so it happens when component loads
    useEffect(() => getAboutData(), []);

    // define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );

    return (
        // if data arrives return the result of loaded,
        about ? loaded() : <h1>Loading...</h1>
    );
};

export default About;