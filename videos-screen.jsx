(() => {
const DS = window.BubblesCarCareDesignSystem_459ca2;
const { Button, Badge, Icon, Section, Breadcrumbs, WhatsAppCta, FeatureList } = DS;

const _passthru = (tag) => ({ children, ...p }) => React.createElement(tag, p, children);
const Reveal = DS.Reveal || _passthru('div');
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
const VideoCard = DS.VideoCard || _vidRow;
const SocialStrip = DS.SocialStrip || _social;

/* ── Videos & latest work ───────────────────────────────────────────────── */
function VideosScreen({ onNavigate }) {
  const { VIDEOS, VIDEO_REVIEWS, VIDEO_WORK, SOCIAL } = window.BCC;
  return (
    <div>
      <div className="bcc-container" style={{ paddingBlock: 'var(--sp-6)' }}>
        <Breadcrumbs items={[{ id: 'home', label: 'Home' }, { label: 'Videos' }]} onNavigate={onNavigate} />
      </div>

      <Section
        eyebrow="Latest from the bays"
        lead="Watch the"
        tail="Work"
        intro="Everything here is filmed at our own branches and posted to our channel. Press play — nothing loads until you do."
        actions={<Button variant="secondary" iconAfter="arrow-up-right" href={SOCIAL[0].url} target="_blank" rel="noopener noreferrer">Open YouTube channel</Button>}
      >
        <Reveal>
          <VideoGallery videos={VIDEOS} layout="feature" />
        </Reveal>
      </Section>

      {VIDEO_REVIEWS.length ? (
        <Section
          tone="dots"
          eyebrow="In their own words"
          lead="Video"
          tail="Reviews"
          intro="Owners talking about their own cars, on camera, unedited."
        >
          <div className="bcc-grid" style={{ '--cols': 3, '--cols-md': 2, '--cols-sm': 1 }}>
            {VIDEO_REVIEWS.map((v, i) => (
              <Reveal key={v.videoId} delay={i * 80}><VideoCard {...v} /></Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="surface" eyebrow="Follow along" lead="New work" tail="Every week">
        <div className="bcc-split" style={{ '--split': '1fr' }}>
          <Reveal><SocialStrip channels={SOCIAL} /></Reveal>
          <Reveal delay={90}>
            <FeatureList
              size="sm"
              items={[
                'Project videos and walkarounds go up on YouTube.',
                'Day-to-day work and reels go to Instagram.',
                'Offers and branch news go to Facebook.',
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <Section narrow align="center" lead="Want yours" tail="On camera?">
        <p style={{ margin: '0 auto var(--sp-6)', maxWidth: '46ch', textAlign: 'center', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-muted)' }}>
          We film most big jobs. Tell us when you book and we will send you the clip.
        </p>
        <div style={{ display: 'flex', gap: 'var(--sp-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" cut onClick={() => onNavigate('book')}>Book a slot</Button>
          <WhatsAppCta label="Ask about filming" message="Hi Bubbles Car Care, can you film my car during the job?" />
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { VideosScreen });
})();
