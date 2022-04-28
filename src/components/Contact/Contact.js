import './Contact.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Contact() {
    return (
        <section id='contacts' className='contact-section'>
            <header className="contact-section-header">
                <h2>Contact</h2>
                <p>Don't hesitate to contact me, together we are stronger</p>
            </header>
            <main>
                <form action="#" method="post">
                    <AnimationOnScroll animateIn='fadeInUp'>
                        <article className='contact-section-credentials-article'>
                            <input type="text" placeholder="Name" name="name" id="name" required="" />
                            <input type="email" placeholder="E-mail" name="email" id="email" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required="" />
                        </article>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeInUp' delay={100}>
                        <article>
                            <textarea placeholder="Message" rows="7" name="description" id="description" required=""></textarea>
                        </article>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeInUp' delay={500}>
                        <button className="contact-button" type="submit">Send Message</button>
                    </AnimationOnScroll>
                </form>
            </main>
        </section>
    );
}