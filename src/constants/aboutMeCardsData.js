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
    innerHeading: 'SoftUni 09.2020-08.2022',
    technologies: personalQualities.softuni,
    animationDelay: '2s',
}

export const softSkillsCard = {
    cardNumber: 3,
    cardColor: 'blueCard',
    icon: 'fa fa-users',
    heading: 'SOFT SKILLS',
    innerHeading: 'Sports 2009-2020 and Work experience 2016-2022',
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