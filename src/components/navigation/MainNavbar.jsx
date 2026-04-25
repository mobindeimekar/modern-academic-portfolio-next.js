"use client";

import Button from "../ui/Button";
import FadeIn from "../animation wrappers/FadeIn";
import SidebarButton from "./SidebarButton";
import logo from '../../assets/images/logo.png'
import Image from "next/image";
import { navLinks } from "@/data/NavlinkData";



export default function MainNavbar() {
    return (
        <section className="w-full flex justify-center fixed top-0 z-10
              bg-white/6
                backdrop-blur-sm
                border-b border-black/30
                inset-shadow-xs inset-shadow-white/30">
        
            <div className="w-full max-w-7xl h-18 md:h-20 flex items-center justify-between px-6 ">


                <FadeIn
                    useViewport={false}
                    direction="left"
                    delay={0.5}
                    distance={120}
                    duration={0.6}
                >
                    <a href="#home">
                        <div className="relative w-[150px] md:w-[170px] h-[72px] flex justify-center items-center overflow-hidden pt-3
                        
                        ">
                            <Image src={logo} alt="logo" />
                        </div>
                    </a>
                </FadeIn>
                <FadeIn
                    useViewport={false}
                    direction="down"
                    delay={0.5}
                    distance={120}
                    duration={0.6}
                >

                    <div className="hidden md:flex items-center justify-between relative">


                        <ul className="flex items-center gap-6 *:py-4 ">
                            {navLinks.map((item, index) => {
                                return (
                                    <li key={index}  >
                                        <a className="relative group transition hover:text-primary" href={item.href}>{item.label} 
                                        <span
                                            className="
                                             absolute left-0 -bottom-1 h-[1px] w-0
                                             bg-primary transition-all duration-300
                                             group-hover:w-full
                                              "
                                        />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>


                    </div>

                </FadeIn>


                <div className="block md:hidden">
                    <SidebarButton />
                </div>

                <div className="hidden md:block">
                    <FadeIn
                        useViewport={false}
                        direction="right"
                        delay={0.5}
                        distance={120}
                        duration={0.6}
                    >
                        <Button>ارتباط با من</Button>
                    </FadeIn>
                </div>
            </div>

        </section>
    );
}