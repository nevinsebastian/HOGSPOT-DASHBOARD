import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, BarChart2 } from "lucide-react";

// Mock data - replace with real data from your API
const notifications = [
  {
    id: 1,
    title: "Weekend Special",
    message: "Don't miss our weekend special offers!",
    audience: "All Users",
    sentAt: "2024-03-01 10:00 AM",
    openRate: "78%",
  },
  {
    id: 2,
    title: "New Feature Alert",
    message: "Check out our new chat features!",
    audience: "Active Users",
    sentAt: "2024-02-28 2:30 PM",
    openRate: "65%",
  },
  {
    id: 3,
    title: "Event Reminder",
    message: "Join us for our monthly meetup!",
    audience: "Event Attendees",
    sentAt: "2024-02-25 9:00 AM",
    openRate: "82%",
  },
];

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Notification
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sent Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start justify-between rounded-lg border p-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{notification.title}</h3>
                      <Badge variant="outline">{notification.audience}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {notification.message}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{notification.sentAt}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BarChart2 className="h-4 w-4" />
                        <span>Open Rate: {notification.openRate}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Analytics
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">1,234</div>
              <p className="text-sm text-muted-foreground">Sent this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Average Open Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">75%</div>
              <p className="text-sm text-muted-foreground">
                Across all notifications
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Subscribers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">5,678</div>
              <p className="text-sm text-muted-foreground">
                Users receiving notifications
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
