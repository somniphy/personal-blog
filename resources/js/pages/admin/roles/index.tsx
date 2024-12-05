import { DataTable } from "@/components/data-table";
import { tableColumns } from "./table-columns";
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { PageProps, Role } from "@/types";
export default function RoleList({ roles }: PageProps<{ roles: Role[] }>) {
    return (
        <AuthenticatedLayout header={{ title: "Roles" }}>
            <div className="py-3">
                <div className="mx-auto max-w-7xl sm:px-6 space-y-4">
                    <DataTable
                        placeholder="Search role name..."
                        column="name"
                        columns={tableColumns}
                        data={roles}
                        //button text
                        buttonText="roles"
                        //route name
                        routeName="roles"
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
