import { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";
import { Loader2, ShieldCheck, XCircle } from "lucide-react";
import { toast } from "sonner";
import { AdminProtectedRoute } from "@/components/auth/AdminProtectedRoute";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import {
  ACCESS_STATUS_LABEL,
  ACCESS_STATUS_STYLE,
  type AgentAccessRequest,
  type AgentAccessStatus,
} from "@/lib/agent-access";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/access-requests")({
  head: () => ({
    meta: [
      { title: "Agent Access Requests - Safar Admin" },
      { name: "description", content: "Review and approve agent access requests." },
    ],
  }),
  component: () => (
    <AdminProtectedRoute>
      <AccessRequestsPage />
    </AdminProtectedRoute>
  ),
});

function AccessRequestsPage() {
  const { session } = useAuth();
  const [requests, setRequests] = useState<AgentAccessRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<AgentAccessStatus | "all">("pending");
  const [rejectTarget, setRejectTarget] = useState<AgentAccessRequest | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [actingId, setActingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("agent_access_requests")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast.error(error.message);
    } else {
      setRequests((data ?? []) as AgentAccessRequest[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const filtered =
    tab === "all" ? requests : requests.filter((r) => r.status === tab);

  const callAdminApi = async (path: string, body: Record<string, string>) => {
    if (!session?.access_token) {
      toast.error("Session expired — please sign in again");
      return false;
    }
    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify(body),
    });
    const payload = (await response.json()) as { error?: string };
    if (!response.ok) {
      toast.error(payload.error ?? "Action failed");
      return false;
    }
    return true;
  };

  const handleApprove = async (request: AgentAccessRequest) => {
    setActingId(request.id);
    const ok = await callAdminApi("/api/admin/agent-access/approve", { requestId: request.id });
    setActingId(null);
    if (ok) {
      toast.success(`Invitation sent to ${request.email}`);
      await load();
    }
  };

  const handleReject = async () => {
    if (!rejectTarget) return;
    setActingId(rejectTarget.id);
    const ok = await callAdminApi("/api/admin/agent-access/reject", {
      requestId: rejectTarget.id,
      reason: rejectReason,
    });
    setActingId(null);
    if (ok) {
      toast.success("Request rejected");
      setRejectTarget(null);
      setRejectReason("");
      await load();
    }
  };

  return (
    <AdminLayout title="Agent access requests">
      <div className="mx-auto w-full max-w-6xl">
        <Card className="border-border">
          <CardHeader>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <div>
                <CardTitle>Access requests</CardTitle>
                <CardDescription>
                  Review agent applications. Approved requests receive an email invitation to set
                  up their account.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={tab} onValueChange={(v) => setTab(v as AgentAccessStatus | "all")}>
              <TabsList className="mb-4">
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="invited">Invited</TabsTrigger>
                <TabsTrigger value="completed">Active</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>

              <TabsContent value={tab}>
                {loading ? (
                  <div className="flex justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : filtered.length === 0 ? (
                  <p className="py-12 text-center text-sm text-muted-foreground">
                    No {tab === "all" ? "" : tab} requests.
                  </p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Applicant</TableHead>
                        <TableHead>Agency</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filtered.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell>
                            <div className="font-medium">{request.full_name}</div>
                            <div className="text-xs text-muted-foreground">{request.email}</div>
                          </TableCell>
                          <TableCell>{request.business_name}</TableCell>
                          <TableCell>
                            {request.city}, {request.country_code}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={cn("capitalize", ACCESS_STATUS_STYLE[request.status])}
                            >
                              {ACCESS_STATUS_LABEL[request.status]}
                            </Badge>
                            {request.rejection_reason ? (
                              <p className="mt-1 max-w-xs text-xs text-muted-foreground">
                                {request.rejection_reason}
                              </p>
                            ) : null}
                          </TableCell>
                          <TableCell className="text-xs text-muted-foreground">
                            {format(new Date(request.created_at), "PP")}
                          </TableCell>
                          <TableCell className="text-right">
                            {request.status === "pending" ? (
                              <div className="flex justify-end gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => handleApprove(request)}
                                  disabled={actingId === request.id}
                                >
                                  {actingId === request.id ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                  ) : (
                                    "Approve & invite"
                                  )}
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setRejectTarget(request);
                                    setRejectReason("");
                                  }}
                                  disabled={actingId === request.id}
                                >
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </div>
                            ) : (
                              <span className="text-xs text-muted-foreground">—</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!rejectTarget} onOpenChange={(open) => !open && setRejectTarget(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject access request</DialogTitle>
            <DialogDescription>
              {rejectTarget
                ? `Reject ${rejectTarget.full_name} (${rejectTarget.email})? They will not be able to sign in.`
                : null}
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="Optional reason for rejection (not emailed automatically)"
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            rows={3}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setRejectTarget(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleReject} disabled={actingId !== null}>
              {actingId ? <Loader2 className="h-4 w-4 animate-spin" /> : "Reject request"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
