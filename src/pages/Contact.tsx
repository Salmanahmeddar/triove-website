import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { motion } from "framer-motion";
import { Mail, Phone, Building2, User, SendHorizonal, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const createContact = useMutation(api.contacts.create);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createContact({
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim() || undefined,
        phone: form.phone.trim() || undefined,
        subject: form.subject.trim(),
        message: form.message.trim(),
      });
      toast("Thanks! We'll be in touch shortly.");
      setForm({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-100">
      <Navbar />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" animate="animate" variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="inline-flex items-center bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium">
                Get in touch
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                Let's build something great together
              </h1>
              <p className="text-lg text-gray-600">
                Share a few details about your goals. Our team will reach out to align on scope, timeline, and next steps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-0 shadow-md backdrop-blur-md bg-white/70">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-cyan-700" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Email</div>
                        <div className="font-medium">info@triove.com</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md backdrop-blur-md bg-white/70">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-cyan-700" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Phone</div>
                        <div className="font-medium">+1 (555) 123-4567</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-lg rounded-2xl p-6 md:p-8"
            >
              <CardHeader className="px-0">
                <CardTitle className="text-2xl">Contact form</CardTitle>
                <CardDescription>We typically respond within 1 business day.</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input name="name" placeholder="Your name" className="pl-9" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input name="email" type="email" placeholder="name@example.com" className="pl-9" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input name="company" placeholder="Company (optional)" className="pl-9" value={form.company} onChange={handleChange} />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input name="phone" placeholder="Phone (optional)" className="pl-9" value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="mt-4">
                  <Input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
                </div>
                <div className="mt-4">
                  <Textarea name="message" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} required />
                </div>
                <div className="mt-6 flex justify-end">
                  <Button type="submit" className="px-6" disabled={loading}>
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <SendHorizonal className="h-4 w-4" />}
                    <span className="ml-2">{loading ? "Sending..." : "Send message"}</span>
                  </Button>
                </div>
              </CardContent>
            </motion.form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}