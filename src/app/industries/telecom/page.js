'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, CheckCircle2 } from 'lucide-react';

export default function TelecomIndustryPage() {
    const [showScrollCTA, setShowScrollCTA] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show CTA after 60% scroll depth
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (maxScroll > 0 && (scrolled / maxScroll) > 0.6) {
                setShowScrollCTA(true);
            } else {
                setShowScrollCTA(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section className="bg-pattern" style={styles.hero}>
                <div className="container animate-fade-in" style={styles.heroContent}>
                    <div style={styles.badge}>Telecommunications</div>
                    <h1 style={styles.headline}>
                        Monetize 5G Instantly with <br />
                        <span className="text-gradient">SAP BRIM</span>
                    </h1>
                    <p style={styles.subheadline}>
                        Transition from legacy billing to usage-based pricing models.
                        Noshtek delivers high-volume billing architecture for modern Telcos.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container grid md:grid-cols-2">
                    <div>
                        <h2 style={styles.sectionTitle}>The Challenge of Next-Gen Billing</h2>
                        <p style={styles.paragraph}>
                            5G introduces unprecedented transaction volumes and complex B2B2X models. Standard ERP billing systems cannot handle the real-time mediation and converged charging required to capitalize on these new revenue streams.
                        </p>
                        <ul style={styles.featureList}>
                            <li style={styles.featureItem}><CheckCircle2 className="text-innovation-teal" /> High-volume convergent invoicing</li>
                            <li style={styles.featureItem}><CheckCircle2 className="text-innovation-teal" /> Subscription order management</li>
                            <li style={styles.featureItem}><CheckCircle2 className="text-innovation-teal" /> Partner revenue sharing</li>
                        </ul>
                    </div>
                    <div style={styles.solutionBox}>
                        <h3 style={styles.solutionTitle}>Our Approach</h3>
                        <p style={styles.solutionDesc}>
                            We deploy SAP BRIM strictly following Clean Core principles, decoupled from ECC or S/4HANA via BTP, allowing for zero-downtime pricing rollouts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Fake tall section to enable scrolling */}
            <section className="py-32 bg-secondary" style={{ backgroundColor: 'var(--bg-secondary)', minHeight: '80vh' }}>
                <div className="container text-center">
                    <h2 style={styles.sectionTitle}>Architecture Blueprint</h2>
                    <p style={styles.paragraph}>Scroll down to see our Telecom BRIM implementation strategy.</p>
                    {/* We would insert a complex diagram here */}
                    <div style={styles.diagramPlaceholder}>
                        [ Interactive Workflow Diagram: Intent-driven ERP ]
                    </div>
                </div>
            </section>

            {/* Behavior-Driven CTA */}
            <div
                style={{
                    ...styles.floatingCTA,
                    transform: showScrollCTA ? 'translateY(0)' : 'translateY(150%)',
                    opacity: showScrollCTA ? 1 : 0
                }}
            >
                <div style={styles.ctaContent}>
                    <div>
                        <h4 style={styles.ctaTitle}>Telecom BRIM Case Study</h4>
                        <p style={styles.ctaDesc}>See how we migrated 10 million subs with zero downtime.</p>
                    </div>
                    <Link href="/ai-insights/whitepapers" className="btn btn-accent" style={styles.ctaBtn}>
                        <Download size={18} /> Get the Report
                    </Link>
                </div>
            </div>
        </>
    );
}

const styles = {
    hero: {
        padding: '8rem 0 6rem 0',
        backgroundColor: 'var(--trust-blue)',
        color: '#fff',
        textAlign: 'center',
    },
    heroContent: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    badge: {
        display: 'inline-block',
        padding: '0.25rem 1rem',
        borderRadius: '100px',
        border: '1px solid rgba(255,255,255,0.2)',
        color: 'var(--innovation-teal)',
        fontWeight: '600',
        fontSize: '0.875rem',
        marginBottom: '2rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    headline: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        letterSpacing: '-0.02em',
        marginBottom: '1.5rem',
        lineHeight: '1.1',
        color: '#fff',
    },
    subheadline: {
        fontSize: '1.25rem',
        color: '#cbd5e1',
        marginBottom: '3rem',
        lineHeight: '1.6',
    },
    sectionTitle: {
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        color: 'var(--text-primary)',
    },
    paragraph: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
        lineHeight: '1.8',
    },
    featureList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    featureItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        fontWeight: '500',
        fontSize: '1.1rem',
    },
    solutionBox: {
        backgroundColor: 'var(--bg-primary)',
        padding: '3rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
    },
    solutionTitle: {
        fontSize: '1.75rem',
        marginBottom: '1rem',
        color: 'var(--trust-blue)',
    },
    solutionDesc: {
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
        lineHeight: '1.7',
    },
    diagramPlaceholder: {
        height: '400px',
        border: '2px dashed var(--border-color)',
        borderRadius: '12px',
        marginTop: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)',
        fontSize: '1.25rem',
        backgroundColor: 'var(--bg-primary)',
    },
    floatingCTA: {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 100,
        backgroundColor: 'var(--bg-primary)',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        border: '1px solid var(--border-color)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        maxWidth: '400px',
    },
    ctaContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    ctaTitle: {
        fontSize: '1.1rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        margin: 0,
    },
    ctaDesc: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        margin: 0,
        marginTop: '0.25rem',
    },
    ctaBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1rem',
        width: '100%',
    }
};
