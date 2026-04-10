import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Link from 'next/link';
import { ArrowRight, Trophy, Zap, Users } from 'lucide-react';
import styles from './page.module.css';

const featuredProjects = [
  {
    id: '1',
    title: 'Solar-Powered Automated Irrigation System',
    student: 'Aarav Sharma',
    university: 'IIT Delhi',
    category: 'Renewable Energy',
    year: '2025',
    abstract: 'A smart irrigation system that uses soil moisture sensors and solar power to automate water delivery for small-scale farmers in arid regions.'
  },
  {
    id: '2',
    title: 'Blockchain-based Academic Credential Verifier',
    student: 'Priya Iyer',
    university: 'Anna University',
    category: 'Computer Science',
    year: '2024',
    abstract: 'A decentralized application to prevent certificate forgery by storing academic records on a private Ethereum blockchain.'
  },
  {
    id: '4',
    title: 'AI Predictor for Crop Diseases using Leaf Images',
    student: 'Neha Kapur',
    university: 'Punjab Agricultural University',
    category: 'Agriculture',
    year: '2025',
    abstract: 'A mobile application that uses a convolutional neural network to identify crop diseases from photos taken by farmers in the field.'
  },
  {
    id: '5',
    title: 'Smart Helmet for Underground Miners',
    student: 'Rahul Reddy',
    university: 'IIT Dhanbad',
    category: 'IoT',
    year: '2024',
    abstract: 'A connected helmet that monitors hazardous gas levels, heart rate, and location for miners in deep underground environments.'
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      
      {/* Features/Stats Section */}
      <section id="benefits" className={styles.benefits}>
        <div className="section-container">
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Trophy size={24} /></div>
              <h3>Awards & Recognition</h3>
              <p>Top projects are highlighted and showcased at national-level technical symposiums.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Zap size={24} /></div>
              <h3>Cross-Functional Research</h3>
              <p>Connect with peers from different universities to collaborate on interdisciplinary work.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Users size={24} /></div>
              <h3>Expert Mentorship</h3>
              <p>Faculty members across institutes can provide feedback and guidance on innovative works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={styles.featured}>
        <div className="section-container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Featured Innovations</h2>
              <p className={styles.sectionSubtitle}>Handpicked groundbreaking projects from this academic year.</p>
            </div>
            <Link href="/explore">
              <button className={styles.viewMoreBtn}>
                View All <ArrowRight size={16} />
              </button>
            </Link>
          </div>
          
          <div className={styles.projectGrid}>
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="section-container">
          <div className={styles.footerContent}>
            <p>© 2026 UniNova Platform. Department of Higher Education Initiative.</p>
            <div className={styles.footerLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
