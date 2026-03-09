import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import { ArrowRight, Bot, Zap, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="bg-pattern" style={styles.hero}>
        <div className="container animate-fade-in" style={styles.heroContent}>
          <div style={styles.badge}>Next-Gen Enterprise Architecture</div>
          <h1 style={styles.headline}>
            Cut manual financial effort by 70% with <br />
            <span className="text-gradient">AI-First SAP Transformation</span>
          </h1>
          <p style={styles.subheadline}>
            The premier boutique partner for high-complexity SAP modules (BRIM, PaPM, FPSL, TRM) and Clean Core architectural principles.
          </p>
          <div style={styles.ctaGroup}>
            <Link href="/contact" className="btn btn-primary" style={styles.primaryBtn}>
              Schedule Strategic Assessment <ArrowRight size={18} />
            </Link>
            <Link href="/ai-insights" className="btn btn-outline" style={styles.secondaryBtn}>
              Explore AI Agent Foundry
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-24" style={styles.sectionDark}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 style={styles.sectionTitle}>Agentic AI Showcase</h2>
            <p style={styles.sectionSubtitle}>Watch autonomous execution in action, eliminating exceptions at the core.</p>
          </div>

          <div style={styles.aiGrid} className="grid md:grid-cols-2">
            <div style={styles.aiCard}>
              <div style={styles.aiIcon}><Bot size={32} /></div>
              <h3 style={styles.cardTitle}>Payment Matching</h3>
              <p style={styles.cardDesc}>
                Traditional AR teams spend days resolving exceptions. Our built-in agentic workflows resolve unmatched payments instantly.
              </p>
              <div style={styles.statLine}>
                <span style={styles.statLarge}>71%</span>
                <span style={styles.statLabel}>Reduction in matching effort</span>
              </div>
            </div>

            <div style={styles.aiCard}>
              <div style={styles.aiIcon}><Zap size={32} /></div>
              <h3 style={styles.cardTitle}>Instant Error Remediation</h3>
              <p style={styles.cardDesc}>
                Automated diagnostics cross-reference SAP ledgers, catching and resolving data integrity issues before close.
              </p>
              <div style={styles.statLine}>
                <span style={styles.statLarge}>90%</span>
                <span style={styles.statLabel}>Faster remediation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid md:grid-cols-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={styles.sectionTitleDark}>The Clean Core Methodology</h2>
            <p style={styles.paragraph}>
              By the 2027 SAP ECC sunset deadline, Noshtek prepares your organization with a deeply decoupled, high-performance architecture.
            </p>
            <ul style={styles.featureList}>
              <li style={styles.featureItem}><ShieldCheck className="text-innovation-teal" size={24} /> BTP Extension Architecture</li>
              <li style={styles.featureItem}><ShieldCheck className="text-innovation-teal" size={24} /> API-First Integrations</li>
              <li style={styles.featureItem}><ShieldCheck className="text-innovation-teal" size={24} /> Strict "No Custom Code in Core" Policy</li>
            </ul>
            <Link href="/capabilities/s4hana" className="btn btn-accent mt-8">
              Learn our Methodology
            </Link>
          </div>
          <div style={styles.visualPlaceholder}>
            {/* Visual representation placeholder for Next.js app */}
            <div style={styles.circle}></div>
            <div style={styles.circle2}></div>
            <div style={styles.glassCard}>
              <h4>Clean Core Active</h4>
              <p>Zero modifications detected.</p>
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
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  },
  headline: {
    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
    letterSpacing: '-0.03em',
    marginBottom: '1.5rem',
  },
  subheadline: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    maxWidth: '700px',
    marginBottom: '3rem',
  },
  ctaGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  primaryBtn: {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    gap: '0.5rem',
  },
  secondaryBtn: {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    borderWidth: '2px',
  },
  sectionDark: {
    backgroundColor: 'var(--trust-blue)',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#fff',
  },
  sectionTitleDark: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: 'var(--text-primary)',
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    maxWidth: '600px',
    margin: '0 auto',
  },
  paragraph: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
  },
  aiGrid: {
    gap: '3rem',
  },
  aiCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '3rem',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  },
  aiCardHover: {
    transform: 'translateY(-5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  aiIcon: {
    color: 'var(--innovation-teal)',
    marginBottom: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#fff',
  },
  cardDesc: {
    color: '#94a3b8',
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  statLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '1.5rem',
  },
  statLarge: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'var(--tech-purple)',
    fontFamily: 'var(--font-heading)',
  },
  statLabel: {
    color: '#cbd5e1',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
  },
  visualPlaceholder: {
    position: 'relative',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--trust-blue), var(--innovation-teal))',
    opacity: 0.1,
    animation: 'fadeIn 2s ease-out infinite alternate',
  },
  circle2: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    border: '1px dashed var(--trust-blue)',
    opacity: 0.2,
  },
  glassCard: {
    position: 'relative',
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    textAlign: 'center',
  }
};
