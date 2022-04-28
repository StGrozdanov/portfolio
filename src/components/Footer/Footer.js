import './Footer.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Footer() {
    return (
        <footer className="site-footer">
            <article className='site-footer-left-article'>
                <ul className="social-links">
                    <li className='facebook'>
                        <AnimationOnScroll animateIn='fadeInUp' delay={200}>
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </AnimationOnScroll>
                    </li>
                    <li className='linkedIn'>
                        <AnimationOnScroll animateIn='fadeInUp' delay={300}>
                            <a href="https://www.linkedin.com/in/stoyan-grozdanov-533b4b1bb" target="blank">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </AnimationOnScroll>
                    </li>
                    <li className='github'>
                        <AnimationOnScroll animateIn='fadeInUp' delay={400}>
                            <a href="https://github.com/StGrozdanov" target="blank">
                                <i className="fa fa-github"></i>
                            </a>
                        </AnimationOnScroll>
                    </li>
                    <li className='email'>
                        <AnimationOnScroll animateIn='fadeInUp' delay={500}>
                            <a href="mailto:st.grozdanov@abv.bg">
                                <i className="fa fa-envelope"></i>
                            </a>
                        </AnimationOnScroll>
                    </li>
                </ul>
            </article>
            <article className="site-footer-right-article">
                <h3 className="footer-title">Stoyan Grozdanov</h3>
                <ul className='site-footer-life-rules'>
                    <li>Live</li>
                    <li>Learn</li>
                    <li>Progress</li>
                    <li>One step at a time.</li>
                </ul>
            </article>
        </footer >
    );
}