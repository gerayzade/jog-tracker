export default function ({ store, route, redirect, app }) {
  app.$cookies.set('redirect_path', route.path);
  if (!store.state.auth.loggedIn) {
    return redirect('/');
  }
}