import './HeaderNavigation.css';
import { Link } from 'react-scroll/modules';

export default function Navigation() {
    return (
        <nav className='header-navigation'>
            <ul className='nav-ul'>
                <li>
                    <Link
                        to='main'
                        smooth={true}
                        duration={1400}
                        activeClass='active'
                        spy={true}
                    >Introduction</Link>
                </li>
                <li>
                    <Link
                        to="about-me"
                        smooth={true}
                        duration={1000}
                        activeClass='active'
                        spy={true}
                    >About Me</Link>
                </li>
                <li>
                    <Link
                        to="my-projects"
                        smooth={true}
                        duration={1000}
                        activeClass='active'
                        spy={true}
                    >My Projects</Link>
                </li>
                <li>
                    <Link
                        to="contacts"
                        smooth={true}
                        duration={1400}
                        activeClass='active'
                        spy={true}
                    >Contacts</Link>
                </li>
            </ul>
        </nav>
    );
}