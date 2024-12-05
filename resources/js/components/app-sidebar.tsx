"use client";

import * as React from "react";
import {
    AppWindowIcon,
    BookAIcon,
    HomeIcon,
    ListCheckIcon,
    ShieldCheckIcon,
    Users2Icon,
} from "lucide-react";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import { NavMain } from "./nav-main";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { auth } = usePage().props as PageProps;

    const isRouteActive = (routeName: string | string[]) => {
        const currentRoute = route().current();
        return Array.isArray(routeName)
            ? routeName.some((name) => currentRoute?.startsWith(name))
            : currentRoute?.startsWith(routeName);
    };

    const data = {
        navMain: [
            {
                title: "Dashboard",
                url: route("dashboard"),
                icon: HomeIcon,
                isActive: isRouteActive("dashboard"),
            },
            {
                title: "Users",
                url: route("users.index"),
                icon: Users2Icon,
                isActive: isRouteActive("users.index"),
            },
            {
                title: "Roles",
                url: route("roles.index"),
                icon: ShieldCheckIcon,
                isActive: isRouteActive("roles.index"),
            },
            {
                title: "Categories",
                url: route("categories.index"),
                icon: ListCheckIcon,
                isActive: isRouteActive("categories.index"),
            },
            {
                title: "Articles",
                url: route("articles.index"),
                icon: BookAIcon,
                isActive: isRouteActive("articles.index"),
            },
        ],
    };

    return (
        <Sidebar className="border-r-0" {...props}>
            <SidebarHeader>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                        <Link href={route("dashboard")}>
                            <AppWindowIcon className="size-6 text-sidebar-primary-background" />
                        </Link>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">
                                shadcn laravel
                            </span>
                        </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarHeader>
            <SidebarContent className="ml-2">
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={auth.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
