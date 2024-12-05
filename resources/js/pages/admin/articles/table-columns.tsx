"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Article, User } from "@/types";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import { Link } from "@inertiajs/react";

export const tableColumns: ColumnDef<Article>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "content",
        header: "Content",
    },
    {
        accessorKey: "user.name",
        header: "Author",
    },
    {
        accessorKey: "categories",
        header: "Categories",
        cell: ({row}) => {
            const categories = row.getValue("categories") as string[];
            return <span>{categories.join(", ")}</span>;
        }
    },
    {
        accessorKey: "created_at",
        header: "Created",
        cell: ({ row }) => {
            const createdAt = row.getValue("created_at") as string;
            return <span>{new Date(createdAt).toLocaleDateString()}</span>;
        },
    },
    {
        accessorKey: "updated_at",
        header: "Updated",
        cell: ({ row }) => {
            const updatedAt = row.getValue("updated_at") as string;
            return <span>{new Date(updatedAt).toLocaleDateString()}</span>;
        },
    },
    {
        accessorKey: "actions",
        header: "Show",
        cell: ({ row }) => {
            const articleId = row.original.id;
            return (
                <Link href={route("articles.show", articleId)}>
                    <Button variant="default" size="sm">
                        <EyeIcon className="w-4 h-4 mr-2" />
                        Show
                    </Button>
                </Link>
            );
        },
    },
];
