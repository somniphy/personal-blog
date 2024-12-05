"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Category } from "@/types";
import { Button } from "@/components/ui/button";
import { EyeIcon, TrashIcon } from "lucide-react";
import { Link } from "@inertiajs/react";

export const tableColumns: ColumnDef<Category>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "slug",
        header: "Slug",
    },
    {
        accessorKey: "description",
        header: "Description",
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
            const categoryId = row.original.id;
            return (
                <Button variant="default" size="sm" asChild>
                    <Link
                        href={route("categories.show", categoryId)}
                        preserveScroll
                    >
                        <EyeIcon className="w-4 h-4 mr-2" />
                        Show
                    </Link>
                </Button>
            );
        },
    },
];
