/* @ds-bundle: {"format":4,"namespace":"BubblesCarCareDesignSystem_459ca2","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"WhatsAppCta","sourcePath":"components/actions/WhatsAppCta.jsx"},{"name":"ChevronBanner","sourcePath":"components/brand/ChevronBanner.jsx"},{"name":"DisplayHeading","sourcePath":"components/brand/DisplayHeading.jsx"},{"name":"HexFrame","sourcePath":"components/brand/HexFrame.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"CheckDot","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Reveal","sourcePath":"components/brand/Reveal.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"BeforeAfter","sourcePath":"components/content/BeforeAfter.jsx"},{"name":"Faq","sourcePath":"components/content/Faq.jsx"},{"name":"FeatureList","sourcePath":"components/content/FeatureList.jsx"},{"name":"Gallery","sourcePath":"components/content/Gallery.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"StatCounter","sourcePath":"components/content/StatCounter.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"ReviewCard","sourcePath":"components/media/ReviewCard.jsx"},{"name":"VideoCard","sourcePath":"components/media/VideoCard.jsx"},{"name":"VideoGallery","sourcePath":"components/media/VideoGallery.jsx"},{"name":"SocialStrip","sourcePath":"components/media/VideoGallery.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"MobileNav","sourcePath":"components/navigation/MobileNav.jsx"},{"name":"NavHeader","sourcePath":"components/navigation/NavHeader.jsx"},{"name":"PriceCard","sourcePath":"components/pricing/PriceCard.jsx"},{"name":"PriceRow","sourcePath":"components/pricing/PriceRow.jsx"},{"name":"PricingTable","sourcePath":"components/pricing/PricingTable.jsx"},{"name":"TierBadge","sourcePath":"components/pricing/TierBadge.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b1032b6c0fb7","components/actions/WhatsAppCta.jsx":"723789099165","components/brand/ChevronBanner.jsx":"fa1d18bcaa8e","components/brand/DisplayHeading.jsx":"77591797516f","components/brand/HexFrame.jsx":"344bf67c5165","components/brand/Icon.jsx":"24d94550da5d","components/brand/Logo.jsx":"d2460d0dec55","components/brand/Reveal.jsx":"3d079a09bdd4","components/content/Badge.jsx":"23b66b2433be","components/content/BeforeAfter.jsx":"88981c4c630b","components/content/Faq.jsx":"21a8d69dcf11","components/content/FeatureList.jsx":"753a67c3d80a","components/content/Gallery.jsx":"65fc5d1e2837","components/content/ProjectCard.jsx":"3812d0e3ba49","components/content/ServiceCard.jsx":"e5e3c9b74dfe","components/content/StatCounter.jsx":"a1c78ebf6355","components/content/TestimonialCard.jsx":"61598c1fa9a4","components/forms/Checkbox.jsx":"e99a24d04d04","components/forms/Field.jsx":"5fce0a32c734","components/forms/Input.jsx":"944a116297c4","components/forms/Select.jsx":"31132cd08182","components/forms/Textarea.jsx":"e76b347d8d35","components/layout/Footer.jsx":"2fd876d4d9cf","components/layout/Section.jsx":"fe95a3b68b9d","components/media/ReviewCard.jsx":"e371c4fc3ba1","components/media/VideoCard.jsx":"55667fedac1d","components/media/VideoGallery.jsx":"423c4f92607d","components/navigation/Breadcrumbs.jsx":"afaaa8ae827f","components/navigation/MobileNav.jsx":"1fd583552067","components/navigation/NavHeader.jsx":"d2a3d4ff4d84","components/pricing/PriceCard.jsx":"9ba075ed0e48","components/pricing/PriceRow.jsx":"b3d45ab2c43c","components/pricing/PricingTable.jsx":"34580e21b25d","components/pricing/TierBadge.jsx":"ee41746a13de","ui_kits/social/PosterTemplates.jsx":"7629eef549f8","ui_kits/website/BookScreen.jsx":"4cab83c5be74","ui_kits/website/HomeScreen.jsx":"e61d634b2387","ui_kits/website/ProjectsScreen.jsx":"0f506b92893d","ui_kits/website/ServiceScreens.jsx":"1f88c1c1b00c","ui_kits/website/VideosScreen.jsx":"b01ed7fb53f7","ui_kits/website/data.jsx":"74b933d68b45"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BubblesCarCareDesignSystem_459ca2 = window.BubblesCarCareDesignSystem_459ca2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ChevronBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Amber chevron banner — one short, confident statement. Never a paragraph.
 * Black italic uppercase text on amber, arrow point trailing right.
 */
function ChevronBanner({
  children,
  size = 'md',
  style,
  ...rest
}) {
  const pad = size === 'lg' ? 'var(--sp-5) var(--sp-16) var(--sp-5) var(--sp-8)' : 'var(--sp-3) var(--sp-12) var(--sp-3) var(--sp-6)';
  const fs = size === 'lg' ? 'var(--fs-h4)' : 'var(--fs-body-sm)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-block',
      clipPath: 'var(--chevron)',
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      padding: pad,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      fontSize: fs,
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--tr-tight)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ChevronBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ChevronBanner.jsx", error: String((e && e.message) || e) }); }

// components/brand/DisplayHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The signature two-line headline: line 1 amber, line 2 white,
 * Poppins Black Italic, uppercase. Never invert the colour order.
 */
function DisplayHeading({
  lead,
  tail,
  size = 'lg',
  as = 'h2',
  eyebrow,
  align = 'left',
  poster = false,
  style,
  ...rest
}) {
  const Tag = as;
  const posterSize = {
    xl: 'var(--fs-poster-xl)',
    lg: 'var(--fs-poster-lg)',
    md: 'var(--fs-poster-md)',
    sm: 'var(--fs-poster-md)'
  }[size];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "bcc-eyebrow",
    style: {
      marginBottom: 'var(--sp-3)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement(Tag, {
    className: `bcc-display bcc-display--${size}`,
    style: poster ? {
      fontSize: posterSize,
      textShadow: 'var(--text-shadow-poster)',
      transform: `scaleX(var(--display-condense))`,
      transformOrigin: align === 'center' ? 'center' : 'left'
    } : undefined
  }, lead ? /*#__PURE__*/React.createElement("span", {
    className: "bcc-display__lead"
  }, lead) : null, tail ? /*#__PURE__*/React.createElement("span", {
    className: "bcc-display__tail"
  }, tail) : null));
}
Object.assign(__ds_scope, { DisplayHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DisplayHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/HexFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexagon photo / icon frame — the brand's primary motif.
 * `v` (pointy top & bottom) frames photography; `h` (pointy left & right) is for badges.
 * Always keep the amber stroke: a bare hexagon photo is off-brand.
 */
function HexFrame({
  src,
  alt = '',
  orientation = 'v',
  width = 200,
  height,
  stroke = 3,
  children,
  style,
  ...rest
}) {
  const clip = orientation === 'h' ? 'var(--hex-h)' : 'var(--hex-v)';
  const h = height ?? (orientation === 'h' ? Math.round(width * 0.58) : Math.round(width * 1.12));
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "bcc-hexframe",
    style: {
      width,
      height: h,
      clipPath: clip,
      padding: stroke,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bcc-hexframe__inner",
    style: {
      clipPath: clip,
      display: 'grid',
      placeItems: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : children));
}
Object.assign(__ds_scope, { HexFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/HexFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'https://unpkg.com/lucide-static@0.469.0/icons/';

/**
 * Lucide icon rendered as a CSS mask so it always inherits currentColor.
 * Bubbles Car Care uses Lucide outline icons at 1.75–2px optical weight.
 */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  title,
  style,
  ...rest
}) {
  const url = BASE + name + '.svg';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : 'true',
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }, rest));
}

/** Filled amber disc + near-black check — the brand's bullet icon. */
function CheckDot({
  size = 22,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'grid',
      placeItems: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: 'var(--accent)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: Math.round(size * 0.62),
    color: "var(--text-on-accent)"
  }));
}
Object.assign(__ds_scope, { Icon, CheckDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary = amber fill, near-black label. Exactly one per view.
 * Secondary = amber outline. Ghost = bare, for tertiary/inline actions.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconAfter,
  cut = false,
  block = false,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['bcc-btn', `bcc-btn--${variant}`, `bcc-btn--${size}`, cut && variant === 'primary' ? 'bcc-btn--cut' : '', block ? 'bcc-btn--block' : '', className].filter(Boolean).join(' ');
  const iconSize = size === 'lg' ? 20 : size === 'sm' ? 15 : 17;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: iconSize
  }) : null);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/WhatsAppCta.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_NUMBER = '923302822537';

/**
 * WhatsApp is how Karachi customers actually book. Amber pill, black label.
 * `floating` pins it bottom-right on every page of the marketing site.
 */
function WhatsAppCta({
  label = 'Book on WhatsApp',
  phone = DEFAULT_NUMBER,
  message = 'Hi Bubbles Car Care, I would like a quote for',
  floating = false,
  compact = false,
  style,
  ...rest
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return /*#__PURE__*/React.createElement("a", _extends({
    className: `bcc-wa${floating ? ' bcc-wa--float' : ''}`,
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: compact ? {
      padding: 'var(--sp-3)',
      ...style
    } : style,
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 20
  }), compact ? null : label);
}
Object.assign(__ds_scope, { WhatsAppCta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/WhatsAppCta.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = 'assets/logo.png';

/**
 * The Bubbles Car Care badge. Supplied as artwork — never redraw or recolour it.
 * `src` lets a consumer point at their own copy of assets/logo.png.
 */
function Logo({
  size = 64,
  src = SRC,
  wordmark = false,
  href,
  style,
  ...rest
}) {
  const mark = /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Bubbles Car Care",
    style: {
      width: size,
      height: size,
      objectFit: 'contain',
      flex: '0 0 auto'
    }
  });
  const nameSize = Math.max(17, Math.round(size * 0.4));
  const content = wordmark ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)'
    }
  }, mark, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bcc-display",
    style: {
      display: 'block',
      fontSize: nameSize,
      lineHeight: .95,
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap'
    }
  }, "Bubbles"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 3,
      fontSize: Math.max(11, Math.round(size * 0.2)),
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tr-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      whiteSpace: 'nowrap'
    }
  }, "Car Care"))) : mark;
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, rest), content) : /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, rest), content);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Scroll-reveal wrapper. Adds `.is-in` when the element enters the viewport,
 * which fires the fade-up (or named variant) from tokens/animation.css.
 * Animates once, then stays. No-ops under prefers-reduced-motion.
 */
function Reveal({
  children,
  variant = 'up',
  delay = 0,
  as = 'div',
  threshold = 0.15,
  className = '',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-in');
      return;
    }
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-in');
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: Math.min(threshold, 0.15)
    });
    io.observe(el);
    const _near = () => el.getBoundingClientRect().top < window.innerHeight + 80;
    const _onScroll = () => { if (_near()) _show(); };
    const _show = () => {
      el.classList.add('is-in');
      io.disconnect();
      window.removeEventListener('scroll', _onScroll);
      window.removeEventListener('resize', _onScroll);
    };
    if (_near()) _show();
    window.addEventListener('scroll', _onScroll, { passive: true });
    window.addEventListener('resize', _onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', _onScroll);
      window.removeEventListener('resize', _onScroll);
    };
  }, [threshold]);
  const Tag = as;
  const variantClass = variant === 'up' ? '' : ` bcc-reveal--${variant}`;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: `bcc-reveal${variantClass} ${className}`.trim(),
    style: {
      '--d': `${delay}ms`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small amber label. `solid` for emphasis (black text), `soft`/`outline` for metadata. */
function Badge({
  children,
  variant = 'soft',
  style,
  ...rest
}) {
  const skin = {
    solid: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--accent)'
    },
    soft: {
      background: 'var(--amber-tint-08)',
      color: 'var(--text-accent)',
      border: '1px solid var(--amber-tint-32)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-subtle)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      padding: '5px var(--sp-3)',
      borderRadius: 'var(--r-pill)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      lineHeight: 1.25,
      whiteSpace: 'nowrap',
      ...skin,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/BeforeAfter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Draggable before/after comparison. Pointer drag, click-to-jump, and
 * arrow-key support. The amber handle is the only chrome.
 */
function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
  start = 50,
  aspect = '16 / 10',
  note,
  style,
  ...rest
}) {
  const [pos, setPos] = React.useState(start);
  const [dragging, setDragging] = React.useState(false);
  const box = React.useRef(null);
  const setFromEvent = clientX => {
    const r = box.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, (clientX - r.left) / r.width * 100)));
  };
  const onDown = e => {
    setDragging(true);
    setFromEvent(e.clientX);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onMove = e => {
    if (dragging) setFromEvent(e.clientX);
  };
  const onUp = () => setDragging(false);
  const onKey = e => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPos(p => Math.max(0, p - 4));
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPos(p => Math.min(100, p + 4));
    }
  };
  const tag = {
    position: 'absolute',
    top: 'var(--sp-3)',
    zIndex: 3,
    padding: '5px var(--sp-3)',
    borderRadius: 'var(--r-pill)',
    fontSize: 'var(--fs-caption)',
    fontWeight: 'var(--fw-bold)',
    letterSpacing: 'var(--tr-label)',
    textTransform: 'uppercase',
    pointerEvents: 'none',
    transition: 'opacity var(--dur) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    ref: box,
    role: "slider",
    tabIndex: 0,
    "aria-label": `${beforeLabel} and ${afterLabel} comparison`,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(pos),
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onUp,
    onKeyDown: onKey,
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: aspect,
      overflow: 'hidden',
      borderRadius: 'var(--r-card)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--bg-surface-2)',
      cursor: dragging ? 'grabbing' : 'ew-resize',
      touchAction: 'none',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: afterSrc,
    alt: afterLabel,
    draggable: "false",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.96) contrast(1.08)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: `${pos}%`,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: beforeSrc,
    alt: beforeLabel,
    draggable: "false",
    style: {
      position: 'absolute',
      inset: 0,
      width: 'auto',
      height: '100%',
      minWidth: '100%',
      objectFit: 'cover',
      filter: 'saturate(.62) contrast(.94) brightness(.86)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      ...tag,
      left: 'var(--sp-3)',
      background: 'var(--bg-overlay)',
      color: 'var(--text-muted)',
      opacity: pos > 12 ? 1 : 0
    }
  }, beforeLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      ...tag,
      right: 'var(--sp-3)',
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      opacity: pos < 88 ? 1 : 0
    }
  }, afterLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: `${pos}%`,
      width: 2,
      background: 'var(--accent)',
      transform: 'translateX(-1px)',
      zIndex: 2,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: `${pos}%`,
      transform: 'translate(-50%,-50%)',
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--accent)',
      display: 'grid',
      gridAutoFlow: 'column',
      placeItems: 'center',
      gap: 1,
      boxShadow: 'var(--glow-amber)',
      zIndex: 3,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16,
    color: "var(--text-on-accent)"
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--text-on-accent)"
  }))), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-3) 0 0',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { BeforeAfter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BeforeAfter.jsx", error: String((e && e.message) || e) }); }

// components/content/Faq.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FAQ accordion. One open at a time by default; amber plus/minus, hairline rules,
 * no card chrome. Panel height animates with grid-template-rows.
 */
function Faq({
  items = [],
  defaultOpen = 0,
  allowMultiple = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen === null ? [] : [defaultOpen]);
  const toggle = i => {
    setOpen(prev => {
      const has = prev.includes(i);
      if (allowMultiple) return has ? prev.filter(n => n !== i) : [...prev, i];
      return has ? [] : [i];
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), items.map((it, i) => {
    const isOpen = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      className: "bcc-faq__item",
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "bcc-faq__q",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? 'minus' : 'plus',
      size: 20,
      color: "var(--accent)"
    })), /*#__PURE__*/React.createElement("div", {
      className: `bcc-faq__panel${isOpen ? ' bcc-faq__panel--open' : ''}`
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        paddingBottom: 'var(--sp-5)',
        paddingRight: 'var(--sp-10)',
        fontSize: 'var(--fs-body-sm)',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--text-muted)',
        textWrap: 'pretty'
      }
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Faq });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Faq.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The amber circular checkmark list — every service and benefit list on every
 * surface uses this. Sentence case on web; UPPERCASE only on posters.
 */
