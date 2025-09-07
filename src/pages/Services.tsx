import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Cloud, 
  Code, 
  Cog, 
  Database, 
  Globe, 
  Layers, 
  Lock, 
  Monitor, 
  Smartphone, 
  Users 
} from "lucide-react";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      title: "Technology Consulting",
      description: "Strategic guidance for digital transformation and technology adoption",
      icon: Globe,
      features: [
        "Digital Strategy Development",
        "Technology Roadmap Planning",
        "Architecture Design",
        "Vendor Selection & Management"
      ]
    },
    {
      title: "Business Process Optimization",
      description: "Streamline operations and maximize efficiency across your organization",
      icon: Cog,
      features: [
        "Process Analysis & Mapping",
        "Workflow Automation",
        "Performance Optimization",
        "Change Management"
      ]
    },
    {
      title: "Custom Software Development",
      description: "Tailored solutions built to meet your unique business requirements",
      icon: Code,
      features: [
        "Web Application Development",
        "Mobile App Development",
        "API Development & Integration",
        "Legacy System Modernization"
      ]
    },
    {
      title: "System Integration",
      description: "Seamlessly connect your existing systems for unified operations",
      icon: Layers,
      features: [
        "ERP Implementation",
        "CRM Integration",
        "Data Migration Services",
        "Third-party Integrations"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: Cloud,
      features: [
        "Cloud Migration Strategy",
        "Infrastructure as Code",
        "Multi-cloud Management",
        "Cloud Security & Compliance"
      ]
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable business insights",
      icon: Database,
      features: [
        "Business Intelligence Solutions",
        "Data Warehouse Design",
        "Predictive Analytics",
        "Real-time Reporting"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: Lock,
      features: [
        "Security Assessment",
        "Threat Detection & Response",
        "Compliance Management",
        "Security Training"
      ]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end transformation services for the digital age",
      icon: Monitor,
      features: [
        "Digital Strategy Consulting",
        "Process Digitization",
        "Technology Implementation",
        "Change Management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Comprehensive technology solutions designed to drive innovation, 
              optimize performance, and deliver exceptional value for your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and optimal outcomes.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your business needs, challenges, and objectives to create a comprehensive understanding."
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a tailored strategy and roadmap that aligns with your business goals and technical requirements."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our expert team executes the solution using best practices and cutting-edge technologies."
              },
              {
                step: "04",
                title: "Support",
                description: "We provide ongoing support, maintenance, and optimization to ensure continued success."
              }
            ].map((process, index) => (
              <motion.div key={process.step} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss your project requirements and how TRIOVE can help you achieve your technology goals.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
