import { container } from "../../styles/app.css"
import clsx from 'clsx';
import { aboutHeading, aboutMeContainer, placeholderImage } from "../../styles/About.css";
import { Paragraph, Container, Button } from "../../Components";

const About: any = () => {
    let placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    return (
        <Container className={clsx(container)}>
            <div className={clsx(aboutMeContainer)}>
                <h1 className={aboutHeading}>About Me</h1>
                <div className={placeholderImage}></div>
                <Paragraph>{placeholder}</Paragraph>
                <Paragraph>{placeholder}</Paragraph>
            </div>
        </Container>
    )
}

export { About }