function FeatureList({
  items = [],
  columns = 1,
  size = 'md',
  style,
  ...rest
}) {
  const dot = size === 'lg' ? 26 : size === 'sm' ? 18 : 22;
  const fs = size === 'lg' ? 'var(--fs-body-lg)' : size === 'sm' ? 'var(--fs-body-sm)' : 'var(--fs-body)';
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      gap: size === 'sm' ? 'var(--sp-3)' : 'var(--sp-4)',
      columnGap: 'var(--sp-8)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CheckDot, {
    size: dot,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: fs,
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, it))));
}
Object.assign(__ds_scope, { FeatureList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureList.jsx", error: String((e && e.message) || e) }); }

// components/content/Gallery.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Before/after and work gallery. `layout="hex"` is the poster-style staggered
 * hexagon cluster (fixed size, decorative). `layout="grid"` is the responsive
 * default for web — rectangles with a cut corner, hexagons only as accents.
 */
function Gallery({
  items = [],
  layout = 'grid',
  columns = 3,
  style,
  ...rest
}) {
  if (layout === 'hex') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 4,
        ...style
      }
    }, rest), items.slice(0, 5).map((it, i) => /*#__PURE__*/React.createElement(__ds_scope.HexFrame, {
      key: i,
      src: it.src,
      alt: it.caption || '',
      width: i % 2 ? 168 : 196,
      stroke: 3,
      style: {
        marginTop: i % 2 ? 92 : -92,
        marginInline: -14
      }
    })));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      gap: 'var(--sp-3)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    className: "bcc-gal__item bcc-cut-corner",
    style: {
      margin: 0,
      aspectRatio: i === 0 ? '4 / 3' : '4 / 3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.src,
    alt: it.caption || ''
  }), it.caption ? /*#__PURE__*/React.createElement("figcaption", {
    className: "bcc-gal__cap"
  }, it.caption) : null)));
}
Object.assign(__ds_scope, { Gallery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Gallery.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A finished job. Car, service taken, duration, and one line on what the
 * problem was. Used on the Projects page — richer than a Gallery tile.
 */
function ProjectCard({
  car,
  service,
  image,
  problem,
  duration,
  branch,
  tier,
  featured = false,
  onOpen,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    className: "bcc-projcard",
    onClick: onOpen,
    role: onOpen ? 'button' : undefined,
    tabIndex: onOpen ? 0 : undefined,
    style: {
      position: 'relative',
      overflow: 'hidden',
      cursor: onOpen ? 'pointer' : 'default',
      clipPath: 'var(--cut-corner)',
      background: 'var(--bg-surface)',
      border: 0,
      aspectRatio: featured ? '16 / 11' : '4 / 3.35',
      display: 'block',
      width: '100%',
      padding: 0,
      textAlign: 'left',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    className: "bcc-projcard__img",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.92) contrast(1.06)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-photo-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      padding: 'var(--sp-5)',
      display: 'grid',
      gap: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "solid"
  }, service), tier ? /*#__PURE__*/React.createElement(__ds_scope.Badge, null, tier) : null), /*#__PURE__*/React.createElement("h3", {
    className: "bcc-display",
    style: {
      fontSize: featured ? 'var(--fs-display-md)' : 'var(--fs-display-sm)',
      lineHeight: 1
    }
  }, car), problem ? /*#__PURE__*/React.createElement("p", {
    className: "bcc-projcard__body",
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-muted)',
      textWrap: 'pretty',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, problem) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap',
      marginTop: 'var(--sp-1)'
    }
  }, duration ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 14,
    color: "var(--accent)"
  }), duration) : null, branch ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--accent)"
  }), branch) : null)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The website's service tile. Photo header, hexagon icon badge overlapping the
 * photo edge, title, one-line summary, "from" price, and a quiet amber link.
 */
function ServiceCard({
  title,
  summary,
  image,
  icon = 'sparkles',
  fromPrice,
  href = '#',
  onOpen,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    className: "bcc-cutbox bcc-cutbox--interactive",
    style: style,
    onClick: onOpen
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bcc-cutbox__inner",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: 'var(--bg-surface-2)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.92) contrast(1.06)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(8,8,8,.1) 0%,rgba(8,8,8,.75) 100%)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.HexFrame, {
    orientation: "v",
    width: 46,
    height: 52,
    stroke: 2,
    style: {
      position: 'absolute',
      left: 'var(--sp-5)',
      bottom: -18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "var(--accent)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-8) var(--sp-5) var(--sp-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "bcc-display bcc-display--sm"
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--sp-4)',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)'
    }
  }, fromPrice ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tr-label)'
    }
  }, "From"), /*#__PURE__*/React.createElement("span", {
    className: "bcc-price",
    style: {
      fontSize: 'var(--fs-h4)',
      color: 'var(--text-accent)'
    }
  }, fromPrice)) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: e => {
      if (onOpen) {
        e.preventDefault();
        onOpen();
      }
    },
    className: "bcc-inline-link",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase'
    }
  }, "Details ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 14
  }))))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCounter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Number that counts up when it scrolls into view. For the stat strip only —
 * never for prices (a price must be readable the instant it renders).
 */
function StatCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1100,
  decimals = 0,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(value);
      return;
    }
    let raf;
    const run = () => {
      const t0 = performance.now();
      const tick = t => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setShown(value * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          run();
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.2
    });
    io.observe(el);
    const _near = () => el.getBoundingClientRect().top < window.innerHeight + 40;
    const _onScroll = () => { if (_near()) { run(); _stop(); } };
    const _stop = () => {
      io.disconnect();
      if (_t) { clearTimeout(_t); _t = 0; }
      window.removeEventListener('scroll', _onScroll);
      window.removeEventListener('resize', _onScroll);
    };
    let _t = setTimeout(() => { _t = 0; setShown(value); _stop(); }, 2500);
    if (_near()) { run(); _stop(); }
    window.addEventListener('scroll', _onScroll, { passive: true });
    window.addEventListener('resize', _onScroll, { passive: true });
    return () => {
      _stop();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, duration]);
  const text = decimals ? shown.toFixed(decimals) : Math.round(shown).toLocaleString('en-US');
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: "bcc-price",
    style: {
      display: 'inline-block',
      fontVariantNumeric: 'tabular-nums',
      ...style
    }
  }, rest), prefix, text, suffix);
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCounter.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Customer quote. Amber stars, quote in white, name + car in muted meta. */
function TestimonialCard({
  quote,
  name,
  car,
  rating = 5,
  service,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "bcc-card",
    style: {
      margin: 0,
      padding: 'var(--sp-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-1)'
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: 15,
    color: i < rating ? 'var(--accent)' : 'var(--ink-500)'
  }))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-primary)',
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--sp-4)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)'
    }
  }, name), car ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap'
    }
  }, car) : null), service ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      textAlign: 'right'
    }
  }, service) : null));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square amber checkbox. 44px tap row on mobile. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "bcc-check",
    style: {
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: `bcc-check__box${checked ? ' bcc-check__box--on' : ''}`
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    color: "var(--text-on-accent)"
  }) : null), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + control + hint/error wrapper. Labels are uppercase micro-caps, always visible. */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "bcc-field",
    style: style
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    className: "bcc-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "bcc-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "bcc-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text input on a raised charcoal surface. Amber focus ring. */
function Input({
  invalid = false,
  icon,
  className = '',
  style,
  ...rest
}) {
  const field = /*#__PURE__*/React.createElement("input", _extends({
    className: `bcc-input${invalid ? ' bcc-input--invalid' : ''} ${className}`,
    "aria-invalid": invalid || undefined,
    style: icon ? {
      paddingLeft: 44,
      ...style
    } : style
  }, rest));
  if (!icon) return field;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--text-faint)",
    style: {
      position: 'absolute',
      left: 14,
      top: 15,
      pointerEvents: 'none'
    }
  }), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select with the platform arrow replaced by an amber chevron. */
function Select({
  options = [],
  placeholder,
  invalid = false,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: `bcc-input bcc-select${invalid ? ' bcc-input--invalid' : ''} ${className}`,
    "aria-invalid": invalid || undefined,
    style: style
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--accent)",
    style: {
      position: 'absolute',
      right: 14,
      top: 15,
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line input. Vertical resize only; min 132px so it reads as a message box. */
function Textarea({
  invalid = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: `bcc-input bcc-input--textarea${invalid ? ' bcc-input--invalid' : ''} ${className}`,
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_BRANCHES = [{
  name: 'DHA Branch',
  address: 'Plot 20, Sector A, 4th Commercial Street, opp. Defence Police Station, Main Korangi Road, Karachi 75500',
  phone: '0330 2822537',
  hours: 'Mon–Sun, 10am – 9pm'
}, {
  name: 'North Chapter',
  address: 'C-177, Block C, Shahrah-e-Noorjahan, North Nazimabad, adj. Essa General Hospital, Karachi',
  phone: '0300 8233793',
  hours: 'Mon–Sun, 10am – 9pm'
}];
const DEFAULT_SOCIAL = [{
  icon: 'youtube',
  label: 'YouTube',
  url: 'https://www.youtube.com/channel/UCAyzXaIEBDVXZB5Suj_eCYg/videos'
}, {
  icon: 'instagram',
  label: 'Instagram',
  url: 'https://www.instagram.com/bubbles.carcare/'
}, {
  icon: 'facebook',
  label: 'Facebook',
  url: 'https://www.facebook.com/bubblescarcare/'
}];

/** Site footer: dot-textured dark base, two branch blocks, service links, contact. */
function Footer({
  logoSrc = 'assets/logo.png',
  branches = DEFAULT_BRANCHES,
  serviceLinks = [],
  site = 'bubblescarcare.pk',
  email = 'info@bubblescarcare.pk',
  social = DEFAULT_SOCIAL,
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: "bcc-dots",
    style: {
      background: 'var(--bg-base)',
      borderTop: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bcc-container",
    style: {
      paddingBlock: 'var(--sp-16) var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    size: 104
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      maxWidth: '30ch',
      textWrap: 'pretty'
    }
  }, "Paint protection and detailing for daily-driven cars in Karachi. Two branches, one standard."), /*#__PURE__*/React.createElement(__ds_scope.WhatsAppCta, {
    label: "WhatsApp us"
  })), branches.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "bcc-eyebrow"
  }, b.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--accent)",
    style: {
      marginTop: 3
    }
  }), b.address), /*#__PURE__*/React.createElement("a", {
    href: `tel:${b.phone.replace(/\s/g, '')}`,
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16,
    color: "var(--accent)",
    style: {
      marginTop: 3
    }
  }), b.phone), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 16,
    color: "var(--accent)",
    style: {
      marginTop: 3
    }
  }), b.hours))), serviceLinks.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "bcc-eyebrow"
  }, "Services"), serviceLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l.id);
      }
    },
    className: "bcc-inline-link",
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, l.label))) : null), /*#__PURE__*/React.createElement("div", {
    className: "bcc-footer__bottom",
    style: {
      marginTop: 'var(--sp-12)',
      paddingTop: 'var(--sp-5)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "bcc-inline-link",
    href: `https://${site}`,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      gap: 'var(--sp-2)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "globe",
    size: 15,
    color: "var(--accent)"
  }), site), /*#__PURE__*/React.createElement("a", {
    className: "bcc-inline-link",
    href: `mailto:${email}`,
    style: {
      gap: 'var(--sp-2)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 15,
    color: "var(--accent)"
  }), email)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-2)'
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.url,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": s.label,
    className: "bcc-social__dot"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 17
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, "\xA9 ", new Date().getFullYear(), " Bubbles Car Care"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section wrapper. `tone="dots"` puts the low-contrast amber dot texture on the
 * page base; `tone="surface"` is a flat charcoal band. Alternate them — never
 * more than two background tones in one page.
 */
function Section({
  eyebrow,
  lead,
  tail,
  intro,
  tone = 'base',
  align = 'left',
  actions,
  children,
  narrow = false,
  style,
  ...rest
}) {
  const bg = tone === 'surface' ? 'var(--bg-surface)' : 'var(--bg-base)';
  return /*#__PURE__*/React.createElement("section", _extends({
    className: tone === 'dots' ? 'bcc-dots bcc-section' : 'bcc-section',
    style: {
      background: bg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: `bcc-container${narrow ? ' bcc-container--narrow' : ''}`
  }, lead || tail || eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--sp-8)',
      flexWrap: 'wrap',
      marginBottom: 'var(--sp-10)',
      flexDirection: align === 'center' ? 'column' : 'row',
      textAlign: align === 'center' ? 'center' : 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '60ch'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DisplayHeading, {
    eyebrow: eyebrow,
    lead: lead,
    tail: tail,
    size: "lg",
    align: align
  }), intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-5) 0 0',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 'var(--fw-light)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, intro) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      flexWrap: 'wrap'
    }
  }, actions) : null) : null, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/media/ReviewCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A review as published on Google. Verbatim quote, reviewer name, star row, and a
 * "Google review" provenance line — never restyled into marketing copy.
 */
function ReviewCard({
  quote,
  name,
  rating = 5,
  source = 'Google',
  service,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "bcc-review",
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bcc-review__mark",
    "aria-hidden": "true"
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: 15,
    color: i < rating ? 'var(--accent)' : 'var(--ink-500)'
  }))), /*#__PURE__*/React.createElement("blockquote", {
    className: "bcc-review__quote"
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    className: "bcc-review__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bcc-review__who"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bcc-review__name"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "bcc-review__src"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "badge-check",
    size: 13,
    color: "var(--accent)"
  }), source, " review")), service ? /*#__PURE__*/React.createElement("span", {
    className: "bcc-review__svc"
  }, service) : null));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/media/VideoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const YT_THUMB = (id, q = 'hqdefault') => `https://i.ytimg.com/vi/${id}/${q}.jpg`;

/**
 * Lazy video card ("facade" pattern): renders the real platform thumbnail plus an
 * amber play button, and only injects the player iframe once the visitor clicks.
 * No third-party script loads until then.
 */
function VideoCard({
  videoId,
  platform = 'youtube',
  url,
  title,
  car,
  service,
  kind = 'work',
  aspect = '16 / 9',
  poster,
  autoplayOnClick = true,
  style,
  ...rest
}) {
  const [playing, setPlaying] = React.useState(false);
  const [thumb, setThumb] = React.useState(poster || (platform === 'youtube' && videoId ? YT_THUMB(videoId, 'maxresdefault') : null));
  const embed = platform === 'youtube' ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1${autoplayOnClick ? '&autoplay=1' : ''}` : platform === 'instagram' ? `https://www.instagram.com/p/${videoId}/embed` : url;
  const watchUrl = url || (platform === 'youtube' ? `https://www.youtube.com/watch?v=${videoId}` : undefined);
  const isReview = kind === 'review';
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "bcc-video",
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bcc-video__frame",
    style: {
      aspectRatio: aspect
    }
  }, playing ? /*#__PURE__*/React.createElement("iframe", {
    src: embed,
    title: title,
    loading: "lazy",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",
    allowFullScreen: true,
    referrerPolicy: "strict-origin-when-cross-origin",
    style: {
      width: '100%',
      height: '100%',
      border: 0,
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bcc-video__play",
    onClick: () => setPlaying(true),
    "aria-label": `Play: ${title}`
  }, thumb ? /*#__PURE__*/React.createElement("img", {
    src: thumb,
    alt: "",
    loading: "lazy",
    onError: () => setThumb(videoId ? YT_THUMB(videoId, 'hqdefault') : null)
  }) : /*#__PURE__*/React.createElement("span", {
    className: "bcc-video__noimg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bcc-video__scrim"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bcc-video__btn"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play",
    size: 22,
    color: "var(--text-on-accent)"
  })), isReview ? /*#__PURE__*/React.createElement("span", {
    className: "bcc-video__tag"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 12,
    color: "var(--text-on-accent)"
  }), "Customer review") : null)), /*#__PURE__*/React.createElement("figcaption", {
    className: "bcc-video__cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bcc-video__title"
  }, title), car || service ? /*#__PURE__*/React.createElement("span", {
    className: "bcc-video__meta"
  }, car ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, car) : null, service ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "soft"
  }, service) : null) : null, watchUrl ? /*#__PURE__*/React.createElement("a", {
    className: "bcc-inline-link bcc-video__link",
    href: watchUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Watch on ", platform === 'youtube' ? 'YouTube' : platform === 'instagram' ? 'Instagram' : 'Facebook', /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external-link",
    size: 13
  })) : null));
}
Object.assign(__ds_scope, { VideoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/VideoCard.jsx", error: String((e && e.message) || e) }); }

// components/media/VideoGallery.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Grid of lazy video cards with an optional service filter.
 * `layout="feature"` promotes the first video to a wide hero tile.
 */
function VideoGallery({
  videos = [],
  columns = 3,
  layout = 'grid',
  filterable = false,
  filterKey = 'service',
  emptyLabel = 'No videos posted for that service yet.',
  style,
  ...rest
}) {
  const [filter, setFilter] = React.useState('All');
  const values = Array.from(new Set(videos.map(v => v[filterKey]).filter(Boolean)));
  const shown = filter === 'All' ? videos : videos.filter(v => v[filterKey] === filter);
  // A featured tile needs enough siblings to fill the row beside it; below that the
  // grid would leave a large void, so fall back to an even grid.
  const useFeature = layout === 'feature' && shown.length >= 5;
  const [lead, ...tail] = shown;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), filterable && values.length > 1 ? /*#__PURE__*/React.createElement("div", {
    className: "bcc-tabs",
    role: "tablist",
    "aria-label": "Filter videos",
    style: {
      marginBottom: 'var(--sp-6)'
    }
  }, ['All', ...values].map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    role: "tab",
    "aria-selected": filter === v,
    className: "bcc-tab",
    onClick: () => setFilter(v)
  }, v))) : null, shown.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-faint)'
    }
  }, emptyLabel) : useFeature ? /*#__PURE__*/React.createElement("div", {
    key: filter,
    className: "bcc-videogrid bcc-videogrid--feature"
  }, /*#__PURE__*/React.createElement(__ds_scope.VideoCard, _extends({}, lead, {
    aspect: "16 / 9"
  })), tail.slice(0, 4).map(v => /*#__PURE__*/React.createElement(__ds_scope.VideoCard, _extends({
    key: v.videoId || v.url
  }, v)))) : /*#__PURE__*/React.createElement("div", {
    key: filter,
    className: "bcc-grid",
    style: {
      '--cols': Math.min(columns, Math.max(shown.length, 1)),
      '--cols-md': 2,
      '--cols-sm': 1
    }
  }, shown.map(v => /*#__PURE__*/React.createElement(__ds_scope.VideoCard, _extends({
    key: v.videoId || v.url
  }, v)))));
}

