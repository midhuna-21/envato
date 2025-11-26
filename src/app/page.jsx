import BlogGrid from "../components/BlogGrid";
import Card from "../components/Card";
import HeroSection from "../components/Herosection";
import LatestReviews from "../components/LatestReviews";
import PostGrid from "../components/PostGrid";
import PressviewHero from "../components/PressviewHero";
import Section from "../components/Section";
import Image from "next/image";
import businessData from '../../public/data/business.json'
import educationData from '../../public/data/education.json';
import healthData from '../../public/data/health.json';
import entertainmentData from '../../public/data/entertainment.json';
import politicsData from '../../public/data/politics.json';
import scienceData from '../../public/data/science.json';
import sportsData from '../../public/data/sports.json';
import technologyData from '../../public/data/technology.json';


export default function Home() {
  return (
    <div>
    <HeroSection data={[businessData[0],politicsData[0],sportsData[0]]}/>
    <PressviewHero />
    <PostGrid data={[politicsData[1],politicsData[2],politicsData[3],politicsData[4]]}/>
    {/* <LatestReviews /> */}
    <Card data={[businessData[4],sportsData[1],technologyData[0]]}/>
    <Section data={[entertainmentData[0],scienceData[0],healthData[0],educationData[0]]}/>
    
    </div>
  );
}
