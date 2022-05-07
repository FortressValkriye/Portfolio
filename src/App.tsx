import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="App">
      <Parallax pages={4}>
        <ParallaxLayer
          speed={0.8}
          factor={3}
          offset={0}
          style={{
            backgroundColor: "rgb(129,61,156)",
            background:
              "linear-gradient(50deg, rgba(129,61,156,1) 23%, rgba(192,28,40,1) 62%, rgba(192,28,40,1) 68%, rgba(192,28,40,1) 94%, rgba(192,28,40,1) 96%)",
          }}
        ></ParallaxLayer>
        <ParallaxLayer speed={0.8} offset={0} horizontal={true}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
            }}
          >
            <div style={{ marginRight: "2rem" }}>
              <h1>Nefo Fortressia</h1>
              <h4>they/them</h4>
            </div>
            <div style={{ marginLeft: "2rem" }}>
              <img
                style={{ borderRadius: "50rem" }}
                src="https://avatars.githubusercontent.com/u/66000635?s=400&v=4"
              />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            display: "flex",

            justifyContent: "center",
          }}
          offset={1}
          speed={1.5}
        >
          <div>
            <h2>
              Hiii!! I'm a developer working with Rust and the Linux desktop
              ecosystem
            </h2>
            <p>
              Be it GTK, Flatpak, Freedesktop specifications. If you got
              anything to do with Linux app development, just handle it to me.
            </p>

            <div style={{ height: "4rem", position: "relative" }}>
              <img
                style={{ height: "100%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg"
              />
              <img
                style={{ height: "100%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flatpak_logo.png"
              />
            </div>
            <p>
              Not only that, but I also do web technologies as well. Though...
              less frequently.
            </p>
            <div style={{ height: "4rem", position: "relative" }}>
              <img
                style={{ height: "100%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
              ></img>
              <img
                style={{ height: "100%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              ></img>
              <img
                style={{ height: "100%", filter: "invert(100%)" }}
                src="https://simpleicons.org/icons/nextdotjs.svg"
              ></img>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
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
