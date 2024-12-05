"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { Head, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggler } from "@/components/theme-toggler";
import { Toaster } from "@/components/ui/toaster";
export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{
    header: { title: string; parent?: { title: string; href: string } };
}>) {


    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="min-h-screen bg-gray-100">
                <Head title={header.title} />
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                            <div className="flex items-center justify-between w-full px-4">
                                <div className="flex items-center gap-2">
                                    <SidebarTrigger className="-ml-1" />
                                    <Separator
                                        orientation="vertical"
                                        className="mr-2 h-4"
                                    />
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            {header?.parent && (
                                                <>
                                                    <BreadcrumbItem className="hidden md:block">
                                                        <BreadcrumbLink
                                                            href={
                                                                header.parent
                                                                    .href
                                                            }
                                                        >
                                                            {
                                                                header.parent
                                                                    .title
                                                            }
                                                        </BreadcrumbLink>
                                                    </BreadcrumbItem>
                                                    <BreadcrumbSeparator className="hidden md:block" />
                                                </>
                                            )}
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>
                                                    {header?.title || "Home"}
                                                </BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </div>
                                <ThemeToggler />
                            </div>
                        </header>
                        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                            <main className="flex-1">
                                <div className="relative">{children}</div>
                                <Toaster />
                            </main>
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </ThemeProvider>
    );
}
