import { useState, useRef } from 'react';
import { useLang } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';
import './Contact.css';

const EMAILJS_SERVICE_ID  = 'service_portfolio_elaf';
const EMAILJS_TEMPLATE_ID = 'template_portfolio_elaf';
const EMAILJS_PUBLIC_KEY  = 'BLsdTxWkIYx1SxIeU';

export default function Contact() {
  const { t } = useLang();
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    const form = formRef.current;
    const templateParams = {
      name:    form.name.value,
      phone:   form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);

      });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">{t.contact.tag}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact__content">
          <div className="contact__form-wrapper glass-card fade-in" style={{ animationDelay: '0.2s' }}>
            <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder={t.contact.namePlaceholder} 
                  required 
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder={t.contact.phonePlaceholder} 
                  required 
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder={t.contact.subjectPlaceholder} 
                  required 
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder={t.contact.messagePlaceholder} 
                  required 
                  className="form-control"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary contact__submit ${status === 'loading' ? 'loading' : ''}`}
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading' ? t.contact.sending : 
                 status === 'success' ? '✓' : 
                 t.contact.sendBtn}
              </button>

              {status === 'success' && (
                <div className="contact__status success">{t.contact.successMsg}</div>
              )}
              {status === 'error' && (
                <div className="contact__status error">{t.contact.errorMsg}</div>
              )}
            </form>
          </div>

          <div className="contact__info fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="contact__info-title">{t.contact.orContact}</h3>
            
            <div className="contact__socials">
              <a href={t.contact.social.github} target="_blank" rel="noreferrer" className="contact__social-link glass-card">
                <div className="contact__social-icon">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <span>GitHub</span>
              </a>

              <a href={t.contact.social.linkedin} target="_blank" rel="noreferrer" className="contact__social-link glass-card">
                <div className="contact__social-icon">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span>LinkedIn</span>
              </a>

              <a href={`tel:${t.contact.social.phone}`} className="contact__social-link glass-card">
                <div className="contact__social-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span dir="ltr">{t.contact.social.phone}</span>
              </a>

              <a href={`mailto:${t.contact.social.email}`} className="contact__social-link glass-card">
                <div className="contact__social-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="contact__email-text">{t.contact.social.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}