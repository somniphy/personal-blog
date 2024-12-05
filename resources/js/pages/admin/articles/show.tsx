import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Article } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowLeftIcon } from "lucide-react";

export default function ArticleView({ article }: { article: Article }) {
    return (
        <AuthenticatedLayout header={{ title: "Article Information" }}>
            <div className="space-y-6">
                <Card>
                    <CardHeader className="border-b">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-foreground">
                                    Article Information
                                </h2>
                            </div>
                            <Button variant="default" asChild>
                                <Link href={route("articles.index")}>
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
                                {article.title}
                            </span>
                        </div>

                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="slug"
                                className="font-medium text-foreground"
                            >
                                Slug
                            </Label>
                            <span className="text-foreground text-sm">
                                {article.slug}
                            </span>
                        </div>
                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="author"
                                className="font-medium text-foreground"
                            >
                                Author
                            </Label>
                            <span className="text-foreground text-sm">
                                {article.user.name}
                            </span>
                        </div>
                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="content"
                                className="font-medium text-foreground"
                            >
                                Content
                            </Label>
                            <span className="text-foreground text-sm">
                                {article.content}
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
                                {new Date(article.created_at).toLocaleString()}
                            </span>
                        </div>
                        <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                            <Label
                                htmlFor="categories"
                                className="font-medium text-foreground"
                            >
                                Categories
                            </Label>
                            <span className="text-foreground text-sm">
                                {article.categories.map((category) => (
                                    <div key={category.id}>{category.name}</div>
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
                                {new Date(article.updated_at).toLocaleString()}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
