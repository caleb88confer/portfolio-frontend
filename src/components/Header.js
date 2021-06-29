import {Link} from "react-router-dom";

function Header(props) {

    const navStyle = {
        display: "flex",
        justifyContent: "space-around", 
        border: "3px solid #DCD2CC",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };

    return (
        <header>
            <h1>Caleb Confer's Portfolio</h1>
            <nav style={navStyle}>
                <Link className="headerLink" to="/">
                    <div>Home</div>
                </Link>
                <Link className="headerLink" to="/about">
                    <div>About</div>
                </Link>
                <Link className="headerLink" to="/projects">
                    <div>Projects</div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;