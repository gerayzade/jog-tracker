export default function ({ $axios, error }) {
  $axios.onRequest((config) => {
    if (process.client) {
      let access_token = localStorage.getItem('access_token');
      if (access_token) {
        config.headers['Authorization'] = `Bearer ${JSON.parse(access_token)}`;
      }
    }
  });

  $axios.onResponse((req, options, res) => {
    
  });

  $axios.onError((err) => {
    const code = parseInt(err?.response?.status);
    
    if (code === 404/* || code === 500*/) {
      error({ statusCode: code });
      return true;
    } else {
      console.error(err);
    }
  });
}