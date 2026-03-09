export default function TrustBar() {
    return (
        <section style={styles.trustBar}>
            <div className="container" style={styles.container}>
                <div style={styles.badge}>
                    <span style={styles.badgeYear}>2026</span>
                    <span style={styles.badgeText}>SAP Pinnacle Award Winner</span>
                </div>

                <div style={styles.logos}>
                    <div style={styles.logoItem}>AFLAC</div>
                    <div style={styles.logoItem}>Samsung</div>
                    <div style={styles.logoItem}>Allianz</div>
                    <div style={styles.logoItem}>Enbridge</div>
                    <div style={styles.logoItem}>AT&T</div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    trustBar: {
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        padding: '1.5rem 0',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        '@media (min-width: 768px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    },
    badge: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        backgroundColor: 'var(--trust-blue)',
        color: '#fff',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    badgeYear: {
        fontWeight: '700',
        fontFamily: 'var(--font-heading)',
        fontSize: '1.1rem',
        color: 'var(--innovation-teal)',
    },
    badgeText: {
        fontWeight: '500',
        fontSize: '0.9rem',
        letterSpacing: '0.025em',
    },
    logos: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.5rem',
        flexWrap: 'wrap',
        opacity: 0.6,
        filter: 'grayscale(100%)',
        transition: 'all 0.3s ease',
    },
    logoItem: {
        fontFamily: 'var(--font-heading)',
        fontWeight: '700',
        fontSize: '1.2rem',
        color: 'var(--text-primary)',
        letterSpacing: '-0.025em',
    }
};
