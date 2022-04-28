import './Contact.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

const thankYouMessage = (
    <h4 className='contact-section-send-success'>
        Your message was delivered! Thanks for keeping in touch with me.
    </h4>
);

export default function Contact() {
    const [sendEmail, setSendEmail] = useState(false);
    const form = useRef();

    function sendEmailHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        let { name, email, description } = Object.fromEntries(formData);

        if (email.trim() !== '' && name.trim() !== '' && description.trim() !== '') {
            emailjs
                .sendForm('service_oqn9vj9', 'template_igd22ij', form.current, 'n0npgfKwhAdyT8_tv')
                .then(result => {
                    if (result.text == 'OK') {
                        setSendEmail(true);
                        e.target.reset();
                    }
                });
        }
    }

    return (
        <section id='contacts' className='contact-section'>
            <header className="contact-section-header">
                <h2>Contact</h2>
                <p>Don't hesitate to contact me, together we are stronger</p>
            </header>
            <main>
                <form ref={form} onSubmit={sendEmailHandler}>
                    {sendEmail ? thankYouMessage : null}
                    <AnimationOnScroll animateIn='fadeInUp'>
                        <article className='contact-section-credentials-article'>
                            <input type="text" placeholder="Name" name="name" id="name" required={true} />
                            <input type="email" placeholder="E-mail" name="email" id="email" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required={true} />
                        </article>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeInUp' delay={100}>
                        <article>
                            <textarea placeholder="Message" rows="7" name="description" id="description" required={true}></textarea>
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