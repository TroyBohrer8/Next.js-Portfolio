import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Troy | Full-Stack Developer</title>
        <meta
          name="description"
          content="I'm a full-stack developer specializing in building exceptional web applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
