function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-emerald-700 text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>🏢 Business Insurance Made Simple</span>
          <div className="flex gap-6">
            <a href="tel:800-616-1418" className="hover:text-emerald-200">📞 800-616-1418</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">BuyaBOP<span className="text-emerald-600">.com</span></h1>
            <p className="text-xs text-slate-500">Business Owners Policy Insurance</p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#what-is-bop" className="text-slate-600 hover:text-emerald-600">What is a BOP?</a>
            <a href="#coverage" className="text-slate-600 hover:text-emerald-600">Coverage</a>
            <a href="#industries" className="text-slate-600 hover:text-emerald-600">Industries</a>
          </nav>
          <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition">
            Get a Quote →
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-emerald-600 font-semibold mb-2">BUSINESS OWNERS POLICY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Protect Your Small Business With One Simple Policy
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              A Business Owners Policy (BOP) bundles general liability and commercial property insurance 
              into one affordable package. Perfect for small to mid-sized businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Get Your Free Quote →
              </a>
              <a href="tel:800-616-1418" className="bg-white border-2 border-slate-300 hover:border-emerald-600 text-slate-700 px-8 py-4 rounded-lg font-bold text-lg transition">
                📞 800-616-1418
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-4">✓ Quotes in minutes  ✓ Coverage same-day  ✓ No obligation</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">What's Included in a BOP?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-800">General Liability</p>
                    <p className="text-sm text-slate-600">Protection if someone is injured or property is damaged</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-800">Commercial Property</p>
                    <p className="text-sm text-slate-600">Covers your building, equipment, and inventory</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-800">Business Interruption</p>
                    <p className="text-sm text-slate-600">Lost income if you can't operate due to covered loss</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What is a BOP */}
      <section id="what-is-bop" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">What is a Business Owners Policy?</h3>
          <p className="text-lg text-slate-600 mb-8">
            A BOP combines two essential coverages — <strong>general liability</strong> and <strong>commercial property</strong> — 
            into a single, cost-effective policy. It's designed specifically for small and medium-sized businesses 
            and typically costs less than buying these coverages separately.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-bold text-slate-800">Save Money</h4>
              <p className="text-sm text-slate-600 mt-2">Bundled coverage costs less than separate policies</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="text-4xl mb-3">📋</div>
              <h4 className="font-bold text-slate-800">Simplified</h4>
              <p className="text-sm text-slate-600 mt-2">One policy, one premium, one renewal date</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="text-4xl mb-3">🛡️</div>
              <h4 className="font-bold text-slate-800">Comprehensive</h4>
              <p className="text-sm text-slate-600 mt-2">Covers the most common small business risks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section id="coverage" className="py-16 px-4 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What Does a BOP Cover?</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-emerald-400 mb-4">🏢 Property Coverage</h4>
              <ul className="space-y-3 text-slate-300">
                <li>✓ Building and structure damage</li>
                <li>✓ Business equipment and furniture</li>
                <li>✓ Inventory and stock</li>
                <li>✓ Computers and electronics</li>
                <li>✓ Signs and outdoor fixtures</li>
                <li>✓ Documents and records</li>
              </ul>
            </div>
            <div className="bg-slate-700 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-emerald-400 mb-4">⚖️ Liability Coverage</h4>
              <ul className="space-y-3 text-slate-300">
                <li>✓ Customer injuries on your premises</li>
                <li>✓ Damage to others' property</li>
                <li>✓ Advertising injury claims</li>
                <li>✓ Legal defense costs</li>
                <li>✓ Medical payments</li>
                <li>✓ Product liability (in some cases)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-emerald-700 p-8 rounded-xl text-center">
            <h4 className="text-xl font-bold mb-2">💼 Business Interruption Coverage</h4>
            <p className="text-emerald-100">
              If a covered event forces you to close temporarily, BOP can cover your lost income 
              and ongoing expenses like rent and payroll while you recover.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-4">BOPs Are Perfect For:</h3>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Ideal for businesses with under $5M in revenue, fewer than 100 employees, and lower-risk operations.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🏪', name: 'Retail Stores' },
              { icon: '🍽️', name: 'Restaurants' },
              { icon: '💈', name: 'Salons & Spas' },
              { icon: '🏥', name: 'Medical Offices' },
              { icon: '📊', name: 'Consultants' },
              { icon: '🏢', name: 'Office-Based' },
              { icon: '🔧', name: 'Service Businesses' },
              { icon: '📸', name: 'Photography' },
              { icon: '🖥️', name: 'IT Services' },
              { icon: '🏋️', name: 'Fitness Studios' },
              { icon: '🧹', name: 'Cleaning Services' },
              { icon: '📦', name: 'Wholesale' },
            ].map((item) => (
              <div key={item.name} className="bg-slate-50 p-4 rounded-lg text-center hover:bg-emerald-50 hover:shadow-md transition">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-semibold text-slate-700">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Why Get Your BOP From Us?</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="font-bold text-slate-800">Fast Quotes</h4>
              <p className="text-sm text-slate-600 mt-2">Get your quote in minutes, not days</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h4 className="font-bold text-slate-800">A-Rated Carriers</h4>
              <p className="text-sm text-slate-600 mt-2">Top-rated insurers you can trust</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <h4 className="font-bold text-slate-800">300+ Classes</h4>
              <p className="text-sm text-slate-600 mt-2">Coverage for nearly any business type</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💬</div>
              <h4 className="font-bold text-slate-800">Since 1987</h4>
              <p className="text-sm text-slate-600 mt-2">35+ years protecting FL businesses</p>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
            <p className="text-center text-slate-600">
              <span className="font-bold text-slate-800">Flexible payment options</span> • Competitive pricing • 
              Broad appetite for risk • Personal lines customers get BOP discounts
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h3>
          <p className="text-xl text-emerald-100 mb-8">
            Get your free BOP quote in minutes. No obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer" className="bg-white text-emerald-700 font-bold text-xl py-4 px-8 rounded-lg shadow-lg hover:bg-slate-100 transition">
              Get Your Free Quote →
            </a>
            <a href="tel:800-616-1418" className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xl py-4 px-8 rounded-lg shadow-lg transition">
              📞 800-616-1418
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-white font-bold text-xl mb-2">BuyaBOP.com</h4>
          <p className="text-sm mb-4">Business Owners Policy Insurance Made Simple</p>
          <p className="text-sm">A Tomlinson & Co Agency • Florida Licensed Since 1987</p>
          <p className="text-xs mt-4">© {new Date().getFullYear()} Tomlinson & Co Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
