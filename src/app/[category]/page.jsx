import businessData from "../../../public/data/business.json";
import technologyData from "../../../public/data/technology.json";
import sportsData from "../../../public/data/sports.json";
import healthData from "../../../public/data/health.json";
import politicsData from "../../../public/data/politics.json";
import scienceData from "../../../public/data/science.json";
import entertainmentData from "../../../public/data/entertainment.json";
import educationData from "../../../public/data/education.json";
import lifestyleData from "../../../public/data/lifestyle.json";

import CategoryCard from "../../components/CategoryCard";
import PaginatedGrid from "../../components/PaginatedGrid";
import Breadcrumb from "../../components/BreadCrump";
import SectionTitle from "../../components/SectionTitle";

const allData = {
  business: businessData,
  technology: technologyData,
  sports: sportsData,
  health: healthData,
  politics: politicsData,
  science: scienceData,
  entertainment: entertainmentData,
  education: educationData,
  lifestyle: lifestyleData,
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;

  console.log(resolvedParams.category);

  const category = resolvedParams.category;
  const data = allData[category];

  if (!data) return <div>Category not found</div>;

  return (
    <>
      <Breadcrumb />
      <SectionTitle title={category} />
      <div >

        <PaginatedGrid data={data} />

      </div>
    </>
  );
}

