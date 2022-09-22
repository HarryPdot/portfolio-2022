import { container, gridLayout, subHeight, test, gap } from "../../styles/app.css"
import clsx from 'clsx';
import { contactHeading } from "../../styles/Contact.css";

const Projects: any = () => {
    let placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

return (
    <div className={clsx(container)}>
        <h1 className={contactHeading}>Contact Me</h1>
    </div>
)
}

export default Projects