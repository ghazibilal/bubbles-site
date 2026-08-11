(() => {
const { useState } = React;
const DS = window.BubblesCarCareDesignSystem_459ca2;
const { DisplayHeading, Button, Badge, Icon, Section, Field, Input, Select, Textarea, Checkbox, FeatureList, WhatsAppCta, Breadcrumbs, CheckDot } = DS;

const CLASSES = ['Small hatchback', 'Medium hatchback', 'Sedan', 'Luxury sedan / Crossover', 'SUV'];

function BookScreen({ onNavigate }) {
  const BRANCHES = window.BCC.BRANCHES;
  const SERVICE_OPTIONS = window.BCC.SERVICES.map((s) => s.title);
  const [form, setForm] = useState({ name: '', phone: '', car: '', vclass: '', service: '', notes: '', branch: 'dha', reminders: true });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'We need a name for the booking.';
    if (!form.phone.trim()) e.phone = 'A WhatsApp number, so we can reply.';
    if (!form.car.trim()) e.car = 'Tell us the make and model.';
    setErrors(e);
    if (!Object.keys(e).length) setSent(true);
  };

  if (sent) {
    return (
      <Section narrow tone="dots">
        <div className="bcc-cutbox">
          <div className="bcc-cutbox__inner" style={{ padding: 'clamp(28px,5vw,48px)', textAlign: 'center' }}>
            <CheckDot size={52} style={{ margin: '0 auto var(--sp-6)' }} />
            <DisplayHeading lead="Request" tail="Received" size="md" align="center" />
            <p style={{ margin: 'var(--sp-5) auto 0', maxWidth: '46ch', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-muted)' }}>
              Thanks {form.name.split(' ')[0]}. We will message you on {form.phone} within the hour — sooner if
              you are reading this between 10am and 9pm. Nothing is confirmed until we agree a slot.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--sp-8)' }}>
              <WhatsAppCta label="Message us now" message={`Hi Bubbles Car Care, I just requested a booking for my ${form.car || 'car'}.`} />
              <Button variant="ghost" onClick={() => { setSent(false); setForm({ ...form, notes: '' }); }}>Edit the request</Button>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <div>
      <div className="bcc-container" style={{ paddingBlock: 'var(--sp-6)' }}>
        <Breadcrumbs items={[{ id: 'home', label: 'Home' }, { label: 'Book a slot' }]} onNavigate={onNavigate} />
      </div>
      <Section
        eyebrow="Booking"
        lead="Tell us"
        tail="The car"
        intro="Two minutes. We reply on WhatsApp with a price, a date, and how long we need the car for."
      >
        <div className="bcc-split">
          <div className="bcc-grid" style={{ '--cols': 2, '--cols-md': 2, '--cols-sm': 1, gap: 'var(--sp-5)' }}>
            <Field label="Your name" required htmlFor="bk-name" error={errors.name}>
              <Input id="bk-name" placeholder="e.g. Bilal Ahmed" value={form.name} invalid={!!errors.name} onChange={(e) => set('name')(e.target.value)} />
            </Field>
            <Field label="WhatsApp number" required htmlFor="bk-phone" error={errors.phone} hint={errors.phone ? undefined : 'We reply within an hour, 10am–9pm.'}>
              <Input id="bk-phone" icon="phone" placeholder="0300 0000000" value={form.phone} invalid={!!errors.phone} onChange={(e) => set('phone')(e.target.value)} />
            </Field>
            <Field label="Car" required htmlFor="bk-car" error={errors.car}>
              <Input id="bk-car" icon="car" placeholder="e.g. Honda City 2021" value={form.car} invalid={!!errors.car} onChange={(e) => set('car')(e.target.value)} />
            </Field>
            <Field label="Vehicle class" htmlFor="bk-class" hint="Not sure? Leave it — we will tell you.">
              <Select id="bk-class" placeholder="Choose your vehicle class" options={CLASSES} value={form.vclass} onChange={(e) => set('vclass')(e.target.value)} />
            </Field>
            <Field label="Service" htmlFor="bk-service" style={{ gridColumn: '1 / -1' }}>
              <Select id="bk-service" placeholder="What are you booking?" options={SERVICE_OPTIONS} value={form.service} onChange={(e) => set('service')(e.target.value)} />
            </Field>
            <Field label="Branch" htmlFor="bk-branch" style={{ gridColumn: '1 / -1' }}>
              <div className="bcc-grid" style={{ '--cols': 2, '--cols-md': 2, '--cols-sm': 1, gap: 'var(--sp-3)' }}>
                {BRANCHES.map((b) => {
                  const on = form.branch === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => set('branch')(b.id)}
                      style={{
                        textAlign: 'left', cursor: 'pointer', padding: 'var(--sp-4)',
                        background: on ? 'var(--amber-tint-08)' : 'var(--bg-surface-2)',
                        border: `1px solid ${on ? 'var(--accent)' : 'var(--border-subtle)'}`,
                        borderRadius: 'var(--r-sm)', transition: 'border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out)',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-semibold)', color: on ? 'var(--text-accent)' : 'var(--text-primary)' }}>
                        <Icon name="map-pin" size={15} color={on ? 'var(--accent)' : 'var(--text-faint)'} />{b.name}
                      </span>
                      <span style={{ display: 'block', marginTop: 4, fontSize: 'var(--fs-caption)', color: 'var(--text-faint)' }}>{b.address}</span>
                    </button>
                  );
                })}
              </div>
            </Field>
            <Field label="Anything we should know?" htmlFor="bk-notes" style={{ gridColumn: '1 / -1' }}>
              <Textarea id="bk-notes" placeholder="Swirl marks on the bonnet, kids seat stains, rust starting under the doors…" value={form.notes} onChange={(e) => set('notes')(e.target.value)} />
            </Field>
            <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--sp-5)', flexWrap: 'wrap' }}>
              <Checkbox label="Send me maintenance reminders on WhatsApp" checked={form.reminders} onChange={set('reminders')} />
              <Button size="lg" cut icon="message-circle" onClick={submit}>Request a quote</Button>
            </div>
          </div>

          <aside style={{ display: 'grid', gap: 'var(--sp-6)' }}>
            <div className="bcc-card" style={{ padding: 'var(--sp-6)' }}>
              <h3 className="bcc-eyebrow" style={{ marginBottom: 'var(--sp-4)' }}>What happens next</h3>
              <FeatureList
                size="sm"
                items={['We message you a price for your class.', 'You pick a day; we block the bay.', 'Drop the car, we send photos as we go.', 'Collect, with a record of what we applied.']}
              />
            </div>
            <div className="bcc-card" style={{ padding: 'var(--sp-6)', display: 'grid', gap: 'var(--sp-4)' }}>
              <h3 className="bcc-eyebrow">Rather just message?</h3>
              <p style={{ margin: 0, fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>
                Most bookings happen on WhatsApp. Send a photo of the car and we will quote from that.
              </p>
              <WhatsAppCta label="Book on WhatsApp" style={{ justifyContent: 'center' }} />
              <div style={{ display: 'grid', gap: 'var(--sp-2)' }}>
                {BRANCHES.map((b) => (
                  <a key={b.id} href={`tel:${b.phone.replace(/\s/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)' }}>
                    <Icon name="phone" size={15} color="var(--accent)" />{b.phone}
                    <span style={{ marginLeft: 'auto', fontSize: 'var(--fs-caption)', color: 'var(--text-faint)' }}>{b.name}</span>
                  </a>
                ))}
              </div>
              <Badge variant="soft" style={{ justifySelf: 'start' }}>Mon–Sun · 10am – 9pm</Badge>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { BookScreen });

})();
