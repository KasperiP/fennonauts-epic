import AboutUs from "@/components/about-us/AboutUs";
import Hero from "@/components/hero/Hero";
import OurGames from "@/components/our-games/OurGames";
import PitchUs from "@/components/pitch-us/PitchUs";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AboutUs />
      <OurGames />
      <PitchUs />
    </main>
  );
}
