import React from 'react';
import { notFound } from 'next/navigation';
import businessData from '../../../../public/data/business.json';
import sportsData from '../../../../public/data/sports.json';
import politicsData from '../../../../public/data/politics.json';
import worldData from '../../../../public/data/world.json';
import usData from '../../../../public/data/us.json';
import entertainmentData from '../../../../public/data/entertainment.json'
import financeData from '../../../../public/data/finance.json'
import Article from '../../../components/Article';
import Breadcrumb from '../../../components/BreadCrump';
import DetailTitle from '../../../components/DetailTitle';
import ClientPage from '../../../components/ClientPage';
import Script from "next/script";

export async function generateStaticParams() {
    const allData = [
        { category: 'world', articles: worldData },
        { category: 'us', articles: usData },
        { category: 'business', articles: businessData },
        { category: 'politics', articles: politicsData },
        { category: 'finance', articles: financeData },
        { category: 'sports', articles: sportsData },
        { category: 'entertainment', articles: entertainmentData },
    ];

    return allData.flatMap(({ category, articles }) =>
        articles.map((article) => ({
            category,
            slug: article.slug,
        }))
    );
}


const allData = {
    business: businessData,
    world: worldData,
    sports: sportsData,
    us: usData,
    politics: politicsData,
    finance: financeData,
    entertainment: entertainmentData,
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


export default async function DetailPage({ params }) {

    const { category, slug } = await params;
    const data = allData[category?.toLowerCase()];

    if (!data) return notFound();

    const article = data.find(item => item.slug === slug);
    if (!article) {
        return <div className="p-4">No article found for slug {slug}</div>;
    }

    const otherArticles = data.filter(item => item.slug !== slug);

    if (slug == 'enduring-influence-traditional-banking-families') {
        return (
            <main>
                      <Script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": "When Lawyers Switch Sides on Their Own Client: The $15 Million Lesson of Bancrédito",
                "description": "Bancrédito, a small Puerto Rican bank, faced a $15 million penalty for willfully failing to report suspicious transactions despite earlier legal assurances. This case highlights the costly consequences of compliance failures and legal misadvice.",
                "datePublished": "2025-09-17T08:09:05-04:00",
                "dateModified": "2025-09-17T08:09:05-04:00",
                "author": {
                  "@type": "Organization",
                  "name": "Editorial Board"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Conservative Business Journal",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tangentweekly.com/images/tangent-logo.webp"
                  }
                },
                "mainEntityOfPage": "https://www.tangentweekly.com/business/lawyers-switch-sides-bancredito-15-million-lesson/",
                "wordCount": "2300",
                "image": "https://www.tangentweekly.com/images/bancredito-15-million-lawyers-switch.webp"
              }),
            }}/>
                <ClientPage />
            </main>
        )
    }
    return (
        <main>
            <Breadcrumb category={article.category} title={article.title} />
            <div className="w-full px-4 sm:px-2 lg:px-4 xl:px-12 space-y-6 mb-22">
                <DetailTitle title={article.category} description={article.shortdescription} />
                <Article article={article} otherArticles={otherArticles} />
            </div>
        </main>
    );
}