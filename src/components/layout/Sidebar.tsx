"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BarChart2,
  Map,
  Tag,
  MessageSquare,
  Bell,
  Calendar,
  MapPin,
  Settings,
  Power,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Controls",
    href: "/dashboard/controls",
    icon: Power,
  },
  {
    name: "Real-time Count",
    href: "/dashboard/realtime-users",
    icon: Users,
  },
  {
    name: "Demographics",
    href: "/dashboard/demographics",
    icon: BarChart2,
  },
  {
    name: "Swipe Metrics",
    href: "/dashboard/swipe-metrics",
    icon: BarChart2,
  },
  {
    name: "Heatmap",
    href: "/dashboard/heatmap",
    icon: Map,
  },
  {
    name: "Promotions",
    href: "/dashboard/promotions",
    icon: Tag,
  },
  {
    name: "Feedback",
    href: "/dashboard/feedback",
    icon: MessageSquare,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    name: "Event Scheduling",
    href: "/dashboard/events",
    icon: Calendar,
  },
  {
    name: "Geofence",
    href: "/dashboard/geofence",
    icon: MapPin,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-white">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-xl font-semibold">Hawkspot</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
