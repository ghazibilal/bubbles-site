(() => {
const { useState } = React;
const DS = window.BubblesCarCareDesignSystem_459ca2;
const { DisplayHeading, Button, Badge, HexFrame, Icon, FeatureList, Section, PriceRow,
        Breadcrumbs, ServiceCard, Faq, PricingTable, TierBadge, WhatsAppCta } = DS;
/* Defensive: if the DS bundle is a build behind, degrade to a static render
   rather than throwing "Element type is invalid" and blanking the page. */
const _passthru = (tag) => ({ children, ...p }) => React.createElement(tag, p, children);
const Reveal = DS.Reveal || _passthru('div');
const StatCounter = DS.StatCounter || (({ value, prefix = '', suffix = '', ...p }) => React.createElement('span', p, prefix + value + suffix));
const BeforeAfter = DS.BeforeAfter || (({ afterSrc, afterLabel = '', ...p }) => React.createElement('img', { src: afterSrc, alt: afterLabel, style: { width: '100%', borderRadius: 'var(--r-card)' }, ...p }));
const ProjectCard = DS.ProjectCard || (({ car, service, image }) => React.createElement('div', { className: 'bcc-card', style: { padding: 'var(--sp-5)' } }, React.createElement('img', { src: image, alt: '', style: { width: '100%', marginBottom: 'var(--sp-3)' } }), React.createElement('strong', null, car), ' — ', service));


/* ── Services index ─────────────────────────────────────────────────────── */
function ServicesIndexScreen({ onNavigate }) {
  const { SERVICES } = window.BCC;
  const [filter, setFilter] = useState('all');
  const groups = {
    all: 'All services',
    protection: 'Protection',
    detailing: 'Detailing',
  };
  const groupOf = (id) => (['ppf', 'ceramic', 'rust'].includes(id) ? 'protection' : 'detailing');
  const shown = SERVICES.filter((s) => filter === 'all' || groupOf(s.id) === filter);

  return (
    <div>
      <div className="bcc-container" style={{ paddingBlock: 'var(--sp-6)' }}>
        <Breadcrumbs items={[{ id: 'home', label: 'Home' }, { label: 'Services' }]} onNavigate={onNavigate} />
      </div>
      <Section
        eyebrow="Services we offer"
        lead="Everything"
        tail="We do"
        intro="Seven services across two branches. Each one has its own page with the full checklist and per-class pricing."
      >
        <div className="bcc-tabs" role="tablist" style={{ marginBottom: 'var(--sp-8)' }}>
          {Object.entries(groups).map(([k, label]) => (
            <button key={k} role="tab" aria-selected={filter === k} className="bcc-tab" onClick={() => setFilter(k)}>{label}</button>
          ))}
        </div>
        <div className="bcc-grid" style={{ '--cols': 3, '--cols-md': 2, '--cols-sm': 1 }}>
          {shown.map((s, i) => (
            <Reveal key={s.id} delay={i * 70}>
              <ServiceCard
                title={s.title}
                summary={s.summary}
                image={s.hero}
                icon={s.icon}
                fromPrice={s.prices[0].price}
                onOpen={() => onNavigate(s.id)}
                style={{ height: '100%' }}
              />
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

/* ── One service, one page ──────────────────────────────────────────────── */
function ServiceScreen({ id, onNavigate }) {
  const { SERVICES } = window.BCC;
  const d = SERVICES.find((s) => s.id === id) || SERVICES[0];
  const others = SERVICES.filter((s) => s.id !== d.id).slice(0, 3);
  const half = Math.ceil(d.includes.length / 2);

  return (
    <div>
      <div className="bcc-container" style={{ paddingBlock: 'var(--sp-6)' }}>
        <Breadcrumbs
          items={[{ id: 'home', label: 'Home' }, { id: 'services', label: 'Services' }, { label: d.title }]}
          onNavigate={onNavigate}
        />
      </div>

      <section className="bcc-hero">
        <img src={d.hero} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.92) contrast(1.06)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-photo)' }} />
        <div className="bcc-hero__inner" style={{ paddingBlock: 'clamp(40px,7vw,88px)' }}>
          <div style={{ maxWidth: '44ch' }}>
            <Reveal variant="fade">
              <DisplayHeading eyebrow={d.eyebrow} lead={d.lead} tail={d.tail} size="lg" as="h1" />
            </Reveal>
            <Reveal delay={80}>
              <p style={{ margin: 'var(--sp-5) 0 0', fontSize: 'var(--fs-body-lg)', fontWeight: 'var(--fw-light)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-muted)', textWrap: 'pretty' }}>{d.blurb}</p>
              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginTop: 'var(--sp-5)' }}>
                {d.duration ? <Badge>{d.duration}</Badge> : null}
                {d.durability ? <Badge>Lasts {d.durability}</Badge> : null}
                <Badge variant={d.priceConfirmed ? 'solid' : 'outline'}>
                  {d.priceConfirmed ? 'Fixed per vehicle class' : 'Confirm on WhatsApp'}
                </Badge>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--sp-3)', marginTop: 'var(--sp-6)' }}>
                <span style={{ fontSize: 'var(--fs-caption)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>From</span>
                <span className="bcc-price" style={{ fontSize: 'var(--fs-display-md)', color: 'var(--text-accent)' }}>{d.prices[0].price}</span>
              </div>
              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginTop: 'var(--sp-6)' }}>
                <Button cut onClick={() => onNavigate('book')}>Book this service</Button>
                <WhatsAppCta label="Ask a question" message={`Hi Bubbles Car Care, I have a question about ${d.title.toLowerCase()} for my`} />
              </div>
            </Reveal>
          </div>
          <div className="bcc-hero__aside">
            <Reveal variant="hex" delay={140}>
              <div style={{ display: 'flex' }}>
                <HexFrame src={d.photos[0]} width={140} style={{ marginTop: 62, marginRight: -16 }} />
                <HexFrame src={d.photos[1]} width={140} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section tone="dots" eyebrow="What is included" lead="Every step" tail="On the list">
        <div className="bcc-grid" style={{ '--cols': 2, '--cols-md': 1, '--cols-sm': 1 }}>
          <Reveal><FeatureList columns={1} items={d.includes.slice(0, half)} /></Reveal>
          <Reveal delay={90}><FeatureList columns={1} items={d.includes.slice(half)} /></Reveal>
        </div>
      </Section>

      {d.hasTiers ? (
        <Section tone="surface" eyebrow="Gtechniq systems" lead="Three tiers" tail="One process" intro="Every tier gets full paint correction first. The difference is the product stack.">
          <CoatingTiers onNavigate={onNavigate} compact />
        </Section>
      ) : (
        <Section
          tone="surface"
          eyebrow="Pricing"
          lead="Per vehicle"
          tail="Class"
          intro="No hidden add-ons. Ceramic-coated wheels and heavy paint correction are quoted separately after we see the car."
        >
          <Reveal><PriceRow items={d.prices} featuredIndex={2} /></Reveal>
          {d.priceConfirmed ? null : (
            <p style={{ margin: 'var(--sp-5) 0 0', fontSize: 'var(--fs-caption)', color: 'var(--text-faint)' }}>
              Indicative only — confirm on WhatsApp before booking.
            </p>
          )}
        </Section>
      )}

      <Section eyebrow="Also consider" lead="Other" tail="Services">
        <div className="bcc-grid" style={{ '--cols': 3, '--cols-md': 2, '--cols-sm': 1 }}>
          {others.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <ServiceCard title={s.title} summary={s.summary} image={s.hero} icon={s.icon} fromPrice={s.prices[0].price} onOpen={() => onNavigate(s.id)} style={{ height: '100%' }} />
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

/* ── Coating tiers (Style B) ────────────────────────────────────────────── */
const GOLD = {
  tier: 'gold', tierLabel: 'Gold', durability: '03 years', complimentary: 'Microfiber towel ×1, maintenance wash ×1',
  specs: [
    { product: 'C1 Crystal Lacquer', appliedOn: 'All painted surfaces' },
    { product: 'C2v3 Liquid Crystal', appliedOn: 'All painted surfaces' },
    { product: 'T1 Tire Dressing', appliedOn: 'All tires' },
    { product: 'C5 Wheel Armour', appliedOn: 'All alloys' },
    { product: 'C6 AB Matte Dash', appliedOn: 'Interior trims' },
  ],
  prices: [
    { vehicleClass: 'Small hatchback', price: '35,000/-' },
    { vehicleClass: 'Sedan', price: '45,000/-' },
    { vehicleClass: 'Luxury sedan', price: '50,000/-' },
    { vehicleClass: 'Crossover', price: '50,000/-' },
    { vehicleClass: 'SUV', price: '60,000/-' },
  ],
};
const PLATINUM = {
  tier: 'platinum', tierLabel: 'Platinum', durability: '05 years', complimentary: 'Microfiber towel ×2, maintenance wash ×2',
  specs: [
    { product: 'Crystal Serum Light', appliedOn: 'All painted surfaces' },
    { product: 'EXOv5 Ultra Durable', appliedOn: 'All painted surfaces' },
    { product: 'G1 ClearVision Smart Glass', appliedOn: 'Windscreen' },
    { product: 'C5 Wheel Armour', appliedOn: 'All alloys' },
    { product: 'I1 Smooth Leather Coat', appliedOn: 'Leather seats' },
  ],
  prices: [
    { vehicleClass: 'Small hatchback', price: '55,000/-' },
    { vehicleClass: 'Sedan', price: '68,000/-' },
    { vehicleClass: 'Luxury sedan', price: '78,000/-' },
    { vehicleClass: 'Crossover', price: '78,000/-' },
    { vehicleClass: 'SUV', price: '92,000/-' },
  ],
};
const SILVER = {
  tier: 'silver', tierLabel: 'Silver', durability: '02 years', complimentary: 'Microfiber towel ×1',
  specs: [
    { product: 'C2v3 Liquid Crystal', appliedOn: 'All painted surfaces' },
    { product: 'T1 Tire Dressing', appliedOn: 'All tires' },
    { product: 'C4 Trim Restorer', appliedOn: 'Exterior plastic trims' },
  ],
  prices: [
    { vehicleClass: 'Small hatchback', price: '22,000/-' },
    { vehicleClass: 'Sedan', price: '28,000/-' },
    { vehicleClass: 'Luxury sedan', price: '32,000/-' },
    { vehicleClass: 'Crossover', price: '32,000/-' },
    { vehicleClass: 'SUV', price: '38,000/-' },
  ],
};
const TIERS = { platinum: PLATINUM, gold: GOLD, silver: SILVER };

function CoatingTiers({ onNavigate, compact = false }) {
  const [tier, setTier] = useState('platinum');
  return (
    <div>
      <div className="bcc-tabs" role="tablist" aria-label="Coating tiers" style={{ marginBottom: 'var(--sp-6)' }}>
        {['platinum', 'gold', 'silver'].map((t) => (
          <button key={t} role="tab" aria-selected={tier === t} className="bcc-tab" onClick={() => setTier(t)} style={{ textTransform: 'capitalize' }}>
            {t}
          </button>
        ))}
      </div>
      <div key={tier} style={{ animation: 'bcc-fade-up var(--dur-slow) var(--ease-out) both' }}>
        <PricingTable {...TIERS[tier]} onBook={() => onNavigate('book')} />
      </div>
      {compact ? null : (
        <p style={{ margin: 'var(--sp-6) 0 0', fontSize: 'var(--fs-caption)', color: 'var(--text-faint)' }}>
          Indicative pricing. Deep scratch removal and wet sanding are quoted after inspection.
        </p>
      )}
    </div>
  );
}

function CoatingsScreen({ onNavigate }) {
  return (
    <div>
      <div className="bcc-container" style={{ paddingBlock: 'var(--sp-6)' }}>
        <Breadcrumbs items={[{ id: 'home', label: 'Home' }, { id: 'services', label: 'Services' }, { label: 'Coating tiers' }]} onNavigate={onNavigate} />
      </div>
      <Section
        eyebrow="Gtechniq systems"
        lead="Ceramic"
        tail="Coating"
        intro="Three tiers, three durability ratings. Every tier is applied indoors after full paint correction — the difference is the product stack, not the care."
        actions={<Button variant="secondary" icon="message-circle" onClick={() => onNavigate('book')}>Ask which tier fits</Button>}
      >
        <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginBottom: 'var(--sp-8)' }}>
          <TierBadge tier="platinum" label="Platinum" size="lg" />
          <TierBadge tier="gold" label="Gold" size="lg" />
          <TierBadge tier="silver" label="Silver" size="lg" />
          <TierBadge tier="sealant" label="Sealant" size="lg" />
        </div>
        <CoatingTiers onNavigate={onNavigate} />
      </Section>
      <Section tone="dots" narrow eyebrow="Before you book" lead="Common" tail="Questions">
        <Faq items={window.BCC.FAQS} />
      </Section>
    </div>
  );
}

Object.assign(window, { ServicesIndexScreen, ServiceScreen, CoatingsScreen, CoatingTiers });
})();
