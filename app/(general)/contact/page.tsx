import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Contact Title',
 description: 'Estamos Chelos',
 keywords: ['Contact Page', 'Maximiliano', 'Meta-informacion'],
};


export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}