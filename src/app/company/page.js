import Link from 'next/link';
import { MapPin, Users, Briefcase, Award } from 'lucide-react';

export default function CompanyPage() {
    return (
        <>
            <section className="bg-pattern" style={styles.hero}>
                <div className="container animate-fade-in" style={styles.heroContent}>
                    <div style={styles.badge}>Our Firm</div>
                    <h1 style={styles.headline}>
                        The <span className="text-gradient">Boutique Difference</span>
                    </h1>
                    <p style={styles.subheadline}>
                        We aren't a generic GSI. Noshtek is a specialized, agile partner dedicated strictly to high-complexity SAP Financial Transformation and Agentic AI.
                    </p>
                </div>
            </section>

            <section className="py-24" style={styles.lightSection}>
                <div className="container grid md:grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
                    <div style={styles.imagePlaceholder}>
                        {/* Abstract visual representing 'Boutique' focus */}
                        <div style={styles.abstractShape}></div>
                    </div>
                    <div>
                        <h2 style={styles.sectionTitle}>Why Noshtek?</h2>
                        <p style={styles.paragraph}>
                            Large systems integrators deploy armies of junior generalized staff. Noshtek deploys targeted strike teams of senior architects who understand the granular logic of SAP BRIM, PaPM, FPSL, and TRM. We guarantee senior-level oversight on every implementation.
                        </p>
                        <ul style={styles.valueList}>
                            <li style={styles.valueItem}><Award size={24} color="var(--innovation-teal)" /> Guaranteed Senior Architect Leadership</li>
                            <li style={styles.valueItem}><Users size={24} color="var(--innovation-teal)" /> Boutique Agility, Enterprise Scale</li>
                            <li style={styles.valueItem}><Briefcase size={24} color="var(--innovation-teal)" /> 100% Focus on SAP Finance & AI</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-24" style={styles.darkSection}>
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 style={styles.sectionTitleDark}>Global Presence</h2>
                        <p style={styles.sectionSubtitleDark}>Executing global transformations seamlessly across regions.</p>
                    </div>
                    <div className="grid md:grid-cols-4" style={{ gap: '2rem' }}>
                        <GlobalOffice name="United States" desc="HQ & Americas Operations" />
                        <GlobalOffice name="Canada" desc="Northern Delivery Center" />
                        <GlobalOffice name="Singapore" desc="APAC Innovation Hub" />
                        <GlobalOffice name="Taiwan" desc="Technical R&D" />
                    </div>
                </div>
            </section>

            <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container text-center max-w-3xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={styles.sectionTitle}>Careers at Noshtek</h2>
                    <p style={styles.paragraph}>
                        We're always looking for elite SAP architects and AI engineers who want to work on the most complex, high-impact transformations in the world.
                    </p>
                    <div style={styles.careerBox}>
                        <h4 style={styles.careerRole}>SAP BRIM Architect</h4>
                        <span style={styles.careerLocation}>Remote (USA)</span>
                        <Link href="/contact" className="btn btn-outline" style={styles.careerBtn}>Apply Now</Link>
                    </div>
                    <div style={styles.careerBox}>
                        <h4 style={styles.careerRole}>AI Automation Engineer (BTP)</h4>
                        <span style={styles.careerLocation}>Singapore / Hybrid</span>
                        <Link href="/contact" className="btn btn-outline" style={styles.careerBtn}>Apply Now</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

function GlobalOffice({ name, desc }) {
    return (
        <div style={styles.officeCard}>
            <MapPin size={32} color="var(--tech-purple)" style={{ marginBottom: '1rem' }} />
            <h3 style={styles.officeName}>{name}</h3>
            <p style={styles.officeDesc}>{desc}</p>
        </div>
    );
}

const styles = {
    hero: {
        padding: '8rem 0 6rem 0',
        backgroundColor: '#fff',
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
        border: '1px solid rgba(139, 92, 246, 0.3)',
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
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
    },
    lightSection: {
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
        marginBottom: '2rem',
    },
    valueList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
    },
    valueItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '1.1rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
    },
    imagePlaceholder: {
        height: '400px',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        backgroundColor: 'var(--bg-secondary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    abstractShape: {
        width: '200px',
        height: '200px',
        background: 'linear-gradient(45deg, var(--trust-blue), var(--innovation-teal))',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        animation: 'shapeShift 8s ease-in-out infinite alternate',
        opacity: 0.8,
    },
    darkSection: {
        backgroundColor: 'var(--trust-blue)',
        color: '#fff',
    },
    sectionTitleDark: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
        color: '#fff',
    },
    sectionSubtitleDark: {
        fontSize: '1.15rem',
        color: '#cbd5e1',
        lineHeight: '1.6',
    },
    officeCard: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '2rem',
        textAlign: 'center',
    },
    officeName: {
        fontSize: '1.5rem',
        color: '#fff',
        marginBottom: '0.5rem',
    },
    officeDesc: {
        color: '#94a3b8',
        fontSize: '1rem',
    },
    careerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: '1.5rem 2rem',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    careerRole: {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: 'var(--trust-blue)',
        margin: 0,
    },
    careerLocation: {
        color: 'var(--text-secondary)',
        fontSize: '1rem',
    },
    careerBtn: {
        marginLeft: 'auto',
    }
};
