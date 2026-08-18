import { useState, useEffect } from 'react'

const JOTFORM_ID = "261482212909053"
const CANOPY_URL = "https://app.usecanopy.com/c/tomlinson-and-co"
const PHONE = "800-616-1418"

function QuoteModal({ onClose }: { onClose: () => void }) {
  useEffect(() => () => { document.body.style.overflow = "" }, [])
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.75)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative w-full max-w-3xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-slate-700 rounded-full w-9 h-9 flex items-center justify-center text-xl font-bold shadow transition"
          aria-label="Close"
        >×</button>
        <iframe
          src={`https://form.jotform.com/${JOTFORM_ID}`}
          title="Business Owners Policy Quote"
          allow="geolocation; microphone; camera"
          allowFullScreen
          style={{ width: "100%", height: "80vh", border: "none", display: "block", background: "#fff", borderRadius: "12px" }}
        />
      </div>
    </div>
  )
}

const CLASSES = [
  { icon: "🔑", name: "Lessor's Risk (LRO)", desc: "Office buildings, retail centers, and mixed-use properties you lease to tenants." },
  { icon: "🍽️", name: "Restaurants", desc: "Family-style, casual, fine dining, and fast food (excludes bars/breweries)." },
  { icon: "🛍️", name: "Retail", desc: "Gift shops, bakeries, home furnishing stores, and specialty retail." },
  { icon: "🏢", name: "Offices", desc: "Medical, insurance, accounting, and other professional offices." },
  { icon: "📦", name: "Wholesale & Distribution", desc: "Distribution businesses (no import or repackaging operations)." },
  { icon: "✂️", name: "Service & Processing", desc: "Beauty parlors, laundromats, and dry cleaning businesses." },
  { icon: "🏘️", name: "Habitational", desc: "Apartments, condos, and townhome communities." },
]

const STATES = ["Florida", "Alabama", "Louisiana", "Mississippi", "South Carolina", "North Carolina"]

const COVERAGE = [
  { icon: "🏢", title: "Property Coverage", desc: "Protects your building, equipment, inventory, and business personal property." },
  { icon: "⚖️", title: "General Liability", desc: "Products & completed operations, personal & advertising injury, premises liability, and medical payments." },
  { icon: "🛡️", title: "Optional Add-Ons", desc: "Professional Liability (E&O), Cyber Liability, and Employment Practices Liability (EPLI) available." },
]

