import Link from 'next/link';
import { ArrowRight, CheckCircle, DatabaseZap, Infinity, ShieldCheck, TrendingUp } from 'lucide-react';

const CAPABILITIES_DATA = {
    brim: {
        title: "Billing & Revenue Innovation (BRIM)",
        desc: "From standard subscriptions to high-volume convergent invoicing. Scale your usage-based billing models natively within SAP.",
        icon: Infinity,
        badge: "Monetization Suite",
        details: [
            "Converged charging engine implementation",
            "Partner revenue sharing & settlement",
            "Subscription order management (SOM)",
            "Financial customer care (FCC)"
        ],
        cta: "Download BRIM Architecture Guide"
    },
    s4hana: {
        title: "S/4HANA & RISE Transformation",
        desc: "Achieve the Clean Core. De-risk your SAP ECC migration and future-proof your enterprise architecture.",
        icon: ShieldCheck,
        badge: "Core Architecture",
        details: [
            "Brownfield & Greenfield implementations",
            "BTP clean-core extension strategy",
            "Data harmonization and migration",
            "RISE with SAP advisory"
        ],
        cta: "Schedule Migration Assessment"
    },
    papm: {
        title: "Profitability & Performance (PaPM)",
        desc: "Real-time, granular cost and profitability allocations. Process millions of records instantly.",
        icon: DatabaseZap,
        badge: "Financial Analytics",
        details: [
            "High-speed cost allocations",
            "IT cost management & chargebacks",
            "Customer & product profitability",
            "ESG and sustainability reporting"
        ],
        cta: "Explore PaPM Use Cases"
    },
    trm: {
        title: "Treasury & Risk (TRM)",
        desc: "Centralize your global cash positioning, mitigate fx risk, and automate your hedge accounting.",
        icon: TrendingUp,
        badge: "Treasury Management",
        details: [
            "Cash & liquidity management",
            "Debt & investment management",
            "Financial risk management",
            "Automated hedge accounting"
        ],
        cta: "Read TRM Whitepaper"
    }
};

export function generateStaticParams() {
    return [
        { capability: 'brim' },
        { capability: 's4hana' },
        { capability: 'papm' },
        { capability: 'trm' }
    ];
}

export default function CapabilityPage({ params }) {
    const capabilityKey = params.capability;
    const data = CAPABILITIES_DATA[capabilityKey];

    if (!data) {
        return <div>Capability not found</div>;
    }

    const Icon = data.icon;

    return (
        <>
            <section className="bg-pattern" style={styles.hero}>
                <div className="container animate-fade-in" style={styles.heroContent}>
                    <div style={styles.badge}>{data.badge}</div>
                    <div style={styles.iconCircle}><Icon size={40} /></div>
                    <h1 style={styles.headline}>
                        <span className="text-gradient">{data.title}</span>
                    </h1>
                    <p style={styles.subheadline}>{data.desc}</p>
                </div>
            </section>

            <section className="py-24" style={styles.whiteSection}>
                <div className="container grid md:grid-cols-2" style={{ alignItems: 'center' }}>
                    <div>
                        <h2 style={styles.sectionTitle}>Deep Technical Mastery</h2>
                        <p style={styles.paragraph}>
                            Noshtek goes beyond standard system integration. We engineer the specific data flows required for {data.title} to operate at peak efficiency, utilizing "Agentic AI" to handle exceptions and standard data cleansing autonomously.
                        </p>
                        <ul style={styles.featureList}>
                            {data.details.map((item, index) => (
                                <li key={index} style={styles.featureItem}>
                                    <CheckCircle className="text-trust-blue" size={24} style={{ color: 'var(--trust-blue)' }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={styles.card}>
                        <h3 style={styles.cardTitle}>Agentic Implementation</h3>
                        <p style={styles.cardDesc}>
                            Learn how we use AI agents to automate the testing and data validation phases of your {data.title} rollout, reducing manual QA by over 60%.
                        </p>
                        <Link href="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                            {data.cta} <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

const styles = {
    hero: {
        padding: '8rem 0 6rem 0',
        backgroundColor: 'var(--bg-secondary)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heroContent: {
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    badge: {
        display: 'inline-block',
        padding: '0.5rem 1.5rem',
        borderRadius: '100px',
        backgroundColor: '#fff',
        border: '1px solid var(--border-color)',
        color: 'var(--text-secondary)',
        fontWeight: '600',
        fontSize: '0.875rem',
        marginBottom: '2rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    },
    iconCircle: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: 'var(--trust-blue)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        boxShadow: '0 10px 15px -3px rgba(15, 23, 42, 0.3)',
    },
    headline: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        letterSpacing: '-0.02em',
        marginBottom: '1.5rem',
    },
    subheadline: {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        maxWidth: '700px',
    },
    whiteSection: {
        backgroundColor: 'var(--bg-primary)',
    },
    sectionTitle: {
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        color: 'var(--trust-blue)',
    },
    paragraph: {
        fontSize: '1.15rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.8',
        marginBottom: '2.5rem',
    },
    featureList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
    },
    featureItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '1.1rem',
        fontWeight: '500',
        color: 'var(--text-primary)',
    },
    card: {
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '12px',
        padding: '3rem',
        border: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        justifyContent: 'center',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
    },
    cardTitle: {
        fontSize: '1.75rem',
        color: 'var(--trust-blue)',
        margin: 0,
    },
    cardDesc: {
        fontSize: '1.05rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        marginBottom: '1rem',
    }
};
