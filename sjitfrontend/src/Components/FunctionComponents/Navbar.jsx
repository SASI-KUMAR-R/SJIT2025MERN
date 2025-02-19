import '../css/Navbar.css'
import { Link } from 'react-router-dom'
const navbar = () => {
    return (
        <header>
        <nav style={{listStyleType:"circle"}}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/About"}>About</Link></li>
            <li><Link to={"/Gallery"}>Gallery</Link></li>
            <div>
                <span>Hooks</span>
                <ol>
                    <li>
                        <Link to={"/use-state"}>useState</Link>
                    </li>
                    <li>
                        <Link to={"/use-effect"}>useEffect</Link>
                    </li>
                    
                </ol>

            </div>
            <li><Link to={"/Img"}>Contact</Link></li>
            <li><Link to={"/Signup"}>Signup</Link></li>
        </nav>
    </header>
    )
}
export default navbar