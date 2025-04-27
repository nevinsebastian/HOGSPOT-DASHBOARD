import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getInitials } from "@/lib/utils";

// Mock data - replace with real data from your API
const activeUsers = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    duration: "45m",
    status: "Active Swiping",
    avatar: "/placeholder-avatar.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 24,
    duration: "1h 20m",
    status: "Browsing",
    avatar: "/placeholder-avatar.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    age: 32,
    duration: "30m",
    status: "Active Swiping",
    avatar: "/placeholder-avatar.jpg",
  },
];

export default function RealtimeUsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Real-time Users</h1>
          <div className="flex items-center gap-2">
            <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="all">All Genders</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="all">All Ages</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35+">35+</option>
            </select>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.age} years old
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                      Duration: {user.duration}
                    </p>
                    <Badge
                      variant={
                        user.status === "Active Swiping"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {user.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
