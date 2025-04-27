import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function HeatmapPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Heatmap</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Today
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              This Week
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 Days
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Density Heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[600px] w-full rounded-md bg-muted">
              {/* Replace with actual Mapbox or Google Maps implementation */}
              <div className="flex h-full items-center justify-center text-muted-foreground">
                Interactive Map Placeholder
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Hot Zones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <span>Main Entrance</span>
                  </div>
                  <span className="text-muted-foreground">High Traffic</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-orange-500" />
                    <span>Food Court</span>
                  </div>
                  <span className="text-muted-foreground">Medium Traffic</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span>Restrooms</span>
                  </div>
                  <span className="text-muted-foreground">Low Traffic</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Peak Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>12:00 PM - 2:00 PM</span>
                  <span className="text-muted-foreground">Lunch Rush</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>5:00 PM - 7:00 PM</span>
                  <span className="text-muted-foreground">Evening Peak</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>8:00 PM - 10:00 PM</span>
                  <span className="text-muted-foreground">Night Activity</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
