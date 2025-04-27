"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data - replace with real data from your API
const swipeData = [
  { name: "Mon", right: 400, left: 240 },
  { name: "Tue", right: 300, left: 139 },
  { name: "Wed", right: 200, left: 980 },
  { name: "Thu", right: 278, left: 390 },
  { name: "Fri", right: 189, left: 480 },
  { name: "Sat", right: 239, left: 380 },
  { name: "Sun", right: 349, left: 430 },
];

const timeSlots = [
  { time: "12:00 PM", swipes: 120 },
  { time: "1:00 PM", swipes: 98 },
  { time: "2:00 PM", swipes: 86 },
  { time: "3:00 PM", swipes: 75 },
  { time: "4:00 PM", swipes: 65 },
];

export default function SwipeMetricsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Swipe Metrics</h1>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Swipes Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">1,234</div>
              <p className="text-sm text-muted-foreground">
                +12% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Right Swipes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">789</div>
              <p className="text-sm text-muted-foreground">
                +8% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Left Swipes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">445</div>
              <p className="text-sm text-muted-foreground">
                +5% from yesterday
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Swipe Engagement Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={swipeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="right"
                    stroke="#8884d8"
                    name="Right Swipes"
                  />
                  <Line
                    type="monotone"
                    dataKey="left"
                    stroke="#82ca9d"
                    name="Left Swipes"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top 5 Most Popular Time Slots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timeSlots.map((slot, index) => (
                <div
                  key={slot.time}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {index + 1}
                    </div>
                    <span className="font-medium">{slot.time}</span>
                  </div>
                  <span className="text-muted-foreground">
                    {slot.swipes} swipes
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
