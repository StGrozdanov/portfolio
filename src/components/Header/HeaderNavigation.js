import './HeaderNavigation.css';

export default function Navigation() {
    return (
            <nav className='header-navigation'>
                <ul className='nav-ul'>
                    <li>
                        <a className='active' href="#">Introduction</a>
                    </li>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">My Projects</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
            </nav>
    );
}