/** Follow-us strip: real handles, real counts, brand-styled. */
function SocialStrip({
  channels = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "bcc-social",
    style: style
  }, rest), channels.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.platform,
    className: "bcc-social__item",
    href: c.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bcc-social__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "bcc-social__handle"
  }, c.handle), c.count ? /*#__PURE__*/React.createElement("span", {
    className: "bcc-social__count"
  }, c.count) : null), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 16,
    color: "var(--text-faint)",
    style: {
      marginLeft: 'auto'
    }
  }))));
}
Object.assign(__ds_scope, { VideoGallery, SocialStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/VideoGallery.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase micro-trail. Amber chevron separators, last crumb white and unlinked. */
function Breadcrumbs({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--sp-2)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.label
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        fontSize: 'var(--fs-caption)',
        letterSpacing: 'var(--tr-label)',
        textTransform: 'uppercase',
        fontWeight: 'var(--fw-semibold)',
        color: 'var(--text-primary)'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      className: "bcc-crumb",
      href: it.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it.id);
        }
      }
    }, it.label), last ? null : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 13,
      color: "var(--accent)"
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MobileNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-screen dark drawer. Big 56px tap rows, amber active marker, CTA pinned at the base. */
function MobileNav({
  open = false,
  links = [],
  current,
  logoSrc = 'assets/logo.png',
  phone = '0330 2822537',
  onNavigate,
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-hidden": !open,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 80,
      background: 'var(--bg-base)',
      display: 'flex',
      flexDirection: 'column',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transform: open ? 'translateY(0)' : 'translateY(-8px)',
      transition: 'opacity var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--header-h-mobile)',
      padding: '0 var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid var(--border-subtle)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    size: 52,
    wordmark: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close menu",
    onClick: onClose,
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 'var(--tap-min)',
      height: 'var(--tap-min)',
      background: 'transparent',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-sm)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 22,
    color: "var(--text-primary)"
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--sp-4) var(--gutter)'
    }
  }, links.map(l => {
    const active = current === l.id;
    return /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: `#${l.id}`,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(l.id);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 56,
        padding: '0 var(--sp-2)',
        borderBottom: '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontWeight: 'var(--fw-extrabold)',
        textTransform: 'uppercase',
        fontSize: 'var(--fs-h4)',
        letterSpacing: 'var(--tr-tight)',
        color: active ? 'var(--text-accent)' : 'var(--text-primary)',
        textDecoration: 'none'
      }
    }, l.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 20,
      color: active ? 'var(--accent)' : 'var(--text-faint)'
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      padding: 'var(--gutter)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'grid',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.WhatsAppCta, {
    label: "Book on WhatsApp",
    style: {
      justifyContent: 'center'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    href: `tel:${phone.replace(/\s/g, '')}`,
    icon: "phone",
    block: true
  }, phone)));
}
Object.assign(__ds_scope, { MobileNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MobileNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sticky translucent header. Logo left, links centre-right, one amber CTA.
 * Collapses to logo + burger below 900px — pair with MobileNav.
 */
function NavHeader({
  links = [],
  current,
  logoSrc = 'assets/logo.png',
  ctaLabel = 'Book now',
  ctaHref = '#book',
  phone = '0330 2822537',
  onNavigate,
  onBurger,
  compact = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: "bcc-nav",
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bcc-container",
    style: {
      height: compact ? 'var(--header-h-mobile)' : 'var(--header-h)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('home');
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    size: compact ? 52 : 64,
    wordmark: true
  })), compact ? null : /*#__PURE__*/React.createElement("nav", {
    className: "bcc-nav__desktop",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-1)',
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    className: "bcc-navlink",
    href: `#${l.id}`,
    "aria-current": current === l.id ? 'page' : undefined,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l.id);
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      marginLeft: compact ? 'auto' : 'var(--sp-4)'
    }
  }, compact ? null : /*#__PURE__*/React.createElement("a", {
    className: "bcc-nav__phone",
    href: `tel:${phone.replace(/\s/g, '')}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16,
    color: "var(--accent)"
  }), phone), compact ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Open menu",
    onClick: onBurger,
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 'var(--tap-min)',
      height: 'var(--tap-min)',
      background: 'transparent',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-sm)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu",
    size: 22,
    color: "var(--text-primary)"
  })) : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: ctaHref,
    cut: true,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('book');
    }
  }, ctaLabel))));
}
Object.assign(__ds_scope, { NavHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavHeader.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PriceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The web-safe descendant of the flyer's hexagon price badge: a card with one
 * cut corner. Vehicle class on top, price in amber below. `featured` fills amber
 * (black text) for the most-taken class.
 */
function PriceCard({
  vehicleClass,
  price,
  note,
  featured = false,
  selected = false,
  onSelect,
  style,
  ...rest
}) {
  const inner = /*#__PURE__*/React.createElement("div", {
    className: "bcc-cutbox__inner",
    style: {
      background: featured ? 'var(--accent)' : 'var(--bg-surface)',
      padding: 'var(--sp-5) var(--sp-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      lineHeight: 'var(--lh-tight)',
      color: featured ? 'var(--text-on-accent)' : 'var(--text-muted)'
    }
  }, vehicleClass), /*#__PURE__*/React.createElement("span", {
    className: "bcc-price",
    style: {
      fontSize: 'var(--fs-h4)',
      color: featured ? 'var(--text-on-accent)' : 'var(--text-accent)'
    }
  }, price), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: featured ? 'rgba(8,8,8,.7)' : 'var(--text-faint)'
    }
  }, note) : null);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `bcc-cutbox${onSelect ? ' bcc-cutbox--interactive' : ''}`,
    style: {
      background: selected || featured ? 'var(--accent)' : 'var(--border-subtle)',
      ...style
    },
    onClick: onSelect,
    role: onSelect ? 'button' : undefined,
    tabIndex: onSelect ? 0 : undefined
  }, rest), inner);
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PriceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The five-vehicle-class price row every Style-A service flyer ends with.
 * Responsive grid on web; on posters use `poster` to get the staggered look.
 */
function PriceRow({
  items = [],
  featuredIndex = null,
  selectedIndex = null,
  onSelect,
  columns,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "bcc-pricerow",
    style: columns ? {
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      ...style
    } : style
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(__ds_scope.PriceCard, {
    key: i,
    vehicleClass: it.vehicleClass,
    price: it.price,
    note: it.note,
    featured: featuredIndex === i,
    selected: selectedIndex === i,
    onSelect: onSelect ? () => onSelect(i) : undefined
  })));
}
Object.assign(__ds_scope, { PriceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PriceRow.jsx", error: String((e && e.message) || e) }); }

// components/pricing/TierBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SKINS = {
  gold: {
    bg: 'linear-gradient(180deg,#FFD976 0%,#F8B010 46%,#B67C05 100%)',
    fg: '#1A1204'
  },
  platinum: {
    bg: 'linear-gradient(180deg,#F2F2F2 0%,#C9CDD2 48%,#7E858C 100%)',
    fg: '#101214'
  },
  silver: {
    bg: 'linear-gradient(180deg,#E8E8E8 0%,#B9BEC3 50%,#787E85 100%)',
    fg: '#101214'
  },
  sealant: {
    bg: 'var(--bg-surface)',
    fg: 'var(--text-primary)'
  }
};

/**
 * GOLD / PLATINUM / SILVER / SEALANT coating tier badge — the one metallic
 * treatment in the system, carried over from the coating flyers. Do not invent
 * new tiers or new metals.
 */
function TierBadge({
  tier = 'gold',
  label,
  size = 'md',
  style,
  ...rest
}) {
  const skin = SKINS[tier] || SKINS.sealant;
  const pad = size === 'lg' ? '10px var(--sp-10)' : '7px var(--sp-7)';
  const fs = size === 'lg' ? 'var(--fs-h4)' : 'var(--fs-body-sm)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      clipPath: 'var(--hex-h)',
      background: skin.bg,
      color: skin.fg,
      padding: pad,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: fs,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      lineHeight: 1.2,
      border: tier === 'sealant' ? '1px solid var(--border-strong)' : 'none',
      ...style
    }
  }, rest), label || tier);
}
Object.assign(__ds_scope, { TierBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/TierBadge.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PricingTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Style-B coating comparison: tier badge + amber notched header band, a
 * product/applied-on spec table, and a price column per vehicle class.
 * This is the ONE table pattern in the system — not a second visual language.
 */
function PricingTable({
  tier = 'gold',
  tierLabel,
  partner = 'Gtechniq',
  specs = [],
  prices = [],
  durability,
  complimentary,
  onBook,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "bcc-card",
    style: {
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    className: "bcc-band-notch",
    style: {
      background: 'var(--accent)',
      padding: 'var(--sp-4) var(--sp-6) var(--sp-4) var(--sp-16)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TierBadge, {
    tier: tier,
    label: tierLabel
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-accent)',
      whiteSpace: 'nowrap'
    }
  }, partner, " system"), durability ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tr-label)',
      color: 'var(--text-on-accent)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shield-check",
    size: 15,
    color: "var(--text-on-accent)"
  }), durability) : null), /*#__PURE__*/React.createElement("div", {
    className: "bcc-spec-panes"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    className: "bcc-spec"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Product"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Applied on"))), /*#__PURE__*/React.createElement("tbody", null, specs.map((s, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, s.product), /*#__PURE__*/React.createElement("td", null, s.appliedOn)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    className: "bcc-spec"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Vehicle"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    style: {
      textAlign: 'right'
    }
  }, "Price"))), /*#__PURE__*/React.createElement("tbody", null, prices.map((p, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, p.vehicleClass), /*#__PURE__*/React.createElement("td", {
    className: "bcc-spec__num",
    style: {
      textAlign: 'right'
    }
  }, p.price))))))), complimentary || onBook ? /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      padding: 'var(--sp-4) var(--sp-6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap'
    }
  }, complimentary ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "gift",
    size: 15,
    color: "var(--accent)"
  }), "Complimentary: ", complimentary) : /*#__PURE__*/React.createElement("span", null), onBook ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bcc-btn bcc-btn--secondary bcc-btn--sm",
    onClick: onBook
  }, "Book this tier") : null) : null);
}
Object.assign(__ds_scope, { PricingTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PricingTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/PosterTemplates.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const DS = window.BubblesCarCareDesignSystem_459ca2;
  const {
    Logo,
    Icon,
    CheckDot,
    HexFrame,
    TierBadge,
    ChevronBanner
  } = DS;
  const P = '../../assets/';

  /* ── Shared poster furniture ─────────────────────────────────────────────── */

  function PosterShell({
    width = 1080,
    height = 1350,
    children,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bcc-dots--poster",
      style: {
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        background: 'var(--bg-base)',
        flex: '0 0 auto',
        ...style
      }
    }, children);
  }
  function PosterHeader({
    tagline = 'Premium detailing studio · Karachi'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 28,
        padding: '48px 64px 0'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      src: P + 'logo.png',
      size: 112
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        fontSize: 44,
        lineHeight: 1,
        color: 'var(--text-primary)',
        letterSpacing: '-.02em',
        whiteSpace: 'nowrap'
      }
    }, "Bubbles ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)'
      }
    }, "Car Care")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        fontSize: 19,
        fontWeight: 600,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap'
      }
    }, tagline)));
  }
  function PosterTitle({
    lead,
    tail,
    size = 96
  }) {
    return /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        fontSize: size,
        lineHeight: 0.9,
        letterSpacing: '-.02em',
        textShadow: 'var(--text-shadow-poster)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        color: 'var(--accent)'
      }
    }, lead), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        color: 'var(--text-primary)'
      }
    }, tail));
  }
  function PosterList({
    items,
    fontSize = 27
  }) {
    return /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'grid',
        gap: 20,
        minWidth: 0
      }
    }, items.map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 18,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(CheckDot, {
      size: 36,
      style: {
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize,
        fontWeight: 500,
        lineHeight: 1.28,
        color: 'var(--text-primary)',
        textWrap: 'pretty'
      }
    }, t))));
  }
  function HexPrice({
    vehicleClass,
    price,
    width = 196
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        clipPath: 'var(--hex-h)',
        background: 'var(--accent)',
        width,
        padding: '26px 12px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: '#080808',
        lineHeight: 1.2,
        minHeight: 36
      }
    }, vehicleClass), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontSize: 30,
        fontWeight: 800,
        fontVariantNumeric: 'tabular-nums',
        color: '#080808',
        letterSpacing: '-.01em'
      }
    }, price));
  }
  function PosterFooter({
    phones = ['0330 2822537', '0300 8233793'],
    site = 'www.bubblescarcare.pk'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--accent)',
        padding: '24px 64px',
        display: 'flex',
        alignItems: 'center',
        gap: 40,
        flexWrap: 'wrap'
      }
    }, phones.map(p => /*#__PURE__*/React.createElement("span", {
      key: p,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        fontSize: 25,
        fontWeight: 700,
        color: '#080808',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 24,
      color: "#080808"
    }), p)), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        fontSize: 25,
        fontWeight: 700,
        color: '#080808',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "instagram",
      size: 24,
      color: "#080808"
    }), site));
  }

  /* ── 1. Style A service poster — THE canonical template ──────────────────── */

  function ServicePoster({
    lead = 'Complete',
    tail = 'Detailing',
    items = ['Jet shampoo wash.', 'Clay bar treatment.', 'Paint correction compounding.', 'High gloss polishing.', 'Engine bay degreasing.', 'Rim, tyre cleaning and dressing.', 'Interior dusting with trims.', 'Plastic and vinyl dressing.'],
    photos = [P + 'photos/complete-polisher.jpg', P + 'photos/complete-leather-wipe.jpg', P + 'photos/ext-grille-foam.jpg'],
    prices = [{
      vehicleClass: 'Small hatchback',
      price: '17,000/-'
    }, {
      vehicleClass: 'Medium hatchback',
      price: '18,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '20,000/-'
    }, {
      vehicleClass: 'Luxury sedan',
      price: '25,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '30,000/-'
    }]
  }) {
    return /*#__PURE__*/React.createElement(PosterShell, null, /*#__PURE__*/React.createElement(PosterHeader, null), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '52px 64px 0',
        display: 'grid',
        gridTemplateColumns: '616px 300px',
        gap: 36,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        width: 616
      }
    }, /*#__PURE__*/React.createElement(PosterTitle, {
      lead: lead,
      tail: tail
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 44
      }
    }, /*#__PURE__*/React.createElement(PosterList, {
      items: items
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(HexFrame, {
      src: photos[0],
      width: 262,
      stroke: 5
    }), /*#__PURE__*/React.createElement(HexFrame, {
      src: photos[1],
      width: 262,
      stroke: 5,
      style: {
        marginTop: -34
      }
    }), /*#__PURE__*/React.createElement(HexFrame, {
      src: photos[2],
      width: 262,
      stroke: 5,
      style: {
        marginTop: -34
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 64,
        right: 64,
        bottom: 128
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        height: 3,
        width: 56,
        background: 'var(--accent)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 19,
        fontWeight: 700,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        whiteSpace: 'nowrap'
      }
    }, "Pricing per vehicle")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        justifyContent: 'space-between'
      }
    }, prices.map(p => /*#__PURE__*/React.createElement(HexPrice, _extends({
      key: p.vehicleClass
    }, p))))), /*#__PURE__*/React.createElement(PosterFooter, null));
  }

  /* ── 2. Style B coating poster — tiers + spec table ──────────────────────── */

  function CoatingPoster({
    lead = 'Ceramic',
    tail = 'Coating',
    tier = 'gold',
    tierLabel = 'Gold',
    durability = '03 years',
    specs = [{
      product: 'C1 Crystal Lacquer',
      appliedOn: 'All painted surfaces'
    }, {
      product: 'C2v3 Liquid Crystal',
      appliedOn: 'All painted surfaces'
    }, {
      product: 'T1 Tire Dressing',
      appliedOn: 'All tires'
    }, {
      product: 'C5 Wheel Armour',
      appliedOn: 'All alloys'
    }, {
      product: 'C6 AB Matte Dash',
      appliedOn: 'Interior trims'
    }],
    prices = [{
      vehicleClass: 'Small hatchback',
      price: '35,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '45,000/-'
    }, {
      vehicleClass: 'Luxury sedan',
      price: '50,000/-'
    }, {
      vehicleClass: 'Crossover',
      price: '50,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '60,000/-'
    }]
  }) {
    return /*#__PURE__*/React.createElement(PosterShell, null, /*#__PURE__*/React.createElement(PosterHeader, {
      tagline: "Gtechniq approved systems"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '48px 64px 0',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement(PosterTitle, {
      lead: lead,
      tail: tail,
      size: 88
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        paddingBottom: 8
      }
    }, /*#__PURE__*/React.createElement(TierBadge, {
      tier: tier,
      label: tierLabel,
      size: "lg",
      style: {
        fontSize: 30,
        padding: '16px 54px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        fontSize: 21,
        fontWeight: 700,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Durability \xB7 ", durability))), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '44px 0 0',
        background: 'var(--accent)',
        clipPath: 'var(--band-notch)',
        padding: '18px 64px 18px 96px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: '#080808',
        whiteSpace: 'nowrap'
      }
    }, "Product"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: '#080808',
        whiteSpace: 'nowrap'
      }
    }, "Applied on")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 64px'
      }
    }, specs.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.product,
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        padding: '20px 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 25,
        fontWeight: 600,
        color: 'var(--text-primary)'
      }
    }, s.product), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 25,
        color: 'var(--text-muted)'
      }
    }, s.appliedOn)))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 64,
        right: 64,
        bottom: 128
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        height: 3,
        width: 56,
        background: 'var(--accent)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 19,
        fontWeight: 700,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        whiteSpace: 'nowrap'
      }
    }, "Pricing per vehicle")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        justifyContent: 'space-between'
      }
    }, prices.map(p => /*#__PURE__*/React.createElement(HexPrice, _extends({
      key: p.vehicleClass
    }, p))))), /*#__PURE__*/React.createElement(PosterFooter, null));
  }

  /* ── 3. Square offer post 1080×1080 ─────────────────────────────────────── */

  function OfferPost({
    lead = 'Premium',
    tail = 'Wash & Wax',
    statement = 'Same-day service, both branches',
    photo = P + 'photos/wash-foam-wheel.jpg',
    price = '3,500/-',
    priceLabel = 'From'
  }) {
    return /*#__PURE__*/React.createElement(PosterShell, {
      width: 1080,
      height: 1080
    }, /*#__PURE__*/React.createElement("img", {
      src: photo,
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'saturate(.92) contrast(1.06)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--scrim-photo)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(PosterHeader, {
      tagline: "Karachi \xB7 Two branches"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '64px 64px 0',
        maxWidth: 700
      }
    }, /*#__PURE__*/React.createElement(PosterTitle, {
      lead: lead,
      tail: tail,
      size: 104
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56,
        paddingLeft: 64
      }
    }, /*#__PURE__*/React.createElement(ChevronBanner, {
      size: "lg",
      style: {
        fontSize: 34,
        padding: '26px 96px 26px 44px'
      }
    }, statement)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        padding: '0 64px 148px',
        display: 'flex',
        alignItems: 'flex-end',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 21,
        fontWeight: 700,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, priceLabel), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 92,
        fontWeight: 800,
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '-.02em',
        lineHeight: 1,
        color: 'var(--accent)',
        textShadow: 'var(--text-shadow-poster)'
      }
    }, price)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        marginLeft: 'auto'
      }
    }, /*#__PURE__*/React.createElement(HexFrame, {
      src: P + 'photos/ext-grille-foam.jpg',
      width: 200,
      stroke: 5,
      style: {
        marginRight: -22,
        marginTop: 48
      }
    }), /*#__PURE__*/React.createElement(HexFrame, {
      src: P + 'photos/int-vent-cloth.jpg',
      width: 200,
      stroke: 5
    })))), /*#__PURE__*/React.createElement(PosterFooter, null));
  }

  /* ── 4. Story / vertical 1080×1920 ──────────────────────────────────────── */

  function StoryPost({
    lead = 'Anti Rust',
    tail = 'Coating',
    items = ['Prolongs the car\'s life.', 'Prevents rust and corrosion.', 'Absorbs road noise.', 'Protection against stone chips, damp and salt.'],
    photo = P + 'photos/rust-underbody.jpg',
    price = '18,000/-'
  }) {
    return /*#__PURE__*/React.createElement(PosterShell, {
      width: 1080,
      height: 1920
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: '0 0 auto 0',
        height: 900,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: photo,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'saturate(.92) contrast(1.06)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--scrim-photo-bottom)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(PosterHeader, {
      tagline: "Monsoon protection"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '620px 64px 0'
      }
    }, /*#__PURE__*/React.createElement(PosterTitle, {
      lead: lead,
      tail: tail,
      size: 112
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56
      }
    }, /*#__PURE__*/React.createElement(PosterList, {
      items: items,
      fontSize: 34
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 72,
        display: 'flex',
        alignItems: 'flex-end',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "From"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 104,
        fontWeight: 800,
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '-.02em',
        lineHeight: 1,
        color: 'var(--accent)'
      }
    }, price)), /*#__PURE__*/React.createElement(HexFrame, {
      src: P + 'photos/rust-spray-gun.jpg',
      width: 260,
      stroke: 5,
      style: {
        marginLeft: 'auto'
      }
    })))), /*#__PURE__*/React.createElement(PosterFooter, null));
  }
  Object.assign(window, {
    PosterShell,
    PosterHeader,
    PosterTitle,
    PosterList,
    HexPrice,
    PosterFooter,
    ServicePoster,
    CoatingPoster,
    OfferPost,
    StoryPost
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/PosterTemplates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookScreen.jsx
try { (() => {
(() => {
  const {
    useState
  } = React;
  const DS = window.BubblesCarCareDesignSystem_459ca2;
  const {
    DisplayHeading,
    Button,
    Badge,
    Icon,
    Section,
    Field,
    Input,
    Select,
    Textarea,
    Checkbox,
    FeatureList,
    WhatsAppCta,
    Breadcrumbs,
    CheckDot
  } = DS;
  const CLASSES = ['Small hatchback', 'Medium hatchback', 'Sedan', 'Luxury sedan / Crossover', 'SUV'];
  function BookScreen({
    onNavigate
  }) {
    const BRANCHES = window.BCC.BRANCHES;
    const SERVICE_OPTIONS = window.BCC.SERVICES.map(s => s.title);
    const [form, setForm] = useState({
      name: '',
      phone: '',
      car: '',
      vclass: '',
      service: '',
      notes: '',
      branch: 'dha',
      reminders: true
    });
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState({});
    const set = k => v => setForm(f => ({
      ...f,
      [k]: v
    }));
    const submit = () => {
      const e = {};
      if (!form.name.trim()) e.name = 'We need a name for the booking.';
      if (!form.phone.trim()) e.phone = 'A WhatsApp number, so we can reply.';
      if (!form.car.trim()) e.car = 'Tell us the make and model.';
      setErrors(e);
      if (!Object.keys(e).length) setSent(true);
    };
    if (sent) {
      return /*#__PURE__*/React.createElement(Section, {
        narrow: true,
        tone: "dots"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bcc-cutbox"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bcc-cutbox__inner",
        style: {
          padding: 'clamp(28px,5vw,48px)',
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement(CheckDot, {
        size: 52,
        style: {
          margin: '0 auto var(--sp-6)'
        }
      }), /*#__PURE__*/React.createElement(DisplayHeading, {
        lead: "Request",
        tail: "Received",
        size: "md",
        align: "center"
      }), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 'var(--sp-5) auto 0',
          maxWidth: '46ch',
          fontSize: 'var(--fs-body)',
          lineHeight: 'var(--lh-relaxed)',
          color: 'var(--text-muted)'
        }
      }, "Thanks ", form.name.split(' ')[0], ". We will message you on ", form.phone, " within the hour \u2014 sooner if you are reading this between 10am and 9pm. Nothing is confirmed until we agree a slot."), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--sp-3)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: 'var(--sp-8)'
        }
      }, /*#__PURE__*/React.createElement(WhatsAppCta, {
        label: "Message us now",
        message: `Hi Bubbles Car Care, I just requested a booking for my ${form.car || 'car'}.`
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => {
          setSent(false);
          setForm({
            ...form,
            notes: ''
          });
        }
      }, "Edit the request")))));
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "bcc-container",
      style: {
        paddingBlock: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: [{
        id: 'home',
        label: 'Home'
      }, {
        label: 'Book a slot'
      }],
      onNavigate: onNavigate
    })), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Booking",
      lead: "Tell us",
      tail: "The car",
      intro: "Two minutes. We reply on WhatsApp with a price, a date, and how long we need the car for."
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-split"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 2,
        '--cols-md': 2,
        '--cols-sm': 1,
        gap: 'var(--sp-5)'
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Your name",
      required: true,
      htmlFor: "bk-name",
      error: errors.name
    }, /*#__PURE__*/React.createElement(Input, {
      id: "bk-name",
      placeholder: "e.g. Bilal Ahmed",
      value: form.name,
      invalid: !!errors.name,
      onChange: e => set('name')(e.target.value)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "WhatsApp number",
      required: true,
      htmlFor: "bk-phone",
      error: errors.phone,
      hint: errors.phone ? undefined : 'We reply within an hour, 10am–9pm.'
    }, /*#__PURE__*/React.createElement(Input, {
      id: "bk-phone",
      icon: "phone",
      placeholder: "0300 0000000",
      value: form.phone,
      invalid: !!errors.phone,
      onChange: e => set('phone')(e.target.value)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Car",
      required: true,
      htmlFor: "bk-car",
      error: errors.car
    }, /*#__PURE__*/React.createElement(Input, {
      id: "bk-car",
      icon: "car",
      placeholder: "e.g. Honda City 2021",
      value: form.car,
      invalid: !!errors.car,
      onChange: e => set('car')(e.target.value)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Vehicle class",
      htmlFor: "bk-class",
      hint: "Not sure? Leave it \u2014 we will tell you."
    }, /*#__PURE__*/React.createElement(Select, {
      id: "bk-class",
      placeholder: "Choose your vehicle class",
      options: CLASSES,
      value: form.vclass,
      onChange: e => set('vclass')(e.target.value)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Service",
      htmlFor: "bk-service",
      style: {
        gridColumn: '1 / -1'
      }
    }, /*#__PURE__*/React.createElement(Select, {
      id: "bk-service",
      placeholder: "What are you booking?",
      options: SERVICE_OPTIONS,
      value: form.service,
      onChange: e => set('service')(e.target.value)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Branch",
      htmlFor: "bk-branch",
      style: {
        gridColumn: '1 / -1'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 2,
        '--cols-md': 2,
        '--cols-sm': 1,
        gap: 'var(--sp-3)'
      }
    }, BRANCHES.map(b => {
      const on = form.branch === b.id;
      return /*#__PURE__*/React.createElement("button", {
        key: b.id,
        type: "button",
        onClick: () => set('branch')(b.id),
        style: {
          textAlign: 'left',
          cursor: 'pointer',
          padding: 'var(--sp-4)',
          background: on ? 'var(--amber-tint-08)' : 'var(--bg-surface-2)',
          border: `1px solid ${on ? 'var(--accent)' : 'var(--border-subtle)'}`,
          borderRadius: 'var(--r-sm)',
          transition: 'border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--sp-2)',
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-semibold)',
          color: on ? 'var(--text-accent)' : 'var(--text-primary)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "map-pin",
        size: 15,
        color: on ? 'var(--accent)' : 'var(--text-faint)'
      }), b.name), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          marginTop: 4,
          fontSize: 'var(--fs-caption)',
          color: 'var(--text-faint)'
        }
      }, b.address));
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "Anything we should know?",
      htmlFor: "bk-notes",
      style: {
        gridColumn: '1 / -1'
      }
    }, /*#__PURE__*/React.createElement(Textarea, {
      id: "bk-notes",
      placeholder: "Swirl marks on the bonnet, kids seat stains, rust starting under the doors\u2026",
      value: form.notes,
      onChange: e => set('notes')(e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: '1 / -1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--sp-5)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Send me maintenance reminders on WhatsApp",
      checked: form.reminders,
      onChange: set('reminders')
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      cut: true,
      icon: "message-circle",
      onClick: submit
    }, "Request a quote"))), /*#__PURE__*/React.createElement("aside", {
      style: {
        display: 'grid',
        gap: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-card",
      style: {
        padding: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "bcc-eyebrow",
      style: {
        marginBottom: 'var(--sp-4)'
      }
    }, "What happens next"), /*#__PURE__*/React.createElement(FeatureList, {
      size: "sm",
      items: ['We message you a price for your class.', 'You pick a day; we block the bay.', 'Drop the car, we send photos as we go.', 'Collect, with a record of what we applied.']
    })), /*#__PURE__*/React.createElement("div", {
      className: "bcc-card",
      style: {
        padding: 'var(--sp-6)',
        display: 'grid',
        gap: 'var(--sp-4)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "bcc-eyebrow"
    }, "Rather just message?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-body-sm)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-muted)'
      }
    }, "Most bookings happen on WhatsApp. Send a photo of the car and we will quote from that."), /*#__PURE__*/React.createElement(WhatsAppCta, {
      label: "Book on WhatsApp",
      style: {
        justifyContent: 'center'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--sp-2)'
      }
    }, BRANCHES.map(b => /*#__PURE__*/React.createElement("a", {
      key: b.id,
      href: `tel:${b.phone.replace(/\s/g, '')}`,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--sp-2)',
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15,
      color: "var(--accent)"
    }), b.phone, /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-faint)'
      }
    }, b.name)))), /*#__PURE__*/React.createElement(Badge, {
      variant: "soft",
      style: {
        justifySelf: 'start'
      }
    }, "Mon\u2013Sun \xB7 10am \u2013 9pm"))))));
  }
  Object.assign(window, {
    BookScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const DS = window.BubblesCarCareDesignSystem_459ca2;
  const {
    DisplayHeading,
    Button,
    Badge,
    HexFrame,
    Icon,
    ChevronBanner,
    FeatureList,
    ServiceCard,
    Section,
    PriceRow,
    TestimonialCard
  } = DS;
  /* Defensive: if the DS bundle is a build behind, degrade to a static render
     rather than throwing "Element type is invalid" and blanking the page. */
  const _passthru = tag => ({
    children,
    ...p
  }) => React.createElement(tag, p, children);
  const Reveal = DS.Reveal || _passthru('div');
  const StatCounter = DS.StatCounter || (({
    value,
    prefix = '',
    suffix = '',
    ...p
  }) => React.createElement('span', p, prefix + value + suffix));
  const BeforeAfter = DS.BeforeAfter || (({
    afterSrc,
    afterLabel = '',
    ...p
  }) => React.createElement('img', {
    src: afterSrc,
    alt: afterLabel,
    style: {
      width: '100%',
      borderRadius: 'var(--r-card)'
    },
    ...p
  }));
  const ProjectCard = DS.ProjectCard || (({
    car,
    service,
    image
  }) => React.createElement('div', {
    className: 'bcc-card',
    style: {
      padding: 'var(--sp-5)'
    }
  }, React.createElement('img', {
    src: image,
    alt: '',
    style: {
      width: '100%',
      marginBottom: 'var(--sp-3)'
    }
  }), React.createElement('strong', null, car), ' — ', service));
  const _vidRow = ({
    videoId,
    title,
    car,
    service,
    kind
  }) => React.createElement('a', {
    key: videoId,
    href: 'https://www.youtube.com/watch?v=' + videoId,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'bcc-video-fallback'
  }, React.createElement('span', {
    className: 'bcc-video-fallback__play',
    'aria-hidden': 'true'
  }, '\u25B6'), React.createElement('span', null, React.createElement('span', {
    className: 'bcc-video-fallback__title'
  }, title), car || service || kind === 'review' ? React.createElement('span', {
    className: 'bcc-video-fallback__meta'
  }, [car, kind === 'review' ? 'Customer review' : service].filter(Boolean).join(' \u00B7 ')) : null));
  const _vidList = ({
    videos = []
  }) => React.createElement('div', {
    className: 'bcc-video-fallback__list'
  }, videos.map(_vidRow));
  const _review = ({
    quote,
    name,
    service
  }) => React.createElement('figure', {
    className: 'bcc-card',
    style: {
      margin: 0,
      padding: 'var(--sp-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      height: '100%'
    }
  }, React.createElement('blockquote', {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-primary)'
    }
  }, quote), React.createElement('figcaption', {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--sp-4)',
      borderTop: '1px solid var(--border-subtle)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, name, service ? React.createElement('span', {
    style: {
      display: 'block',
      marginTop: 2,
      fontSize: 'var(--fs-caption)',
      fontWeight: 400,
      color: 'var(--text-accent)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tr-label)'
    }
  }, service) : null));
  const _social = ({
    channels = []
  }) => React.createElement('div', {
    className: 'bcc-video-fallback__list'
  }, channels.map(c => React.createElement('a', {
    key: c.platform,
    href: c.url,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'bcc-video-fallback'
  }, React.createElement('span', null, React.createElement('span', {
    className: 'bcc-video-fallback__title'
  }, c.platform), React.createElement('span', {
    className: 'bcc-video-fallback__meta'
  }, c.handle + (c.count ? ' \u00B7 ' + c.count : ''))))));
  const VideoGallery = DS.VideoGallery || _vidList;
  const ReviewCard = DS.ReviewCard || _review;

  /* ── Interactive hero ──────────────────────────────────────────────────────
     Three live controls: a service switcher, a vehicle-class picker that
     recomputes the quote, and a draggable before/after. */
  function Hero({
    onNavigate
  }) {
    const {
      SERVICES
    } = window.BCC;
    const featured = ['ppf', 'ceramic', 'rust', 'complete'].map(id => SERVICES.find(s => s.id === id));
    const [sIdx, setSIdx] = useState(1);
    const [vIdx, setVIdx] = useState(2);
    const [auto, setAuto] = useState(true);
    const svc = featured[sIdx];
    const price = svc.prices[Math.min(vIdx, svc.prices.length - 1)];
    useEffect(() => {
      if (!auto) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const t = setInterval(() => setSIdx(i => (i + 1) % featured.length), 5200);
      return () => clearInterval(t);
    }, [auto, featured.length]);
    const stop = () => setAuto(false);
    return /*#__PURE__*/React.createElement("section", {
      className: "bcc-hero"
    }, /*#__PURE__*/React.createElement("img", {
      key: svc.id,
      src: svc.hero,
      alt: "",
      className: "bcc-kenburns",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'saturate(.92) contrast(1.06)',
        animation: 'bcc-fade-in var(--dur-slow) var(--ease-out) both, bcc-ken-burns 18s var(--ease-in-out) infinite alternate'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--scrim-photo)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "bcc-hero__inner"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '48ch'
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      variant: "fade"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-2)',
        flexWrap: 'wrap',
        marginBottom: 'var(--sp-5)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "solid"
    }, "Gtechniq approved"), /*#__PURE__*/React.createElement(Badge, null, "Two branches in Karachi"))), /*#__PURE__*/React.createElement("div", {
      key: svc.id,
      style: {
        animation: 'bcc-fade-up var(--dur-slow) var(--ease-out) both'
      }
    }, /*#__PURE__*/React.createElement(DisplayHeading, {
      lead: svc.lead,
      tail: svc.tail,
      size: "xl",
      as: "h1"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 'var(--sp-5) 0 0',
        fontSize: 'var(--fs-body-lg)',
        fontWeight: 'var(--fw-light)',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--text-muted)',
        textWrap: 'pretty'
      }
    }, svc.blurb)), /*#__PURE__*/React.createElement("div", {
      className: "bcc-tabs",
      role: "tablist",
      "aria-label": "Services",
      style: {
        marginTop: 'var(--sp-7)'
      }
    }, featured.map((s, i) => /*#__PURE__*/React.createElement("button", {
      key: s.id,
      role: "tab",
      "aria-selected": i === sIdx,
      className: "bcc-tab",
      onClick: () => {
        setSIdx(i);
        stop();
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 16
    }), s.short))), /*#__PURE__*/React.createElement("div", {
      className: "bcc-cutbox",
      style: {
        marginTop: 'var(--sp-5)',
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-cutbox__inner",
      style: {
        padding: 'var(--sp-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--sp-4)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "bcc-label",
      style: {
        whiteSpace: 'nowrap'
      }
    }, "Your vehicle"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 'var(--sp-2)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-faint)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tr-label)'
      }
    }, "From"), /*#__PURE__*/React.createElement("span", {
      key: svc.id + vIdx,
      className: "bcc-price",
      style: {
        fontSize: 'var(--fs-display-md)',
        color: 'var(--text-accent)',
        lineHeight: 1,
        animation: 'bcc-fade-in var(--dur) var(--ease-out) both'
      }
    }, price.price))), /*#__PURE__*/React.createElement("div", {
      className: "bcc-tabs",
      style: {
        marginTop: 'var(--sp-4)'
      }
    }, svc.prices.map((p, i) => /*#__PURE__*/React.createElement("button", {
      key: p.vehicleClass,
      className: "bcc-tab",
      "aria-selected": i === vIdx,
      onClick: () => {
        setVIdx(i);
        stop();
      },
      style: {
        fontSize: 'var(--fs-caption)'
      }
    }, p.vehicleClass))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-3)',
        flexWrap: 'wrap',
        marginTop: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      cut: true,
      onClick: () => onNavigate('book')
    }, "Book a slot"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      onClick: () => onNavigate(svc.id)
    }, "See what's included")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-8)',
        flexWrap: 'wrap',
        marginTop: 'var(--sp-8)'
      }
    }, [['clock', 'Mon–Sun, 10am – 9pm'], ['map-pin', 'DHA Phase 6 · Gulshan-e-Iqbal'], ['message-circle', 'Reply within an hour']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--sp-2)',
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 15,
      color: "var(--accent)"
    }), t)))), /*#__PURE__*/React.createElement("div", {
      className: "bcc-hero__aside"
    }, /*#__PURE__*/React.createElement(Reveal, {
      variant: "hex",
      delay: 120
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(HexFrame, {
      src: svc.photos[0],
      width: 160,
      style: {
        marginTop: 76,
        marginRight: -20
      }
    }), /*#__PURE__*/React.createElement(HexFrame, {
      src: svc.hero,
      width: 160,
      style: {
        marginRight: -20
      }
    }), /*#__PURE__*/React.createElement(HexFrame, {
      src: svc.photos[1],
      width: 160,
      style: {
        marginTop: 76
      }
    }))))));
  }

  /* ── Credential marquee ─────────────────────────────────────────────────── */
  function CredStrip() {
    const items = ['Gtechniq approved', 'Indoor bays', 'Paint depth measured', 'Two branches', 'Per-class pricing', 'Written product record', 'Same-day wash'];
    const row = [...items, ...items];
    return /*#__PURE__*/React.createElement("div", {
      className: "bcc-marquee",
      style: {
        borderBlock: '1px solid var(--border-subtle)',
        background: 'var(--bg-surface)',
        paddingBlock: 'var(--sp-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-marquee__track"
    }, row.map((t, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--sp-3)',
        paddingInline: 'var(--sp-6)',
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--tr-label)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "hexagon",
      size: 13,
      color: "var(--accent)"
    }), t))));
  }

  /* ── Services preview ───────────────────────────────────────────────────── */
  function ServicesPreview({
    onOpen
  }) {
    const {
      SERVICES
    } = window.BCC;
    return /*#__PURE__*/React.createElement(Section, {
      tone: "dots",
      eyebrow: "What we do",
      lead: "Seven services",
      tail: "One standard",
      intro: "Every job runs indoors, in the same sequence, at both branches. Prices are per vehicle class \u2014 no surprises when you collect.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        iconAfter: "arrow-right",
        onClick: () => onOpen('services')
      }, "All services")
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 3,
        '--cols-md': 2,
        '--cols-sm': 1
      }
    }, SERVICES.slice(0, 6).map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.id,
      delay: i * 80
    }, /*#__PURE__*/React.createElement(ServiceCard, {
      title: s.title,
      summary: s.summary,
      image: s.hero,
      icon: s.icon,
      fromPrice: s.prices[0].price,
      onOpen: () => onOpen(s.id),
      style: {
        height: '100%'
      }
    })))));
  }

  /* ── Why us: animated stats + before/after ──────────────────────────────── */
  function WhyUs() {
    const {
      A
    } = window.BCC;
    const stats = [{
      value: 7,
      suffix: '+',
      label: 'years detailing in Karachi'
    }, {
      value: 2,
      suffix: '',
      label: 'branches, same process'
    }, {
      value: 5,
      suffix: ' yrs',
      label: 'top coating durability'
    }, {
      value: 48,
      suffix: 'h',
      label: 'typical coating turnaround'
    }];
    return /*#__PURE__*/React.createElement(Section, {
      tone: "surface",
      eyebrow: "Why Bubbles",
      lead: "Careful work",
      tail: "Not quick work"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-split",
      style: {
        '--split': '1fr'
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      variant: "right"
    }, /*#__PURE__*/React.createElement(BeforeAfter, {
      beforeSrc: A + 'photos/ext-grille-foam.jpg',
      afterSrc: A + 'photos/ext-polisher.jpg',
      beforeLabel: "Before",
      afterLabel: "After",
      note: "Drag the handle. Placeholder pair \u2014 real matched before/after sets pending a shoot."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(FeatureList, {
      items: ['Paint depth measured before any correction.', 'Indoor bays — no dust, no direct sun, no rushed cure.', 'Gtechniq product systems, applied as specified.', 'Written record of what was applied to your car.']
    }), /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 2,
        '--cols-md': 2,
        '--cols-sm': 2,
        '--cols-xs': 1,
        gap: 'var(--sp-3)'
      }
    }, stats.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.label,
      delay: i * 70
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-cutbox",
      style: {
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-cutbox__inner",
      style: {
        padding: 'var(--sp-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-display-md)',
        color: 'var(--text-accent)',
        lineHeight: 1
      }
    }, /*#__PURE__*/React.createElement(StatCounter, {
      value: s.value,
      suffix: s.suffix
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--sp-2)',
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--lh-snug)'
      }
    }, s.label)))))), /*#__PURE__*/React.createElement(ChevronBanner, null, "Get your car protected before monsoon"))));
  }

  /* ── Latest videos ──────────────────────────────────────────────────────── */
  function VideosPreview({
    onNavigate
  }) {
    const {
      VIDEOS
    } = window.BCC;
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Latest from the bays",
      lead: "Newest",
      tail: "On video",
      intro: "Filmed at our own branches and posted to our channel. Press play \u2014 nothing loads until you do.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        iconAfter: "arrow-right",
        onClick: () => onNavigate('videos')
      }, "All videos")
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(VideoGallery, {
      videos: VIDEOS,
      layout: "feature"
    })));
  }

  /* ── Projects preview ───────────────────────────────────────────────────── */
  function ProjectsPreview({
    onNavigate
  }) {
    const {
      PROJECTS
    } = window.BCC;
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Recent jobs",
      lead: "Real cars",
      tail: "Real finish",
      intro: "Photographed in our bays, straight after collection. No studio lighting, no retouching.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        iconAfter: "arrow-right",
        onClick: () => onNavigate('projects')
      }, "All projects")
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 3,
        '--cols-md': 2,
        '--cols-sm': 1
      }
    }, PROJECTS.slice(0, 3).map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: p.id,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p, {
      onOpen: () => onNavigate('projects')
    }))))));
  }

  /* ── Testimonials preview ───────────────────────────────────────────────── */
  function TestimonialsPreview({
    onNavigate
  }) {
    const {
      GOOGLE_REVIEWS,
      VIDEO_REVIEWS
    } = window.BCC;
    return /*#__PURE__*/React.createElement(Section, {
      tone: "surface",
      eyebrow: "What owners say",
      lead: "Booked once",
      tail: "Came back",
      intro: "Real reviews as published on Google, plus owners on camera.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        iconAfter: "arrow-right",
        onClick: () => onNavigate('testimonials')
      }, "Read all reviews")
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 3,
        '--cols-md': 2,
        '--cols-sm': 1
      }
    }, VIDEO_REVIEWS.slice(0, 1).map(v => /*#__PURE__*/React.createElement(Reveal, {
      key: v.videoId
    }, /*#__PURE__*/React.createElement(window.BCCVideoCard, v))), GOOGLE_REVIEWS.slice(0, 2).map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: r.name,
      delay: (i + 1) * 90
    }, /*#__PURE__*/React.createElement(ReviewCard, r)))));
  }
  window.BCCVideoCard = DS.VideoCard || _vidRow;
  Object.assign(window, {
    Hero,
    CredStrip,
    ServicesPreview,
    WhyUs,
    VideosPreview,
    ProjectsPreview,
    TestimonialsPreview
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    useState
  } = React;
  const DS = window.BubblesCarCareDesignSystem_459ca2;
  const {
    DisplayHeading,
    Button,
    Badge,
    Icon,
    Section,
    Breadcrumbs,
    WhatsAppCta,
    TestimonialCard,
    FeatureList
  } = DS;
  /* Defensive: if the DS bundle is a build behind, degrade to a static render
     rather than throwing "Element type is invalid" and blanking the page. */
  const _passthru = tag => ({
    children,
    ...p
  }) => React.createElement(tag, p, children);
  const Reveal = DS.Reveal || _passthru('div');
  const StatCounter = DS.StatCounter || (({
    value,
    prefix = '',
    suffix = '',
    ...p
  }) => React.createElement('span', p, prefix + value + suffix));
  const BeforeAfter = DS.BeforeAfter || (({
    afterSrc,
    afterLabel = '',
    ...p
  }) => React.createElement('img', {
    src: afterSrc,
    alt: afterLabel,
    style: {
      width: '100%',
      borderRadius: 'var(--r-card)'
    },
    ...p
  }));
  const ProjectCard = DS.ProjectCard || (({
    car,
    service,
    image
  }) => React.createElement('div', {
    className: 'bcc-card',
    style: {
      padding: 'var(--sp-5)'
    }
  }, React.createElement('img', {
    src: image,
    alt: '',
    style: {
      width: '100%',
      marginBottom: 'var(--sp-3)'
    }
  }), React.createElement('strong', null, car), ' — ', service));
  const _vidRow = ({
    videoId,
    title,
    car,
    service,
    kind
  }) => React.createElement('a', {
    key: videoId,
    href: 'https://www.youtube.com/watch?v=' + videoId,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'bcc-video-fallback'
  }, React.createElement('span', {
    className: 'bcc-video-fallback__play',
    'aria-hidden': 'true'
  }, '\u25B6'), React.createElement('span', null, React.createElement('span', {
    className: 'bcc-video-fallback__title'
  }, title), car || service || kind === 'review' ? React.createElement('span', {
    className: 'bcc-video-fallback__meta'
  }, [car, kind === 'review' ? 'Customer review' : service].filter(Boolean).join(' \u00B7 ')) : null));
  const _vidList = ({
    videos = []
  }) => React.createElement('div', {
    className: 'bcc-video-fallback__list'
  }, videos.map(_vidRow));
  const _review = ({
    quote,
    name,
    service
  }) => React.createElement('figure', {
    className: 'bcc-card',
    style: {
      margin: 0,
      padding: 'var(--sp-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      height: '100%'
    }
  }, React.createElement('blockquote', {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-primary)'
    }
  }, quote), React.createElement('figcaption', {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--sp-4)',
      borderTop: '1px solid var(--border-subtle)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, name, service ? React.createElement('span', {
    style: {
      display: 'block',
      marginTop: 2,
      fontSize: 'var(--fs-caption)',
      fontWeight: 400,
      color: 'var(--text-accent)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tr-label)'
    }
  }, service) : null));
  const _social = ({
    channels = []
  }) => React.createElement('div', {
    className: 'bcc-video-fallback__list'
  }, channels.map(c => React.createElement('a', {
    key: c.platform,
    href: c.url,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'bcc-video-fallback'
  }, React.createElement('span', null, React.createElement('span', {
    className: 'bcc-video-fallback__title'
  }, c.platform), React.createElement('span', {
    className: 'bcc-video-fallback__meta'
  }, c.handle + (c.count ? ' \u00B7 ' + c.count : ''))))));
  const VideoCard = DS.VideoCard || _vidRow;
  const VideoGallery = DS.VideoGallery || _vidList;
  const ReviewCard = DS.ReviewCard || _review;

  /* ── Projects ───────────────────────────────────────────────────────────── */
  function ProjectsScreen({
    onNavigate
  }) {
    const {
      PROJECTS,
      A
    } = window.BCC;
    const [filter, setFilter] = useState('All');
    const [openId, setOpenId] = useState(null);
    const services = ['All', ...Array.from(new Set(PROJECTS.map(p => p.service)))];
    const shown = PROJECTS.filter(p => filter === 'All' || p.service === filter);
    const open = PROJECTS.find(p => p.id === openId);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "bcc-container",
      style: {
        paddingBlock: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: [{
        id: 'home',
        label: 'Home'
      }, {
        label: 'Projects'
      }],
      onNavigate: onNavigate
    })), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Latest from the bays",
      lead: "Newest",
      tail: "On video",
      intro: "The most recent work, filmed at our own branches. Press play \u2014 nothing loads until you do.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        iconAfter: "arrow-right",
        onClick: () => onNavigate('videos')
      }, "All videos")
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(VideoGallery, {
      videos: window.BCC.VIDEOS,
      layout: "feature"
    }))), /*#__PURE__*/React.createElement(Section, {
      tone: "surface",
      eyebrow: "Recent jobs",
      lead: "Cars we",
      tail: "Finished",
      intro: "Every car here was booked by a Karachi owner and photographed in our bay on collection day. Filter by service to see what a job like yours looks like."
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 4,
        '--cols-md': 2,
        '--cols-sm': 2,
        '--cols-xs': 1,
        gap: 'var(--sp-3)',
        marginBottom: 'var(--sp-8)'
      }
    }, [{
      value: PROJECTS.length * 47,
      suffix: '+',
      label: 'cars through the bays'
    }, {
      value: 96,
      suffix: '%',
      label: 'booked again or referred'
    }, {
      value: 2,
      suffix: '',
      label: 'branches, one checklist'
    }, {
      value: 48,
      suffix: 'h',
      label: 'typical coating turnaround'
    }].map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.label,
      delay: i * 70
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-cutbox",
      style: {
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-cutbox__inner",
      style: {
        padding: 'var(--sp-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-display-md)',
        color: 'var(--text-accent)',
        lineHeight: 1
      }
    }, /*#__PURE__*/React.createElement(StatCounter, {
      value: s.value,
      suffix: s.suffix
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--sp-2)',
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--lh-snug)'
      }
    }, s.label)))))), /*#__PURE__*/React.createElement("div", {
      className: "bcc-tabs",
      role: "tablist",
      "aria-label": "Filter projects",
      style: {
        marginBottom: 'var(--sp-6)'
      }
    }, services.map(s => /*#__PURE__*/React.createElement("button", {
      key: s,
      role: "tab",
      "aria-selected": filter === s,
      className: "bcc-tab",
      onClick: () => setFilter(s)
    }, s))), /*#__PURE__*/React.createElement("div", {
      key: filter,
      className: "bcc-grid",
      style: {
        '--cols': 3,
        '--cols-md': 2,
        '--cols-sm': 1
      }
    }, shown.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: p.id,
      delay: i * 70
    }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p, {
      featured: false,
      onOpen: () => setOpenId(p.id)
    }))))), shown.length === 0 ? /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-faint)',
        fontSize: 'var(--fs-body-sm)'
      }
    }, "No jobs logged for that service yet.") : null), /*#__PURE__*/React.createElement(Section, {
      tone: "dots",
      eyebrow: "Paint correction",
      lead: "Drag to",
      tail: "Compare"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 860,
        marginInline: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      variant: "scale"
    }, /*#__PURE__*/React.createElement(BeforeAfter, {
      beforeSrc: A + 'photos/ext-grille-foam.jpg',
      afterSrc: A + 'photos/ext-polisher.jpg',
      aspect: "16 / 9",
      note: "Drag the handle, or use the arrow keys. Placeholder pair \u2014 real matched before/after sets pending a shoot."
    })))), /*#__PURE__*/React.createElement(Section, {
      tone: "surface",
      narrow: true,
      align: "center",
      lead: "Your car",
      tail: "Next"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-3)',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      cut: true,
      onClick: () => onNavigate('book')
    }, "Book a slot"), /*#__PURE__*/React.createElement(WhatsAppCta, {
      label: "Send us a photo",
      message: "Hi Bubbles Car Care, here is a photo of my car \u2014 what would you recommend?"
    }))), open ? /*#__PURE__*/React.createElement(ProjectDialog, {
      project: open,
      onClose: () => setOpenId(null),
      onNavigate: onNavigate
    }) : null);
  }
  function ProjectDialog({
    project,
    onClose,
    onNavigate
  }) {
    React.useEffect(() => {
      const onKey = e => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);
    return /*#__PURE__*/React.createElement("div", {
      role: "dialog",
      "aria-modal": "true",
      "aria-label": project.car,
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        background: 'var(--bg-overlay)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'grid',
        placeItems: 'center',
        padding: 'var(--gutter)',
        animation: 'bcc-fade-in var(--dur) var(--ease-out) both'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      className: "bcc-card",
      style: {
        width: 'min(680px,100%)',
        maxHeight: '86vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-raised)',
        animation: 'bcc-scale-in var(--dur) var(--ease-out) both'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: project.image,
      alt: "",
      style: {
        width: '100%',
        aspectRatio: '16 / 9',
        objectFit: 'cover',
        filter: 'saturate(.92) contrast(1.06)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--scrim-photo-bottom)'
      }
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Close",
      onClick: onClose,
      style: {
        position: 'absolute',
        top: 'var(--sp-3)',
        right: 'var(--sp-3)',
        width: 'var(--tap-min)',
        height: 'var(--tap-min)',
        display: 'grid',
        placeItems: 'center',
        background: 'var(--bg-overlay)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--r-sm)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 20,
      color: "var(--text-primary)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 'auto 0 0 0',
        padding: 'var(--sp-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-2)',
        flexWrap: 'wrap',
        marginBottom: 'var(--sp-2)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "solid"
    }, project.service), project.tier ? /*#__PURE__*/React.createElement(Badge, null, project.tier) : null), /*#__PURE__*/React.createElement("h2", {
      className: "bcc-display bcc-display--md",
      style: {
        margin: 0
      }
    }, project.car))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--sp-6)',
        display: 'grid',
        gap: 'var(--sp-5)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-body)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-muted)',
        textWrap: 'pretty'
      }
    }, project.problem), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-6)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--sp-2)',
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 15,
      color: "var(--accent)"
    }), project.duration), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--sp-2)',
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 15,
      color: "var(--accent)"
    }), project.branch)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-3)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      cut: true,
      onClick: () => {
        onClose();
        onNavigate('book');
      }
    }, "Book the same"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Close")))));
  }

  /* ── Testimonials ───────────────────────────────────────────────────────── */
  function TestimonialsScreen({
    onNavigate
  }) {
    const {
      TESTIMONIALS,
      VIDEO_REVIEWS,
      GOOGLE_REVIEWS
    } = window.BCC;
    const [filter, setFilter] = useState('All');
    const services = ['All', ...Array.from(new Set(TESTIMONIALS.map(t => t.service)))];
    const shown = TESTIMONIALS.filter(t => filter === 'All' || t.service === filter);
    const avg = (TESTIMONIALS.reduce((a, t) => a + t.rating, 0) / TESTIMONIALS.length).toFixed(1);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "bcc-container",
      style: {
        paddingBlock: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: [{
        id: 'home',
        label: 'Home'
      }, {
        label: 'Reviews'
      }],
      onNavigate: onNavigate
    })), VIDEO_REVIEWS.length ? /*#__PURE__*/React.createElement(Section, {
      eyebrow: "In their own words",
      lead: "Video",
      tail: "Reviews",
      intro: "Owners talking about their own cars, on camera, unedited. Filmed at our branches and posted to our channel.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        iconAfter: "arrow-right",
        onClick: () => onNavigate('videos')
      }, "All videos")
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 3,
        '--cols-md': 2,
        '--cols-sm': 1
      }
    }, VIDEO_REVIEWS.map((v, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: v.videoId,
      delay: i * 80
    }, /*#__PURE__*/React.createElement(VideoCard, v))))) : null, /*#__PURE__*/React.createElement(Section, {
      tone: "dots",
      eyebrow: "Published on Google",
      lead: "What people",
      tail: "Wrote",
      intro: "Quoted exactly as posted, spelling and all."
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 3,
        '--cols-md': 2,
        '--cols-sm': 1
      }
    }, GOOGLE_REVIEWS.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: r.name,
      delay: i * 60
    }, /*#__PURE__*/React.createElement(ReviewCard, r))))), /*#__PURE__*/React.createElement(Section, {
      tone: "surface",
      eyebrow: "What owners say",
      lead: "Booked once",
      tail: "Came back",
      intro: "Collected on WhatsApp after collection day. We publish the four-star ones too."
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-split",
      style: {
        '--split': '1fr',
        marginBottom: 'var(--sp-10)'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      className: "bcc-cutbox"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-cutbox__inner",
      style: {
        padding: 'clamp(20px,4vw,32px)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--sp-6)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-display-lg)',
        color: 'var(--text-accent)',
        lineHeight: 1
      }
    }, /*#__PURE__*/React.createElement(StatCounter, {
      value: Number(avg),
      decimals: 1
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2,
        marginTop: 'var(--sp-2)'
      }
    }, Array.from({
      length: 5
    }).map((_, i) => /*#__PURE__*/React.createElement(Icon, {
      key: i,
      name: "star",
      size: 16,
      color: i < Math.round(avg) ? 'var(--accent)' : 'var(--ink-500)'
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 180
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-body-sm)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-muted)'
      }
    }, "Average across ", TESTIMONIALS.length, " reviews, both branches. Nothing is filtered out."))))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 90
    }, /*#__PURE__*/React.createElement(FeatureList, {
      size: "sm",
      items: ['Reviews are collected on WhatsApp, after collection.', 'Four-star reviews stay up.', 'Car and service are named on every one.']
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bcc-tabs",
      role: "tablist",
      "aria-label": "Filter reviews",
      style: {
        marginBottom: 'var(--sp-6)'
      }
    }, services.map(s => /*#__PURE__*/React.createElement("button", {
      key: s,
      role: "tab",
      "aria-selected": filter === s,
      className: "bcc-tab",
      onClick: () => setFilter(s)
    }, s))), /*#__PURE__*/React.createElement("div", {
      key: filter,
      className: "bcc-grid",
      style: {
        '--cols': 3,
        '--cols-md': 2,
        '--cols-sm': 1
      }
    }, shown.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: t.name + t.service,
      delay: i * 60
    }, /*#__PURE__*/React.createElement(TestimonialCard, _extends({}, t, {
      style: {
        height: '100%'
      }
    })))))), /*#__PURE__*/React.createElement(Section, {
      tone: "surface",
      narrow: true,
      align: "center",
      lead: "Been to",
      tail: "Bubbles?"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 auto var(--sp-6)',
        maxWidth: '46ch',
        textAlign: 'center',
        fontSize: 'var(--fs-body)',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--text-muted)'
      }
    }, "Send us a line on WhatsApp and we will put it up \u2014 good or bad."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(WhatsAppCta, {
      label: "Leave a review",
      message: "Hi Bubbles Car Care, I would like to leave a review for"
    }))));
  }
  Object.assign(window, {
    ProjectsScreen,
    TestimonialsScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceScreens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    useState
  } = React;
  const DS = window.BubblesCarCareDesignSystem_459ca2;
  const {
    DisplayHeading,
    Button,
    Badge,
    HexFrame,
    Icon,
    FeatureList,
    Section,
    PriceRow,
    Breadcrumbs,
    ServiceCard,
    Faq,
    PricingTable,
    TierBadge,
    WhatsAppCta
  } = DS;
  /* Defensive: if the DS bundle is a build behind, degrade to a static render
     rather than throwing "Element type is invalid" and blanking the page. */
  const _passthru = tag => ({
    children,
    ...p
  }) => React.createElement(tag, p, children);
  const Reveal = DS.Reveal || _passthru('div');
  const StatCounter = DS.StatCounter || (({
    value,
    prefix = '',
    suffix = '',
    ...p
  }) => React.createElement('span', p, prefix + value + suffix));
  const BeforeAfter = DS.BeforeAfter || (({
    afterSrc,
    afterLabel = '',
    ...p
  }) => React.createElement('img', {
    src: afterSrc,
    alt: afterLabel,
    style: {
      width: '100%',
      borderRadius: 'var(--r-card)'
    },
    ...p
  }));
  const ProjectCard = DS.ProjectCard || (({
    car,
    service,
    image
  }) => React.createElement('div', {
    className: 'bcc-card',
    style: {
      padding: 'var(--sp-5)'
    }
  }, React.createElement('img', {
    src: image,
    alt: '',
    style: {
      width: '100%',
      marginBottom: 'var(--sp-3)'
    }
  }), React.createElement('strong', null, car), ' — ', service));

  /* ── Services index ─────────────────────────────────────────────────────── */
  function ServicesIndexScreen({
    onNavigate
  }) {
    const {
      SERVICES
    } = window.BCC;
    const [filter, setFilter] = useState('all');
    const groups = {
      all: 'All services',
      protection: 'Protection',
      detailing: 'Detailing'
    };
    const groupOf = id => ['ppf', 'ceramic', 'rust'].includes(id) ? 'protection' : 'detailing';
    const shown = SERVICES.filter(s => filter === 'all' || groupOf(s.id) === filter);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "bcc-container",
      style: {
        paddingBlock: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: [{
        id: 'home',
        label: 'Home'
      }, {
        label: 'Services'
      }],
      onNavigate: onNavigate
    })), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Services we offer",
      lead: "Everything",
      tail: "We do",
      intro: "Seven services across two branches. Each one has its own page with the full checklist and per-class pricing."
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-tabs",
      role: "tablist",
      style: {
        marginBottom: 'var(--sp-8)'
      }
    }, Object.entries(groups).map(([k, label]) => /*#__PURE__*/React.createElement("button", {
      key: k,
      role: "tab",
      "aria-selected": filter === k,
      className: "bcc-tab",
      onClick: () => setFilter(k)
    }, label))), /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 3,
        '--cols-md': 2,
        '--cols-sm': 1
      }
    }, shown.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.id,
      delay: i * 70
    }, /*#__PURE__*/React.createElement(ServiceCard, {
      title: s.title,
      summary: s.summary,
      image: s.hero,
      icon: s.icon,
      fromPrice: s.prices[0].price,
      onOpen: () => onNavigate(s.id),
      style: {
        height: '100%'
      }
    }))))));
  }

  /* ── One service, one page ──────────────────────────────────────────────── */
  function ServiceScreen({
    id,
    onNavigate
  }) {
    const {
      SERVICES
    } = window.BCC;
    const d = SERVICES.find(s => s.id === id) || SERVICES[0];
    const others = SERVICES.filter(s => s.id !== d.id).slice(0, 3);
    const half = Math.ceil(d.includes.length / 2);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "bcc-container",
      style: {
        paddingBlock: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: [{
        id: 'home',
        label: 'Home'
      }, {
        id: 'services',
        label: 'Services'
      }, {
        label: d.title
      }],
      onNavigate: onNavigate
    })), /*#__PURE__*/React.createElement("section", {
      className: "bcc-hero"
    }, /*#__PURE__*/React.createElement("img", {
      src: d.hero,
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'saturate(.92) contrast(1.06)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--scrim-photo)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "bcc-hero__inner",
      style: {
        paddingBlock: 'clamp(40px,7vw,88px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '44ch'
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      variant: "fade"
    }, /*#__PURE__*/React.createElement(DisplayHeading, {
      eyebrow: d.eyebrow,
      lead: d.lead,
      tail: d.tail,
      size: "lg",
      as: "h1"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 80
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 'var(--sp-5) 0 0',
        fontSize: 'var(--fs-body-lg)',
        fontWeight: 'var(--fw-light)',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--text-muted)',
        textWrap: 'pretty'
      }
    }, d.blurb), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-3)',
        flexWrap: 'wrap',
        marginTop: 'var(--sp-5)'
      }
    }, d.duration ? /*#__PURE__*/React.createElement(Badge, null, d.duration) : null, d.durability ? /*#__PURE__*/React.createElement(Badge, null, "Lasts ", d.durability) : null, /*#__PURE__*/React.createElement(Badge, {
      variant: d.priceConfirmed ? 'solid' : 'outline'
    }, d.priceConfirmed ? 'Flyer pricing' : 'Indicative pricing')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 'var(--sp-3)',
        marginTop: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-caption)',
        letterSpacing: 'var(--tr-label)',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, "From"), /*#__PURE__*/React.createElement("span", {
      className: "bcc-price",
      style: {
        fontSize: 'var(--fs-display-md)',
        color: 'var(--text-accent)'
      }
    }, d.prices[0].price)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-3)',
        flexWrap: 'wrap',
        marginTop: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      cut: true,
      onClick: () => onNavigate('book')
    }, "Book this service"), /*#__PURE__*/React.createElement(WhatsAppCta, {
      label: "Ask a question",
      message: `Hi Bubbles Car Care, I have a question about ${d.title.toLowerCase()} for my`
    })))), /*#__PURE__*/React.createElement("div", {
      className: "bcc-hero__aside"
    }, /*#__PURE__*/React.createElement(Reveal, {
      variant: "hex",
      delay: 140
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(HexFrame, {
      src: d.photos[0],
      width: 140,
      style: {
        marginTop: 62,
        marginRight: -16
      }
    }), /*#__PURE__*/React.createElement(HexFrame, {
      src: d.photos[1],
      width: 140
    })))))), /*#__PURE__*/React.createElement(Section, {
      tone: "dots",
      eyebrow: "What is included",
      lead: "Every step",
      tail: "On the list"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 2,
        '--cols-md': 1,
        '--cols-sm': 1
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(FeatureList, {
      columns: 1,
      items: d.includes.slice(0, half)
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 90
    }, /*#__PURE__*/React.createElement(FeatureList, {
      columns: 1,
      items: d.includes.slice(half)
    })))), d.hasTiers ? /*#__PURE__*/React.createElement(Section, {
      tone: "surface",
      eyebrow: "Gtechniq systems",
      lead: "Three tiers",
      tail: "One process",
      intro: "Every tier gets full paint correction first. The difference is the product stack."
    }, /*#__PURE__*/React.createElement(CoatingTiers, {
      onNavigate: onNavigate,
      compact: true
    })) : /*#__PURE__*/React.createElement(Section, {
      tone: "surface",
      eyebrow: "Pricing",
      lead: "Per vehicle",
      tail: "Class",
      intro: "No hidden add-ons. Ceramic-coated wheels and heavy paint correction are quoted separately after we see the car."
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(PriceRow, {
      items: d.prices,
      featuredIndex: 2
    })), d.priceConfirmed ? null : /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 'var(--sp-5) 0 0',
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-faint)'
      }
    }, "Indicative only \u2014 confirm on WhatsApp before booking.")), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Also consider",
      lead: "Other",
      tail: "Services"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 3,
        '--cols-md': 2,
        '--cols-sm': 1
      }
    }, others.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.id,
      delay: i * 80
    }, /*#__PURE__*/React.createElement(ServiceCard, {
      title: s.title,
      summary: s.summary,
      image: s.hero,
      icon: s.icon,
      fromPrice: s.prices[0].price,
      onOpen: () => onNavigate(s.id),
      style: {
        height: '100%'
      }
    }))))));
  }

  /* ── Coating tiers (Style B) ────────────────────────────────────────────── */
  const GOLD = {
    tier: 'gold',
    tierLabel: 'Gold',
    durability: '03 years',
    complimentary: 'Microfiber towel ×1, maintenance wash ×1',
    specs: [{
      product: 'C1 Crystal Lacquer',
      appliedOn: 'All painted surfaces'
    }, {
      product: 'C2v3 Liquid Crystal',
      appliedOn: 'All painted surfaces'
    }, {
      product: 'T1 Tire Dressing',
      appliedOn: 'All tires'
    }, {
      product: 'C5 Wheel Armour',
      appliedOn: 'All alloys'
    }, {
      product: 'C6 AB Matte Dash',
      appliedOn: 'Interior trims'
    }],
    prices: [{
      vehicleClass: 'Small hatchback',
      price: '35,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '45,000/-'
    }, {
      vehicleClass: 'Luxury sedan',
      price: '50,000/-'
    }, {
      vehicleClass: 'Crossover',
      price: '50,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '60,000/-'
    }]
  };
  const PLATINUM = {
    tier: 'platinum',
    tierLabel: 'Platinum',
    durability: '05 years',
    complimentary: 'Microfiber towel ×2, maintenance wash ×2',
    specs: [{
      product: 'Crystal Serum Light',
      appliedOn: 'All painted surfaces'
    }, {
      product: 'EXOv5 Ultra Durable',
      appliedOn: 'All painted surfaces'
    }, {
      product: 'G1 ClearVision Smart Glass',
      appliedOn: 'Windscreen'
    }, {
      product: 'C5 Wheel Armour',
      appliedOn: 'All alloys'
    }, {
      product: 'I1 Smooth Leather Coat',
      appliedOn: 'Leather seats'
    }],
    prices: [{
      vehicleClass: 'Small hatchback',
      price: '55,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '68,000/-'
    }, {
      vehicleClass: 'Luxury sedan',
      price: '78,000/-'
    }, {
      vehicleClass: 'Crossover',
      price: '78,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '92,000/-'
    }]
  };
  const SILVER = {
    tier: 'silver',
    tierLabel: 'Silver',
    durability: '02 years',
    complimentary: 'Microfiber towel ×1',
    specs: [{
      product: 'C2v3 Liquid Crystal',
      appliedOn: 'All painted surfaces'
    }, {
      product: 'T1 Tire Dressing',
      appliedOn: 'All tires'
    }, {
      product: 'C4 Trim Restorer',
      appliedOn: 'Exterior plastic trims'
    }],
    prices: [{
      vehicleClass: 'Small hatchback',
      price: '22,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '28,000/-'
    }, {
      vehicleClass: 'Luxury sedan',
      price: '32,000/-'
    }, {
      vehicleClass: 'Crossover',
      price: '32,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '38,000/-'
    }]
  };
  const TIERS = {
    platinum: PLATINUM,
    gold: GOLD,
    silver: SILVER
  };
  function CoatingTiers({
    onNavigate,
    compact = false
  }) {
    const [tier, setTier] = useState('platinum');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "bcc-tabs",
      role: "tablist",
      "aria-label": "Coating tiers",
      style: {
        marginBottom: 'var(--sp-6)'
      }
    }, ['platinum', 'gold', 'silver'].map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      role: "tab",
      "aria-selected": tier === t,
      className: "bcc-tab",
      onClick: () => setTier(t),
      style: {
        textTransform: 'capitalize'
      }
    }, t))), /*#__PURE__*/React.createElement("div", {
      key: tier,
      style: {
        animation: 'bcc-fade-up var(--dur-slow) var(--ease-out) both'
      }
    }, /*#__PURE__*/React.createElement(PricingTable, _extends({}, TIERS[tier], {
      onBook: () => onNavigate('book')
    }))), compact ? null : /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 'var(--sp-6) 0 0',
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-faint)'
      }
    }, "Indicative pricing. Deep scratch removal and wet sanding are quoted after inspection."));
  }
  function CoatingsScreen({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "bcc-container",
      style: {
        paddingBlock: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: [{
        id: 'home',
        label: 'Home'
      }, {
        id: 'services',
        label: 'Services'
      }, {
        label: 'Coating tiers'
      }],
      onNavigate: onNavigate
    })), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Gtechniq systems",
      lead: "Ceramic",
      tail: "Coating",
      intro: "Three tiers, three durability ratings. Every tier is applied indoors after full paint correction \u2014 the difference is the product stack, not the care.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        icon: "message-circle",
        onClick: () => onNavigate('book')
      }, "Ask which tier fits")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-3)',
        flexWrap: 'wrap',
        marginBottom: 'var(--sp-8)'
      }
    }, /*#__PURE__*/React.createElement(TierBadge, {
      tier: "platinum",
      label: "Platinum",
      size: "lg"
    }), /*#__PURE__*/React.createElement(TierBadge, {
      tier: "gold",
      label: "Gold",
      size: "lg"
    }), /*#__PURE__*/React.createElement(TierBadge, {
      tier: "silver",
      label: "Silver",
      size: "lg"
    }), /*#__PURE__*/React.createElement(TierBadge, {
      tier: "sealant",
      label: "Sealant",
      size: "lg"
    })), /*#__PURE__*/React.createElement(CoatingTiers, {
      onNavigate: onNavigate
    })), /*#__PURE__*/React.createElement(Section, {
      tone: "dots",
      narrow: true,
      eyebrow: "Before you book",
      lead: "Common",
      tail: "Questions"
    }, /*#__PURE__*/React.createElement(Faq, {
      items: window.BCC.FAQS
    })));
  }
  Object.assign(window, {
    ServicesIndexScreen,
    ServiceScreen,
    CoatingsScreen,
    CoatingTiers
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/VideosScreen.jsx
try { (() => {
(() => {
  const DS = window.BubblesCarCareDesignSystem_459ca2;
  const {
    Button,
    Badge,
    Icon,
    Section,
    Breadcrumbs,
    WhatsAppCta,
    FeatureList
  } = DS;
  const _passthru = tag => ({
    children,
    ...p
  }) => React.createElement(tag, p, children);
  const Reveal = DS.Reveal || _passthru('div');
  const _vidRow = ({
    videoId,
    title,
    car,
    service,
    kind
  }) => React.createElement('a', {
    key: videoId,
    href: 'https://www.youtube.com/watch?v=' + videoId,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'bcc-video-fallback'
  }, React.createElement('span', {
    className: 'bcc-video-fallback__play',
    'aria-hidden': 'true'
  }, '\u25B6'), React.createElement('span', null, React.createElement('span', {
    className: 'bcc-video-fallback__title'
  }, title), car || service || kind === 'review' ? React.createElement('span', {
    className: 'bcc-video-fallback__meta'
  }, [car, kind === 'review' ? 'Customer review' : service].filter(Boolean).join(' \u00B7 ')) : null));
  const _vidList = ({
    videos = []
  }) => React.createElement('div', {
    className: 'bcc-video-fallback__list'
  }, videos.map(_vidRow));
  const _review = ({
    quote,
    name,
    service
  }) => React.createElement('figure', {
    className: 'bcc-card',
    style: {
      margin: 0,
      padding: 'var(--sp-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      height: '100%'
    }
  }, React.createElement('blockquote', {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-primary)'
    }
  }, quote), React.createElement('figcaption', {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--sp-4)',
      borderTop: '1px solid var(--border-subtle)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, name, service ? React.createElement('span', {
    style: {
      display: 'block',
      marginTop: 2,
      fontSize: 'var(--fs-caption)',
      fontWeight: 400,
      color: 'var(--text-accent)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tr-label)'
    }
  }, service) : null));
  const _social = ({
    channels = []
  }) => React.createElement('div', {
    className: 'bcc-video-fallback__list'
  }, channels.map(c => React.createElement('a', {
    key: c.platform,
    href: c.url,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'bcc-video-fallback'
  }, React.createElement('span', null, React.createElement('span', {
    className: 'bcc-video-fallback__title'
  }, c.platform), React.createElement('span', {
    className: 'bcc-video-fallback__meta'
  }, c.handle + (c.count ? ' \u00B7 ' + c.count : ''))))));
  const VideoGallery = DS.VideoGallery || _vidList;
  const VideoCard = DS.VideoCard || _vidRow;
  const SocialStrip = DS.SocialStrip || _social;

  /* ── Videos & latest work ───────────────────────────────────────────────── */
  function VideosScreen({
    onNavigate
  }) {
    const {
      VIDEOS,
      VIDEO_REVIEWS,
      VIDEO_WORK,
      SOCIAL
    } = window.BCC;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "bcc-container",
      style: {
        paddingBlock: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: [{
        id: 'home',
        label: 'Home'
      }, {
        label: 'Videos'
      }],
      onNavigate: onNavigate
    })), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Latest from the bays",
      lead: "Watch the",
      tail: "Work",
      intro: "Everything here is filmed at our own branches and posted to our channel. Press play \u2014 nothing loads until you do.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        iconAfter: "arrow-up-right",
        href: SOCIAL[0].url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Open YouTube channel")
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(VideoGallery, {
      videos: VIDEOS,
      layout: "feature"
    }))), VIDEO_REVIEWS.length ? /*#__PURE__*/React.createElement(Section, {
      tone: "dots",
      eyebrow: "In their own words",
      lead: "Video",
      tail: "Reviews",
      intro: "Owners talking about their own cars, on camera, unedited."
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-grid",
      style: {
        '--cols': 3,
        '--cols-md': 2,
        '--cols-sm': 1
      }
    }, VIDEO_REVIEWS.map((v, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: v.videoId,
      delay: i * 80
    }, /*#__PURE__*/React.createElement(VideoCard, v))))) : null, /*#__PURE__*/React.createElement(Section, {
      tone: "surface",
      eyebrow: "Follow along",
      lead: "New work",
      tail: "Every week"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bcc-split",
      style: {
        '--split': '1fr'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SocialStrip, {
      channels: SOCIAL
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 90
    }, /*#__PURE__*/React.createElement(FeatureList, {
      size: "sm",
      items: ['Project videos and walkarounds go up on YouTube.', 'Day-to-day work and reels go to Instagram.', 'Offers and branch news go to Facebook.']
    })))), /*#__PURE__*/React.createElement(Section, {
      narrow: true,
      align: "center",
      lead: "Want yours",
      tail: "On camera?"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 auto var(--sp-6)',
        maxWidth: '46ch',
        textAlign: 'center',
        fontSize: 'var(--fs-body)',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--text-muted)'
      }
    }, "We film most big jobs. Tell us when you book and we will send you the clip."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-3)',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      cut: true,
      onClick: () => onNavigate('book')
    }, "Book a slot"), /*#__PURE__*/React.createElement(WhatsAppCta, {
      label: "Ask about filming",
      message: "Hi Bubbles Car Care, can you film my car during the job?"
    }))));
  }
  Object.assign(window, {
    VideosScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/VideosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
(() => {
  const A = '../../assets/';

  // Prices marked ✓ are transcribed from the flyers in assets/reference/.
  // Ceramic + PPF are placeholders pending legible source.
  const SERVICES = [{
    id: 'ppf',
    title: 'Paint protection film',
    short: 'PPF',
    lead: 'Paint Protection',
    tail: 'Film',
    icon: 'shield-check',
    summary: 'Self-healing film over the panels that take the hits — bonnet, bumper, mirrors.',
    blurb: 'Karachi roads throw stones. Film is the only thing that stops a chip becoming a rust spot. We cut to pattern and wrap the edges so nothing lifts in the heat.',
    eyebrow: 'Services we offer',
    hero: A + 'photos/ext-rinse-taillight.jpg',
    photos: [A + 'photos/ext-polisher.jpg', A + 'photos/ext-grille-foam.jpg'],
    includes: ['Full front-end coverage: bonnet, bumper, fenders, mirrors.', 'Self-healing top coat.', 'Wrapped and tucked edges.', 'Paint decontamination before application.', 'Pattern-cut, no blade near your paint.', 'Applied indoors, dust-controlled.'],
    prices: [{
      vehicleClass: 'Small hatchback',
      price: '55,000/-'
    }, {
      vehicleClass: 'Medium hatchback',
      price: '62,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '70,000/-'
    }, {
      vehicleClass: 'Luxury sedan / Crossover',
      price: '85,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '98,000/-'
    }],
    priceConfirmed: false,
    duration: '2–3 days',
    durability: '05 years'
  }, {
    id: 'ceramic',
    title: 'Ceramic coating',
    short: 'Ceramic',
    lead: 'Ceramic',
    tail: 'Coating',
    icon: 'droplets',
    summary: 'Gtechniq-approved coating systems in Gold, Platinum and Silver tiers.',
    blurb: 'Three tiers, three durability ratings. Every tier gets full paint correction first — the difference is the product stack, not the care.',
    eyebrow: 'Gtechniq systems',
    hero: A + 'photos/ext-polisher.jpg',
    photos: [A + 'photos/complete-polisher.jpg', A + 'photos/ext-grille-foam.jpg'],
    includes: ['Full paint correction before coating.', 'Gtechniq product systems, applied as specified.', 'Wheels, tyres and trim coated.', 'Glass coating on the windscreen (Platinum).', 'Indoor cure, no rushed handback.', 'Written record of every product applied.'],
    prices: [{
      vehicleClass: 'Small hatchback',
      price: '35,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '45,000/-'
    }, {
      vehicleClass: 'Luxury sedan',
      price: '50,000/-'
    }, {
      vehicleClass: 'Crossover',
      price: '50,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '60,000/-'
    }],
    priceConfirmed: false,
    duration: '2–3 days',
    durability: '03–05 years',
    hasTiers: true
  }, {
    id: 'rust',
    title: 'Anti rust coating',
    short: 'Anti rust',
    lead: 'Anti Rust',
    tail: 'Coating',
    icon: 'spray-can',
    summary: 'Underbody and cavity treatment for Karachi salt air and monsoon standing water.',
    blurb: 'Salt air and standing monsoon water take the underbody first, and you never see it happen. We strip, treat and seal the cavities and floor pan.',
    eyebrow: 'Benefits',
    hero: A + 'photos/rust-underbody.jpg',
    photos: [A + 'photos/rust-suspension.jpg', A + 'photos/rust-spray-gun.jpg'],
    includes: ["Prolongs the car's life.", 'Prevents rust and corrosion.', 'Heat resistance.', 'Absorbs road noise.', 'Moisture resistance.', 'Protection against stone chips, damp and salt.'],
    prices: [{
      vehicleClass: 'Small hatchback',
      price: '18,000/-'
    }, {
      vehicleClass: 'Medium hatchback',
      price: '20,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '22,000/-'
    }, {
      vehicleClass: 'Luxury sedan / Crossover',
      price: '28,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '35,000/-'
    }],
    priceConfirmed: true,
    duration: '1 day'
  }, {
    id: 'complete',
    title: 'Complete detailing',
    short: 'Complete',
    lead: 'Complete',
    tail: 'Detailing',
    icon: 'sparkles',
    summary: 'Interior and exterior together — the full strip-down, correction and dressing.',
    blurb: 'Interior and exterior in one booking. The car goes in dirty and comes out corrected, dressed and protected. Usually two days.',
    eyebrow: 'Services we offer',
    hero: A + 'photos/complete-polisher.jpg',
    photos: [A + 'photos/complete-leather-wipe.jpg', A + 'photos/ext-grille-foam.jpg'],
    includes: ['Interior vacuuming.', 'Dash, console, doors, vinyl and plastics cleaning and dressing.', 'Leather cleaning and dressing.', 'Headliner cleaning.', 'Seats cleaning.', 'Carpet vacuuming.', 'Exterior body jet shampoo wash.', 'Clay bar treatment.', 'Exterior paint correction compounding.', 'High gloss polishing.', 'Chrome and metal surface cleaning.', 'Wax application.', 'Exterior plastic trim dressing.', 'Engine bay degreasing and cleaning.', 'Rim and tyre cleaning and dressing.'],
    prices: [{
      vehicleClass: 'Small hatchback',
      price: '17,000/-'
    }, {
      vehicleClass: 'Medium hatchback',
      price: '18,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '20,000/-'
    }, {
      vehicleClass: 'Luxury sedan / Crossover',
      price: '25,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '30,000/-'
    }],
    priceConfirmed: true,
    duration: '2 days'
  }, {
    id: 'interior',
    title: 'Interior detailing',
    short: 'Interior',
    lead: 'Interior',
    tail: 'Detailing',
    icon: 'car',
    summary: 'Cabin strip-down, leather and trim dressing, headliner, carpets and vents.',
    blurb: 'Full cabin strip-down. Carpets extracted, every vent and seam done by hand, leather fed rather than glossed.',
    eyebrow: 'Services we offer',
    hero: A + 'photos/int-vacuum.jpg',
    photos: [A + 'photos/int-vent-cloth.jpg', A + 'photos/int-dash-wipe.jpg'],
    includes: ['Interior vacuuming.', 'Dash, console, doors, vinyl and plastics cleaning and dressing.', 'Leather cleaning and dressing.', 'Seats cleaning.', 'Headliner cleaning.', 'Carpet vacuuming and cleaning.', 'Windows cleaning.', 'Engine bay degreasing and cleaning.', 'Rim and tyre cleaning and dressing.', 'Exterior body jet shampoo washing.', 'Wax application.'],
    prices: [{
      vehicleClass: 'Small hatchback',
      price: '10,000/-'
    }, {
      vehicleClass: 'Medium hatchback',
      price: '11,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '12,000/-'
    }, {
      vehicleClass: 'Luxury sedan / Crossover',
      price: '18,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '20,000/-'
    }],
    priceConfirmed: true,
    duration: '1 day'
  }, {
    id: 'exterior',
    title: 'Exterior detailing',
    short: 'Exterior',
    lead: 'Exterior',
    tail: 'Detailing',
    icon: 'droplets',
    summary: 'Wash, clay, correction and polish — the paint side of the job on its own.',
    blurb: 'The paint side on its own. Wash, decontaminate, correct, polish, protect. Best value if the cabin is already clean.',
    eyebrow: 'Services we offer',
    hero: A + 'photos/ext-grille-foam.jpg',
    photos: [A + 'photos/ext-polisher.jpg', A + 'photos/ext-rinse-taillight.jpg'],
    includes: ['Jet shampoo wash.', 'Clay bar treatment.', 'Paint correction compounding.', 'High gloss polishing.', 'Chrome and metal surface cleaning.', 'Wax application.', 'Exterior plastic trim dressing.', 'Complete interior vacuum.', 'Interior and exterior windows cleaning.', 'Engine bay degreasing and cleaning.', 'Rim and tyre cleaning and dressing.'],
    prices: [{
      vehicleClass: 'Small hatchback',
      price: '10,000/-'
    }, {
      vehicleClass: 'Medium hatchback',
      price: '11,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '12,000/-'
    }, {
      vehicleClass: 'Luxury sedan / Crossover',
      price: '18,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '20,000/-'
    }],
    priceConfirmed: true,
    duration: '1 day'
  }, {
    id: 'wash',
    title: 'Premium wash & wax',
    short: 'Wash & wax',
    lead: 'Premium',
    tail: 'Wash & Wax',
    icon: 'droplets',
    summary: 'Jet shampoo wash, clay bar, hand wax. Same day, both branches.',
    blurb: 'The maintenance visit. Book it every six weeks and a coated car stays coated.',
    eyebrow: 'Best and fast washing',
    hero: A + 'photos/wash-foam-wheel.jpg',
    photos: [A + 'photos/ext-grille-foam.jpg', A + 'photos/int-dash-wipe.jpg'],
    includes: ['Complete interior vacuum.', 'Interior dusting with trims, plastic and vinyl surface dressing.', 'Engine bay cleaning and dressing.', 'Trunk compartment cleaning.', 'Exterior body shampoo wash.', 'Wax application.', 'Exterior windows and mirrors cleaning.', 'Tire dressing.'],
    prices: [{
      vehicleClass: 'Small hatchback',
      price: '3,500/-'
    }, {
      vehicleClass: 'Medium hatchback',
      price: '4,000/-'
    }, {
      vehicleClass: 'Sedan',
      price: '5,000/-'
    }, {
      vehicleClass: 'Luxury sedan / Crossover',
      price: '7,000/-'
    }, {
      vehicleClass: 'SUV',
      price: '9,000/-'
    }],
    priceConfirmed: true,
    duration: 'Same day'
  }];
  const PROJECTS = [{
    id: 'p1',
    car: 'Honda City 2021',
    service: 'Ceramic coating',
    tier: 'Gold',
    image: A + 'photos/ext-polisher.jpg',
    problem: 'Two years of swirl marks from a roadside wash. Corrected, then coated.',
    duration: '3 days in the bay',
    branch: 'DHA Branch'
  }, {
    id: 'p2',
    car: 'Suzuki Cultus 2018',
    service: 'Anti rust coating',
    image: A + 'photos/rust-underbody.jpg',
    problem: 'Surface rust starting along the sills after two monsoons parked outside.',
    duration: '1 day',
    branch: 'North Chapter'
  }, {
    id: 'p3',
    car: 'Toyota Fortuner 2020',
    service: 'Interior detailing',
    image: A + 'photos/int-vacuum.jpg',
    problem: 'Two kids and a dog. Carpets extracted, leather fed, headliner spot-cleaned.',
    duration: '1 day',
    branch: 'DHA Branch'
  }, {
    id: 'p4',
    car: 'Toyota Corolla 2019',
    service: 'Complete detailing',
    image: A + 'photos/complete-polisher.jpg',
    problem: 'Bought used, never detailed. Full correction inside and out.',
    duration: '2 days',
    branch: 'North Chapter'
  }, {
    id: 'p5',
    car: 'Kia Sportage 2022',
    service: 'Paint protection film',
    image: A + 'photos/ext-rinse-taillight.jpg',
    problem: 'New car, owner drives Super Highway daily. Front end wrapped before delivery mileage.',
    duration: '2 days',
    branch: 'DHA Branch'
  }, {
    id: 'p6',
    car: 'Honda Civic 2017',
    service: 'Exterior detailing',
    image: A + 'photos/ext-grille-foam.jpg',
    problem: 'Faded clear coat on the roof and bonnet. Compounded back, then sealed.',
    duration: '1 day',
    branch: 'North Chapter'
  }, {
    id: 'p7',
    car: 'Suzuki Alto 2020',
    service: 'Premium wash & wax',
    image: A + 'photos/wash-foam-wheel.jpg',
    problem: 'Six-week maintenance visit on a car we coated last year.',
    duration: 'Same day',
    branch: 'North Chapter'
  }, {
    id: 'p8',
    car: 'Toyota Vitz 2015',
    service: 'Anti rust coating',
    image: A + 'photos/rust-suspension.jpg',
    problem: 'Suspension and floor pan treated before the rust reached a structural member.',
    duration: '1 day',
    branch: 'DHA Branch'
  }];
  const TESTIMONIALS = [{
    quote: 'Booked on a Thursday, collected Saturday morning. Water just runs off it now and the swirls from the last place are gone.',
    name: 'Bilal A.',
    car: 'Honda City 2021',
    service: 'Ceramic coating',
    rating: 5,
    branch: 'DHA Branch'
  }, {
    quote: 'They showed me the underbody before and after on their phone. Nobody had ever bothered to do that.',
    name: 'Sana R.',
    car: 'Suzuki Cultus 2018',
    service: 'Anti rust coating',
    rating: 5,
    branch: 'North Chapter'
  }, {
    quote: 'Two kids and a dog. The cabin smells new again. Took a day longer than quoted but worth it.',
    name: 'Faraz H.',
    car: 'Toyota Fortuner 2020',
    service: 'Interior detailing',
    rating: 4,
    branch: 'DHA Branch'
  }, {
    quote: 'I asked three places for a price on PPF. Bubbles was the only one who asked to see the car first.',
    name: 'Hamza K.',
    car: 'Kia Sportage 2022',
    service: 'Paint protection film',
    rating: 5,
    branch: 'DHA Branch'
  }, {
    quote: 'Straightforward on WhatsApp, no pushing me to a bigger package. Car came back better than I expected for the money.',
    name: 'Ayesha M.',
    car: 'Toyota Corolla 2019',
    service: 'Complete detailing',
    rating: 5,
    branch: 'North Chapter'
  }, {
    quote: 'The roof had gone chalky. They warned me it might need paint, then got it back with compounding anyway.',
    name: 'Usman T.',
    car: 'Honda Civic 2017',
    service: 'Exterior detailing',
    rating: 5,
    branch: 'North Chapter'
  }, {
    quote: 'Same-day wash and it was actually same day. Small thing, but nobody in Karachi does that.',
    name: 'Zainab F.',
    car: 'Suzuki Alto 2020',
    service: 'Premium wash & wax',
    rating: 4,
    branch: 'North Chapter'
  }, {
    quote: 'Second car I have brought here. They remembered the first one without me telling them.',
    name: 'Imran S.',
    car: 'Toyota Vitz 2015',
    service: 'Anti rust coating',
    rating: 5,
    branch: 'DHA Branch'
  }, {
    quote: 'Priced per vehicle class, written down, no add-ons at collection. That is the whole reason I went back.',
    name: 'Nida J.',
    car: 'Honda BR-V 2019',
    service: 'Ceramic coating',
    rating: 5,
    branch: 'DHA Branch'
  }];

  // ✓ Both branches verified against bubblescarcare.pk (Aug 2026).
  const BRANCHES = [{
    id: 'dha',
    name: 'DHA Branch',
    address: 'Plot 20, Sector A, 4th Commercial Street, opp. Defence Police Station, Main Korangi Road, Kashmir Colony, Karachi 75500',
    phone: '0330 2822537',
    hours: 'Mon–Sun, 10am – 9pm',
    map: 'https://goo.gl/maps/EJ2SorRz4F1hXQRR9'
  }, {
    id: 'north',
    name: 'North Chapter',
    address: 'C-177, Block C, Shahrah-e-Noorjahan, North Nazimabad, adj. Essa General Hospital, Karachi',
    phone: '0300 8233793',
    hours: 'Mon–Sun, 10am – 9pm',
    map: 'https://www.google.com/maps/place/Bubbles+Car+Care,+North+Chapter/@24.9402926,67.0326485,19.07z'
  }];

  // ✓ Real channels, verified counts (Aug 2026).
  const SOCIAL = [{
    platform: 'YouTube',
    icon: 'youtube',
    handle: '@bubblescarcare8150',
    count: 'Detailing projects & reviews',
    url: 'https://www.youtube.com/channel/UCAyzXaIEBDVXZB5Suj_eCYg/videos'
  }, {
    platform: 'Instagram',
    icon: 'instagram',
    handle: '@bubbles.carcare',
    count: '12K followers · 1,572 posts',
    url: 'https://www.instagram.com/bubbles.carcare/'
  }, {
    platform: 'Facebook',
    icon: 'facebook',
    handle: '/bubblescarcare',
    count: '78,849 likes',
    url: 'https://www.facebook.com/bubblescarcare/'
  }];

  // ✓ VERIFIED YouTube video ids only. Two are confirmed to exist; the channel has
  // more, but ids must be read off the real channel — never guessed, or the embed
  // renders "Video unavailable". Add to this array as ids are supplied.
  const VIDEOS = [{
    videoId: '3IkwinYT00c',
    platform: 'youtube',
    kind: 'review',
    title: 'My friends advised me to visit Bubbles Car Care',
    service: 'Customer review'
  }, {
    videoId: 'Mj7pTswBBv0',
    platform: 'youtube',
    kind: 'work',
    title: 'Witness the best car wash in Karachi',
    car: 'Honda Civic',
    service: 'Premium wash & wax'
  }];
  const VIDEO_REVIEWS = VIDEOS.filter(v => v.kind === 'review');
  const VIDEO_WORK = VIDEOS.filter(v => v.kind !== 'review');

  // ✓ Published Google reviews, verbatim from bubblescarcare.pk — typos included.
  // Owner's instruction: publish positive reviews only.
  const GOOGLE_REVIEWS = [{
    quote: 'Perfect experience while buying the car from them. Nice facilty with parking availablity. And giving their customers the best service. For washing and car care the place you need',
    name: 'Talha Mahmud',
    rating: 5
  }, {
    quote: 'Wonderful experience...good way of work under supervision of well trained staff...',
    name: 'Syed Shah',
    rating: 5
  }, {
    quote: 'First experience was good. Went for wash and wax only. Well trained staff, know their job and they use high quality stuff',
    name: 'Mateen Farooq',
    rating: 5
  }, {
    quote: 'Nyce detailing car clean SHOP.. It staff used Maguire Products..',
    name: 'Abid Ali Momin',
    rating: 5
  }, {
    quote: 'Still satisfy with them....... Doing good work',
    name: 'Muhammad Atiq',
    rating: 5
  }];

  // ✓ Verified facts from bubblescarcare.pk /about-us.
  const COMPANY = {
    founded: 2015,
    firstBranch: 'DHA Phase 1, Karachi',
    secondBranchYear: 2021,
    email: 'info@bubblescarcare.pk',
    site: 'bubblescarcare.pk',
    whatsapp: '923008233793',
    products: ['Gtechniq ceramic coatings', 'Nanotek PPF', 'Nanolink PPF', 'Gravitex anti-rust']
  };
  const FAQS = [{
    q: 'How long does a ceramic coating take?',
    a: 'Two to three days for full paint correction and cure. The car stays indoors the whole time — we do not hand it back mid-cure.'
  }, {
    q: 'Do you collect and drop off?',
    a: 'Yes, within DHA and Gulshan. Ask on WhatsApp when you book and we will confirm a window.'
  }, {
    q: 'Is PPF better than ceramic coating?',
    a: 'They do different jobs. Film takes physical impact on the panels that get hit; coating makes the whole car easier to wash and holds gloss. Most owners do film on the front end and coating everywhere else.'
  }, {
    q: 'Can you fix scratches?',
    a: 'Light swirls and water spots come out with correction. Anything through the clear coat needs paint, and we will tell you that before taking your money.'
  }, {
    q: 'Do I need to wash the car before bringing it?',
    a: 'No. Bring it as it is — the wash is the first step of every service.'
  }, {
    q: 'What does "vehicle class" mean for my car?',
    a: 'Small hatchback is an Alto or Cultus. Medium is a Vitz or Swift. Sedan is a City or Corolla. Luxury sedan and crossover covers Camry, BR-V and Sportage. SUV is Fortuner and up. Not sure — send the model on WhatsApp.'
  }, {
    q: 'Do you work on both branches to the same standard?',
    a: 'Same process, same products, same checklist. Book whichever is closer.'
  }];
  const A_ = A;
  Object.assign(window, {
    BCC: {
      A: A_,
      SERVICES,
      PROJECTS,
      TESTIMONIALS,
      BRANCHES,
      FAQS,
      VIDEOS,
      VIDEO_REVIEWS,
      VIDEO_WORK,
      GOOGLE_REVIEWS,
      SOCIAL,
      COMPANY
    }
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.WhatsAppCta = __ds_scope.WhatsAppCta;

__ds_ns.ChevronBanner = __ds_scope.ChevronBanner;

__ds_ns.DisplayHeading = __ds_scope.DisplayHeading;

__ds_ns.HexFrame = __ds_scope.HexFrame;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.CheckDot = __ds_scope.CheckDot;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BeforeAfter = __ds_scope.BeforeAfter;

__ds_ns.Faq = __ds_scope.Faq;

__ds_ns.FeatureList = __ds_scope.FeatureList;

__ds_ns.Gallery = __ds_scope.Gallery;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCounter = __ds_scope.StatCounter;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.VideoCard = __ds_scope.VideoCard;

__ds_ns.VideoGallery = __ds_scope.VideoGallery;

__ds_ns.SocialStrip = __ds_scope.SocialStrip;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.MobileNav = __ds_scope.MobileNav;

__ds_ns.NavHeader = __ds_scope.NavHeader;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.PriceRow = __ds_scope.PriceRow;

__ds_ns.PricingTable = __ds_scope.PricingTable;

__ds_ns.TierBadge = __ds_scope.TierBadge;

})();
