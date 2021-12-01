export default function ({ store, route, redirect }) {
  if (process.client) {
    localStorage.setItem('redirect_path',  route.path);
  }
  if (!store.state.auth.loggedIn) {
    return redirect('/');
  }
}