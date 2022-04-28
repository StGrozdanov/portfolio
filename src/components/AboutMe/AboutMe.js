import './AboutMe.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function AboutMe() {
    return (
        <section className='about-me-section'>
            <AnimationOnScroll animateIn='fadeInDown'>
                <article className='about-me-article'>
                    <h2 className='about-me-article-heading'>About Me</h2>
                    <p>I am a full-stack developer, mostly experienced in Spring and React</p>
                    <p className='about-me-article-story'>
                        For me, building things from scratch is an enjoyment and bringing ideas to life is a lifestyle.
                        In the past I tried many other career paths - from road construction engineering, to pursuing sports
                        career. Yet again, after the start of COVID-19 pandemic, I found myself on a new path - a path in
                        which my passion and my enjoyment are always the leading part of the process.
                    </p>
                </article>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='fadeInRight'>
                <div className='about-me-picture-container'>
                    <img className="about-img" src="assets/images/coding-science.jpg" />
                </div>
            </AnimationOnScroll>
        </section>
    );
}