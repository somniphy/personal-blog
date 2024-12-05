import { DataTable } from "@/components/data-table";
import { tableColumns } from "./table-columns";
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { Article, PageProps} from "@/types"; 
export default function ArticlesList({ articles }: PageProps<{ articles: Article[] }>) {
    return (
        <AuthenticatedLayout header={{ title: "Articles" }}>
            <Head title="Articles" />
            <div className="py-3">
                <div className="mx-auto max-w-7xl sm:px-6 space-y-4">
                    <DataTable
                        placeholder="Search article name..."
                        column="title"
                        columns={tableColumns}
                        data={articles}
                        //button text 
                        buttonText="articles"
                        //route name
                        routeName="articles"
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
