import './Contact.css';

export default function Contact() {
    return (
        <section id='contacts' className='contact-section'>
            <header className="contact-section-header">
                <h2>Contact</h2>
                <p>Don't hesitate to contact me, together we are stronger</p>
            </header>
            <main>
                <form action="#" method="post">
                    <article className='fadeInUp contact-section-credentials-article'>
                        <input type="text" placeholder="Name" name="name" id="name" required="" />
                        <input type="email" placeholder="E-mail" name="email" id="email" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required="" />
                    </article>
                    <article data-wow-delay='.2s' className="fadeInUp">
                        <textarea placeholder="Message" rows="7" name="description" id="description" required=""></textarea>
                    </article>
                    <button data-wow-delay='.35s' className="contact-button fadeInUp" type="submit">Send Message</button>
                </form>
            </main>
        </section>
    );
}