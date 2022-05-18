import { createRef } from "react";
import gitSymbolicIcon from "../icons/git-symbolic.svg";
import mockup from "./mockup.png";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="App">
      <Parallax pages={4}>
        <ParallaxLayer
          speed={0.8}
          factor={4.5}
          offset={0}
          className="bg-[rgb(129,61,156)] z-[-1]"
          style={{
            background:
              "linear-gradient(50deg, rgba(129,61,156,1) 23%, rgba(192,28,40,1) 62%, rgba(192,28,40,1) 68%, rgba(192,28,40,1) 94%, rgba(192,28,40,1) 96%)",
          }}
        ></ParallaxLayer>
        <ParallaxLayer speed={0.8} offset={0} horizontal={true} className="w-screen ">
          <div
            className="flex place-content-center w-screen h-screen"

          >
            <div className="mr-8 flex place-content-center flex-col">
              <h1>Nefo Fortressia</h1>
              <h4>they/them</h4>
            </div>
            <div className="flex items-center ">
              <img className="mr-8 h-100 rounded-full"
                src="https://avatars.githubusercontent.com/u/66000635?s=400&v=4"
              />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className="flex place-content-center"
          offset={1}
          speed={1.5}
        >
          <div className="text-center">
            <h2>
              Hiii!! I'm a developer working with Rust and the Linux desktop
              ecosystem
            </h2>
            <p>
              Be it GTK, Flatpak, Freedesktop specifications. If you got
              anything to do with Linux app development, just handle it to me.
            </p>

            <div className="flex place-content-center">
              <img
                className="h-20"
                src="https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg"
              />
              <img
                className="h-20"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flatpak_logo.png"
              />
            </div>
            <p>
              Not only that, but I also do web technologies as well. Though...
              less frequently.
            </p>
            <div className="h-1 relative">

            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.8} offset={2}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", height: "100vh",
            zIndex: 3
          }}>
            <div style={{ width: "25vw" }}>
              <h1>Echidna Code</h1>
              <h3>
                A cross-platform code editor that's designed to be user-friendly.


              </h3>
              <p>Designed for the GNOME desktop. Works on all systems.</p>
              <a className="color-white h-8 pt-20 bold" style={
                {
                  color: "white",
                  fontSize: "2rem",
                  textDecoration: "none",



                }
              } href="https://github.com/fortressia/Echidna/"><img style={
                { height: "2rem", filter: "invert(100%)", marginRight: "1rem" }
              }
                src={gitSymbolicIcon} /><p>Learn More</p></a>
            </div>

            <img style={{ marginTop: "3.5rem", marginLeft: "2rem" }} src={mockup} />
          </div>


        </ParallaxLayer>
        <ParallaxLayer
          speed={4}
          offset={2}
          factor={2}

          style={{
            background:
              "linear-gradient(193deg, rgba(26,95,180,1) 36%, rgba(26,95,180,1) 39%, rgba(26,95,180,1) 39%, rgba(129,61,156,1) 74%, rgba(129,61,156,1) 90%, rgba(129,61,156,1) 94%, rgba(129,61,156,1) 96%)",
            backgroundColor: "rgb(26,95,180)",
            zIndex: -1
          }}
        ></ParallaxLayer>


        <ParallaxLayer
          offset={3}
          speed={2}
          style={{
            backgroundColor: "rgb(28,113,216)",
            background:
              "linear-gradient(50deg, rgba(28,113,216,1) 28%, rgba(32,132,195,1) 34%, rgba(46,194,126,1) 66%, rgba(46,194,126,1) 68%, rgba(46,194,126,1) 94%, rgba(46,194,126,1) 96%)",
          }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
