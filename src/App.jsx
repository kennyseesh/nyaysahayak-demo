import React, { useState } from "react";
import bgImage from "./assets/background.jpeg";
import summonsImg from "./assets/card-summons.jpg";
import verifyImg from "./assets/card-verify.jpg";
import bailImg from "./assets/card-bail.jpg"; // or ./assets/card-bg.jpeg if you added a new one


import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <Router>
   <div className="relative min-h-screen text-[#1b1b1b] font-sans overflow-hidden">
  {/* Background image */}
  <img
    src={bgImage}
    alt="background"
    className="absolute inset-0 w-full h-full object-cover opacity-80"
  />

  {/* Optional dark overlay for readability */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* Main content (always above the background) */}
  <div className="relative z-10">
    <Navbar />
    <main className="max-w-6xl mx-auto p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatDemo />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </div>
</div>

    </Router>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-black text-white shadow-lg border-b border-amber-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold shadow-md">
            N
          </div>
          <div>
            <div className="font-semibold">NyaySahayak</div>
            <div className="text-xs text-gray-300">AI Legal Assistant (Demo)</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/modules">Modules</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/chat">Chat Demo</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 bg-gray-800 rounded">
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black text-white border-t border-amber-700">
          <div className="px-6 py-4 flex flex-col gap-2">
            <Link to="/">Home</Link>
            <Link to="/modules">Modules</Link>
            <Link to="/about">About</Link>
            <Link to="/chat">Chat Demo</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="text-sm font-medium hover:text-amber-500">
      {children}
    </Link>
  );
}
function FeatureCard({ title, desc, bg }) {
  const navigate = useNavigate();
  return (
    <div
      className="relative rounded-lg p-6 shadow hover:shadow-lg transition overflow-hidden border border-amber-700"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* optional subtle frosted panel behind text */}
      <div className="relative z-10">
        <h4 className="font-semibold mb-1 text-lg text-white">{title}</h4>
        <p className="text-sm text-amber-100 mb-4">{desc}</p>

        <div className="flex gap-2">
          <button
            onClick={() => navigate("/modules")}
            className="px-3 py-1 rounded bg-amber-500 hover:bg-amber-600 text-sm text-white font-medium"
          >
            Preview
          </button>
          <button
            onClick={() => navigate("/chat")}
            className="px-3 py-1 rounded border border-amber-400 text-sm text-amber-200 hover:bg-amber-700/30"
          >
            Demo Chat
          </button>
        </div>
      </div>

      {/* decorative top-right faint overlay or icon if desired (optional) */}
      <div className="absolute inset-0 pointer-events-none"></div>
    </div>
  );
}
function Home() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="relative rounded-2xl p-10 mb-8 shadow-lg text-white overflow-hidden">
        {/* Optional lawyer background image */}
        <img
          src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80"
          alt="Lawyer consultation"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-stone-800 to-amber-900 opacity-90"></div>

        <div className="relative max-w-4xl">
          <h1 className="text-3xl font-bold mb-2 text-amber-400">NyaySahayak — AI Legal Assistant</h1>
          <p className="mb-4 opacity-90">
            Simplifying Indian legal processes using AI. Upload documents, check bail eligibility, explain summons, and verify authenticity — all in one place.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/chat")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded font-semibold shadow"
            >
              Try Demo
            </button>
            <button
              onClick={() => navigate("/modules")}
              className="px-4 py-2 rounded border border-amber-500 text-amber-200 hover:bg-amber-700/20"
            >
              Explore Modules
            </button>
          </div>
        </div>
      </div>

       <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard
          title="Bail Eligibility"
          desc="Check bail eligibility rules and view sample guidance."
          bg={bailImg}
        />
        <FeatureCard
          title="Summons Explainer"
          desc="Upload or paste notice text and get a plain-language summary."
          bg={summonsImg}
        />
        <FeatureCard
          title="Document Verify"
          desc="Check authenticity of uploaded documents (visual)."
          bg={verifyImg}
        />
      </div>
    </section>
  );
}





function Modules() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-amber-700">Modules (Demo)</h2>
      <p className="text-gray-700">Explore key features — Bail Check, Summons Explainer, and Document Verification.</p>
    </section>
  );
}

function ChatDemo() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello! I am NyaySahayak (demo). Ask me about bail, summons, or verification." },
  ]);
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;
    const userMsg = { from: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let reply = "This is a demo — the full AI assistant will explain documents, bail rules, and more.";
      if (text.toLowerCase().includes("bail"))
        reply = "Bail allows an accused person to be temporarily released while awaiting trial.";
      if (text.toLowerCase().includes("summons"))
        reply = "A summons is a legal document requiring someone to appear in court or respond to a case.";
      if (text.toLowerCase().includes("verify"))
        reply = "Document verification checks for seals, signatures, and authenticity markers.";
      setMessages((prev) => [...prev, { from: "ai", text: reply }]);
    }, 700);

    setText("");
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 border border-amber-700">
      <h2 className="text-xl font-bold mb-3 text-amber-700">NyaySahayak Chat (Demo)</h2>
      <div className="border rounded p-3 h-80 overflow-auto flex flex-col gap-3 mb-3 bg-[#fdfcfb]">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[75%] ${m.from === "ai" ? "self-start" : "self-end"}`}>
            <div
              className={`rounded-lg p-3 shadow-sm ${
                m.from === "ai"
                  ? "bg-amber-50 text-black border border-amber-300"
                  : "bg-black text-white"
              }`}
            >
              <div className="text-sm">{m.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a question (bail, summons, verify...)"
          className="flex-1 px-3 py-2 border rounded border-amber-600"
        />
        <button
          onClick={send}
          className="px-4 py-2 rounded bg-amber-700 text-white hover:bg-amber-800"
        >
          Send
        </button>
      </div>
      <div className="mt-3 text-xs text-gray-500">
        This is a UI demo. Real AI integration coming soon.
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="bg-white p-6 rounded shadow border-l-4 border-amber-700">
      <h2 className="text-2xl font-bold mb-2 text-amber-700">About NyaySahayak (Demo)</h2>
      <p className="text-gray-700 mb-4">
        NyaySahayak is an AI-driven assistant designed to simplify Indian legal documentation and awareness.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-white p-6 rounded shadow max-w-2xl border-l-4 border-amber-700">
      <h2 className="text-xl font-bold mb-3 text-amber-700">Contact (Demo)</h2>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder="Name" className="px-3 py-2 border rounded border-amber-600" />
        <input type="email" placeholder="Email" className="px-3 py-2 border rounded border-amber-600" />
        <textarea placeholder="Message" className="px-3 py-2 border rounded border-amber-600"></textarea>
        <button type="submit" className="px-4 py-2 rounded bg-amber-700 text-white hover:bg-amber-800">
          Send (Demo)
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-12 bg-black border-t border-amber-700">
      <div className="max-w-6xl mx-auto p-6 text-sm text-gray-400 flex items-center justify-between">
        <div>© {new Date().getFullYear()} NyaySahayak (Demo)</div>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
