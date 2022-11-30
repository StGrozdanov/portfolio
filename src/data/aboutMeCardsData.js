import personalQualities from "./personalQualities"

export const projectsCard = {
    cardNumber: 1,
    cardColor: 'greenCard',
    icon: 'fa fa-rocket',
    heading: 'MY PROJECTS',
    innerHeading: 'Used Technology Stack',
    technologies: personalQualities.projects,
    animationDelay: '1s',
}

export const experienceCard = {
    cardNumber: 2,
    cardColor: 'orangeCard',
    icon: 'fa fa-code',
    heading: 'GAINED EXPERIENCE',
    innerHeading: 'Practical Experience',
    technologies: personalQualities.experience,
    animationDelay: '2s',
}

export const softSkillsCard = {
    cardNumber: 3,
    cardColor: 'blueCard',
    icon: 'fa fa-users',
    heading: 'SOFT SKILLS',
    innerHeading: 'Sports and Work Experience',
    technologies: personalQualities.softSkills,
    animationDelay: '3s',
}

export const hobbiesCard = {
    cardNumber: 4,
    cardColor: 'bordoCard',
    icon: 'fa fa-heart',
    heading: 'MY HOBBIES',
    innerHeading: 'Favourite things to do',
    technologies: personalQualities.hobbies,
    animationDelay: '4s',
}