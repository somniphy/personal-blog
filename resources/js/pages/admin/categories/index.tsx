import { DataTable } from "@/components/data-table";
import { tableColumns } from "./table-columns";
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Category, PageProps } from "@/types";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast"

interface Props extends PageProps<{ categories: Category[] }> {}

export default function CategoryList({ categories, flash }: Props) {
    const { toast } = useToast();
    useEffect(() => {
        if (flash.message) {
            toast({
                description: flash.message,
                action: <ToastAction altText="OK">OK</ToastAction>
            });
        }
    }, [flash.message]);

    return (
        <AuthenticatedLayout header={{ title: "Categories" }}>
            <div className="py-3">
                <div className="mx-auto max-w-7xl sm:px-6 space-y-4">
                    <DataTable
                        placeholder="Search category name..."
                        column="name"
                        columns={tableColumns}
                        data={categories}
                        buttonText="categories"
                        routeName="categories"
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
