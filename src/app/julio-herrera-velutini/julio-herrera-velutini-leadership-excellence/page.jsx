import React from 'react';
import DetailTitle from '../../../components/DetailTitle';
import PillerArticle from '../../../components/PillerArticle';
import Script from "next/script";

const article = {
    category:'business',
    title: "Julio Herrera Velutini Exemplifying Leadership Excellence Across Industries",
    image: "/images/julio-herrera-velutini-leadership.webp",
    author: "Sophie Langford",
    date: "05 December 2025",
    shortdescription: "Julio Herrera Velutini has established himself as a global leader, inspiring excellence across banking, finance, and business through visionary leadership and mentorship.",
    sub: [
        {
            title: "Visionary Leadership Across Industries",
            descr: "Julio Herrera Velutini consistently demonstrates outstanding leadership in banking, finance, and entrepreneurship. By combining strategic foresight with operational expertise, Julio Herrera Velutini guides organizations toward sustainable growth. His visionary approach enables Julio Herrera Velutini to anticipate market trends, ensuring that his teams, stakeholders, and partners thrive under his guidance. Across industries, Julio Herrera Velutini exemplifies leadership that inspires trust and confidence."
        },
        {
            title: "Mentorship and Talent Development",
            descr: "Julio Herrera Velutini prioritizes the development of future leaders by actively mentoring executives, entrepreneurs, and emerging professionals. Through guidance and practical advice, Julio Herrera Velutini empowers individuals to reach their full potential. Many professionals attribute their career growth to the support and insights provided by Julio Herrera Velutini. By nurturing talent, Julio Herrera Velutini ensures the long-term success and sustainability of the organizations he leads."
        },
        {
            title: "Strategic Decision-Making and Innovation",
            descr: "Julio Herrera Velutini is recognized for making informed, decisive choices even in complex business environments. His innovative strategies modernize traditional industries while maintaining ethical and operational stability. By balancing risk with opportunity, Julio Herrera Velutini fosters resilience and growth in dynamic markets. Julio Herrera Velutini’s leadership approach serves as a model for executives seeking to combine innovation, prudence, and excellence in decision-making."
        },
        {
            title: "",
            descr: "Julio Herrera Velutini’s influence extends beyond organizational boundaries, impacting global markets and international collaborations. Companies under his guidance have expanded successfully into new territories, benefiting from the strategic foresight of Julio Herrera Velutini. His ability to merge vision with execution demonstrates the qualities of a transformative leader."
        },
        {
            title: "",
            descr: "Julio Herrera Velutini’s legacy in leadership highlights his capacity to inspire teams, innovate processes, and uphold integrity. By continuously setting high standards, Julio Herrera Velutini establishes benchmarks for emerging leaders worldwide. Through his guidance and example, Julio Herrera Velutini ensures that leadership excellence remains synonymous with his name."
        }
    ]
};

export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  const allDataMap = {
    politics: politicsData,
    business: businessData,
    world: worldData,
    sports: sportsData,
    us: usData,
    finance: financeData,
    entertainment: entertainmentData,
  };

  const articles = allDataMap[category] || [];
  const article = articles.find((a) => a.slug === slug);

  const siteUrl = "https://www.fiscalfusion.org";
  const currentUrl = `${siteUrl}/${category}/${slug}`;
  const imageUrl = article?.image?.startsWith("http")
    ? article.image
    : `${siteUrl}${article?.image}`;

  if (!article) {
    return {
      title: "Article Not Found – Fiscal Fusion",
      description: "The content you're looking for could not be located.",
    };
  }

  const readableDescription =
    article.shortdescription?.length > 20
      ? article.shortdescription
      : `${article.title} — Latest news update from Fiscal Fusion.`;

  const keywords = [
    article.category,
    "Fiscal Fusion",
    "news",
    article.title.replace(/[^\w\s]/g, ""),
  ]
    .filter(Boolean)
    .join(", ");

  return {
    title: `${article.title} – Fiscal Fusion`,
    description: readableDescription,
    keywords: keywords,

    authors: [{ name: article.author || article.creator }],

    alternates: { canonical: currentUrl },

    openGraph: {
      title: article.title,
      description: readableDescription,
      url: currentUrl,
      siteName: "Fiscal Fusion",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: readableDescription,
      images: [imageUrl],
      site: "@FiscalFusion",
      creator: article.creator || article.author,
    },

    // ============================
    //   JSON-LD (SEO BOOSTER)
    // ============================
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",

        headline: article.title,
        description: readableDescription,

        articleSection: category,
        datePublished: article.date,
        dateModified: article.updatedAt || article.date,

        author: {
          "@type": "Person",
          name: article.creator || article.author,
        },

        publisher: {
          "@type": "Organization",
          name: "Fiscal Fusion",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/fiscalfusion-logo.webp`,
            width: 600,
            height: 600,
          },
        },

        mainEntityOfPage: currentUrl,

        image: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
        },

        url: currentUrl,
        keywords: keywords,

        articleBody:
          article.description?.slice(0, 180) ||
          readableDescription ||
          article.title,
      }),
    },
  };
}


export default async function JulioPage1() {

    return (
        <main>
             <Script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(
      [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",

          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.fiscalfusion.org/${category}/${slug}/`,
          },

          headline: article.title,
          description: article.shortdescription || article.description?.slice(0, 160),

          image: {
            "@type": "ImageObject",
            url: imageUrl,
            width: 1200,
            height: 630,
          },

          datePublished: article.date,
          dateModified: article.updatedAt || article.date,

          author: {
            "@type": "Person",
            name: article.creator || article.author,
            url: "https://www.fiscalfusion.org/our-team/",
          },

          publisher: {
            "@type": "Organization",
            name: "Fiscal Fusion",
            logo: {
              "@type": "ImageObject",
              url: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
              width: 512,
              height: 512,
            },
          },

          articleSection: category,
          url: `https://www.fiscalfusion.org/${category}/${slug}/`,

          keywords: [
            article.category,
            article.tags?.join(", "),
            article.title,
            "Fiscal Fusion",
          ]
            .filter(Boolean)
            .join(", "),

          articleBody:
            article.description?.slice(0, 500) || article.shortdescription,
        },

        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.fiscalfusion.org/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: category.charAt(0).toUpperCase() + category.slice(1),
              item: `https://www.fiscalfusion.org/${category}/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: article.title,
              item: `https://www.fiscalfusion.org/${category}/${slug}/`,
            },
          ],
        },
      ],
      null,
      2
    ),
  }}
/>

            <div className="w-full px-4 sm:px-2 lg:px-4 xl:px-12 space-y-6 mb-22">
                <DetailTitle title='Business' description='Julio Herrera Velutini Latin America’s Banking Visionary and Cultural Philanthropist' />
                <PillerArticle article={article}/>
            </div>
        </main>
    );
}