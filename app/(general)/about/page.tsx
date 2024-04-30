import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO About Title',
 description: 'Estamos engripados',
 keywords: ['About Page', 'Emiliano', 'informacion'],
};



export default function AboutPage() {
    return (
            <span className="text-7xl">About PAge</span>
    )
}