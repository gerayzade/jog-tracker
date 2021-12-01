export default function ({ $axios, error, app }) {
  $axios.onRequest((config) => {
    let access_token = app.$cookies.get('access_token');
    if (access_token) {
      config.headers['Authorization'] = `Bearer ${access_token}`;
    }
  });

  $axios.onError((err) => {
    const code = parseInt(err?.response?.status);
    if (code === 404) {
      error({ statusCode: code });
      return true;
    } else {
      console.error(err);
    }
  });
}