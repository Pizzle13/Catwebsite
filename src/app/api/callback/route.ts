import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')

  if (!code) {
    return new NextResponse(buildScript('error', { error: 'No code provided' }), {
      headers: { 'Content-Type': 'text/html' },
    })
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  })

  const tokenData = (await tokenRes.json()) as { access_token?: string; error?: string }
  const token = tokenData.access_token

  if (!token) {
    return new NextResponse(buildScript('error', { error: tokenData.error ?? 'OAuth failed' }), {
      headers: { 'Content-Type': 'text/html' },
    })
  }

  return new NextResponse(buildScript('success', { token, provider: 'github' }), {
    headers: { 'Content-Type': 'text/html' },
  })
}

function buildScript(status: 'success' | 'error', data: Record<string, string>) {
  const message = `authorization:github:${status}:${JSON.stringify(data)}`
  return `<!DOCTYPE html>
<html>
<body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(${JSON.stringify(message)}, e.origin);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
<p style="font-family:sans-serif;text-align:center;margin-top:40px;color:#7C4A2D;">
  Authenticating with GitHub…
</p>
</body>
</html>`
}
