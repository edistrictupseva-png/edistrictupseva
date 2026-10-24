export function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'www.edistrictupseva.com') {
    url.protocol = 'https:';
    url.hostname = 'edistrictupseva.com';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
