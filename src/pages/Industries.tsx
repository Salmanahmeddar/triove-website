import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, Factory, HeartPulse, Landmark, ShoppingBag, GraduationCap, Truck, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Industries() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const industries = [
    {
      name: "Financial Services",
      description: "Modernize core systems, enhance security, and accelerate digital banking experiences.",
      icon: Landmark,
      highlights: ["Core modernization", "Risk & compliance", "Payments & fintech"]
    },
    {
      name: "Healthcare",
      description: "Deliver secure, patient-centric experiences with interoperable systems and analytics.",
      icon: HeartPulse,
      highlights: ["EHR integrations", "HIPAA-grade security", "Care workflow automation"]
    },
    {
      name: "Retail & E‑commerce",
      description: "Build seamless omnichannel journeys with scalable platforms and personalization.",
      icon: ShoppingBag,
      highlights: ["Headless commerce", "OMS & fulfillment", "Customer data platforms"]
    },
    {
      name: "Manufacturing",
      description: "Enable Industry 4.0 with connected operations, predictive maintenance, and IoT.",
      icon: Factory,
      highlights: ["IoT & sensors", "MES integration", "Supply chain visibility"]
    },
    {
      name: "Logistics",
      description: "Optimize routing, tracking, and real-time visibility from warehouse to last mile.",
      icon: Truck,
      highlights: ["Telematics", "Route optimization", "Control towers"]
    },
    {
      name: "Education",
      description: "Transform learning with secure platforms, analytics, and collaboration tooling.",
      icon: GraduationCap,
      highlights: ["LMS integrations", "Student analytics", "Digital campuses"]
    },
    {
      name: "Startups",
      description: "Ship fast with scalable architectures, rapid MVPs, and growth-ready foundations.",
      icon: Rocket,
      highlights: ["MVP acceleration", "Cloud-native", "Data & AI enablement"]
    },
    {
      name: "Enterprise",
      description: "Drive transformation with strategy, integration, and secure platform engineering.",
      icon: Building2,
      highlights: ["Platform engineering", "Zero-trust security", "Change management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-100">
      <Navbar />

      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" animate="animate" variants={stagger} className="text-center max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="inline-flex items-center bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Industry Expertise
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              Solutions tailored to your industry
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600">
              We partner with organizations across sectors to deliver measurable outcomes with technology, reliability, and innovation.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((ind) => (
              <motion.div key={ind.name} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-md hover:-translate-y-1 transition-all duration-300 backdrop-blur-md bg-white/70">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-3">
                      <ind.icon className="h-6 w-6 text-cyan-700" />
                    </div>
                    <CardTitle className="text-xl">{ind.name}</CardTitle>
                    <CardDescription className="text-base">{ind.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {ind.highlights.map((h) => (
                        <li key={h} className="text-sm">{h}</li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link to="/contact">
                        <Button variant="outline" size="sm">
                          Talk to an expert
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <Link to="/contact">
              <Button size="lg" className="px-8">
                Start a discovery call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}