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
  const { category, slug } = params;

  const data = allData[category];
  if (!data) notFound();

  const article = data.find(item => item.slug === slug);
  if (!article) notFound();
  
  const otherArticles = data.filter(item => item.slug !== slug);

  if (slug == 'enduring-influence-traditional-banking-families') {
    return (
      <main>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",

              "headline": "The Enduring Influence of Traditional Banking Families",
              "description":
                "Traditional banking families remain influential even in today’s digital and decentralised era, preserving historical trust, discipline, and long-standing financial relationships. Their legacy continues to shape global economic stability and governance.",

              "articleSection": "business",

              "datePublished": "2025-12-08T00:00:00+05:30",
              "dateModified": "2025-12-08T00:00:00+05:30",

              "author": {
                "@type": "Person",
                "name": "Marcus Bennett",
                "jobTitle": "Political Correspondent",
                "description":
                  "Marcus covers U.S. politics and policy with sharp, accessible reporting. He breaks down political developments so readers understand what they mean in real life.",
                "image": "https://www.fiscalfusion.org/images/marcus-bennett.webp",
                "email": "marcusbennett@fiscalfusion.org",
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61584651071329",
                  "https://www.instagram.com/marcusbennett2025/",
                  "https://substack.com/@marcusbennett2",
                  "https://medium.com/@marcusbennett_21499"
                ]
              },

              "publisher": {
                "@type": "Organization",
                "name": "Fiscal Fusion",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
                  "width": 600,
                  "height": 600
                }
              },

              "mainEntityOfPage":
                "https://www.fiscalfusion.org/business/enduring-influence-traditional-banking-families",

              "image": {
                "@type": "ImageObject",
                "url":
                  "https://www.fiscalfusion.org/images/julio-herrera-velutini-banking-legacy.webp",
                "width": 1200,
                "height": 630
              },

              "keywords": [
                "Traditional Banking Families",
                "Finance",
                "Global Banking",
                "Economic History",
                "Fiscal Fusion"
              ],

              "articleBody":
                "The significance of traditional banking families, in the present era of digital finance and decentralised banking, is a stark reminder of how financial transactions were done in the past..."
            }),
          }}
        />

        <ClientPage otherArticles={otherArticles} />
      </main>
    )
  }
  return (
    <main>
      <Breadcrumb category={article.category} title={article.title} />
      <div className="w-full px-4 sm:px-2 lg:px-4 xl:px-12 space-y- mb-10">
        <DetailTitle title={article.category} description={article.shortdescription} />
        <Article article={article} otherArticles={otherArticles} />
      </div>
    </main>
  );
}