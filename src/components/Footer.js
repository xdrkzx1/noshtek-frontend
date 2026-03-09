import Link from 'next/link';
import { Linkedin, Twitter, Globe } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <div style={styles.grid}>
                    {/* Brand */}
                    <div>
                        <h3 style={styles.brand}>Noshtek.com</h3>
                        <p style={styles.desc}>
                            The premier boutique partner for AI + SAP Financial Transformation.
                        </p>
                        <div style={styles.social}>
                            <Link href="#" aria-label="LinkedIn" style={styles.icon}><Linkedin size={20} /></Link>
                            <Link href="#" aria-label="Twitter" style={styles.icon}><Twitter size={20} /></Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={styles.heading}>Industries</h4>
                        <ul style={styles.list}>
                            <li><Link href="/industries/utilities" style={styles.link}>Utilities (IS-U)</Link></li>
                            <li><Link href="/industries/telecom" style={styles.link}>Telecommunications</Link></li>
                            <li><Link href="/industries/insurance" style={styles.link}>Insurance (IFRS 17)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={styles.heading}>Capabilities</h4>
                        <ul style={styles.list}>
                            <li><Link href="/capabilities/brim" style={styles.link}>SAP BRIM</Link></li>
                            <li><Link href="/capabilities/s4hana" style={styles.link}>S/4HANA & RISE</Link></li>
                            <li><Link href="/capabilities/papm" style={styles.link}>PaPM</Link></li>
                            <li><Link href="/capabilities/trm" style={styles.link}>Treasury & Risk (TRM)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={styles.heading}>Global Offices</h4>
                        <ul style={styles.list}>
                            <li style={styles.locationItem}><Globe size={16} /> USA</li>
                            <li style={styles.locationItem}><Globe size={16} /> Canada</li>
                            <li style={styles.locationItem}><Globe size={16} /> Singapore</li>
                            <li style={styles.locationItem}><Globe size={16} /> Taiwan</li>
                        </ul>
                    </div>
                </div>

                <div style={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Noshtek. All rights reserved.</p>
                    <div style={styles.legal}>
                        <Link href="/privacy" style={styles.link}>Privacy Policy</Link>
                        <Link href="/terms" style={styles.link}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: 'var(--trust-blue)',
        color: '#ffffff',
        padding: '4rem 0 2rem 0',
        marginTop: 'auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem',
    },
    brand: {
        fontFamily: 'var(--font-heading)',
        fontSize: '1.5rem',
        fontWeight: '700',
        marginBottom: '1rem',
        color: '#ffffff',
    },
    desc: {
        color: '#94a3b8',
        marginBottom: '1.5rem',
        lineHeight: '1.6',
        fontSize: '0.95rem',
    },
    social: {
        display: 'flex',
        gap: '1rem',
    },
    icon: {
        color: '#94a3b8',
        transition: 'color 0.2s',
    },
    heading: {
        color: '#ffffff',
        fontWeight: '600',
        marginBottom: '1.5rem',
        fontSize: '1.1rem',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
    },
    link: {
        color: '#94a3b8',
        textDecoration: 'none',
        transition: 'color 0.2s',
        fontSize: '0.95rem',
    },
    locationItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#94a3b8',
        fontSize: '0.95rem',
    },
    bottom: {
        borderTop: '1px solid #1e293b',
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        color: '#64748b',
        fontSize: '0.875rem',
    },
    legal: {
        display: 'flex',
        gap: '1.5rem',
    }
};
