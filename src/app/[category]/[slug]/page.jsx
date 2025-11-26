    import React from 'react';
    import { notFound } from 'next/navigation';
    import businessData from '../../../../public/data/business.json';
    import technologyData from '../../../../public/data/technology.json';
    import sportsData from '../../../../public/data/sports.json';
    import healthData from '../../../../public/data/health.json';
    import politicsData from '../../../../public/data/politics.json';
    import scienceData from '../../../../public/data/science.json';
    import entertainmentData from '../../../../public/data/entertainment.json'
    import educationData from '../../../../public/data/education.json';
    import Article from '../../../components/Article';

    export async function generateStaticParams() {
        const allData = [
            { category: 'politics', articles: politicsData },
            { category: 'business', articles: businessData },
            { category: 'technology', articles: technologyData },
            { category: 'sports', articles: sportsData },
            { category: 'science', articles: scienceData },
            { category: 'health', articles: healthData },
            { category: 'entertainment', articles: entertainmentData },
            { category: 'education', articles: educationData },

        ];

        const params = allData.flatMap(({ category, articles }) =>
            articles.map((article) => ({
                category,
                slug: article.slug,
            }))
        );

        return params;
    }

    const allData = {
        business: businessData,
        technology: technologyData,
        sports: sportsData,
        health: healthData,
        politics: politicsData,
        science: scienceData,
        entertainment: entertainmentData,
        education: educationData,
    };


    export default async function DetailPage({ params }) {

        const { category, slug } = await params;
        const data = allData[category?.toLowerCase()];

        if (!data) return notFound();

        const article = data.find(item => item.slug === slug);
        if (!article) {
            return <div className="p-4">No article found for slug {slug}</div>;
        }

        const otherArticles = data.filter(item => item.slug !== slug);

        return (
            <main>
               <Article article={article} otherArticles={otherArticles}/>
            </main>
        );
    }