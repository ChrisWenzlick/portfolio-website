export const siteConfig = {
    name: "Christopher Wenzlick",
    title: "Software Engineer",
    startYear: 2016, // the year you started professionally
    links: {
        github: "https://github.com/ChrisWenzlick",
        linkedin: "https://linkedin.com/in/christopherwenzlick",
        email: "placeholder@fakemail.com", // professional email
    },
    nav: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ],
};

export const getYearsExperience = () => {
    const now = new Date().getFullYear();
    return now - siteConfig.startYear;
};