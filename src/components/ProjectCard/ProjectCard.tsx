import Link from 'next/link';
import { ExternalLink, User, Building2, Calendar } from 'lucide-react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  id: string;
  title: string;
  student: string;
  university: string;
  category: string;
  year: string;
  abstract: string;
}

const ProjectCard = ({ id, title, student, university, category, year, abstract }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.categoryBadge}>{category}</div>
        <Link href={`/projects/${id}`}>
          <button className={styles.viewDetails}>
            <ExternalLink size={16} />
          </button>
        </Link>
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.abstract}>{abstract}</p>
      
      <div className={styles.footer}>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <User size={14} />
            <span>{student}</span>
          </div>
          <div className={styles.metaItem}>
            <Building2 size={14} />
            <span>{university}</span>
          </div>
          <div className={styles.metaItem}>
            <Calendar size={14} />
            <span>{year}</span>
          </div>
        </div>
        
        <Link href={`/projects/${id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
