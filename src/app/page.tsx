import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Writing from '@/components/Writing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div
      id="top"
      className="relative mx-auto min-h-screen max-w-frame border-x border-line bg-bg"
    >
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
