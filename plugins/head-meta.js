export default function generateHeadMeta({ title, description, image, url, locale, preload }) {
  let sitename = 'Jog Tracker App';
  
  title = title || sitename;
  description = description || 'Free fitness tracker for helping you track your indoor or outdoor exercise by distance';

  const titleTemplate = (text = '%s') => 
    `${title === sitename ? sitename : `${sitename} · `}${title === sitename ? '' : text}`;

  let preloadLinks = (preload || []).map(file => ({ rel: 'preload', as: file.type || 'image', href: file.url }));
  
  return {
    htmlAttrs: { 
      lang: locale
    },
    title: titleTemplate(title),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: sitename },
      { hid: 'description', name: 'description', content: description },
      { hid: 'theme-color', name: 'theme-color', content: '#2a2a2a' },
      { hid: 'application-name', name: 'application-name', content: sitename },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#2a2a2a' },
      // twitter card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: sitename },
      { hid: 'twitter:title', name: 'twitter:title', content: titleTemplate(title) },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'twitter:image', name: 'twitter:image', content: image },
      { hid: 'twitter:url', name: 'twitter:url', content: url },
      // open graph
      { hid: 'og:site_name', property: 'og:site_name', content: sitename },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: titleTemplate(title) },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:image', property: 'og:image', content: image },
      { hid: 'og:url', property: 'og:url', content: url }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2a2a2a' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { hid: 'canonical', rel: 'canonical', href: url },
      // fetch resources
      ...preloadLinks
    ]
  }
}