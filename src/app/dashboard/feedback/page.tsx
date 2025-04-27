import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Filter } from "lucide-react";

// Mock data - replace with real data from your API
const feedback = [
  {
    id: 1,
    user: "John D.",
    rating: 5,
    comment: "Great experience! The app made it easy to connect with people.",
    time: "2 hours ago",
  },
  {
    id: 2,
    user: "Anonymous",
    rating: 3,
    comment: "App is good but could use more features.",
    time: "1 day ago",
  },
  {
    id: 3,
    user: "Sarah M.",
    rating: 4,
    comment: "Enjoyed using the app, would recommend to friends.",
    time: "2 days ago",
  },
];

export default function FeedbackPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">User Feedback</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {feedback.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between rounded-lg border p-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{item.user}</h3>
                      <Badge variant="outline">{item.time}</Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < item.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.comment}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Reply
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="text-4xl font-bold">4.2</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on 120 reviews
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">85%</div>
              <p className="text-sm text-muted-foreground">
                Of feedback has been responded to
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
