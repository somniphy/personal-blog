"use client";
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { User } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowLeftIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserView({ user }: { user: User }) {
    return (
        <AuthenticatedLayout header={{ title: "User Information" }}>
            <div className="space-y-6">
                <Card>
                    <CardHeader className="border-b">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-foreground">
                                    User Information
                                </h2>
                            </div>
                            <Button variant="default" asChild>
                                <Link href={route("users.index")}>
                                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                                    Back
                                </Link>
                            </Button>
                        </div>
                    </CardHeader>   
                    <CardContent className="space-y-6 pt-6">
                        <Avatar className="size-32">
                            {user.avatar ? (
                                <AvatarImage src={user.avatar} alt={user.name} className="size-32" />
                            ) : (
                                <AvatarFallback className="bg-primary-foreground text-primary text-xl">{user.name.charAt(0)}</AvatarFallback>
                            )}
                        </Avatar>   
                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="name"
                                className="font-medium text-foreground"
                            >
                                Name
                            </Label>
                            <span className="text-foreground text-sm">{user.name}</span>
                        </div>

                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="email"
                                className="font-medium text-foreground"
                            >
                                Email
                            </Label>
                            <span className="text-foreground text-sm">{user.email}</span>
                        </div>

                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="roles"
                                className="font-medium text-foreground"
                            >
                                Roles
                            </Label>
                            <span className="text-foreground text-sm">
                                {user.roles.map((role) => (
                                    <div key={role.id}>
                                        {role.name}
                                    </div>
                                ))}
                            </span>
                        </div>

                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="name"
                                className="font-medium text-foreground"
                            >
                                Email Verified
                            </Label>
                            <span className="text-foreground text-sm">
                                {user.email_verified_at
                                    ? "Verified"
                                    : "Unverified"}
                            </span>
                        </div>
                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="name"
                                className="font-medium text-foreground"
                            >
                                Created At
                            </Label>
                            <span className="text-foreground text-sm">
                                {new Date(user.created_at).toLocaleString()}
                            </span>
                        </div>
                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="name"
                                className="font-medium text-foreground"
                            >
                                Updated At
                            </Label>
                            <span className="text-foreground text-sm">
                                {new Date(user.updated_at).toLocaleString()}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
