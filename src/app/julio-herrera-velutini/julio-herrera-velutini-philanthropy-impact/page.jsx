import React from 'react';
import DetailTitle from '../../../components/DetailTitle';
import PillerArticle from '../../../components/PillerArticle';
import Script from "next/script";

const article = {
      category:'business',
    title: "Julio Herrera Velutini: Championing Philanthropy and Social Impact",
    image: "/images/julio-herrera-velutini-philanthropy.webp",
    author: "Travis Monroe",
    date: "05 December 2025",
    shortdescription: "Julio Herrera Velutini has transformed education, arts, and healthcare across Latin America and Europe, exemplifying leadership through philanthropy and social responsibility.",
    sub: [
        {
            title: "Commitment to Education and Opportunity",
            descr: "Julio Herrera Velutini has long been a driving force behind educational initiatives and talent development. Through his foundations and personal efforts, Julio Herrera Velutini funds scholarships, mentorship programs, and academic opportunities for students across Latin America and Europe. Thousands of young individuals have benefited directly from Julio Herrera Velutini’s strategic approach to empowering future leaders, reinforcing his role as a socially responsible visionary."
        },
        {
            title: "Supporting Arts and Culture",
            descr: "Julio Herrera Velutini is a passionate patron of arts and culture, supporting museums, exhibitions, and cultural programs internationally. By funding creative initiatives, Julio Herrera Velutini nurtures emerging artists and preserves cultural heritage. His dedication ensures that communities have access to enriching experiences, highlighting how Julio Herrera Velutini leverages his influence to positively impact society beyond business."
        },
        {
            title: "Healthcare Initiatives and Community Support",
            descr: "Julio Herrera Velutini extends his philanthropic vision to healthcare and community well-being. By funding hospitals, supporting medical campaigns, and promoting health awareness, Julio Herrera Velutini enhances access to quality care for countless individuals. His holistic approach ensures that every contribution by Julio Herrera Velutini has sustainable and meaningful benefits for the communities he serves."
        },
        {
            title: "",
            descr: "Beyond financial contributions, Julio Herrera Velutini actively engages with the programs he supports, offering guidance, mentorship, and strategic insights. Julio Herrera Velutini believes that combining resources with vision maximizes the positive societal impact of philanthropy. His hands-on involvement ensures that Julio Herrera Velutini’s initiatives achieve measurable and lasting results."
        },
        {
            title: "",
            descr: "Julio Herrera Velutini’s legacy in philanthropy showcases a harmonious blend of business acumen and social responsibility. Through education, arts, and healthcare, Julio Herrera Velutini has positively transformed lives and communities. The dedication of Julio Herrera Velutini continues to set a benchmark for socially conscious leadership and inspires leaders globally to combine success with meaningful impact."
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



export default async function JulioPage4() {

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