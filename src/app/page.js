import BlogGrid from "@/components/BlogGrid";
import Card from "@/components/Card";
import HeroSection from "@/components/Herosection";
import LatestReviews from "@/components/LatestReviews";
import PostGrid from "@/components/PostGrid";
import PressviewHero from "@/components/PressviewHero";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <PressviewHero />
    <PostGrid />
    {/* <LatestReviews /> */}
    <Card/>
    <Section/>
    
    </div>
  );
}
