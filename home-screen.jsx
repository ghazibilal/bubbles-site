(() => {
const { useState, useEffect, useRef } = React;
const DS = window.BubblesCarCareDesignSystem_459ca2;
const { DisplayHeading, Button, Badge, HexFrame, Icon, ChevronBanner, FeatureList, ServiceCard,
        Section, PriceRow, TestimonialCard } = DS;
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
const VideoGallery = DS.VideoGallery || _vidList;
const ReviewCard = DS.ReviewCard || _review;


/* ── Interactive hero ──────────────────────────────────────────────────────
   Three live controls: a service switcher, a vehicle-class picker that
   recomputes the quote, and a draggable before/after. */
function Hero({ onNavigate }) {
  const { SERVICES } = window.BCC;
  const featured = ['ppf', 'ceramic', 'rust', 'complete'].map((id) => SERVICES.find((s) => s.id === id));
  const [sIdx, setSIdx] = useState(1);
  const [vIdx, setVIdx] = useState(2);
  const [auto, setAuto] = useState(true);
  const svc = featured[sIdx];
  const price = svc.prices[Math.min(vIdx, svc.prices.length - 1)];

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setSIdx((i) => (i + 1) % featured.length), 5200);
    return () => clearInterval(t);
  }, [auto, featured.length]);

  const stop = () => setAuto(false);

  return (
    <section className="bcc-hero">
      <img
        key={svc.id}
        src={svc.hero}
        alt=""
        className="bcc-kenburns"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.92) contrast(1.06)', animation: 'bcc-fade-in var(--dur-slow) var(--ease-out) both, bcc-ken-burns 18s var(--ease-in-out) infinite alternate' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-photo)' }} />
      <div className="bcc-hero__inner">
        <div style={{ maxWidth: '48ch' }}>
          <Reveal variant="fade">
            <div style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap', marginBottom: 'var(--sp-5)' }}>
              <Badge variant="solid">Gtechniq approved</Badge>
              <Badge>Two branches in Karachi</Badge>
            </div>
          </Reveal>

          <div key={svc.id} style={{ animation: 'bcc-fade-up var(--dur-slow) var(--ease-out) both' }}>
            <DisplayHeading lead={svc.lead} tail={svc.tail} size="xl" as="h1" />
            <p style={{ margin: 'var(--sp-5) 0 0', fontSize: 'var(--fs-body-lg)', fontWeight: 'var(--fw-light)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-muted)', textWrap: 'pretty' }}>{svc.blurb}</p>
          </div>

          {/* service switcher */}
          <div className="bcc-tabs" role="tablist" aria-label="Services" style={{ marginTop: 'var(--sp-7)' }}>
            {featured.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === sIdx}
                className="bcc-tab"
                onClick={() => { setSIdx(i); stop(); }}
              >
                <Icon name={s.icon} size={16} />
                {s.short}
              </button>
            ))}
          </div>

          {/* live quote */}
          <div className="bcc-cutbox" style={{ marginTop: 'var(--sp-5)', maxWidth: 520 }}>
            <div className="bcc-cutbox__inner" style={{ padding: 'var(--sp-5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--sp-4)', flexWrap: 'wrap' }}>
                <span className="bcc-label" style={{ whiteSpace: 'nowrap' }}>Your vehicle</span>
                <span style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--sp-2)' }}>
                  <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: 'var(--tr-label)' }}>From</span>
                  <span
                    key={svc.id + vIdx}
                    className="bcc-price"
                    style={{ fontSize: 'var(--fs-display-md)', color: 'var(--text-accent)', lineHeight: 1, animation: 'bcc-fade-in var(--dur) var(--ease-out) both' }}
                  >
                    {price.price}
                  </span>
                </span>
              </div>
              <div className="bcc-tabs" style={{ marginTop: 'var(--sp-4)' }}>
                {svc.prices.map((p, i) => (
                  <button
                    key={p.vehicleClass}
                    className="bcc-tab"
                    aria-selected={i === vIdx}
                    onClick={() => { setVIdx(i); stop(); }}
                    style={{ fontSize: 'var(--fs-caption)' }}
                  >
                    {p.vehicleClass}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginTop: 'var(--sp-6)' }}>
            <Button size="lg" cut onClick={() => onNavigate('book')}>Book a slot</Button>
            <Button size="lg" variant="secondary" onClick={() => onNavigate(svc.id)}>See what's included</Button>
          </div>

          <div style={{ display: 'flex', gap: 'var(--sp-8)', flexWrap: 'wrap', marginTop: 'var(--sp-8)' }}>
            {[['clock', 'Mon–Sun, 10am – 9pm'], ['map-pin', 'DHA Phase 6 · Gulshan-e-Iqbal'], ['message-circle', 'Reply within an hour']].map(([ic, t]) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>
                <Icon name={ic} size={15} color="var(--accent)" />{t}
              </span>
            ))}
          </div>
        </div>

        <div className="bcc-hero__aside">
          <Reveal variant="hex" delay={120}>
            <div style={{ display: 'flex' }}>
              <HexFrame src={svc.photos[0]} width={160} style={{ marginTop: 76, marginRight: -20 }} />
              <HexFrame src={svc.hero} width={160} style={{ marginRight: -20 }} />
              <HexFrame src={svc.photos[1]} width={160} style={{ marginTop: 76 }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Credential marquee ─────────────────────────────────────────────────── */
function CredStrip() {
  const items = ['Gtechniq approved', 'Indoor bays', 'Paint depth measured', 'Two branches', 'Per-class pricing', 'Written product record', 'Same-day wash'];
  const row = [...items, ...items];
  return (
    <div className="bcc-marquee" style={{ borderBlock: '1px solid var(--border-subtle)', background: 'var(--bg-surface)', paddingBlock: 'var(--sp-4)' }}>
      <div className="bcc-marquee__track">
        {row.map((t, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-3)', paddingInline: 'var(--sp-6)', fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-semibold)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            <Icon name="hexagon" size={13} color="var(--accent)" />{t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Services preview ───────────────────────────────────────────────────── */
function ServicesPreview({ onOpen }) {
  const { SERVICES } = window.BCC;
  return (
    <Section
      tone="dots"
      eyebrow="What we do"
      lead="Seven services"
      tail="One standard"
      intro="Every job runs indoors, in the same sequence, at both branches. Prices are per vehicle class — no surprises when you collect."
      actions={<Button variant="secondary" iconAfter="arrow-right" onClick={() => onOpen('services')}>All services</Button>}
    >
      <div className="bcc-grid" style={{ '--cols': 3, '--cols-md': 2, '--cols-sm': 1 }}>
        {SERVICES.slice(0, 6).map((s, i) => (
          <Reveal key={s.id} delay={i * 80}>
            <ServiceCard
              title={s.title}
              summary={s.summary}
              image={s.hero}
              icon={s.icon}
              fromPrice={s.prices[0].price}
              onOpen={() => onOpen(s.id)}
              style={{ height: '100%' }}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── Why us: animated stats + before/after ──────────────────────────────── */
function WhyUs() {
  const { A } = window.BCC;
  const stats = [
    { value: 7, suffix: '+', label: 'years detailing in Karachi' },
    { value: 2, suffix: '', label: 'branches, same process' },
    { value: 5, suffix: ' yrs', label: 'top coating durability' },
    { value: 48, suffix: 'h', label: 'typical coating turnaround' },
  ];
  return (
    <Section tone="surface" eyebrow="Why Bubbles" lead="Careful work" tail="Not quick work">
      <div className="bcc-split" style={{ '--split': '1fr' }}>
        <Reveal variant="right">
          <BeforeAfter
            beforeSrc={A + 'photos/ext-grille-foam.jpg'}
            afterSrc={A + 'photos/ext-polisher.jpg'}
            beforeLabel="Before"
            afterLabel="After"
            note="Drag the handle. Placeholder pair — real matched before/after sets pending a shoot."
          />
        </Reveal>
        <div style={{ display: 'grid', gap: 'var(--sp-6)' }}>
          <FeatureList
            items={[
              'Paint depth measured before any correction.',
              'Indoor bays — no dust, no direct sun, no rushed cure.',
              'Gtechniq product systems, applied as specified.',
              'Written record of what was applied to your car.',
            ]}
          />
          <div className="bcc-grid" style={{ '--cols': 2, '--cols-md': 2, '--cols-sm': 2, '--cols-xs': 1, gap: 'var(--sp-3)' }}>
            {stats.map((s, i) => (
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
          <ChevronBanner>Get your car protected before monsoon</ChevronBanner>
        </div>
      </div>
    </Section>
  );
}

/* ── Latest videos ──────────────────────────────────────────────────────── */
function VideosPreview({ onNavigate }) {
  const { VIDEOS } = window.BCC;
  return (
    <Section
      eyebrow="Latest from the bays"
      lead="Newest"
      tail="On video"
      intro="Filmed at our own branches and posted to our channel. Press play — nothing loads until you do."
      actions={<Button variant="secondary" iconAfter="arrow-right" onClick={() => onNavigate('videos')}>All videos</Button>}
    >
      <Reveal><VideoGallery videos={VIDEOS} layout="feature" /></Reveal>
    </Section>
  );
}

/* ── Projects preview ───────────────────────────────────────────────────── */
function ProjectsPreview({ onNavigate }) {
  const { PROJECTS } = window.BCC;
  return (
    <Section
      eyebrow="Recent jobs"
      lead="Real cars"
      tail="Real finish"
      intro="Photographed in our bays, straight after collection. No studio lighting, no retouching."
      actions={<Button variant="secondary" iconAfter="arrow-right" onClick={() => onNavigate('projects')}>All projects</Button>}
    >
      <div className="bcc-grid" style={{ '--cols': 3, '--cols-md': 2, '--cols-sm': 1 }}>
        {PROJECTS.slice(0, 3).map((p, i) => (
          <Reveal key={p.id} delay={i * 90}>
            <ProjectCard {...p} onOpen={() => onNavigate('projects')} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── Testimonials preview ───────────────────────────────────────────────── */
function TestimonialsPreview({ onNavigate }) {
  const { GOOGLE_REVIEWS, VIDEO_REVIEWS } = window.BCC;
  return (
    <Section
      tone="surface"
      eyebrow="What owners say"
      lead="Booked once"
      tail="Came back"
      intro="Real reviews as published on Google, plus owners on camera."
      actions={<Button variant="secondary" iconAfter="arrow-right" onClick={() => onNavigate('testimonials')}>Read all reviews</Button>}
    >
      <div className="bcc-grid" style={{ '--cols': 3, '--cols-md': 2, '--cols-sm': 1 }}>
        {VIDEO_REVIEWS.slice(0, 1).map((v) => (
          <Reveal key={v.videoId}><window.BCCVideoCard {...v} /></Reveal>
        ))}
        {GOOGLE_REVIEWS.slice(0, 2).map((r, i) => (
          <Reveal key={r.name} delay={(i + 1) * 90}>
            <ReviewCard {...r} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

window.BCCVideoCard = DS.VideoCard || _vidRow;
Object.assign(window, { Hero, CredStrip, ServicesPreview, WhyUs, VideosPreview, ProjectsPreview, TestimonialsPreview });
})();
