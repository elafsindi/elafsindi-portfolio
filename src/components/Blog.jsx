import { useLang } from '../context/LanguageContext';
import './Blog.css';

export default function Blog() {
  const { t } = useLang();

  return (
    <section id="blog" className="section blog">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">{t.blog.tag}</span>
          <h2 className="section-title">{t.blog.title}</h2>
          <p className="section-subtitle">{t.blog.subtitle}</p>
        </div>

        <div className="blog__grid">
          {t.blog.items.map((post, index) => (
            <a 
              href="#" 
              key={post.id} 
              className="blog-card glass-card fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div 
                className="blog-card__accent" 
                style={{ background: post.color, boxShadow: `0 0 20px ${post.color}40` }}
              />
              <div className="blog-card__content">
                <div className="blog-card__meta">
                  <span className="blog-card__category" style={{ color: post.color }}>
                    {post.category}
                  </span>
                  <span className="blog-card__readtime">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__date">{post.date}</span>
                  <span className="blog-card__readmore" style={{ color: post.color }}>
                    {t.blog.readMore}
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="rtl-flip">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}