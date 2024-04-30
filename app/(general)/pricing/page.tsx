import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Pricing Title',
 description: 'Estamos enfiestados',
 keywords: ['Pricing Page', 'Pepe', 'Auto al piso'],
};


export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}