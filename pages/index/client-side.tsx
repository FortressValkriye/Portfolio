import { createRef } from "react";
import github from "../../icons/github.svg";
import mastodon from "../../icons/mastodon.svg";
import twitter from "../../icons/twitter.svg";
import devdotto from "../../icons/devdotto.svg";
import profilePicture from "../../renderer/logo.png";
import flatpak from "../../icons/flatpak.png";
import gtk from "../../icons/gtk.svg";
import mockup from "./mockup.png";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";

export default function ParallaxPage() {
    const ref = createRef<IParallax>();

    // @ts-ignore
    window.ref = ref;
    return (<div >
        <Parallax pages={5} ref={ref} >

            <ParallaxLayer
                speed={0.8}
                factor={5}
                offset={0}
                className="background-gradient z-[-3]"
                 
            ></ParallaxLayer>

            <ParallaxLayer speed={0.8} offset={0} horizontal={true} >
                <div className="flex p-8 flex-col space-y-8 lg:space-y-0 lg:flex-row justify-center items-center w-screen h-screen">
                    <div className="mr-8 flex flex-col">
                        <h1 className="text-3xl">Nefo Fortressia</h1>
                        <h4>Principal Engineer at EchidnaHQ</h4>
                    </div>

                    <img className="mr-8 h-60 rounded-full"
                        src={profilePicture}
                    />
                </div>

            </ParallaxLayer>
            <ParallaxLayer
                className="grid place-content-center p-8 pr-18"
                offset={1}
                speed={1.5}
            >
                <div className="text-center text-lg">
                    <h2 className="text-2xl">
                        Hiii!! 👋👋 I'm a developer working with Rust 🦀 and the Linux 🐧🐧 desktop
                        ecosystem
                    </h2>
                    <p>
                        Be it GTK, Libadwaita, Flatpak, Freedesktop SDK.  If you got
                        anything lovelyy with Linux app development, just handle it to mee!! 😘😘
                    </p>

                    <div className="flex place-content-center">
                        <img
                            className="h-20"
                            src={gtk}
                        />
                        <img
                            className="h-20"
                            src={flatpak}
                        />
                    </div>
                    <p>
                        Not only that!! I alsoo do web devv too! 🥰🥰
                    </p>
                    <div className="h-1 relative">

                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer speed={3} offset={2} className="relative w-screen h-screen z-20 flex place-items-center">

                <div className="absolute p-8 pr-18 lg:left-8 lg:w-[35vw] space-y-8">
                    <span className="mb-16">
                        <h1 className="text-4xl font-semibold">Writee cutee codee 🥰🥰</h1>
                        <h2 className="text-2xl">Painlessly. Beautifullyy 💖✨</h2>
                    </span>
                    <span>
                        <h3>
                            <span className="font-bold">Echidna Code</span> is an in-development code editor more lovelyy than your existing one. Awww! 😍😍
                        </h3>
                        <h3>It keeps you away from most bad experiences in code editors, and it works on most systems!! 💕💕</h3>
                    </span>

                    <a className="color-white h-8 text-xl bold no-underline" href="https://github.com/fortressia/Echidna/"><p>Coming Soon 👋</p></a>
                </div>



            </ParallaxLayer>

            <ParallaxLayer speed={2} offset={2} horizontal={false} className="z-8 relative h-screen w-screen">
                <img className="absolute top-[67.5%] lg:top-2 lg:right-9 h-[100vh - 2rem]" src={mockup} />

            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.8} className="grid place-items-center">
                <div className="w-[80vw]">
                    <h1 className="text-center text-4xl">{"Ask Mee Aanythiingg!! 😍😍"}</h1>
                    <details>
                        <summary>
                            <h1>What aree your lovelyy pronouns?</h1>
                        </summary>
                        <p>
                            I go with the they/them pronouns!! 🥰🥰 I'm not really an enby, but I prefer that for some personal reasons! ^^
                        </p>
                    </details>
                    <details>
                        <summary>
                            <h1>
                                What are your interests aside from programming?
                            </h1>

                        </summary>
                        I like reading novels and writing storiess! When I'm bored, I usually playy Genshin Impact and Minecraftt! They're very fun!! ^^
                    </details>

                    <details>
                        <summary>
                            What sort of novels do you likee?
                        </summary>

                        I lovee novels with girlss as MC with a feminime theme. I'm not really into boys' thingiees. ^^
                    </details>
                    <details>
                        <summary>{'I lovee you sooo much 😍😍 <3'}</summary>

                        I loveee you tooo!! 🥰🥰🥰💖💖✨✨
                    </details>
                </div>

            </ParallaxLayer>
            <ParallaxLayer
                offset={4}
                speed={2}
                style={{
                    backgroundColor: "rgb(28,113,216)",
                    background:
                        "linear-gradient(50deg, rgba(28,113,216,1) 28%, rgba(32,132,195,1) 34%, rgba(46,194,126,1) 66%, rgba(46,194,126,1) 68%, rgba(46,194,126,1) 94%, rgba(46,194,126,1) 96%)",
                }}
            ></ParallaxLayer>
            <ParallaxLayer offset={4} speed={0.5} className="flex justify-center items-center flex-col space-y-8 pr-12 p-8">
                <h1 className="text-4xl">Find me in my socials</h1>
                <div className="flex space-x-2 h-5 invert">
                    <a href="https://twitter.com/NefoFortressia" target="_blank"><img className="h-10" src={twitter} />
                    </a>
                    <a href="https://github.com/fortressia" target="_blank"><img className="h-10" src={github} /></a>

                    <a href="https://mastodon.technology/fortressia" target="_blank"><img className="h-10" src={mastodon} /></a>

                    <a href="https://dev.to/fortressia" target="_blank"><img className="h-10" src={devdotto} /></a>
                </div>
            </ParallaxLayer>

        </Parallax>
        <div className="fixed font-semibold space-y-4 right-4 top-4 color-white write-vertical-right flex-row place-items-center flex" >
            <a href="#" onClick={() => { ref.current?.scrollTo(0) }}><img className="h-16 rounded-full" src={profilePicture}></img></a>
            <a href="#about" onClick={() => { ref.current?.scrollTo(1) }}>About Mee</a>
            <a href="#echidna" className="mb-2" onClick={() => { ref.current?.scrollTo(2) }}>Echidna Code</a>
            <a href="#ama" onClick={() => { ref.current?.scrollTo(3) }}> {"AMAA >>//<<"}</a>
            <a href="#contact" onClick={() => { ref.current?.scrollTo(4) }}>Socialss</a>
            <a href="https://fortressia.substack.com" target="_blank">Newsletter</a>

        </div>
    </div>);
}