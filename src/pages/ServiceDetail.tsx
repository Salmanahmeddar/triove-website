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

const servicesDetails: Record<
  string,
  {
    title: string;
    summary: string;
    outcomes: Array<string>;
    capabilities: Array<string>;
  }
> = (() => {
  const list = [
    {
      title: "Technology Consulting",
      summary:
        "Strategic technology partnerships that align architecture, platforms, and execution to business outcomes.",
      outcomes: [
        "Accelerated digital roadmap and time-to-value",
        "Reduced platform risk and technical debt",
        "Clear governance and change management",
      ],
      capabilities: [
        "Enterprise architecture",
        "Technology roadmap",
        "Vendor evaluation",
        "Cloud strategy",
        "Security posture alignment",
      ],
    },
    {
      title: "Business Process Optimization",
      summary:
        "Streamlined operations through process re-engineering, automation, and measurable performance improvements.",
      outcomes: [
        "Lower operating costs",
        "Higher throughput and quality",
        "Visibility across the value stream",
      ],
      capabilities: [
        "Process discovery & mapping",
        "Workflow automation",
        "KPI instrumentation",
        "Change management enablement",
      ],
    },
    {
      title: "Custom Software Development",
      summary:
        "Tailored applications built for scale, performance, and maintainability, across web and mobile.",
      outcomes: [
        "Fit-for-purpose experiences",
        "Secure and scalable foundations",
        "Faster iteration cycles",
      ],
      capabilities: [
        "Web & mobile apps",
        "API platforms",
        "Design systems",
        "DevOps & CI/CD",
        "Observability",
      ],
    },
    {
      title: "System Integration",
      summary:
        "Unified ecosystems through reliable, secure integrations for data, identity, and processes.",
      outcomes: [
        "Single source of truth",
        "Automated handoffs",
        "Lower swivel-chair overhead",
      ],
      capabilities: [
        "ERP/CRM integration",
        "Event-driven architectures",
        "ETL/ELT pipelines",
        "Identity & SSO",
      ],
    },
    {
      title: "Cloud Solutions",
      summary:
        "Cloud-native foundations with cost efficiency, reliability, and security engineered in.",
      outcomes: [
        "Elastic scalability",
        "Cost-optimized workloads",
        "Improved reliability & DR",
      ],
      capabilities: [
        "Cloud migration",
        "Infrastructure as Code",
        "Kubernetes & serverless",
        "FinOps & guardrails",
      ],
    },
    {
      title: "Data Analytics",
      summary:
        "From raw data to insights—semantic models, governance, and real-time analytics that drive decisions.",
      outcomes: [
        "Trusted, governed datasets",
        "Self-serve BI",
        "Predictive insights",
      ],
      capabilities: [
        "Data warehousing",
        "Semantic modeling",
        "Business intelligence",
        "Real-time analytics",
      ],
    },
    {
      title: "Cybersecurity",
      summary:
        "Defense-in-depth across identity, endpoints, apps, and data with continuous detection and response.",
      outcomes: [
        "Reduced attack surface",
        "Improved compliance",
        "Rapid incident response",
      ],
      capabilities: [
        "Security assessments",
        "Zero-trust alignment",
        "SIEM & SOAR",
        "Security training",
      ],
    },
    {
      title: "Digital Transformation",
      summary:
        "Modern operating models, platforms, and culture—delivered iteratively with measurable value.",
      outcomes: [
        "Modernized platforms",
        "Stronger product culture",
        "Sustainable innovation",
      ],
      capabilities: [
        "Transformation strategy",
        "Platform engineering",
        "Org design & enablement",
        "Rollout & adoption",
      ],
    },
  ];
  const map: Record<string, any> = {};
  list.forEach((s) => (map[toSlug(s.title)] = s));
  return map;
})();

export default function ServiceDetail() {
  const { slug } = useParams() as { slug: string };
  const data = slug ? servicesDetails[slug] : undefined;

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
              Service not found. <Link to="/services" className="text-cyan-700 underline">Back to Services</Link>
            </div>
          ) : (
            <motion.div initial="initial" animate="animate" variants={stagger}>
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                Service
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4"
              >
                {data.title}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-3xl">
                {data.summary}
              </motion.p>

              <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp} className="lg:col-span-2">
                  <Card className="border-0 shadow-md backdrop-blur-md bg-white/70">
                    <CardHeader>
                      <CardTitle className="text-xl">Core Capabilities</CardTitle>
                      <CardDescription>What we bring to deliver outcomes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {data.capabilities.map((c) => (
                          <li
                            key={c}
                            className="text-sm text-gray-700 bg-cyan-50 text-cyan-800 px-3 py-2 rounded-lg"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="border-0 shadow-md backdrop-blur-md bg-white/70">
                    <CardHeader>
                      <CardTitle className="text-xl">Business Outcomes</CardTitle>
                      <CardDescription>Value realized</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {data.outcomes.map((o) => (
                          <li key={o} className="text-sm text-gray-700">
                            • {o}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex gap-3">
                        <Link to="/contact">
                          <Button className="px-5">Discuss your needs</Button>
                        </Link>
                        <Link to="/services">
                          <Button variant="outline">All services</Button>
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
