"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ControlsPage() {
  const [isActive, setIsActive] = useState(false);
  const [activeHours, setActiveHours] = useState({
    start: "09:00",
    end: "17:00",
  });

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Provider Controls</h1>

        <Card>
          <CardHeader>
            <CardTitle>Hogspot Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="hogspot-status">Hogspot Active</Label>
                <p className="text-sm text-muted-foreground">
                  {isActive
                    ? "Hogspot is currently active"
                    : "Hogspot is currently inactive"}
                </p>
              </div>
              <Switch
                id="hogspot-status"
                checked={isActive}
                onCheckedChange={setIsActive}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="start-time">Start Time</Label>
                <input
                  type="time"
                  id="start-time"
                  value={activeHours.start}
                  onChange={(e) =>
                    setActiveHours({ ...activeHours, start: e.target.value })
                  }
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-time">End Time</Label>
                <input
                  type="time"
                  id="end-time"
                  value={activeHours.end}
                  onChange={(e) =>
                    setActiveHours({ ...activeHours, end: e.target.value })
                  }
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
            </div>
            <Button className="mt-4">Save Hours</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Current Visitors
                </p>
                <p className="text-3xl font-bold">42</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Today's Total</p>
                <p className="text-3xl font-bold">156</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Average Stay</p>
                <p className="text-3xl font-bold">45m</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
