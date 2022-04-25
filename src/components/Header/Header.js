import './Header.css'
import Navigation from "./HeaderNavigation";

export default function Header() {
    return (
        <>
            <header>
                <Navigation />
                <article>
                    <h2 className='bounceIn'>THE RELIABLE <br /><span>DEVELOPER</span> <br />FOR YOUR PROJECTS</h2>
                    <h3 className='bounceIn'>WELCOME TO MY PORTFOLIO</h3>
                    <p className='bounceIn'>Together we build the foundations of tommorow</p>
                    <i class="fa-solid fa-angles-down fa-beat-fade"></i>
                </article>
            </header>
        </>
    );
}