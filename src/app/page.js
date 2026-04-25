import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/hero";
import History from "@/components/history/history";
import SelectedWork from "@/components/SelectedWork/SelectedWork";
import ThemeButton from "@/components/ui/ThemeButton";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <main className="
      scroll-smooth
      no-scrollbar
      relative      
    ">
      <ThemeButton />
      <ThemeSwitcher />
      <Hero />
      <About />
      <History />
      <SelectedWork />
      <Contact />


    </main>
  );
}
