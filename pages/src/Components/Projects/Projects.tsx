import { container, gridLayout, subHeight, test, gap } from "../../styles/app.css"
import clsx from 'clsx';
import { placeholderImage, projectDescription, projectHeight, projectName } from "../../styles/Projects.css";

const Projects: any = () => {
    let placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

return (
    <div className={clsx(container, projectHeight)}>
        <div className={projectHeight}>
            {/* project name link to the project */}
            <h2 className={projectName}>Project Name</h2>
            <div className={clsx(placeholderImage)}></div>
            <p className={projectDescription}>{placeholder}</p>
        </div>
        <div className={clsx(gap)}></div>
        <div className={projectHeight}>
            <h2 className={projectName}>Project Name</h2>
            <div className={clsx(placeholderImage)}></div>
            <p className={projectDescription}>{placeholder}</p>
        </div>
        <div className={clsx(gap)}></div>
    </div>
)
}

export default Projects