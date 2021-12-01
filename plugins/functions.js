import generateHeadMeta from '~/plugins/head-meta';

export default function({ app, route }, inject) {
  inject('headMeta', ({ title, description, image, url, preload }) => {
    let locale = 'en';
    image = app.$env.BASE_URL + (image || '/share-image.png');
    url = app.$env.BASE_URL + (url || route.path);
    return generateHeadMeta({ title, description, image, url, locale, preload });
  });
  inject('dateInputMask', () => {
    return { alias: 'datetime', inputFormat: 'dd/mm/yyyy' };
  });
}