import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Role } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowLeftIcon } from "lucide-react";

export default function RoleView({ role }: { role: Role }) {
    return (
        <AuthenticatedLayout header={{ title: "Role Information" }}>
            <div className="space-y-6">
                <Card>
                    <CardHeader className="border-b">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-foreground">
                                    Role Information
                                </h2>
                            </div>
                            <Button variant="default" asChild>
                                <Link href={route("roles.index")}>
                                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                                    Back
                                </Link>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="name"
                                className="font-medium text-foreground"
                            >
                                Name
                            </Label>
                            <span className="text-foreground text-sm">
                                {role.name}
                            </span>
                        </div>

                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="guard-name"
                                className="font-medium text-foreground"
                            >
                                Guard Name
                            </Label>
                            <span className="text-foreground text-sm">
                                {role.guard_name}
                            </span>
                        </div>
                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="created_at"
                                className="font-medium text-foreground"
                            >
                                Created At
                            </Label>
                            <span className="text-foreground text-sm">
                                {new Date(role.created_at).toLocaleString()}
                            </span>
                        </div>
                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="permissions"
                                className="font-medium text-foreground"
                            >
                                Permissions
                            </Label>
                            <span className="text-foreground text-sm">
                                {role.permissions.map((permission) => (
                                    <div key={permission.id}>
                                        {permission.name}
                                    </div>
                                ))}
                            </span>
                        </div>
                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="updated_at"
                                className="font-medium text-foreground"
                            >
                                Updated At
                            </Label>
                            <span className="text-foreground text-sm">
                                {new Date(role.updated_at).toLocaleString()}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
