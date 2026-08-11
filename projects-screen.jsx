(() => {
const { useState } = React;
const DS = window.BubblesCarCareDesignSystem_459ca2;
const { DisplayHeading, Button, Badge, Icon, Section, Breadcrumbs,
        WhatsAppCta, TestimonialCard, FeatureList } = DS;
/* Defensive: if the DS bundle is a build behind, degrade to a static render
   rather than throwing "Element type is invalid" and blanking the page. */
const _passthru = (tag) => ({ children, ...p }) => React.createElement(tag, p, children);
const Reveal = DS.Reveal || _passthru('div');
const StatCounter = DS.StatCounter || (({ value, prefix = '', suffix = '', ...p }) => React.createElement('span', p, prefix + value + suffix));
const BeforeAfter = DS.BeforeAfter || (({ afterSrc, afterLabel = '', ...p }) => React.createElement('img', { src: afterSrc, alt: afterLabel, style: { width: '100%', borderRadius: 'var(--r-card)' }, ...p }));
const ProjectCard = DS.ProjectCard || (({ car, service, image }) => React.createElement('div', { className: 'bcc-card', style: { padding: 'var(--sp-5)' } }, React.createElement('img', { src: image, alt: '', style: { width: '100%', marginBottom: 'var(--sp-3)' } }), React.createElement('strong', null, car), ' — ', service));
const _vidRow = ({ videoId, title, car, service, kind }) => React.createElement(
  'a',
  { key: videoId, href: 'https://www.youtube.com/watch?v=' + videoId, target: '_blank', rel: 'noopener noreferrer',
    className: 'bcc-video-fallback' },
  React.createElement('span', { className: 'bcc-video-fallback__play', 'aria-hidden': 'true' }, '\u25B6'),
  React.createElement('span', null,
    React.createElement('span', { className: 'bcc-video-fallback__title' }, title),
    (car || service || kind === 'review')
      ? React.createElement('span', { className: 'bcc-video-fallback__meta' }, [car, kind === 'review' ? 'Customer review' : service].filter(Boolean).join(' \u00B7 '))
      : null
  )
);
const _vidList = ({ videos = [] }) => React.createElement('div', { className: 'bcc-video-fallback__list' }, videos.map(_vidRow));
const _review = ({ quote, name, service }) => React.createElement('figure', { className: 'bcc-card', style: { margin: 0, padding: 'var(--sp-6)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', height: '100%' } },
  React.createElement('blockquote', { style: { margin: 0, fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--text-primary)' } }, quote),
  React.createElement('figcaption', { style: { marginTop: 'auto', paddingTop: 'var(--sp-4)', borderTop: '1px solid var(--border-subtle)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-semibold)' } }, name, service ? React.createElement('span', { style: { display: 'block', marginTop: 2, fontSize: 'var(--fs-caption)', fontWeight: 400, color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: 'var(--tr-label)' } }, service) : null)
);
const _social = ({ channels = [] }) => React.createElement('div', { className: 'bcc-video-fallback__list' }, channels.map((c) => React.createElement('a', { key: c.platform, href: c.url, target: '_blank', rel: 'noopener noreferrer', className: 'bcc-video-fallback' }, React.createElement('span', null, React.createElement('span', { className: 'bcc-video-fallback__title' }, c.platform), React.createElement('span', { className: 'bcc-video-fallback__meta' }, c.handle + (c.count ? ' \u00B7 ' + c.count : ''))))));
const VideoCard = DS.VideoCard || _vidRow;
const VideoGallery = DS.VideoGallery || _vidList;
const ReviewCard = DS.ReviewCard || _review;


/* ── Projects ───────────────────────────────────────────────────────────── */
function ProjectsScreen({ onNavigate }) {
  const { PROJECTS, A } = window.BCC;
  const [filter, setFilter] = useState('All');
  const [openId, setOpenId] = useState(null);
  const services = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.service)))];
  const shown = PROJECTS.filter((p) => filter === 'All' || p.service === filter);
  const open = PROJECTS.find((p) => p.id === openId);

  return (
    <div>
      <div className="bcc-container" style={{ paddingBlock: 'var(--sp-6)' }}>
        <Breadcrumbs items={[{ id: 'home', label: 'Home' }, { label: 'Projects' }]} onNavigate={onNavigate} />
      </div>

      <Section
        eyebrow="Latest from the bays"
        lead="Newest"
        tail="On video"
        intro="The most recent work, filmed at our own branches. Press play — nothing loads until you do."
        actions={<Button variant="secondary" iconAfter="arrow-right" onClick={() => onNavigate('videos')}>All videos</Button>}
      >
        <Reveal><VideoGallery videos={window.BCC.VIDEOS} layout="feature" /></Reveal>
      </Section>

      <Section
        tone="surface"
        eyebrow="Recent jobs"
        lead="Cars we"
        tail="Finished"
        intro="Every car here was booked by a Karachi owner and photographed in our bay on collection day. Filter by service to see what a job like yours looks like."
      >
        <div className="bcc-grid" style={{ '--cols': 4, '--cols-md': 2, '--cols-sm': 2, '--cols-xs': 1, gap: 'var(--sp-3)', marginBottom: 'var(--sp-8)' }}>
          {[
            { value: PROJECTS.length * 47, suffix: '+', label: 'cars through the bays' },
            { value: 96, suffix: '%', label: 'booked again or referred' },
            { value: 2, suffix: '', label: 'branches, one checklist' },
            { value: 48, suffix: 'h', label: 'typical coating turnaround' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="bcc-cutbox" style={{ height: '100%' }}>
                <div className="bcc-cutbox__inner" style={{ padding: 'var(--sp-5)' }}>
                  <div style={{ fontSize: 'var(--fs-display-md)', color: 'var(--text-accent)', lineHeight: 1 }}>
                    <StatCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ marginTop: 'var(--sp-2)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', lineHeight: 'var(--lh-snug)' }}>{s.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="bcc-tabs" role="tablist" aria-label="Filter projects" style={{ marginBottom: 'var(--sp-6)' }}>
          {services.map((s) => (
            <button key={s} role="tab" aria-selected={filter === s} className="bcc-tab" onClick={() => setFilter(s)}>{s}</button>
          ))}
        </div>

        <div key={filter} className="bcc-grid" style={{ '--cols': 3, '--cols-md': 2, '--cols-sm': 1 }}>
          {shown.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <ProjectCard {...p} featured={false} onOpen={() => setOpenId(p.id)} />
            </Reveal>
          ))}
        </div>
        {shown.length === 0 ? (
          <p style={{ color: 'var(--text-faint)', fontSize: 'var(--fs-body-sm)' }}>No jobs logged for that service yet.</p>
        ) : null}
      </Section>

      <Section tone="dots" eyebrow="Paint correction" lead="Drag to" tail="Compare">
        <div style={{ maxWidth: 860, marginInline: 'auto' }}>
          <Reveal variant="scale">
            <BeforeAfter
              beforeSrc={A + 'photos/ext-grille-foam.jpg'}
              afterSrc={A + 'photos/ext-polisher.jpg'}
              aspect="16 / 9"
              note="Drag the handle, or use the arrow keys. Placeholder pair — real matched before/after sets pending a shoot."
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" narrow align="center" lead="Your car" tail="Next">
        <div style={{ display: 'flex', gap: 'var(--sp-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" cut onClick={() => onNavigate('book')}>Book a slot</Button>
          <WhatsAppCta label="Send us a photo" message="Hi Bubbles Car Care, here is a photo of my car — what would you recommend?" />
        </div>
      </Section>

      {open ? <ProjectDialog project={open} onClose={() => setOpenId(null)} onNavigate={onNavigate} /> : null}
    </div>
  );
}

function ProjectDialog({ project, onClose, onNavigate }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.car}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 90, background: 'var(--bg-overlay)',
        backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
        display: 'grid', placeItems: 'center', padding: 'var(--gutter)',
        animation: 'bcc-fade-in var(--dur) var(--ease-out) both',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bcc-card"
        style={{ width: 'min(680px,100%)', maxHeight: '86vh', overflowY: 'auto', boxShadow: 'var(--shadow-raised)', animation: 'bcc-scale-in var(--dur) var(--ease-out) both' }}
      >
        <div style={{ position: 'relative' }}>
          <img src={project.image} alt="" style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', filter: 'saturate(.92) contrast(1.06)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-photo-bottom)' }} />
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            style={{ position: 'absolute', top: 'var(--sp-3)', right: 'var(--sp-3)', width: 'var(--tap-min)', height: 'var(--tap-min)', display: 'grid', placeItems: 'center', background: 'var(--bg-overlay)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--r-sm)', cursor: 'pointer' }}
          >
            <Icon name="x" size={20} color="var(--text-primary)" />
          </button>
          <div style={{ position: 'absolute', inset: 'auto 0 0 0', padding: 'var(--sp-5)' }}>
            <div style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap', marginBottom: 'var(--sp-2)' }}>
              <Badge variant="solid">{project.service}</Badge>
              {project.tier ? <Badge>{project.tier}</Badge> : null}
            </div>
            <h2 className="bcc-display bcc-display--md" style={{ margin: 0 }}>{project.car}</h2>
          </div>
        </div>
        <div style={{ padding: 'var(--sp-6)', display: 'grid', gap: 'var(--sp-5)' }}>
          <p style={{ margin: 0, fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)', textWrap: 'pretty' }}>{project.problem}</p>
          <div style={{ display: 'flex', gap: 'var(--sp-6)', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: 'var(--fs-caption)', color: 'var(--text-faint)' }}>
              <Icon name="clock" size={15} color="var(--accent)" />{project.duration}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: 'var(--fs-caption)', color: 'var(--text-faint)' }}>
              <Icon name="map-pin" size={15} color="var(--accent)" />{project.branch}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
            <Button cut onClick={() => { onClose(); onNavigate('book'); }}>Book the same</Button>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Testimonials ───────────────────────────────────────────────────────── */