export default function App() {
  const [quoteMenuOpen, setQuoteMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Utility bar */}
      <div className="bg-indigo-900 text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>🏢 Business Owners Policy Specialists</span>
          <a href={`tel:${PHONE}`} className="hover:text-indigo-200">📞 {PHONE}</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="min-w-0">
            <h1 className="text-lg md:text-2xl font-bold text-slate-800 truncate">
              Buy<span className="text-indigo-600">A</span>BOP
            </h1>
            <p className="text-xs text-slate-500 sm:block">Business Owners Policy — Made Simple</p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#coverage" className="text-slate-600 hover:text-indigo-600">Coverage</a>
            <a href="#classes" className="text-slate-600 hover:text-indigo-600">Eligible Classes</a>
            <a href="#why-us" className="text-slate-600 hover:text-indigo-600">Why Us</a>
            <a href="#states" className="text-slate-600 hover:text-indigo-600">States</a>
          </nav>
          <div className="relative">
            <button
              onClick={() => setQuoteMenuOpen(!quoteMenuOpen)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition"
            >
              Get a Quote {quoteMenuOpen ? "▲" : "▼"}
            </button>
            {quoteMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-indigo-100 overflow-hidden" style={{ zIndex: 9999 }}>
                <a href={CANOPY_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition border-b border-gray-100"
                  onClick={() => setQuoteMenuOpen(false)}>
                  <span className="text-xl">⚡</span>
                  <div className="text-left">
                    <div className="font-bold text-indigo-900 text-sm">Quick Quote</div>
                    <div className="text-xs text-gray-500">2 mins • Auto-fill</div>
                  </div>
                </a>
                <button
                  className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition border-b border-gray-100 w-full text-left"
                  onClick={() => { setQuoteMenuOpen(false); setShowModal(true) }}>
                  <span className="text-xl">📝</span>
                  <div className="text-left">
                    <div className="font-bold text-indigo-900 text-sm">Full Quote Form</div>
                    <div className="text-xs text-gray-500">Conversational • 2 min</div>
                  </div>
                </button>
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition"
                  onClick={() => setQuoteMenuOpen(false)}>
                  <span className="text-xl">📞</span>
                  <div className="text-left">
                    <div className="font-bold text-indigo-900 text-sm">Call Us</div>
                    <div className="text-xs text-gray-500">{PHONE}</div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-indigo-900 overflow-hidden py-16 md:py-24 px-4 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-indigo-300 font-semibold mb-2 uppercase tracking-wider">Business Owners Policy</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Business Owners Policy Coverage — Fast Quotes, Multiple Carriers
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Property and liability protection built for your industry. We shop multiple A-rated carriers to match the right BOP to your business — across Florida, Alabama, Louisiana, Mississippi, South Carolina, and North Carolina.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a href={CANOPY_URL} target="_blank" rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center">
                <span className="block text-xl mb-0.5">⚡</span>
                Quick Quote
                <span className="block text-xs font-normal opacity-75">2 mins • Auto-fill</span>
              </a>
              <button onClick={() => setShowModal(true)}
                className="bg-white hover:bg-indigo-50 text-indigo-800 px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center">
                <span className="block text-xl mb-0.5">📝</span>
                Full Quote Form
                <span className="block text-xs font-normal opacity-60">Conversational • 2 min</span>
              </button>
              <a href={`tel:${PHONE}`}
                className="bg-indigo-700 hover:bg-indigo-600 text-white px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center">
                <span className="block text-xl mb-0.5">📞</span>
                Call Us
                <span className="block text-xs font-normal opacity-75">{PHONE}</span>
              </a>
            </div>
            <p className="text-sm text-indigo-300 mt-6">Fast quotes ✓ Multiple A-rated carriers ✓ Licensed since 1966</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {COVERAGE.map(item => (
              <div key={item.title} className="bg-white/10 backdrop-blur p-5 rounded-xl">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-indigo-200">{item.desc}</p>
              </div>
            ))}
            <div className="bg-yellow-400/90 text-black p-5 rounded-xl flex flex-col justify-center">
              <div className="text-2xl font-bold">6 States</div>
              <p className="text-sm font-semibold">FL · AL · LA · MS · SC · NC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why-us" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">Why Choose BuyABOP</h2>
          <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">An independent agency working for you — not one carrier.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Fast Quotes</h3>
              <p className="text-slate-600">Get a BOP quote quickly — start online or call and we'll handle the rest.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Industry-Specific</h3>
              <p className="text-slate-600">Coverage matched to your business class, with limits and upgrades built around your risk.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Multiple Carriers</h3>
              <p className="text-slate-600">We shop A-rated markets to find the right fit on coverage and price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">What a BOP Covers</h2>
          <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
            A Business Owners Policy bundles property and liability into one package — often the most cost-effective way to protect a small or mid-sized business.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {COVERAGE.map(item => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible classes */}
      <section id="classes" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">Eligible Business Classes</h2>
          <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">We write BOPs across a broad range of industries. A few of the most common:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASSES.map(item => (
              <div key={item.name} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-800 mb-1">{item.name}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
            <div className="bg-indigo-600 text-white rounded-xl p-6 shadow-sm flex flex-col justify-center">
              <h3 className="font-bold mb-1">Don't see your business?</h3>
              <p className="text-sm text-indigo-100 mb-3">We write many more classes than listed here.</p>
              <button onClick={() => setShowModal(true)}
                className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-indigo-50 transition w-fit">
                Ask us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* States */}
      <section id="states" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Coverage in 6 States</h2>
          <p className="text-slate-500 mb-10 max-w-2xl mx-auto">Licensed and writing Business Owners Policies across the Southeast.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {STATES.map(s => (
              <span key={s} className="bg-indigo-50 text-indigo-800 font-semibold px-5 py-3 rounded-full border border-indigo-100">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for your BOP quote?</h2>
          <p className="text-indigo-100 text-lg mb-8">Start online in minutes or call our commercial team direct.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button onClick={() => setShowModal(true)}
              className="bg-yellow-400 text-black font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-yellow-300 transition">
              Get My BOP Quote
            </button>
            <a href={`tel:${PHONE}`}
              className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg transition">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <p className="text-white font-bold text-lg mb-1">Tomlinson &amp; Co Inc</p>
              <p>921 Douglas Ave Suite 102, Altamonte Springs, FL 32714</p>
              <p>Independent insurance agency since 1966</p>
              <p className="mt-2">
                <a href={`tel:${PHONE}`} className="text-indigo-300 hover:text-indigo-200">{PHONE}</a>
              </p>
            </div>
            <div className="text-xs text-slate-500 md:text-right max-w-md">
              <p>BuyABOP is a service of Tomlinson &amp; Co Inc. Coverage descriptions are general summaries and do not amend, extend, or alter any policy. Eligibility, limits, terms, and availability vary by carrier, state, and individual risk. Some products may be offered through surplus lines carriers.</p>
            </div>
          </div>
          <p className="mt-8 text-center text-slate-600">© {new Date().getFullYear()} Tomlinson &amp; Co Inc. All rights reserved.</p>
        </div>
      </footer>

      {showModal && <QuoteModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
