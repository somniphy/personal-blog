"use client";

import { ColumnDef } from "@tanstack/react-table";

import { User } from "@/types";
import { Button } from "@/components/ui/button";
import { ViewIcon } from "lucide-react";
import { Link } from "@inertiajs/react";


export const tableColumns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "created_at",
        header: "Created At",
        cell: ({ row }) => {
            const createdAt = row.getValue("created_at") as string;
            return <span>{new Date(createdAt).toLocaleDateString()}</span>;
        },
    },
    {
        accessorKey: "updated_at",
        header: "Updated At",
        cell: ({ row }) => {
            const updatedAt = row.getValue("updated_at") as string;
            return <span>{new Date(updatedAt).toLocaleDateString()}</span>;
        },
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
            return (
                <Link href={route("users.view", row.original.id)}>
                    <Button variant="default" size="sm">
                        <ViewIcon />
                        View
                    </Button>
                </Link>
            );
        },
    },
];