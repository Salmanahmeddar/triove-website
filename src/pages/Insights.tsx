import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight, BookOpenText } from "lucide-react";
import { Link } from "react-router";

export default function Insights() {
  const posts = useQuery(api.blog.getPublished);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" animate="animate" variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.div variants={fadeInUp} className="inline-flex items-center bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpenText className="h-4 w-4 mr-2" />
              Insights & Blog
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              Perspectives on technology and transformation
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              Explore practical guides, trends, and opinions from our team.
            </motion.p>
          </motion.div>

          <div className="mt-12">
            {posts === undefined ? (
              <div className="text-center text-gray-500">Loading posts...</div>
            ) : posts.length === 0 ? (
              <div className="text-center text-gray-500">No published insights yet.</div>
            ) : (
              <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((p) => (
                  <motion.div key={p._id} variants={fadeInUp}>
                    <Card className="h-full border-0 shadow-md hover:-translate-y-1 transition-all duration-300 backdrop-blur-md bg-white/70">
                      <CardHeader>
                        <CardTitle className="text-xl">{p.title}</CardTitle>
                        <CardDescription>{p.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <CalendarDays className="h-4 w-4" />
                            <span>{p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : "Draft"}</span>
                          </div>
                          <div className="text-sm text-gray-600">{p.author}</div>
                        </div>
                        {p.tags?.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {p.tags.map((t, i) => (
                              <span key={i} className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full">
                                #{t}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="mt-6">
                          <Link to={`/insights/${p.slug}`}>
                            <Button variant="outline" size="sm">
                              Read more
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}