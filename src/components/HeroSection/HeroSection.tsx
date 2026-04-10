'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, GraduationCap, Globe } from 'lucide-react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundBlobs}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>
      
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>Empowering Innovation Across India</span>
          </div>
          
          <h1 className={styles.title}>
            The Central Hub for <span className={styles.gradientText}>Student Innovation</span>
          </h1>
          
          <p className={styles.subtitle}>
            Explore, share, and learn from thousands of academic projects from Technical/Higher Educational Institutes 
            throughout the country. Bridging the gap between theory and innovation.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link href="/explore">
              <button className={styles.primaryBtn}>
                Explore Projects
                <ArrowRight size={18} />
              </button>
            </Link>
            <button className={styles.secondaryBtn} onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}>
              How it works
            </button>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><GraduationCap size={20} /></div>
              <div>
                <strong>500+</strong>
                <span>Universities</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Globe size={20} /></div>
              <div>
                <strong>10k+</strong>
                <span>Projects</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.visuals}
        >
          <div className={styles.glassCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dots}><span></span><span></span><span></span></div>
              <div className={styles.addressBar}>uninova.edu/innovations</div>
            </div>
            <div className={styles.cardBody}>
               {/* Decorative placeholder for UI elements */}
               <div className={styles.skeletonList}>
                  <div className={styles.skeletonItem} style={{width: '60%'}}></div>
                  <div className={styles.skeletonItem} style={{width: '90%'}}></div>
                  <div className={styles.skeletonItem} style={{width: '40%'}}></div>
                  <div className={styles.skeletonGrid}>
                    <div></div><div></div><div></div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
