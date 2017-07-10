export default function() {
  return JSON.parse(sessionStorage.getItem('state')) || undefined;
  // return undefined;
  // return {
  //   session: {
  //     token: sessionStorage.getItem('token')
  //   }
  // };
}
