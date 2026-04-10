'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { Filter, SlidersHorizontal, Search, ChevronDown } from 'lucide-react';
import styles from './explore.module.css';

const allProjects = [
  {
    id: '1',
    title: 'Solar-Powered Automated Irrigation System',
    student: 'Aarav Sharma',
    university: 'IIT Delhi',
    category: 'Renewable Energy',
    year: '2025',
    abstract: 'A smart irrigation system that uses soil moisture sensors and solar power to automate water delivery for small-scale farmers.'
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
    id: '3',
    title: 'Low-Cost Prosthetic Arm with Haptic Feedback',
    student: 'Vikram Singh',
    university: 'BITS Pilani',
    category: 'Biomedical',
    year: '2025',
    abstract: 'Development of an affordable, 3D-printed prosthetic arm that provides tactile sensations through vibration motors.'
  },
  {
    id: '4',
    title: 'AI Predictor for Crop Diseases using Leaf Images',
    student: 'Neha Kapur',
    university: 'Punjab Agricultural University',
    category: 'Agriculture',
    year: '2025',
    abstract: 'A mobile application that identifies crop diseases from photos taken by farmers using computer vision.'
  },
  {
    id: '5',
    title: 'Smart Helmet for Underground Miners',
    student: 'Rahul Reddy',
    university: 'IIT Dhanbad',
    category: 'IoT',
    year: '2024',
    abstract: 'A connected helmet monitoring gas levels, heart rate, and location for underground mining safety.'
  },
  {
    id: '6',
    title: 'E-Waste Recycling Optimization using Graph Theory',
    student: 'Ananya Desai',
    university: 'VNIT Nagpur',
    category: 'Environmental',
    year: '2023',
    abstract: 'A mathematical model to optimize the logistics of e-waste collection across metropolitan areas.'
  },
  {
    id: '7',
    title: 'Autonomous Trash Cleaning Robot for Water Bodies',
    student: 'Siddharth Rao',
    university: 'VIT Vellore',
    category: 'Environmental',
    year: '2025',
    abstract: 'An aquatic robot designed to autonomousy collect floating debris from lakes and rivers using computer vision.'
  }
];

function ExploreContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const categories = ['All', 'Computer Science', 'Renewable Energy', 'Biomedical', 'Agriculture', 'IoT', 'Environmental'];

  const filteredProjects = allProjects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.header}>
        <div className="section-container">
          <div className={styles.headerContent}>
            <h1>Explore Innovations</h1>
            <p>{searchQuery ? `Showing results for "${searchQuery}"` : 'Discover projects from universities across the nation.'}</p>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className={styles.layout}>
          {/* Sidebar FILTERS */}
          <aside className={styles.sidebar}>
            <div className={styles.filterGroup}>
              <div className={styles.filterTitle}>
                <Filter size={18} />
                <span>Categories</span>
              </div>
              <div className={styles.categoryList}>
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    className={`${styles.categoryItem} ${activeCategory === cat ? styles.activeCategory : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <div className={styles.filterTitle}>
                <span>University Type</span>
                <ChevronDown size={16} />
              </div>
              <div className={styles.checkboxGroup}>
                 <label><input type="checkbox" /> Technical Institutes</label>
                 <label><input type="checkbox" /> Central Universities</label>
                 <label><input type="checkbox" /> State Universities</label>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <div className={styles.filterTitle}>
                <span>Year</span>
              </div>
              <select className={styles.select}>
                <option>All Years</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
          </aside>

          {/* Main Content RESULTS */}
          <div className={styles.results}>
            <div className={styles.resultsHeader}>
              <span>Showing {filteredProjects.length} projects</span>
              <div className={styles.sort}>
                <SlidersHorizontal size={16} />
                <span>Sort by: Newest First</span>
              </div>
            </div>

            <div className={styles.grid}>
              {filteredProjects.length > 0 ? (
                filteredProjects.map(project => (
                  <ProjectCard key={project.id} {...project} />
                ))
              ) : (
                <div className={styles.noResults}>
                  <p>No projects found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<div>Loading explore...</div>}>
      <ExploreContent />
    </Suspense>
  );
}
