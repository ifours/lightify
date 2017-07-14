export default function() {
  const session = JSON.parse(sessionStorage.getItem('session'));

  if (!session) return undefined;

  const { date, expiresIn } = session;

  if (expiresIn + date < Date.now()) {
    return { session };
  }

  return undefined;
}
