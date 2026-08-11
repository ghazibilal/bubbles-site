# Bubbles Car Care — live website

Deployable copy of `ui_kits/website`, flattened so `index.html` sits at the web root.
Everything is static: no build step, no server, no dependencies to install.

## Publish on GitHub Pages

1. Create a repo on GitHub (e.g. `bubbles-car-care-site`), public.
2. Upload **the contents of this `site/` folder** to the repo root — so `index.html`
   is at the top level, not inside a folder.
3. Repo → **Settings** → **Pages** → Source: **Deploy from a branch**,
   Branch: **main**, Folder: **/ (root)** → Save.
4. Wait ~1 minute. Your link appears at the top of that same Pages screen:
   `https://<username>.github.io/<repo-name>/`

That URL is public — send it to anyone.

## Custom domain — new.bubblescarcare.pk

`CNAME` in this folder contains **`new.bubblescarcare.pk`** — a preview subdomain.
Your existing site on `bubblescarcare.pk` keeps running, untouched.

### One DNS record

At your domain registrar, add:

```
CNAME   new   <username>.github.io
```

Then: repo → **Settings** → **Pages** → **Custom domain** → enter
`new.bubblescarcare.pk` → Save. Once the check passes, tick **Enforce HTTPS**
(the certificate can take up to an hour).

Your link: **https://new.bubblescarcare.pk**

DNS can take a few minutes to 24 hours to propagate.

### Later — switching the real domain over

Only when you have checked the preview on real phones and are happy with it:

1. Change `CNAME` in this folder to `bubblescarcare.pk` and re-upload it.
2. At the registrar, replace the root domain's existing records with these four:

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

3. Point www at GitHub too: `CNAME   www   <username>.github.io`
4. Update Settings → Pages → Custom domain to `bubblescarcare.pk`.

> Step 2 is the irreversible one — it takes your current live site down and puts this
> one in its place. Make sure whoever hosts the current site has a backup first.

## Contents

```
index.html        the site
data.jsx          ALL content — services, prices, branches, videos, reviews
*-screen.jsx      the screens (kebab-case so the design-system compiler skips them)
styles.css        entry point — @imports tokens/ and components/
tokens/           colours, type, spacing, effects, motifs, animation
components/       component CSS
ds-bundle.js      compiled design-system components
assets/           logo, Poppins fonts, photography
.nojekyll         REQUIRED — stops GitHub stripping files it thinks are private
CNAME             new.bubblescarcare.pk — the preview subdomain
```

## Editing content

Almost everything the site says lives in **`data.jsx`** — services, prices, branches,
YouTube videos, Google reviews, social links. Edit that one file and re-upload it.

To add a YouTube video, add one line to the `VIDEOS` array with the id from the video's
URL (`youtube.com/watch?v=**THIS_PART**`).

## Keeping in sync with the design system

`site/` is a build output. If components or tokens change in the design system, re-copy:
`styles.css`, `tokens/`, `components/components.css`, `_ds_bundle.js` → `ds-bundle.js`,
and the files from `ui_kits/website/` (rewriting `../../` to `./`).

## Note on the bundle

`ds-bundle.js` was renamed from `_ds_bundle.js`: GitHub Pages runs Jekyll, which ignores
paths beginning with an underscore. `.nojekyll` guards against this too — keep both.
