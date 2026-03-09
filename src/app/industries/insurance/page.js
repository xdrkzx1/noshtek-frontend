import Link from 'next/link';
import { ArrowRight, Shield, ShieldCheck, BarChart4 } from 'lucide-react';

export default function InsuranceIndustryPage() {
    return (
        <>
            <section className="bg-pattern" style={styles.hero}>
                <div className="container animate-fade-in" style={styles.heroContent}>
                    <div style={styles.badge}>Insurance</div>
                    <h1 style={styles.headline}>
                        Unify Actuarial and Finance with <br />
                        <span className="text-gradient">SAP FPSL & TRM</span>
                    </h1>
                    <p style={styles.subheadline}>
                        Streamline IFRS 17 compliance and optimize your Treasury & Risk Management with our pre-configured acceleration templates.
                    </p>
                </div>
            </section>

            <section className="py-24" style={styles.graySection}>
                <div className="container grid md:grid-cols-2">
                    <div style={styles.card}>
                        <div style={styles.iconWrapper}><Shield size={32} /></div>
                        <h3 style={styles.cardTitle}>Financial Products Subledger (FPSL)</h3>
                        <p style={styles.cardDesc}>
                            Bridge the gap between granular actuarial projections and consolidated financial statements. Achieve multi-GAAP compliance natively within S/4HANA.
                        </p>
                    </div>
                    <div style={styles.card}>
                        <div style={styles.iconWrapper}><BarChart4 size={32} /></div>
                        <h3 style={styles.cardTitle}>Treasury & Risk Management (TRM)</h3>
                        <p style={styles.cardDesc}>
                            Automate cash positioning, streamline hedge accounting, and reduce liquidity risk with predictive analytics powered by Agentic AI.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24" style={styles.darkSection}>
                <div className="container" style={styles.splitLayout}>
                    <div style={styles.splitContent}>
                        <h2 style={styles.sectionTitleDark}>The IFRS 17 Impetus</h2>
                        <p style={styles.paragraphDark}>
                            Compliance is no longer enough. The most successful insurers are using the IFRS 17 mandate as a catalyst to modernize their entire data architecture. Noshtek provides the blueprint to achieve "One Version of the Truth."
                        </p>
                        <ul style={styles.featureList}>
                            <li style={styles.featureItemDark}><ShieldCheck className="text-innovation-teal" /> Sub-ledger reconciliation</li>
                            <li style={styles.featureItemDark}><ShieldCheck className="text-innovation-teal" /> Automated disclosures</li>
                            <li style={styles.featureItemDark}><ShieldCheck className="text-innovation-teal" /> Audit-proof traceability</li>
                        </ul>
                    </div>
                    <div style={styles.ctaBox}>
                        <h4 style={styles.ctaTitle}>Accelerated FPSL Rollout</h4>
                        <p style={styles.ctaDesc}>See how we cut implementation time by 40%.</p>
                        <Link href="/ai-insights" className="btn btn-accent" style={styles.fullBtn}>
                            Read the Case Study
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
        textAlign: 'center',
        backgroundColor: 'var(--trust-blue)',
        color: '#fff',
    },
    heroContent: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    badge: {
        display: 'inline-block',
        padding: '0.5rem 1rem',
        borderRadius: '100px',
        border: '1px solid rgba(255,255,255,0.2)',
        color: 'var(--tech-purple)',
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
    },
    subheadline: {
        fontSize: '1.25rem',
        color: '#cbd5e1',
        lineHeight: '1.6',
    },
    graySection: {
        backgroundColor: 'var(--bg-secondary)',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '3rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        border: '1px solid var(--border-color)',
        transition: 'transform 0.3s ease',
    },
    iconWrapper: {
        display: 'inline-flex',
        padding: '1rem',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        color: 'var(--tech-purple)',
        borderRadius: '8px',
        marginBottom: '1.5rem',
    },
    cardTitle: {
        fontSize: '1.75rem',
        color: 'var(--trust-blue)',
        marginBottom: '1rem',
    },
    cardDesc: {
        color: 'var(--text-secondary)',
        lineHeight: '1.7',
        fontSize: '1.1rem',
    },
    darkSection: {
        backgroundColor: 'var(--trust-blue)',
        color: '#fff',
    },
    splitLayout: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        '@media (min-width: 768px)': {
            flexDirection: 'row',
            alignItems: 'center',
        }
    },
    splitContent: {
        flex: '1',
    },
    sectionTitleDark: {
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        color: '#fff',
    },
    paragraphDark: {
        fontSize: '1.15rem',
        color: '#cbd5e1',
        lineHeight: '1.8',
        marginBottom: '2rem',
    },
    featureList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    featureItemDark: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '1.1rem',
        fontWeight: '500',
        color: '#fff',
    },
    ctaBox: {
        flex: '0 0 350px',
        backgroundColor: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '2.5rem',
        textAlign: 'center',
    },
    ctaTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#fff',
    },
    ctaDesc: {
        color: '#94a3b8',
        marginBottom: '2rem',
        fontSize: '1.05rem',
    },
    fullBtn: {
        width: '100%',
        padding: '1rem',
        fontSize: '1.1rem',
    }
};
