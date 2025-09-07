import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router";

function toSlug(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const industriesDetails: Record<
  string,
  {
    name: string;
    overview: string;
    priorities: Array<string>;
    solutions: Array<string>;
  }
> = (() => {
  const list = [
    {
      name: "Financial Services",
      overview:
        "Modernize core banking, payments, and risk platforms while meeting stringent security and compliance.",
      priorities: [
        "Core modernization and API-first platforms",
        "Risk, compliance, and audit readiness",
        "Real-time payments and customer experiences",
      ],
      solutions: ["Core API layers", "Event-driven systems", "Data governance & lineage", "Secure CI/CD"],
    },
    {
      name: "Healthcare",
      overview:
        "Interoperable, secure patient experiences built on modern data and workflow platforms.",
      priorities: ["EHR interoperability", "HIPAA-grade security", "Care pathway orchestration"],
      solutions: ["FHIR integrations", "Identity & consent", "Analytics & monitoring", "Clinical automations"],
    },
    {
      name: "Retail & E‑commerce",
      overview:
        "Omnichannel, personalized journeys and resilient supply chains that scale during peak demand.",
      priorities: ["Headless commerce", "Real-time inventory", "Personalization at scale"],
      solutions: ["CDP integrations", "OMS & fulfillment", "A/B experimentation", "Edge caching"],
    },
    {
      name: "Manufacturing",
      overview:
        "Connected operations with predictive insights across plants, assets, and supply chains.",
      priorities: ["IoT telemetry", "MES integration", "Predictive maintenance"],
      solutions: ["Time-series pipelines", "Digital twins", "Shop-floor analytics", "Control tower dashboards"],
    },
    {
      name: "Logistics",
      overview:
        "End-to-end visibility, routing optimization, and reliable last-mile orchestration.",
      priorities: ["Telematics ingestion", "Optimization & ETA", "Exception management"],
      solutions: ["Geo services", "Routing engines", "Real-time tracking", "Partner integrations"],
    },
    {
      name: "Education",
      overview:
        "Secure digital campuses with collaborative learning, analytics, and student success tooling.",
      priorities: ["LMS integrations", "Student analytics", "Identity & access"],
      solutions: ["Learning platforms", "Engagement dashboards", "Credentialing & SSO", "Automation workflows"],
    },
    {
      name: "Startups",
      overview:
        "Ship quickly with cloud-native foundations that scale with product-market fit and growth.",
      priorities: ["MVP velocity", "Scalable architecture", "Cost efficiency"],
      solutions: ["Serverless backends", "Design systems", "Observability", "Growth analytics"],
    },
    {
      name: "Enterprise",
      overview:
        "Platform engineering, zero-trust security, and change enablement for durable transformation.",
      priorities: ["Platform enablement", "Zero-trust and governance", "Change management"],
      solutions: ["Golden paths", "Self-serve infra", "Policy-as-code", "Metrics & SLAs"],
    },
  ];
  const map: Record<string, any> = {};
  list.forEach((i) => (map[toSlug(i.name)] = i));
  return map;
})();

export default function IndustryDetail() {
  const { slug } = useParams() as { slug: string };
  const data = slug ? industriesDetails[slug] : undefined;

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-100">
      <Navbar />
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!data ? (
            <div className="text-center text-gray-600">
              Industry not found. <Link to="/industries" className="text-cyan-700 underline">Back to Industries</Link>
            </div>
          ) : (
            <motion.div initial="initial" animate="animate" variants={stagger}>
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                Industry
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4"
              >
                {data.name}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-3xl">
                {data.overview}
              </motion.p>

              <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp} className="lg:col-span-2">
                  <Card className="border-0 shadow-md backdrop-blur-md bg-white/70">
                    <CardHeader>
                      <CardTitle className="text-xl">Top Priorities</CardTitle>
                      <CardDescription>What matters most in this sector</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {data.priorities.map((p) => (
                          <li key={p} className="text-sm text-gray-700">• {p}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="border-0 shadow-md backdrop-blur-md bg-white/70">
                    <CardHeader>
                      <CardTitle className="text-xl">Featured Solutions</CardTitle>
                      <CardDescription>How we deliver</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {data.solutions.map((s) => (
                          <li
                            key={s}
                            className="text-sm text-gray-700 bg-cyan-50 text-cyan-800 px-3 py-2 rounded-lg"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex gap-3">
                        <Link to="/contact">
                          <Button className="px-5">Start a discovery call</Button>
                        </Link>
                        <Link to="/industries">
                          <Button variant="outline">All industries</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
