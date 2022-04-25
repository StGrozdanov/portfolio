import './Header.css'
import Navigation from "./HeaderNavigation";

export default function Header() {
    return (
        <>
            <header>
                <Navigation />
                <article>
                    <h2>THE RELIABLE <span>DEVELOPER</span> FOR <br />YOUR PROJECTS</h2>
                    <h3>WELCOME TO MY PORTFOLIO</h3>
                    <p>Together we build the foundations of tommorow</p>
                </article>
            </header>
        </>
    );
}