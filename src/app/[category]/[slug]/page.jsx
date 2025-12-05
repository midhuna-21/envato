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


export default async function DetailPage({ params }) {

    const { category, slug } = await params;
    const data = allData[category?.toLowerCase()];

    if (!data) return notFound();

    const article = data.find(item => item.slug === slug);
    console.log(article,'article found not ')
    if (!article) {
        return <div className="p-4">No article found for slug {slug}</div>;
    }

    const otherArticles = data.filter(item => item.slug !== slug);

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