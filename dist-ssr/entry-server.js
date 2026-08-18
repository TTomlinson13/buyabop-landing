import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Routes, Route } from "react-router-dom";
const JOTFORM_ID = "261482212909053";
const CANOPY_URL = "https://app.usecanopy.com/c/tomlinson-and-co";
const PHONE = "800-616-1418";
function QuoteModal({ onClose }) {
  useEffect(() => () => {
    document.body.style.overflow = "";
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-[9999] flex items-center justify-center p-4",
      style: { background: "rgba(15,23,42,0.75)", backdropFilter: "blur(4px)" },
      onClick: (e) => {
        if (e.target === e.currentTarget) onClose();
      },
      children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-3xl", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-slate-700 rounded-full w-9 h-9 flex items-center justify-center text-xl font-bold shadow transition",
            "aria-label": "Close",
            children: "×"
          }
        ),
        /* @__PURE__ */ jsx(
          "iframe",
          {
            src: `https://form.jotform.com/${JOTFORM_ID}`,
            title: "Business Owners Policy Quote",
            allow: "geolocation; microphone; camera",
            allowFullScreen: true,
            style: { width: "100%", height: "80vh", border: "none", display: "block", background: "#fff", borderRadius: "12px" }
          }
        )
      ] })
    }
  );
}
const CLASSES = [
  { icon: "🔑", name: "Lessor's Risk (LRO)", desc: "Office buildings, retail centers, and mixed-use properties you lease to tenants." },
  { icon: "🍽️", name: "Restaurants", desc: "Family-style, casual, fine dining, and fast food (excludes bars/breweries)." },
  { icon: "🛍️", name: "Retail", desc: "Gift shops, bakeries, home furnishing stores, and specialty retail." },
  { icon: "🏢", name: "Offices", desc: "Medical, insurance, accounting, and other professional offices." },
  { icon: "📦", name: "Wholesale & Distribution", desc: "Distribution businesses (no import or repackaging operations)." },
  { icon: "✂️", name: "Service & Processing", desc: "Beauty parlors, laundromats, and dry cleaning businesses." },
  { icon: "🏘️", name: "Habitational", desc: "Apartments, condos, and townhome communities." }
];
const STATES = ["Florida", "Alabama", "Louisiana", "Mississippi", "South Carolina", "North Carolina"];
const COVERAGE = [
  { icon: "🏢", title: "Property Coverage", desc: "Protects your building, equipment, inventory, and business personal property." },
  { icon: "⚖️", title: "General Liability", desc: "Products & completed operations, personal & advertising injury, premises liability, and medical payments." },
  { icon: "🛡️", title: "Optional Add-Ons", desc: "Professional Liability (E&O), Cyber Liability, and Employment Practices Liability (EPLI) available." }
];
function App() {
  const [quoteMenuOpen, setQuoteMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-indigo-900 text-white text-sm py-2 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("span", { children: "🏢 Business Owners Policy Specialists" }),
      /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE}`, className: "hover:text-indigo-200", children: [
        "📞 ",
        PHONE
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow-md sticky top-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-lg md:text-2xl font-bold text-slate-800 truncate", children: [
          "Buy",
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "A" }),
          "BOP"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 sm:block", children: "Business Owners Policy — Made Simple" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-6 text-sm", children: [
        /* @__PURE__ */ jsx("a", { href: "#coverage", className: "text-slate-600 hover:text-indigo-600", children: "Coverage" }),
        /* @__PURE__ */ jsx("a", { href: "#classes", className: "text-slate-600 hover:text-indigo-600", children: "Eligible Classes" }),
        /* @__PURE__ */ jsx("a", { href: "#why-us", className: "text-slate-600 hover:text-indigo-600", children: "Why Us" }),
        /* @__PURE__ */ jsx("a", { href: "#states", className: "text-slate-600 hover:text-indigo-600", children: "States" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setQuoteMenuOpen(!quoteMenuOpen),
            className: "bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition",
            children: [
              "Get a Quote ",
              quoteMenuOpen ? "▲" : "▼"
            ]
          }
        ),
        quoteMenuOpen && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-indigo-100 overflow-hidden", style: { zIndex: 9999 }, children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: CANOPY_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition border-b border-gray-100",
              onClick: () => setQuoteMenuOpen(false),
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl", children: "⚡" }),
                /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-indigo-900 text-sm", children: "Quick Quote" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "2 mins • Auto-fill" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition border-b border-gray-100 w-full text-left",
              onClick: () => {
                setQuoteMenuOpen(false);
                setShowModal(true);
              },
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl", children: "📝" }),
                /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-indigo-900 text-sm", children: "Full Quote Form" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Conversational • 2 min" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `tel:${PHONE}`,
              className: "flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition",
              onClick: () => setQuoteMenuOpen(false),
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl", children: "📞" }),
                /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-indigo-900 text-sm", children: "Call Us" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: PHONE })
                ] })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-indigo-900 overflow-hidden py-16 md:py-24 px-4 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-indigo-300 font-semibold mb-2 uppercase tracking-wider", children: "Business Owners Policy" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 leading-tight", children: "Business Owners Policy Coverage — Fast Quotes, Multiple Carriers" }),
        /* @__PURE__ */ jsx("p", { className: "text-indigo-100 text-lg mb-8", children: "Property and liability protection built for your industry. We shop multiple A-rated carriers to match the right BOP to your business — across Florida, Alabama, Louisiana, Mississippi, South Carolina, and North Carolina." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: CANOPY_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center",
              children: [
                /* @__PURE__ */ jsx("span", { className: "block text-xl mb-0.5", children: "⚡" }),
                "Quick Quote",
                /* @__PURE__ */ jsx("span", { className: "block text-xs font-normal opacity-75", children: "2 mins • Auto-fill" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setShowModal(true),
              className: "bg-white hover:bg-indigo-50 text-indigo-800 px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center",
              children: [
                /* @__PURE__ */ jsx("span", { className: "block text-xl mb-0.5", children: "📝" }),
                "Full Quote Form",
                /* @__PURE__ */ jsx("span", { className: "block text-xs font-normal opacity-60", children: "Conversational • 2 min" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `tel:${PHONE}`,
              className: "bg-indigo-700 hover:bg-indigo-600 text-white px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center",
              children: [
                /* @__PURE__ */ jsx("span", { className: "block text-xl mb-0.5", children: "📞" }),
                "Call Us",
                /* @__PURE__ */ jsx("span", { className: "block text-xs font-normal opacity-75", children: PHONE })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-indigo-300 mt-6", children: "Fast quotes ✓ Multiple A-rated carriers ✓ Licensed since 1966" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        COVERAGE.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur p-5 rounded-xl", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl mb-2", children: item.icon }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-indigo-200", children: item.desc })
        ] }, item.title)),
        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-400/90 text-black p-5 rounded-xl flex flex-col justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: "6 States" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "FL · AL · LA · MS · SC · NC" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "why-us", className: "py-16 px-4 bg-slate-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-800 text-center mb-4", children: "Why Choose BuyABOP" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-slate-500 mb-12 max-w-2xl mx-auto", children: "An independent agency working for you — not one carrier." }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-3", children: "⚡" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-slate-800 mb-2", children: "Fast Quotes" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Get a BOP quote quickly — start online or call and we'll handle the rest." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-3", children: "🎯" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-slate-800 mb-2", children: "Industry-Specific" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Coverage matched to your business class, with limits and upgrades built around your risk." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-3", children: "🤝" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-slate-800 mb-2", children: "Multiple Carriers" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "We shop A-rated markets to find the right fit on coverage and price." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "coverage", className: "py-16 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-800 text-center mb-4", children: "What a BOP Covers" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-slate-500 mb-12 max-w-2xl mx-auto", children: "A Business Owners Policy bundles property and liability into one package — often the most cost-effective way to protect a small or mid-sized business." }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: COVERAGE.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl mb-3", children: item.icon }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-slate-800 mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: item.desc })
      ] }, item.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "classes", className: "py-16 px-4 bg-slate-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-800 text-center mb-4", children: "Eligible Business Classes" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-slate-500 mb-12 max-w-2xl mx-auto", children: "We write BOPs across a broad range of industries. A few of the most common:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        CLASSES.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl mb-3", children: item.icon }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-800 mb-1", children: item.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600", children: item.desc })
        ] }, item.name)),
        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-600 text-white rounded-xl p-6 shadow-sm flex flex-col justify-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold mb-1", children: "Don't see your business?" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-indigo-100 mb-3", children: "We write many more classes than listed here." }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowModal(true),
              className: "bg-white text-indigo-700 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-indigo-50 transition w-fit",
              children: "Ask us →"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "states", className: "py-16 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-800 mb-4", children: "Coverage in 6 States" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 mb-10 max-w-2xl mx-auto", children: "Licensed and writing Business Owners Policies across the Southeast." }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: STATES.map((s) => /* @__PURE__ */ jsx("span", { className: "bg-indigo-50 text-indigo-800 font-semibold px-5 py-3 rounded-full border border-indigo-100", children: s }, s)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 bg-indigo-900 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Ready for your BOP quote?" }),
      /* @__PURE__ */ jsx("p", { className: "text-indigo-100 text-lg mb-8", children: "Start online in minutes or call our commercial team direct." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-3", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowModal(true),
            className: "bg-yellow-400 text-black font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-yellow-300 transition",
            children: "Get My BOP Quote"
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `tel:${PHONE}`,
            className: "bg-indigo-700 hover:bg-indigo-600 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg transition",
            children: [
              "Call ",
              PHONE
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-slate-900 text-slate-400 py-10 px-4 text-sm", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-lg mb-1", children: "Tomlinson & Co Inc" }),
          /* @__PURE__ */ jsx("p", { children: "921 Douglas Ave Suite 102, Altamonte Springs, FL 32714" }),
          /* @__PURE__ */ jsx("p", { children: "Independent insurance agency since 1966" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2", children: /* @__PURE__ */ jsx("a", { href: `tel:${PHONE}`, className: "text-indigo-300 hover:text-indigo-200", children: PHONE }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-500 md:text-right max-w-md", children: /* @__PURE__ */ jsx("p", { children: "BuyABOP is a service of Tomlinson & Co Inc. Coverage descriptions are general summaries and do not amend, extend, or alter any policy. Eligibility, limits, terms, and availability vary by carrier, state, and individual risk. Some products may be offered through surplus lines carriers." }) })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-8 text-center text-slate-600", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Tomlinson & Co Inc. All rights reserved."
      ] })
    ] }) }),
    showModal && /* @__PURE__ */ jsx(QuoteModal, { onClose: () => setShowModal(false) })
  ] });
}
function render(url) {
  return renderToString(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(App, {}) }) }) }) })
  );
}
export {
  render
};
