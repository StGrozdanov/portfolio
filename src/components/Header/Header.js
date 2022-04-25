import './Header.css'
import Navigation from "./HeaderNavigation";

export default function Header() {
    return (
        <>
            <header>
                <Navigation />
                <article>
                    <h2>THE RELIABLE <br /><span>DEVELOPER</span> <br />FOR YOUR PROJECTS</h2>
                    <h3>WELCOME TO MY PORTFOLIO</h3>
                    <p>Together we build the foundations of tommorow</p>
                </article>
            </header>
        </>
    );
}