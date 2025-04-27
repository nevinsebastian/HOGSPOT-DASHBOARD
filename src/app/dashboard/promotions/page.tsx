import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, Calendar } from "lucide-react";

// Mock data - replace with real data from your API
const promotions = [
  {
    id: 1,
    title: "Weekend Special",
    description: "20% off on all food items",
    status: "active",
    views: 1200,
    startDate: "2024-03-01",
    endDate: "2024-03-31",
  },
  {
    id: 2,
    title: "Happy Hour",
    description: "Buy one get one free on drinks",
    status: "inactive",
    views: 800,
    startDate: "2024-02-15",
    endDate: "2024-02-29",
  },
  {
    id: 3,
    title: "Student Discount",
    description: "15% off for students with valid ID",
    status: "active",
    views: 1500,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
  },
];

export default function PromotionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Promotions & Deals
          </h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New Promotion
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Promotions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {promotions.map((promotion) => (
                <div
                  key={promotion.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{promotion.title}</h3>
                      <Badge
                        variant={
                          promotion.status === "active"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {promotion.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {promotion.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {promotion.startDate} - {promotion.endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{promotion.views} views</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Analytics
                    </Button>
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
