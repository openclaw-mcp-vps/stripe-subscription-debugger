export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Developer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Debug Failed Stripe Subscription Webhooks{' '}
          <span className="text-[#58a6ff]">Instantly</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop losing revenue to silent webhook failures. Visualize delivery failures, retry attempts, and get step-by-step fixes — all in one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card surprises.</p>

        {/* Feature highlights */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '⚡', title: 'Real-Time Polling', desc: 'Live webhook health status updated every 30 seconds.' },
            { icon: '🔍', title: 'Failure Diagnostics', desc: 'See exactly why each webhook failed with error codes.' },
            { icon: '🛠️', title: 'Actionable Fixes', desc: 'Step-by-step resolution guides for every error type.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Connect unlimited Stripe accounts',
              'Real-time webhook failure dashboard',
              'Retry attempt visualization',
              'Actionable error resolution guides',
              'Email alerts for critical failures',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Debugging Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it connect to Stripe?',
              a: 'You provide a restricted Stripe API key with read-only access to webhook events. We never store your key — it lives in your browser session only.'
            },
            {
              q: 'Which Stripe events are supported?',
              a: 'All subscription-related events: customer.subscription.*, invoice.*, payment_intent.*, and checkout.session.* are fully supported with diagnostic guides.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your Lemon Squeezy customer portal at any time. No questions asked, no lock-in.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Stripe Subscription Debugger. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  )
}
