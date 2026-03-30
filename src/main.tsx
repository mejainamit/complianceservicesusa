import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function ComplianceServicesUsaLandingPage() {
  const services = [
    {
      title: "SOC 2 Readiness",
      description:
        "Gap assessment, evidence collection planning, policy mapping, and audit preparation for startups and SMBs.",
    },
    {
      title: "HIPAA Compliance Support",
      description:
        "Risk assessment support, administrative safeguards guidance, vendor review workflows, and compliance documentation.",
    },
    {
      title: "ISO 27001 Guidance",
      description:
        "Control mapping, ISMS documentation support, statement of applicability guidance, and readiness tracking.",
    },
    {
      title: "NIST & Security Programs",
      description:
        "Practical control baselines, policy packages, risk registers, and lightweight governance for growing teams.",
    },
  ];

  const benefits = [
    "Fast onboarding for small businesses",
    "Private document handling workflow",
    "Evidence and policy tracking dashboard",
    "Built for AWS-hosted secure delivery",
  ];

  const steps = [
    "Book a consultation",
    "Upload business documents securely",
    "Receive mapped compliance gaps",
    "Track remediation and readiness",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-semibold tracking-tight">Compliance Services USA</div>
            <div className="text-sm text-slate-300">Practical compliance for growing businesses</div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
              Secure compliance support for startups, clinics, SaaS, and service businesses
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
              Launch compliance faster with a clear, business-friendly workflow.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              We help businesses organize documents, map controls, identify gaps, and prepare for frameworks like SOC 2, HIPAA, ISO 27001, and NIST.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
              >
                Book a consultation
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View services
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-lg shadow-black/20">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-6 shadow-2xl shadow-cyan-900/20">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-4 text-sm font-medium text-cyan-200">Readiness Snapshot</div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <div className="text-sm text-slate-400">Framework</div>
                  <div className="mt-1 text-lg font-semibold">SOC 2 / HIPAA / ISO 27001 / NIST</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                    <div className="text-sm text-slate-400">Document Intake</div>
                    <div className="mt-1 text-2xl font-semibold">Secure</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                    <div className="text-sm text-slate-400">Gap Tracking</div>
                    <div className="mt-1 text-2xl font-semibold">Actionable</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Program setup progress</span>
                    <span>70%</span>
                  </div>
                  <div className="mt-3 h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[70%] rounded-full bg-white" />
                  </div>
                  <p className="mt-3 text-sm text-slate-300">
                    Example preview of a client-facing dashboard card.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Core services</h2>
            <p className="mt-3 text-slate-300">
              Start with advisory and readiness services, then expand into recurring compliance management and secure document workflows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                <button className="mt-6 rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium hover:bg-white/5">
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
              <div className="mt-6 space-y-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-900">
                      {index + 1}
                    </div>
                    <div className="pt-1 text-slate-200">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold tracking-tight">Why clients buy</h2>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-300">
                  They need a faster path to customer trust and audit readiness.
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-300">
                  They want a practical service, not a heavyweight enterprise consulting engagement.
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-300">
                  They need help organizing evidence, policies, and remediation tasks in one place.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-8 pb-20 md:py-16 md:pb-24">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold tracking-tight">Let’s build your compliance program</h2>
              <p className="mt-3 max-w-xl text-slate-300">
                Start with a consultation and get a clear roadmap for your compliance needs, document intake, and readiness milestones.
              </p>

              <form className="mt-8 grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-500"
                  placeholder="First name"
                />
                <input
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-500"
                  placeholder="Last name"
                />
                <input
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-500 md:col-span-2"
                  placeholder="Business email"
                />
                <input
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-500 md:col-span-2"
                  placeholder="Company name"
                />
                <textarea
                  className="min-h-[140px] rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm outline-none placeholder:text-slate-500 md:col-span-2"
                  placeholder="Tell us which framework or compliance goal you need help with"
                />
                <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 md:col-span-2">
                  Request consultation
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-xl shadow-black/20">
              <h3 className="text-2xl font-semibold">Starter positioning</h3>
              <div className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
                <p>
                  Best first launch: publish a clean landing page, contact form, service summary, and trust-building security messaging.
                </p>
                <p>
                  Next phase: add secure client login, document upload, evidence tracker, and AI-assisted compliance mapping.
                </p>
                <p>
                  Keep the first version simple so the site can go live quickly and start generating leads.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ComplianceServicesUsaLandingPage />
  </React.StrictMode>
);
