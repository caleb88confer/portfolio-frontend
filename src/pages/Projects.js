import {useState, useEffect } from "react";

function Projects (props) {

    // state 
    const [projects, setProjects] = useState(null);

    // function to make an api call
    const getProjectData = async () => {
        const response = await fetch(props.URL + "projects");
        // turn response into js object
        const data = await response.json();
        // set the projects state to the data
        setProjects(data);
    };
    // make an innitial call for the data so it happens once upon component load
    useEffect(() => getProjectData(), []);

    // function that will return the jsx needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <div className="imageContainer">
                <img className="projectImg" src={project.image} alt={project.name} />

                </div>
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live site</button>
                </a>

                
            </div>
        ));
    };
    return (
        projects ? loaded() : <h1>Loading...</h1>
    );
};

export default Projects;