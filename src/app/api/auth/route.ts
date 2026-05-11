import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pinspots.co'
  const clientId = process.env.GITHUB_CLIENT_ID

  if (!clientId) {
    return new NextResponse('GITHUB_CLIENT_ID not configured', { status: 500 })
  }

  const redirectUri = `${siteUrl}/api/callback`
  const state = request.nextUrl.searchParams.get('state') ?? ''

  const githubUrl = new URL('https://github.com/login/oauth/authorize')
  githubUrl.searchParams.set('client_id', clientId)
  githubUrl.searchParams.set('redirect_uri', redirectUri)
  githubUrl.searchParams.set('scope', 'repo,user')
  githubUrl.searchParams.set('state', state)

  return NextResponse.redirect(githubUrl.toString())
}
