import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Shield, FileText, Bot, ArrowUp, ChevronRight } from "lucide-react";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans">
      <Nav pathname={location.pathname} navigate={navigate} />

      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer navigate={navigate} />

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-700 transition-all duration-200 hover:scale-105 shadow-lg"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}

function Nav({ pathname, navigate }: any) {
  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/60">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2.5"
        >
          <Bot size={22} className="text-emerald-400" />
          <span className="text-lg font-semibold text-white">
            TradingCorps
          </span>
        </button>

        <div className="flex gap-2">
          <NavLink active={pathname === "/terms"} onClick={() => navigate("/terms")}>
            Terms
          </NavLink>
          <NavLink active={pathname === "/privacy"} onClick={() => navigate("/privacy")}>
            Privacy
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ active, onClick, children }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-lg text-sm ${
        active
          ? "bg-gray-800 text-white"
          : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
      }`}
    >
      {children}
    </button>
  );
}

function Home({ navigate }: any) {
  return (
    <main className="text-center pt-24">
      <h1 className="text-4xl text-white mb-6">TradingCorps</h1>

      <div className="flex justify-center gap-4">
        <CardButton
          title="Terms of Service"
          onClick={() => navigate("/terms")}
        />
        <CardButton
          title="Privacy Policy"
          onClick={() => navigate("/privacy")}
        />
      </div>
    </main>
  );
}

function CardButton({ title, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="p-4 bg-gray-900 border border-gray-800 rounded-xl hover:bg-gray-800"
    >
      {title}
    </button>
  );
}
function Section({ title, children }: any) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      <div className="space-y-3 text-gray-400 leading-relaxed text-[15px]">
        {children}
      </div>
    </section>
  );
}
function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-16 pb-24">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <FileText size={14} />
          Legal
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500">
          Last updated: April 23, 2026
        </p>
      </div>

      <Section title="1. Acceptance of Terms">
        <p>
          By using the TradingCorps Discord bot ("the Bot"), you agree to these Terms of Service. If you do not agree, do not use the Bot.
        </p>
      </Section>

      <Section title="2. Description of Service">
        <p>
          TradingCorps is a Discord bot that provides value-related information and tools for Roblox experiences. The Bot helps users look up, track, and reference values within supported Roblox games.
        </p>
      </Section>

      <Section title="3. Eligibility">
        <p>
          You must comply with Discord's Terms of Service and be of sufficient age to use Discord. By using the Bot, you confirm that you meet these requirements.
        </p>
      </Section>

      <Section title="4. Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc list-inside space-y-1.5 ml-1">
          <li>Abuse, exploit, or spam the Bot's commands</li>
          <li>Attempt to disrupt or interfere with the Bot's functionality</li>
          <li>Use the Bot for any illegal or unauthorized purpose</li>
          <li>Reverse engineer, decompile, or attempt to extract the Bot's source code</li>
          <li>Use automated tools or scripts to interact with the Bot</li>
        </ul>
      </Section>

      <Section title="5. Availability">
        <p>
          The Bot is provided "as is" with no guarantees of uptime or availability. We may modify, suspend, or discontinue the Bot at any time without notice.
        </p>
      </Section>

      <Section title="6. Accuracy of Information">
        <p>
          Values and information provided by the Bot are for reference purposes only. We strive for accuracy but do not guarantee that all data is current or correct. Use the information at your own discretion.
        </p>
      </Section>

      <Section title="7. Termination">
        <p>
          We reserve the right to restrict or block any user's access to the Bot at our sole discretion, for any reason, including violation of these Terms.
        </p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>
          TradingCorps and its operators are not liable for any damages, losses, or issues arising from the use of the Bot. This includes but is not limited to inaccurate values, downtime, or data loss.
        </p>
      </Section>

      <Section title="9. Changes to Terms">
        <p>
          We may update these Terms at any time. Continued use of the Bot after changes constitutes acceptance of the updated Terms.
        </p>
      </Section>

      <Section title="10. Contact">
        <p>
          If you have questions about these Terms, reach out to us through our Discord server.
        </p>
      </Section>
    </main>
  );
}

function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-16 pb-24">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <Shield size={14} />
          Legal
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">
          Last updated: April 23, 2026
        </p>
      </div>

      <Section title="1. Information We Collect">
        <p>The Bot may collect the following information when you interact with it:</p>
        <ul className="list-disc list-inside space-y-1.5 ml-1">
          <li><strong className="text-gray-300">Discord User ID</strong> -- Your unique Discord identifier</li>
          <li><strong className="text-gray-300">Server ID</strong> -- The ID of the Discord server where the Bot is used</li>
          <li><strong className="text-gray-300">Command Usage</strong> -- The commands you run and related inputs</li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use the collected information to:</p>
        <ul className="list-disc list-inside space-y-1.5 ml-1">
          <li>Provide and operate the Bot's features</li>
          <li>Improve the Bot's functionality and performance</li>
          <li>Prevent abuse and enforce our Terms of Service</li>
        </ul>
      </Section>

      <Section title="3. Data Storage">
        <p>
          Data is stored securely and retained only as long as necessary to provide the Bot's services. We do not sell, trade, or share your information with third parties.
        </p>
      </Section>

      <Section title="4. Third-Party Services">
        <p>
          The Bot operates within Discord and is subject to Discord's own Privacy Policy. We may also reference data from Roblox for value information. We are not responsible for the privacy practices of these third-party platforms.
        </p>
      </Section>

      <Section title="5. Data Security">
        <p>
          We take reasonable measures to protect your data from unauthorized access or disclosure. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="6. Children's Privacy">
        <p>
          We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us so we can take appropriate action.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p>You have the right to:</p>
        <ul className="list-disc list-inside space-y-1.5 ml-1">
          <li>Request a copy of any data we have associated with your Discord account</li>
          <li>Request deletion of your data</li>
          <li>Stop using the Bot at any time to cease further data collection</li>
        </ul>
      </Section>

      <Section title="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy at any time. Changes will be reflected on this page with an updated date. Continued use of the Bot after changes constitutes acceptance of the revised policy.
        </p>
      </Section>

      <Section title="9. Contact">
        <p>
          For privacy-related questions or data requests, reach out to us through our Discord server.
        </p>
      </Section>
    </main>
  );
}

function Footer({ navigate }: any) {
  return (
    <footer className="border-t border-gray-800/60 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 py-10 flex justify-between">
        <span className="text-gray-500 text-sm">
          © {new Date().getFullYear()} TradingCorps
        </span>

        <div className="flex gap-6">
          <button onClick={() => navigate("/terms")}>Terms</button>
          <button onClick={() => navigate("/privacy")}>Privacy</button>
        </div>
      </div>
    </footer>
  );
}

export default App;