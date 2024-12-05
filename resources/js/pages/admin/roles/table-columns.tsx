"use client";

import { ColumnDef } from "@tanstack/react-table";
import {  Role } from "@/types";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import { Link } from "@inertiajs/react";
 


export const tableColumns: ColumnDef<Role>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "guard_name",
        header: "Guard Name",
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
            const roleId = row.original.id;
            return (
                <Link href={route("roles.show", roleId)}>
                    <Button variant="default" size="sm">
                        <EyeIcon className="w-4 h-4 mr-2" />
                        Show    
                    </Button>
                </Link>
            );
        },
    },
];
