import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { toast } from "sonner";

type Status = "new" | "contacted" | "closed";

export default function AdminPage() {
  const { isAuthenticated, user } = useAuth();
  const contacts = useQuery(api.contacts.list);
  const updateStatus = useMutation(api.contacts.updateStatus);

  const [statusFilter, setStatusFilter] = useState<"all" | Status>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!contacts) return undefined;
    return contacts.filter((c) => {
      const matchStatus = statusFilter === "all" ? true : c.status === statusFilter;
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        (c.company ?? "").toLowerCase().includes(q) ||
        c.subject.toLowerCase().includes(q) ||
        c.message.toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }, [contacts, statusFilter, search]);

  const onUpdateStatus = async (id: string, status: Status) => {
    try {
      await updateStatus({ id: id as any, status });
      toast("Updated status");
    } catch (e) {
      console.error(e);
      toast("Failed to update status");
    }
  };

  const exportCSV = () => {
    if (!filtered || filtered.length === 0) {
      toast("No rows to export");
      return;
    }
    const headers = ["Name", "Email", "Company", "Phone", "Subject", "Message", "Status", "Created At"];
    const rows = filtered.map((c) => [
      escapeCsv(c.name),
      escapeCsv(c.email),
      escapeCsv(c.company ?? ""),
      escapeCsv(c.phone ?? ""),
      escapeCsv(c.subject),
      escapeCsv(c.message),
      escapeCsv(c.status),
      new Date(c._creationTime).toISOString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contacts_${new Date().toISOString()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-100">
        <Navbar />
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="border-0 shadow-md backdrop-blur-md bg-white/70">
              <CardHeader>
                <CardTitle>Unauthorized</CardTitle>
                <CardDescription>Sign in with an admin account to view submissions.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-100">
      <Navbar />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.div variants={fadeInUp} className="flex items-center justify-between mb-6">
              <div>
                <div className="inline-flex items-center bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-3">
                  Admin
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Contact Submissions</h1>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={exportCSV}>Export CSV</Button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-md backdrop-blur-md bg-white/70">
                <CardHeader>
                  <CardTitle className="text-xl">Submissions</CardTitle>
                  <CardDescription>Review and manage inbound contact requests.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-4">
                    <div className="flex gap-3">
                      <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as any)}>
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Filter status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        placeholder="Search name, email, subject..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-72"
                      />
                    </div>
                    <div className="text-sm text-gray-600">
                      {filtered ? `${filtered.length} result${filtered.length === 1 ? "" : "s"}` : "Loading..."}
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableCaption>Manage contact submissions</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Company</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Received</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filtered === undefined ? (
                          <TableRow>
                            <TableCell colSpan={7} className="text-center text-gray-500">Loading...</TableCell>
                          </TableRow>
                        ) : filtered.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={7} className="text-center text-gray-500">No submissions.</TableCell>
                          </TableRow>
                        ) : (
                          filtered.map((c) => (
                            <TableRow key={c._id}>
                              <TableCell className="min-w-40">
                                <div className="font-medium">{c.name}</div>
                                <div className="text-xs text-gray-500 line-clamp-2">{c.message}</div>
                              </TableCell>
                              <TableCell className="min-w-44">{c.email}</TableCell>
                              <TableCell className="min-w-32">{c.company ?? "-"}</TableCell>
                              <TableCell className="min-w-56">{c.subject}</TableCell>
                              <TableCell className="min-w-28">
                                <StatusBadge status={c.status as Status} />
                              </TableCell>
                              <TableCell className="min-w-40">
                                {new Date(c._creationTime).toLocaleString()}
                              </TableCell>
                              <TableCell className="text-right min-w-52">
                                <div className="flex gap-2 justify-end">
                                  <Button variant="outline" size="sm" onClick={() => onUpdateStatus(c._id, "new")}>
                                    Mark New
                                  </Button>
                                  <Button variant="outline" size="sm" onClick={() => onUpdateStatus(c._id, "contacted")}>
                                    Contacted
                                  </Button>
                                  <Button variant="outline" size="sm" onClick={() => onUpdateStatus(c._id, "closed")}>
                                    Closed
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const color =
    status === "new" ? "bg-cyan-100 text-cyan-800" :
    status === "contacted" ? "bg-amber-100 text-amber-800" :
    "bg-emerald-100 text-emerald-800";
  const label =
    status === "new" ? "New" :
    status === "contacted" ? "Contacted" :
    "Closed";
  return <Badge className={`${color} font-medium`}>{label}</Badge>;
}

function escapeCsv(value: string) {
  const needsQuotes = /[",\n]/.test(value);
  const escaped = value.replace(/"/g, '""');
  return needsQuotes ? `"${escaped}"` : escaped;
}
