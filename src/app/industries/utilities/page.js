import Link from 'next/link';
import { ArrowRight, Lightbulb, Activity, Database } from 'lucide-react';

export default function UtilitiesIndustryPage() {
    return (
        <>
            <section className="bg-pattern" style={styles.hero}>
                <div className="container animate-fade-in" style={styles.heroContent}>
                    <div style={styles.badge}>Utilities & Energy</div>
                    <h1 style={styles.headline}>
                        Modernize Utilities with <br />
                        <span className="text-gradient">SAP IS-U</span>
                    </h1>
                    <p style={styles.subheadline}>
                        Noshtek transforms legacy asset accounting and disparate billing systems into a real-time smart grid financial backbone.
                    </p>
                </div>
            </section>

            <section className="py-24" style={styles.darkSection}>
                <div className="container grid md:grid-cols-3">
                    <div style={styles.card}>
                        <div style={styles.iconWrapper}><Activity size={28} /></div>
                        <h3 style={styles.cardTitle}>Real-time Billing</h3>
                        <p style={styles.cardDesc}>
                            Process millions of smart meter events in real-time, eliminating the latency of traditional batch processing.
                        </p>
                    </div>
                    <div style={styles.card}>
                        <div style={styles.iconWrapper}><Database size={28} /></div>
                        <h3 style={styles.cardTitle}>Asset Accounting</h3>
                        <p style={styles.cardDesc}>
                            Deep integration with S/4HANA ensures every infrastructure investment is tracked with precision.
                        </p>
                    </div>
                    <div style={styles.card}>
                        <div style={styles.iconWrapper}><Lightbulb size={28} /></div>
                        <h3 style={styles.cardTitle}>Customer Insight</h3>
                        <p style={styles.cardDesc}>
                            Empower customers with self-service portals backed by Agentic AI that resolves disputes instantly.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container text-center max-w-3xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={styles.sectionTitle}>Ready for the Smart Grid?</h2>
                    <p style={styles.paragraph}>
                        Don't let legacy SAP ECC hold back your infrastructure investments. Get a complimentary architecture blueprint review tailored for utility providers.
                    </p>
                    <Link href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                        Book S/4HANA Assessment <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                </div>
            </section>
        </>
    );
}

const styles = {
    hero: {
        padding: '8rem 0 6rem 0',
        textAlign: 'center',
        backgroundColor: '#ffffff',
    },
    heroContent: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    badge: {
        display: 'inline-block',
        padding: '0.5rem 1rem',
        borderRadius: '100px',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        color: 'var(--innovation-teal)',
        fontWeight: '600',
        fontSize: '0.875rem',
        marginBottom: '2rem',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    headline: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        letterSpacing: '-0.02em',
        marginBottom: '1.5rem',
        color: 'var(--text-primary)',
    },
    subheadline: {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
    },
    darkSection: {
        backgroundColor: 'var(--trust-blue)',
        color: '#fff',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        padding: '2.5rem',
    },
    iconWrapper: {
        display: 'inline-flex',
        padding: '1rem',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        color: 'var(--innovation-teal)',
        borderRadius: '8px',
        marginBottom: '1.5rem',
    },
    cardTitle: {
        fontSize: '1.5rem',
        color: '#fff',
        marginBottom: '1rem',
    },
    cardDesc: {
        color: '#94a3b8',
        lineHeight: '1.6',
        fontSize: '1.05rem',
    },
    sectionTitle: {
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        color: 'var(--text-primary)',
    },
    paragraph: {
        fontSize: '1.15rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.8',
    }
};
