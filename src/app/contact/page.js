import { ArrowRight, Mail } from 'lucide-react';

export default function ContactPage() {
    return (
        <>
            <section className="bg-pattern" style={styles.hero}>
                <div className="container animate-fade-in" style={styles.heroContent}>
                    <div style={styles.badge}>Strategic Assessment</div>
                    <h1 style={styles.headline}>
                        Discover your <span className="text-gradient">Clean Core Potential</span>
                    </h1>
                    <p style={styles.subheadline}>
                        Connect with a Senior SAP Architect to assess your transformation roadmap. We only take on projects where we can guarantee a &gt;50% reduction in manual financial effort.
                    </p>
                </div>
            </section>

            <section className="py-24" style={styles.lightSection}>
                <div className="container max-w-2xl" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <form style={styles.formContainer}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Corporate Email</label>
                            <input type="email" style={styles.input} placeholder="name@enterprise.com" required />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>SAP Landscape</label>
                            <select style={styles.input}>
                                <option>SAP ECC</option>
                                <option>SAP S/4HANA</option>
                                <option>Non-SAP ERP</option>
                            </select>
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Primary Module of Interest</label>
                            <select style={styles.input}>
                                <option>BRIM (Billing & Revenue)</option>
                                <option>PaPM (Profitability & Performance)</option>
                                <option>FPSL (Financial Products Subledger)</option>
                                <option>TRM (Treasury & Risk)</option>
                                <option>Agentic AI Integration</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                            Request Assessment
                        </button>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '1rem' }}>
                            By submitting this form, you agree to our direct outreach protocol.
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
}

const styles = {
    hero: {
        padding: '8rem 0 6rem 0',
        backgroundColor: '#fff',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-color)',
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
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--trust-blue)',
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
    formContainer: {
        backgroundColor: '#fff',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '3rem 2.5rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        marginBottom: '1.5rem',
    },
    label: {
        fontWeight: '600',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
    },
    input: {
        padding: '0.875rem 1rem',
        border: '1px solid var(--border-color)',
        borderRadius: '6px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
    }
};
