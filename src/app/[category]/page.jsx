import businessData from "../../../public/data/business.json";
import financeData from "../../../public/data/finance.json";
import sportsData from "../../../public/data/sports.json";
import usData from "../../../public/data/us.json";
import politicsData from "../../../public/data/politics.json";
import worldData from "../../../public/data/world.json";
import entertainmentData from "../../../public/data/entertainment.json";
import CategoryCard from "../../components/CategoryCard";
import PaginatedGrid from "../../components/PaginatedGrid";
import Breadcrumb from "../../components/BreadCrump";
import SectionTitle from "../../components/SectionTitle";

const allData = {
  business: businessData,
  us: usData,
  sports: sportsData,
  world: worldData,
  politics: politicsData,
  finance: financeData,
  entertainment: entertainmentData,
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;

  const category = resolvedParams.category;
  const data = allData[category];

  if (!data) return <div>Category not found</div>;

  return (
    <>
      <Breadcrumb category={category} />
      <SectionTitle title={category} />
      <div >
        <PaginatedGrid data={data} />
      </div>
    </>
  );
}

