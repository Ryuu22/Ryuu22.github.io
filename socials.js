const socials = [
    {
        name: 'github',
        icon: 'icons/github-mark-white.png',
        link: 'https://github.com/Ryuu22'
    },
    {
        name: 'linkedin',
        icon: 'icons/LI-In-Bug.png',
        link: 'https://www.linkedin.com/in/daniel-carmona-bueno-90988a123/'
    },
    {
        name: 'website',
        icon: 'icons/polywork-logos-idryUyCDc2.png',
        link: 'https://www.dankbueno.com/'
    },
];

function createIconElement(icon) {
    const iconElement = document.createElement('div');
    iconElement.style.backgroundImage = `url(${icon})`;
    iconElement.classList.add('icon');
    return iconElement;
}

function createSocials() {
    const socialsElement = document.getElementById('socials');
    socials.forEach(social => {
        const linkElement = document.createElement('a');
        linkElement.classList.add('social');
        linkElement.href = social.link;
        linkElement.target = '_blank';
        linkElement.appendChild(createIconElement(social.icon));

        socialsElement.appendChild(linkElement);
    })
}

createSocials();