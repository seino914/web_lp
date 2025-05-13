import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Benefits />
        <Services />
        {/* <Team /> */}
        {/* <Testimonials /> */}
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
