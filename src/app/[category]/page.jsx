import businessData from "../../../public/data/business.json";
import financeData from "../../../public/data/finance.json";
import sportsData from "../../../public/data/sports.json";
import usData from "../../../public/data/us.json";
import politicsData from "../../../public/data/politics.json";
import worldData from "../../../public/data/world.json";
import entertainmentData from "../../../public/data/entertainment.json";
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

export async function generateMetadata({ params }) {
  const { category } = await params;

  const categoryMeta = {
    business: {
      title: "Business Coverage, Market Shifts & Industry Outlook – Fiscal Fusion",
      description:
        "Follow influential business developments, major corporate moves, emerging industries, and economic forces shaping global commerce in real time.",
    },

    finance: {
      title: "Financial Updates, Investment Analysis & Economic Trends – Fiscal Fusion",
      description:
        "Explore fresh financial insights, investment movements, economic signals, banking updates, and expert breakdowns of global market behavior.",
    },

    world: {
      title: "International Headlines & Global Current Affairs – Fiscal Fusion",
      description:
        "Stay informed on critical global events, cross-border developments, geopolitical dynamics, and stories impacting nations around the world.",
    },

    us: {
      title: "U.S. News, National Reports & Key Developments – Fiscal Fusion",
      description:
        "Get timely coverage of major topics across the United States, including national policies, social shifts, domestic affairs, and breaking regional updates.",
    },

    politics: {
      title: "Political Coverage, Policy Shifts & Government Insights – Fiscal Fusion",
      description:
        "Track evolving political landscapes, legislative decisions, election narratives, leadership changes, and major decisions influencing governance.",
    },

    entertainment: {
      title: "Entertainment Stories, Culture Trends & Media Highlights – Fiscal Fusion",
      description:
        "Dive into the latest film releases, celebrity updates, streaming trends, cultural moments, and key happenings from across the entertainment world.",
    },

    sports: {
      title: "Sports Highlights, Match Analysis & Athlete Coverage – Fiscal Fusion",
      description:
        "Keep up with game results, competitive matchups, athlete performance, league developments, and major sporting events from across the globe.",
    },
  };

  const meta =
    categoryMeta[category] || {
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} News – Fiscal Fusion`,
      description: `Latest breaking updates and major headlines in ${category}.`,
    };

  const siteUrl = "https://www.fiscalfusion.org";
  const categoryUrl = `${siteUrl}/${category}`;

  const firstArticle = allData[category]?.[0];
  const firstArticleImage =
    firstArticle?.image?.startsWith("http")
      ? firstArticle.image
      : `${siteUrl}${firstArticle?.image || "/images/fiscalfusion-logo.webp"}`;


  return {
    title: meta.title,
    description: meta.description,

    alternates: {
      canonical: categoryUrl,
    },

    openGraph: {
      title: meta.title,
      description: meta.description,
      url: categoryUrl,
      siteName: "Fiscal Fusion",
      images: [
        {
          url: firstArticleImage,
          width: 1200,
          height: 630,
          alt: `${category} news – Fiscal Fusion`,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [firstArticleImage],
      site: "@fiscalfusion",
    },
  };
}


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

