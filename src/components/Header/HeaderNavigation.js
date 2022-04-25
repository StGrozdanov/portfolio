import './HeaderNavigation.css';

export default function Navigation() {
    return (
        <nav>
            <ul className='nav-ul'>
                <li>
                    <a href="#">Introduction</a>
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