import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Target, Users } from "lucide-react";
import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
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

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
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
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                TRIOVE
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              We are the synergy of technology and innovation, a treasure trove of solutions 
              that transforms businesses through reliable, optimal, and excellent service delivery.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Story Behind TRIOVE
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  TRIOVE was born from the vision of creating a company that embodies the perfect 
                  synergy between technology and innovation. Our name, inspired by "trio" and "trove," 
                  represents the collaboration of expertise, the discovery of solutions, and the 
                  abundance of value we bring to every client relationship.
                </p>
                <p>
                  We believe that true success comes from the intersection of cutting-edge technology, 
                  unwavering reliability, and continuous innovation. This philosophy drives everything 
                  we do, from our approach to problem-solving to our commitment to delivering 
                  optimal value and excellence.
                </p>
                <p>
                  Today, TRIOVE stands as a trusted partner for businesses seeking to navigate 
                  the complexities of digital transformation while maintaining the highest 
                  standards of quality and reliability.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-blue-100 mb-6">
                  To unlock the full potential of technology for businesses worldwide, 
                  delivering innovative solutions with unwavering reliability and excellence.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-blue-100">
                  To be the global leader in technology consulting and digital transformation, 
                  recognized for our commitment to optimal value delivery and client success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              TRIOVE represents more than just our name—it's our commitment to excellence in every aspect of our work.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              {
                letter: "T",
                title: "Technology",
                description: "We leverage cutting-edge technologies to solve complex business challenges and drive innovation.",
                icon: Globe
              },
              {
                letter: "R",
                title: "Reliable",
                description: "Our clients trust us to deliver consistent, dependable results that exceed expectations every time.",
                icon: Award
              },
              {
                letter: "I",
                title: "Innovation",
                description: "We continuously explore new approaches and creative solutions to stay ahead of industry trends.",
                icon: Target
              },
              {
                letter: "O",
                title: "Optimal",
                description: "We strive for the best possible outcomes, optimizing processes and maximizing efficiency.",
                icon: Target
              },
              {
                letter: "V",
                title: "Value",
                description: "Every solution we deliver is designed to provide measurable value and tangible business benefits.",
                icon: Award
              },
              {
                letter: "E",
                title: "Excellence",
                description: "We maintain the highest standards of quality in everything we do, from planning to execution.",
                icon: Users
              }
            ].map((value, index) => (
              <motion.div key={value.letter} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{value.letter}</span>
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
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
              Ready to Experience TRIOVE Excellence?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our values-driven approach can transform your business and deliver exceptional results.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Get in Touch
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
