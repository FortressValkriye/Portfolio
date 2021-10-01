import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import projects from "~/assets/projects.json";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FortressValkyrie</title>
        <meta name="description" content="Hi, I'm a programmer and Linux enthusiast." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={`${styles.intro} ${styles["page-box"]}`}>
        <div><h1>
          FortressValkyrie
        </h1>
        <h2>
          Hi, I'm a programmer and Linux enthusiast.
        </h2>
        </div>
        </div>
        <div className={`${styles["page-box"]} ${styles["about-me"]}`}>
          <div className={`${styles["content"]} ${styles["side"]}`}>
            <h2 className={styles["title"]}>
              About Me
            </h2>
            <p>
              Heya, I am one of those kids who have been learning to code since childhood. I first learned to code , and I mastered my first language, JavaScript, at the age of 12 (I'm 13 now). Now, I dive into the deeps of web and desktop application development.  
            </p>
            <p>

            </p>
          </div>
          <div className={styles["side"]}>

          </div>

        </div>
        <div className={`${styles["page-box"]} ${styles["projects-box"]}`}>
          
          <h2 className={styles["title"]}>My Projects</h2>
<div className={styles["list"]}>
        {
          projects.map((project) => (
              <div>
                <h3 className={styles["title"]}> { project.name } </h3>
                <p>
                  { project.description }
                </p>
                <p>
                  { project.devStatus.join(" | ") }
                </p>
                <p>
                  <a href={project.website}> Website URL </a>
                </p>
              </div>
            ))
        }
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
