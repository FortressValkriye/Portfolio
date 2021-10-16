import Head from "next/head";
import styles from "../styles/Home.module.scss";
import projects from "~/assets/projects.json";
import socials from "~/assets/socials.json";
import Layout from "~/components/layout";
import { Icon } from "@icons-pack/react-simple-icons";
import { techStacks } from "~/assets/tech.json";

interface Project {
  name: string;
  description: string;
  website: string;
  devStatus: string[];
  techStack: string[];
}
export function Project(props: { project: Project }) {
  return (
    <div key={props.project.name}>
      <h3 className={styles["title"]}>
        <a id={props.project.name} href={"#" + props.project.name}>
          {props.project.name}
        </a>{" "}
      </h3>
      <p>{props.project.description}</p>
      <p>
        {props.project.techStack.map((stack) => (
          <i className={`si si-${stack}`}></i>
        ))}
      </p>
      <p>
        {props.project.devStatus.map((status) => (
          <span className={styles["status-line"]}> {status} </span>
        ))}
      </p>
      <p>
        <a href={props.project.website}> Website URL </a>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FortressValkyrie</title>
        <meta
          name="description"
          content="Hi, I'm a programmer and Linux enthusiast."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={`${styles.intro} ${styles["page-box"]}`}>
          <div className={styles.content}>
            <h1>FortressValkyrie</h1>
            <h2>Hi, I'm a programmer and Linux enthusiast.</h2>
          </div>
        </div>
        <div className={`${styles["page-box"]} ${styles["about-me"]}`}>
          <div className={`${styles["content"]} ${styles["side"]}`}>
            <h2 className={styles["title"]}>About Me</h2>
            <p>
              Heya, I'm Fortress, some people call me 'Nefo'. I'm a self-taught
              web developer. I've been doing this for quite some months and I am
              eager to learn more (impostor syndrome)!
            </p>
            <p></p>
          </div>
          <div className={styles["side"]}></div>
        </div>
        <div
          className={`${styles["page-box"]} ${styles["open-source"]} ${styles["about-me"]}`}
        >
          <div className={`${styles["side"]}`}>
            <p></p>
          </div>
          <div className={`${styles["content"]} ${styles["side"]}`}>
            <h2 className={styles["title"]}>Open Source</h2>
            <p>
              I'm a big fan of Linux and open source. Even this very website is
              open source under the copyleft GPLv3 license and{" "}
              <a href="https://github.com/FortressValkyrie/Portfolio">
                its source code is available on GitHub
              </a>
              . Open source is a great way for individuals to share their
              passion, with doing it for everyone's benefit.
            </p>
          </div>
        </div>
        <div className={`${styles["tech-stacks"]}`}>
          <h2>
            <a id="my-tech-stacks" href="#my-tech-stacks">
              My Tech Stacks
            </a>
          </h2>
          <p  className={styles["tech-stack-list"]}>
            {" "}
            {techStacks.map((stack) => (
              <i className={`si si-${stack}`}/>
            ))}
          </p>
        </div>
        <div className={`${styles["page-box"]} ${styles["projects-box"]}`}>
          <h2 className={styles["title"]}>
            <a id="my-projects" href="#my-projects">
              My Projects
            </a>
          </h2>
          <div className={styles["list"]}>
            {projects.map((project) => (
              <Project project={project} />
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      <p>
          Created with ♥️ by FortressValkyrie
	  </p>
        
      </footer>
    </div>
  )
}
