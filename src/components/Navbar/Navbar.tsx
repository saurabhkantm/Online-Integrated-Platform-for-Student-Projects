'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Plus, User, BookOpen } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/explore?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e as any);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <BookOpen size={24} color="#6366f1" />
          </div>
          <span>UniNova</span>
        </Link>

        <form className={styles.searchBar} onSubmit={handleSearch}>
          <Search size={18} className={styles.searchIcon} onClick={handleSearch} style={{cursor: 'pointer'}} />
          <input 
            type="text" 
            placeholder="Search projects by university, category or tags..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </form>

        <div className={styles.navLinks}>
          <Link href="/explore" className={styles.navLink}>Explore</Link>
          <Link href="/upload" className={styles.uploadBtn}>
            <Plus size={18} />
            <span>Submit Project</span>
          </Link>
          <button className={styles.profileBtn} onClick={() => alert('Profile management coming soon!')}>
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
