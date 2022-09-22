import { container, gridLayout, test } from "../../styles/app.css"
import { titleHeading, margin0, homeHeight } from "../../styles/Home.css";
import clsx from 'clsx';

const Home: any = () => {
return (
    <div className={clsx(container, homeHeight)}>
        <div className={gridLayout}>
          <section className={titleHeading}>
            <h1 className={margin0}>Harry Pham,</h1>
            <h1 className={margin0}>Full Stack Engineer</h1>
          </section>
        </div>
    </div>
)
}

export default Home