"use client";

import { ColumnDef } from "@tanstack/react-table";
import {  User } from "@/types";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
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
        accessorKey: "roles",
        header: "Roles",
        cell: ({row}) => {
            const roles = row.getValue("roles") as string[];
            return <span>{roles.join(", ")}</span>;
        }
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
        header: "Show",
        cell: ({ row }) => {
            const userId = row.original.id;
            return (
                <Link href={route("users.show", userId)}>
                    <Button variant="default" size="sm">
                        <EyeIcon className="w-4 h-4 mr-2" />
                        Show    
                    </Button>
                </Link>
            );
        },
    },
];
