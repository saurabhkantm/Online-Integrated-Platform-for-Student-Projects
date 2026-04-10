'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import { 
  FileText, Download, Share2, Eye, 
  MessageSquare, Building2, User, Calendar,
  ShieldCheck, AlertTriangle
} from 'lucide-react';
import styles from './project.module.css';

const allProjects = [
  {
    id: '1',
    title: 'Solar-Powered Automated Irrigation System',
    student: 'Aarav Sharma',
    university: 'IIT Delhi',
    category: 'Renewable Energy',
    year: '2025',
    guide: 'Dr. Ramesh Kumar',
    abstract: 'A smart irrigation system that uses soil moisture sensors and solar power to automate water delivery for small-scale farmers in arid regions. The system includes a mobile app for remote monitoring and is built using local, low-cost components to ensure sustainability.',
    technologies: ['IoT', 'Arduino', 'Solar Power', 'Firebase'],
    views: 1240,
    downloads: 342,
    similarityScore: 4 // low similarity = good
  }
];

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [showReport, setShowReport] = useState(false);
  const project = allProjects.find(p => p.id === id) || allProjects[0];

  const handleDownload = () => {
    // Simulate creating a PDF blob
    const dummyContent = `UniNova Project Report\nTitle: ${project.title}\nStudent: ${project.student}\nUniversity: ${project.university}\nSimilarity Index: ${project.similarityScore}%\n\nThis is a placeholder for the actual project PDF report.`;
    const blob = new Blob([dummyContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.title.replace(/\s+/g, '_')}_Report.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.container}>
        <div className="section-container">
          {/* Breadcrumbs */}
          <div className={styles.breadcrumbs}>
            <Link href="/explore">Explore</Link> / <span>{project.category}</span> / <span>{project.title}</span>
          </div>

          <div className={styles.layout}>
            {/* Main Content */}
            <div className={styles.content}>
              <div className={styles.metaRow}>
                <div className={styles.categoryBadge}>{project.category}</div>
                <div className={styles.stats}>
                  <span><Eye size={14} /> {project.views}</span>
                  <span><Download size={14} /> {project.downloads}</span>
                </div>
              </div>

              <h1 className={styles.title}>{project.title}</h1>
              
              <div className={styles.authorSection}>
                <div className={styles.authorInfo}>
                  <div className={styles.avatar}><User size={20} /></div>
                  <div>
                    <strong>{project.student}</strong>
                    <span>Student, {project.university}</span>
                  </div>
                </div>
                <div className={styles.actions}>
                  <button className={styles.actionBtn} onClick={() => alert('Share link copied to clipboard!')}><Share2 size={18} /></button>
                  <button className={styles.downloadBtn} onClick={handleDownload}>
                    <Download size={18} />
                    Download PDF
                  </button>
                </div>
              </div>

              <div className={styles.section}>
                <h2>Abstract</h2>
                <p>{project.abstract}</p>
              </div>

              <div className={styles.section}>
                <h2>Technologies Used</h2>
                <div className={styles.tagGrid}>
                  {project.technologies.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className={styles.pdfPreview}>
                <div className={styles.pdfPlaceholder}>
                  <FileText size={64} color="#6366f1" />
                  <p>Document Preview is currently being generated...</p>
                </div>
              </div>
            </div>

            {/* Sidebar Details */}
            <aside className={styles.sidebar}>
              <div className={styles.detailCard}>
                 <h3>Project Details</h3>
                 <div className={styles.detailItem}>
                    <Building2 size={18} />
                    <div>
                      <span>University</span>
                      <p>{project.university}</p>
                    </div>
                 </div>
                 <div className={styles.detailItem}>
                    <User size={18} />
                    <div>
                      <span>Faculty Guide</span>
                      <p>{project.guide}</p>
                    </div>
                 </div>
                 <div className={styles.detailItem}>
                    <Calendar size={18} />
                    <div>
                      <span>Submitted In</span>
                      <p>{project.year}</p>
                    </div>
                 </div>
              </div>

              <div className={styles.plagiarismCard}>
                 <div className={styles.plagiarismHeader}>
                   <ShieldCheck size={20} color="#10b981" />
                   <span>Authenticity Report</span>
                 </div>
                 <div className={styles.scoreContainer}>
                   <div className={styles.score}>{project.similarityScore}%</div>
                   <div className={styles.scoreLabel}>Similarity Index</div>
                 </div>
                 <p className={styles.plagiarismDesc}>
                   Generated via UniNova Plagiarism Engine. This project shows very high originality.
                 </p>
                 <button className={styles.reportBtn} onClick={() => setShowReport(true)}>View Full Report</button>
              </div>

              <div className={styles.commentSection}>
                 <button className={styles.commentBtn}>
                   <MessageSquare size={18} />
                   Discuss Project
                 </button>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Plagiarism Report Modal */}
      {showReport && (
        <div className={styles.modalOverlay} onClick={() => setShowReport(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Plagiarism Analysis Report</h2>
              <button className={styles.closeBtn} onClick={() => setShowReport(false)}>&times;</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.reportSummary}>
                <div className={styles.summaryItem}>
                  <span>Similarity Index</span>
                  <strong style={{color: '#10b981'}}>{project.similarityScore}%</strong>
                </div>
                <div className={styles.summaryItem}>
                  <span>Internet Sources</span>
                  <strong>1.2%</strong>
                </div>
                <div className={styles.summaryItem}>
                  <span>Publications</span>
                  <strong>0.8%</strong>
                </div>
                <div className={styles.summaryItem}>
                  <span>Student Papers</span>
                  <strong>2.0%</strong>
                </div>
              </div>

              <div className={styles.matchesList}>
                <h3>Primary Matches</h3>
                <div className={styles.matchItem}>
                  <div className={styles.matchMeta}>
                    <span className={styles.matchPercentage}>1.5%</span>
                    <span className={styles.matchSource}>National Repository</span>
                  </div>
                  <p className="text-sm">Matched with "Smart Irrigation Controls" - IIT Kanpur (2022)</p>
                </div>
                <div className={styles.matchItem}>
                  <div className={styles.matchMeta}>
                    <span className={styles.matchPercentage}>0.8%</span>
                    <span className={styles.matchSource}>IEEE Xplore</span>
                  </div>
                  <p className="text-sm">Matched technical terminology in Methodology section.</p>
                </div>
              </div>

              <div className={styles.reportFooter}>
                <p><ShieldCheck size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Verified by UniNova AI on {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
