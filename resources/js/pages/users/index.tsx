import { DataTable } from "@/components/data-table";
import { tableColumns } from "./table-columns";
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { PageProps, User } from "@/types";


export default function UserList({ users }: PageProps<{ users: User[] }>) {
    return (
        <AuthenticatedLayout header={{ title: "Users" }}>
            <Head title="Users" />
            <div className="py-3">
                <div className="mx-auto max-w-7xl sm:px-6 space-y-4">
                    <DataTable
                        placeholder="Search user name..."
                        column="name"
                        columns={tableColumns}
                        data={users}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
