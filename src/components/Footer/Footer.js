import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <article className='site-footer-left-article'>
                <ul className="social-links">
                    <li className='facebook'>
                        <a className="fadeInUp" href="#" style={{ animationDelay: 0.2 + 's' }}>
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li className='linkedIn'>
                        <a className="fadeInUp" href="https://www.linkedin.com/in/stoyan-grozdanov-533b4b1bb" target="blank" style={{ animationDelay: 0.3 + 's' }}>
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li className='github'>
                        <a className="fadeInUp" href="https://github.com/StGrozdanov" target="blank" style={{ animationDelay: 0.4 + 's' }}>
                            <i className="fa fa-github"></i>
                        </a>
                    </li>
                    <li className='email'>
                        <a className="fadeInUp" href="mailto:st.grozdanov@abv.bg" style={{ animationDelay: 0.5 + 's' }}>
                            <i className="fa fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </article>
            <article className="bounceIn site-footer-right-article" style={{ animationDelay: 0.2 + 's', animationDuration: 0.75 + 's' }}>
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