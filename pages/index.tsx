import Head from "next/head";

import projects from "~/assets/projects.json";
import socials from "~/assets/socials.json";
import techStacks from "~/assets/tech.json";
import { AboutPage } from "~/components/about";
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
      <a id={props.project.name} href={"#" + props.project.name}>
        <h3 className="text-lg">{props.project.name}</h3>
        <p>{props.project.description}</p>
        <p className="flex">
          {props.project.techStack.map((stack) => (
            <i className={`si si-${stack} mr-2`}></i>
          ))}
        </p>
        <p>
          {props.project.devStatus.map((status) => (
            <span className=""> {status} </span>
          ))}
        </p>
        <p>
          <a target="_blank" href={props.project.website}>
            {" "}
            Website URL{" "}
          </a>
        </p>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nefo Fortressia</title>
        <meta
          name="description"
          content="Hi, I'm a programmer and Linux enthusiast."
        />
      </Head>

      <main className="relative">
        <AboutPage className="text-clip text-2xl center-childs min-h-screen">
          <div className="w-[100% - 8rem]">
            <h1 className="text-pink">Nefo Fortressia</h1>
            <h2 className="text-purple">
              Hi, I'm a programmer and Linux enthusiast.
            </h2>
          </div>
        </AboutPage>

        <AboutPage className="bg-bgLight">
          <div>
            <p>
              Heya, I'm Nefo Fortressia! I'm a self-taught software developer
              and student. I have been doing this since 2020 and I'm still eager
              to learn more.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-xl">Open Source</h2>
            <p>
              I'm a big fan of Linux and open source. Even this very website is
              open source under the copyleft GPLv3 license and{" "}
              <a href="https://github.com/FortressValkyrie/Portfolio">
                its source code is available on GitHub
              </a>
              .
            </p>

            <p>
              Open source is a great way for individuals to share their passion,
              with doing it for everyone's benefit.
            </p>
          </div>
        </AboutPage>
        <a id="my-tech-stacks" href="#my-tech-stacks">
          <div
            className={`relative flex center-childs bg-bgDark flex-col py-5`}
          >
            <h2 className="mb-3 text-2xl">My Tech Stack</h2>
            <p className="flex  justify-center items-left">
              {" "}
              {techStacks.map((stack) => (
                <i className={`text-3xl mr-5 si si-${stack}`} />
              ))}
            </p>
          </div>
        </a>
        <a id="my-projects" href="#my-projects">
          <AboutPage className="justify-start">
            <h2 className="text-xl">My Projects</h2>
            <div className="flex flex-col">
              {projects.map((project) => (
                <Project project={project} />
              ))}
            </div>
          </AboutPage>
        </a>
        <a id="socials" href="#socials">
          <AboutPage className="flex flex-col bg-bgDark center-childs">
            <h1 className="text-xl">Get in touch with me</h1>
            <div className="flex flex-row">
              {socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank">
                  <i className={`si si-${social.name} mr-5 text-4xl`} />
                </a>
              ))}
            </div>
          </AboutPage>
        </a>
      </main>
    </div>
  );
}