function TestimonialsScreen({ onNavigate }) {
  const { TESTIMONIALS, VIDEO_REVIEWS, GOOGLE_REVIEWS } = window.BCC;
  const [filter, setFilter] = useState('All');
  const services = ['All', ...Array.from(new Set(TESTIMONIALS.map((t) => t.service)))];
  const shown = TESTIMONIALS.filter((t) => filter === 'All' || t.service === filter);
  const avg = (TESTIMONIALS.reduce((a, t) => a + t.rating, 0) / TESTIMONIALS.length).toFixed(1);

  return (
    <div>
      <div className="bcc-container" style={{ paddingBlock: 'var(--sp-6)' }}>
        <Breadcrumbs items={[{ id: 'home', label: 'Home' }, { label: 'Reviews' }]} onNavigate={onNavigate} />
      </div>

      {VIDEO_REVIEWS.length ? (
        <Section
          eyebrow="In their own words"
          lead="Video"
          tail="Reviews"
          intro="Owners talking about their own cars, on camera, unedited. Filmed at our branches and posted to our channel."
          actions={<Button variant="secondary" iconAfter="arrow-right" onClick={() => onNavigate('videos')}>All videos</Button>}
        >
          <div className="bcc-grid" style={{ '--cols': 3, '--cols-md': 2, '--cols-sm': 1 }}>
            {VIDEO_REVIEWS.map((v, i) => (
              <Reveal key={v.videoId} delay={i * 80}><VideoCard {...v} /></Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Section
        tone="dots"
        eyebrow="Published on Google"
        lead="What people"
        tail="Wrote"
        intro="Quoted exactly as posted, spelling and all."
      >
        <div className="bcc-grid" style={{ '--cols': 3, '--cols-md': 2, '--cols-sm': 1 }}>
          {GOOGLE_REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 60}><ReviewCard {...r} /></Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="surface"
        eyebrow="What owners say"
        lead="Booked once"
        tail="Came back"
        intro="Collected on WhatsApp after collection day. We publish the four-star ones too."
      >
        <div className="bcc-split" style={{ '--split': '1fr', marginBottom: 'var(--sp-10)' }}>
          <Reveal>
            <div className="bcc-cutbox">
              <div className="bcc-cutbox__inner" style={{ padding: 'clamp(20px,4vw,32px)', display: 'flex', alignItems: 'center', gap: 'var(--sp-6)', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: 'var(--fs-display-lg)', color: 'var(--text-accent)', lineHeight: 1 }}>
                    <StatCounter value={Number(avg)} decimals={1} />
                  </div>
                  <div style={{ display: 'flex', gap: 2, marginTop: 'var(--sp-2)' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" size={16} color={i < Math.round(avg) ? 'var(--accent)' : 'var(--ink-500)'} />
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <p style={{ margin: 0, fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>
                    Average across {TESTIMONIALS.length} reviews, both branches. Nothing is filtered out.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <FeatureList
              size="sm"
              items={['Reviews are collected on WhatsApp, after collection.', 'Four-star reviews stay up.', 'Car and service are named on every one.']}
            />
          </Reveal>
        </div>

        <div className="bcc-tabs" role="tablist" aria-label="Filter reviews" style={{ marginBottom: 'var(--sp-6)' }}>
          {services.map((s) => (
            <button key={s} role="tab" aria-selected={filter === s} className="bcc-tab" onClick={() => setFilter(s)}>{s}</button>
          ))}
        </div>

        <div key={filter} className="bcc-grid" style={{ '--cols': 3, '--cols-md': 2, '--cols-sm': 1 }}>
          {shown.map((t, i) => (
            <Reveal key={t.name + t.service} delay={i * 60}>
              <TestimonialCard {...t} style={{ height: '100%' }} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface" narrow align="center" lead="Been to" tail="Bubbles?">
        <p style={{ margin: '0 auto var(--sp-6)', maxWidth: '46ch', textAlign: 'center', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-muted)' }}>
          Send us a line on WhatsApp and we will put it up — good or bad.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WhatsAppCta label="Leave a review" message="Hi Bubbles Car Care, I would like to leave a review for" />
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { ProjectsScreen, TestimonialsScreen });
})();
