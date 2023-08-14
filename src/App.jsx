import About from "./components/About";
import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import Socials from "./components/Socials";

export default function App() {
  return (
    <div className="bg-white h-screen flex flex-col gap-5 font-Raleway tracking-wider bg-gradient-to-br from-violet-500 to-orange-300">
      <section className="flex flex-col gap-4 items-center text-center text-white bg-white bg-opacity-10 py-5">
        <Avatar />
        <Intro />
      </section>
      <Socials />
      <About />
    </div>
  )
}
