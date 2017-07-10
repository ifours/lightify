export default function() {
  return {
    session: {
      token: sessionStorage.getItem('token')
    }
  };
}
