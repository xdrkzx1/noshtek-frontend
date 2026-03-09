'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, FileText, PieChart, Lock, Linkedin } from 'lucide-react';

export default function AIInsightsPage() {
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleLinkedInSignIn = (e) => {
        e.preventDefault();
        // In a real implementation, this would authenticate with LinkedIn OAuth
        alert('Simulating LinkedIn OAuth integration...');
        setTimeout(() => {
            setIsUnlocked(true);
        }, 1000);
    };

    return (
        <>
            <section className="bg-pattern" style={styles.hero}>
                <div className="container animate-fade-in" style={styles.heroContent}>
                    <div style={styles.badge}>Thought Leadership</div>
                    <h1 style={styles.headline}>
                        <span className="text-gradient">AI Insights Hub</span>
                    </h1>
                    <p style={styles.subheadline}>
                        Discover how Agentic AI and Clean Core methodologies are rapidly eliminating manual financial efforts across the enterprise.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container grid md:grid-cols-3">
                    {/* Success Stories */}
                    <div style={styles.resourceCard}>
                        <PieChart size={32} color="var(--innovation-teal)" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={styles.cardTitle}>Success Stories</h3>
                        <p style={styles.cardDesc}>
                            Read PSR-framework (Problem-Solution-Result) case studies. See real numbers showing up to 71% reduction in matching effort.
                        </p>
                        <Link href="/contact" style={styles.cardLink}>Explore Case Studies &rarr;</Link>
                    </div>

                    {/* CFO Briefings */}
                    <div style={styles.resourceCard}>
                        <BookOpen size={32} color="var(--tech-purple)" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={styles.cardTitle}>CFO Briefings</h3>
                        <p style={styles.cardDesc}>
                            Long-form narrative content designed for the C-suite on financial close automation and driving predictive accounting.
                        </p>
                        <Link href="/contact" style={styles.cardLink}>Read Briefings &rarr;</Link>
                    </div>

                    {/* Whitepapers & Technical Guides - Gated */}
                    <div style={{ ...styles.resourceCard, ...styles.gatedCard }}>
                        <FileText size={32} color="var(--trust-blue)" style={{ marginBottom: '1.5rem' }} />
                        <div style={styles.gatedHeader}>
                            <h3 style={styles.cardTitle}>Technical Whitepapers</h3>
                            {!isUnlocked && <Lock size={18} color="var(--text-secondary)" />}
                        </div>

                        {isUnlocked ? (
                            <div style={styles.unlockedContent}>
                                <p style={styles.cardDesc}>
                                    You now have premium access to our "How-It-Works" architecture guides and technical blueprints.
                                </p>
                                <ul style={styles.downloadList}>
                                    <li style={styles.downloadItem}><FileText size={16} /> S/4HANA Extension Blueprint</li>
                                    <li style={styles.downloadItem}><FileText size={16} /> BRIM Migration Strategy</li>
                                </ul>
                            </div>
                        ) : (
                            <div style={styles.gatedContent}>
                                <p style={styles.cardDesc}>
                                    Access our premium library of in-depth architecture guides and BTP integration patterns.
                                </p>
                                <button onClick={handleLinkedInSignIn} style={styles.linkedinBtn}>
                                    <Linkedin size={20} />
                                    Sign in to Access
                                </button>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                                    This triggers our automated 3-5 email drip sequence as per ABM strategy.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="py-24" style={styles.darkSection}>
                <div className="container text-center max-w-3xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={styles.sectionTitleDark}>The Noshtek AI Agent Foundry</h2>
                    <p style={styles.paragraphDark}>
                        Our proprietary foundry develops industry-specific AI agents that plug directly into SAP via BTP. We've moved far beyond basic automation into "Intent-driven ERP" where exceptions are handled autonomously based on learned business rules.
                    </p>
                    <div style={styles.statLine}>
                        <div style={styles.statBox}>
                            <div style={styles.statLarge}>70%</div>
                            <div style={styles.statLabel}>Less manual intervention</div>
                        </div>
                        <div style={styles.statBox}>
                            <div style={styles.statLarge}>10x</div>
                            <div style={styles.statLabel}>Faster close cycle</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const styles = {
    hero: {
        padding: '8rem 0 6rem 0',
        backgroundColor: '#fff',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center',
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
        backgroundColor: 'var(--trust-blue)',
        color: '#fff',
        fontWeight: '600',
        fontSize: '0.875rem',
        marginBottom: '2rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
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
    resourceCard: {
        padding: '3rem 2rem',
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
    },
    gatedCard: {
        backgroundColor: 'var(--bg-secondary)',
        border: '2px solid rgba(139, 92, 246, 0.2)', // Subtle tech-purple border
    },
    gatedHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: '1.5rem',
        color: 'var(--trust-blue)',
        marginBottom: '1rem',
    },
    cardDesc: {
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        marginBottom: '2rem',
        flex: '1',
    },
    cardLink: {
        color: 'var(--innovation-teal)',
        fontWeight: '600',
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: 'auto',
    },
    gatedContent: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
    },
    unlockedContent: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        animation: 'fadeIn 0.5s ease',
    },
    downloadList: {
        listStyle: 'none',
        padding: 0,
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
    },
    downloadItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--trust-blue)',
        fontWeight: '500',
        padding: '0.75rem',
        backgroundColor: '#fff',
        borderRadius: '4px',
        border: '1px solid var(--border-color)',
        cursor: 'pointer',
    },
    linkedinBtn: {
        backgroundColor: '#0077b5',
        color: '#fff',
        border: 'none',
        padding: '0.875rem',
        borderRadius: '4px',
        fontWeight: '600',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        cursor: 'pointer',
        marginTop: 'auto',
        transition: 'background-color 0.2s ease',
    },
    darkSection: {
        backgroundColor: 'var(--trust-blue)',
        color: '#fff',
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
        marginBottom: '3rem',
    },
    statLine: {
        display: 'flex',
        justifyContent: 'center',
        gap: '4rem',
        flexWrap: 'wrap',
    },
    statBox: {
        textAlign: 'center',
    },
    statLarge: {
        fontSize: '3.5rem',
        fontWeight: '700',
        color: 'var(--innovation-teal)',
        fontFamily: 'var(--font-heading)',
        lineHeight: '1',
        marginBottom: '0.5rem',
    },
    statLabel: {
        color: '#94a3b8',
        fontSize: '1.1rem',
        fontWeight: '500',
    }
};
