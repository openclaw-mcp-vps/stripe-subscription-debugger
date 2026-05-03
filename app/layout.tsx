import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Subscription Debugger — Fix Failed Webhooks Instantly',
  description: 'Visualize failed Stripe subscription webhooks, retry attempts, and get actionable fixes. Built for SaaS founders and developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7b9a2a7f-6ea1-4129-bca1-4ec0a1a1deb0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
