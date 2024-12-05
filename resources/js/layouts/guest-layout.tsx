"use client";
import { PropsWithChildren } from "react";
import { PageProps } from "@/types";
import { Link, Head } from "@inertiajs/react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggler } from "@/components/theme-toggler";
import { AppWindowIcon, MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
export default function Guest({
    children,
    auth,
    header,
}: PropsWithChildren<
    PageProps<{
        header: { title: string };
    }>
>) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Head title={header.title} />

            <div className="flex relative min-h-screen flex-col bg-background">
                <div className="w-full mx-auto border-border/40 dark:border-border">
                    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
                        <nav className="flex h-14 text-sm items-center px-6 gap-4 justify-between">
                            <Link
                                href={route("dashboard")}
                                className="flex items-center gap-2"
                            >
                                <AppWindowIcon className="size-6 text-sidebar-primary-background" />
                                <span className="font-bold">
                                    shadcn laravel blog
                                </span>
                            </Link>
                            <div className="hidden md:flex items-center gap-2">
                                {auth?.user ? (
                                    <Link href={route("dashboard")}>
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className={buttonVariants({
                                                variant: "default",
                                            })}
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className={buttonVariants({
                                                variant: "outline",
                                            })}
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                                <ThemeToggler />
                            </div>
                            <div className="md:hidden">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <MenuIcon className="size-6" />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent
                                        side="right"
                                        className="w-[300px] sm:w-[400px]"
                                    >
                                        <div className="flex flex-col gap-4 mt-6">
                                            <ThemeToggler />
                                            {auth?.user ? (
                                                <Link
                                                    href={route("dashboard")}
                                                    className="w-full "
                                                >
                                                    Dashboard
                                                </Link>
                                            ) : (
                                                <>
                                                    <Link
                                                        href={route("login")}
                                                        className={buttonVariants(
                                                            {
                                                                variant:
                                                                    "default",
                                                                className:
                                                                    "w-full",
                                                            }
                                                        )}
                                                    >
                                                        Login
                                                    </Link>
                                                    <Link
                                                        href={route("register")}
                                                        className={buttonVariants(
                                                            {
                                                                variant:
                                                                    "outline",
                                                                className:
                                                                    "w-full",
                                                            }
                                                        )}
                                                    >
                                                        Register
                                                    </Link>
                                                </>
                                            )}
                                          
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </nav>
                    </header>
                </div>
                <main>
                    <div className="relative">{children}</div>
                </main>
            </div>
        </ThemeProvider>
    );
}
