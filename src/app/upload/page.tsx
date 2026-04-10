'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { submitProject } from '@/lib/actions/projectActions';
import { Upload, FileText, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import styles from './upload.module.css';

export default function UploadPage() {
  const [step, setStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{success: boolean, similarityScore?: number} | null>(null);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    setIsUploading(true);
    const formData = new FormData();
    // In a real app we'd collect all local state here
    formData.append('title', 'Demo Project'); 
    
    try {
      const result = await submitProject(formData);
      setSubmissionResult(result);
      if (result.success) {
        setTimeout(() => (window.location.href = '/'), 3000);
      }
    } catch (error) {
      alert('Submission failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.heroSection}>
        <div className="section-container">
          <h1 className={styles.title}>Submit Your Innovation</h1>
          <p className={styles.subtitle}>Join the national repository and showcase your project to the world.</p>
        </div>
      </div>

      <div className="section-container">
        <div className={styles.formContainer}>
          {/* Stepper Header */}
          <div className={styles.stepper}>
            <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>
              <div className={styles.stepCircle}>1</div>
              <span>Details</span>
            </div>
            <div className={styles.stepLine}></div>
            <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>
              <div className={styles.stepCircle}>2</div>
              <span>Abstract</span>
            </div>
            <div className={styles.stepLine}></div>
            <div className={`${styles.step} ${step >= 3 || submissionResult ? styles.active : ''}`}>
              <div className={styles.stepCircle}>3</div>
              <span>Upload</span>
            </div>
          </div>

          <div className={`${styles.glassCard} animate-fade-in`}>
            {submissionResult ? (
              <div className={styles.successStep}>
                <div className={styles.successIcon}><CheckCircle2 size={64} color="#10b981" /></div>
                <h2>Submission Successful!</h2>
                <p>Your project has been uploaded to the national repository.</p>
                <div className={styles.resultBox}>
                  <span>Plagiarism Similarity Index:</span>
                  <strong>{submissionResult.similarityScore}%</strong>
                </div>
                <p className={styles.redirectText}>Redirecting to home page...</p>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div className={styles.formStep}>
                    <h2>Project Basics</h2>
                    <div className={styles.inputGroup}>
                      <label>Project Title</label>
                      <input type="text" placeholder="e.g. AI-driven Smart Grid Optimization" />
                    </div>
                    <div className={styles.row}>
                      <div className={styles.inputGroup}>
                        <label>University / Institute</label>
                        <select>
                          <option>Select University</option>
                          <option>IIT Delhi</option>
                          <option>Anna University</option>
                          <option>BITS Pilani</option>
                        </select>
                      </div>
                      <div className={styles.inputGroup}>
                        <label>Academic Year</label>
                        <input type="text" placeholder="2025" />
                      </div>
                    </div>
                    <button onClick={nextStep} className={styles.nextBtn}>Next Step</button>
                  </div>
                )}

                {step === 2 && (
                  <div className={styles.formStep}>
                    <h2>Abstract & Metadata</h2>
                    <div className={styles.inputGroup}>
                      <label>Abstract (Short Description)</label>
                      <textarea rows={6} placeholder="Describe the problem, methodology, and results..."></textarea>
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Technology Stack / Keywords</label>
                      <input type="text" placeholder="React, Python, IoT, Blockchain..." />
                    </div>
                    <div className={styles.formActions}>
                      <button onClick={prevStep} className={styles.backBtn}>Back</button>
                      <button onClick={nextStep} className={styles.nextBtn}>Next Step</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className={styles.formStep}>
                    <h2>Final Submission</h2>
                    <div className={styles.uploadArea}>
                      <Upload size={48} color="#6366f1" />
                      <h3>Upload Project Report (PDF)</h3>
                      <p>Maximum file size: 20MB</p>
                      <input type="file" id="fileUpload" hidden />
                      <label htmlFor="fileUpload" className={styles.fileLabel}>Choose File</label>
                    </div>

                    <div className={styles.plagiarismCheck}>
                      <div className={styles.infoIcon}><ShieldCheck size={20} /></div>
                      <div>
                        <strong>Plagiarism Check</strong>
                        <p>Your project will be scanned against the national repository to ensure uniqueness.</p>
                      </div>
                    </div>

                    <div className={styles.formActions}>
                      <button onClick={prevStep} className={styles.backBtn}>Back</button>
                      <button 
                        onClick={handleSubmit} 
                        className={styles.submitBtn}
                        disabled={isUploading}
                      >
                        {isUploading ? 'Submitting...' : 'Submit Project'}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
