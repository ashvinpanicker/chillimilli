type Sections = 'home' | 'about' | 'features' | 'product';

const scrollToSection = (section: Sections) => {
    document.querySelector(`#${section}`)?.scrollIntoView({
        behavior: 'smooth',
    });
}

export { scrollToSection };