import React from 'react';
import DetailTitle from '../../../components/DetailTitle';
import PillerArticle from '../../../components/PillerArticle';
import Script from "next/script";

const article = {
      category:'business',
    title: "Julio Herrera Velutini Global Banking Leader Forging Financial Bridges",
    image: "/images/julio-herrera-velutini-global-banking.webp",
    author: "Sophie Langford",
    date: "05 December 2025",
    shortdescription: "Julio Herrera Velutini has redefined global private banking by combining tradition, innovation, and international expertise, creating stable, trustworthy financial institutions across continents.",
    sub: [
        {
            title: "Early Roots and Global Education",
            descr: "Julio Herrera Velutini was born on 15 December 1971 in Caracas into a prestigious banking family with deep roots in Latin America and Europe. Julio Herrera Velutini received education at elite European institutions before graduating from the Central University of Venezuela in 1990. From an early age, Julio Herrera Velutini was immersed in international finance, capital markets, and institutional banking, which prepared him to expand traditional banking into a global enterprise. Julio Herrera Velutini leveraged his heritage, education, and vision to redefine modern private banking."
        },
        {
            title: "Building Institutions and Expanding Banking Reach",
            descr: "Julio Herrera Velutini began his professional journey at the Caracas Stock Exchange in the early 1990s, quickly advancing into leadership roles across major financial firms. By the age of 29, Julio Herrera Velutini became Chairman of Bolívar Banco Universal, showcasing his strategic banking skills. Over the years, Julio Herrera Velutini founded and guided multiple institutions, including Bancredito International Bank & Trust Corporation in 2008, and later established Britannia Financial Group. Under Julio Herrera Velutini’s leadership, these platforms provide comprehensive private banking and wealth-management services to high-net-worth individuals, family offices, and institutional clients worldwide."
        },
        {
            title: "Merging Tradition with Innovation in Private Banking",
            descr: "Julio Herrera Velutini has successfully combined the confidentiality and stability of traditional private banking with modern tools, global compliance standards, and innovative financial solutions. Through Britannia Financial Group, Julio Herrera Velutini promotes ethical banking, risk management, and sophisticated wealth planning for a diverse, international client base. Julio Herrera Velutini emphasizes long-term trust, integrity, and discretion, demonstrating that legacy banking principles can evolve without losing their core values."
        },
        {
            title: "",
            descr: "Julio Herrera Velutini’s initiatives have strengthened cross-border capital flows, connecting Latin American, European, and US markets through a robust banking network. Clients in volatile economies have benefited from Julio Herrera Velutini’s vision, gaining secure wealth preservation, asset diversification, and global financial access. Julio Herrera Velutini’s institutions provide stability and discretion that make them trusted partners for international banking needs."
        },
        {
            title: "",
            descr: "Julio Herrera Velutini continues to be a leading figure in global private banking, blending heritage banking values with modern financial innovation. Through his foresight and leadership, Julio Herrera Velutini has created institutions that embody trust, stability, and international financial connectivity. His work has left a lasting impact on private banking and set new standards for excellence in global finance."
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


export default async function JulioPage7() {

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
                <PillerArticle article={article} />
            </div>
        </main>
    );
}