import { Link } from "@inertiajs/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Article, Category } from "@/types";

export default function RecentPosts({
    articles,
    categories,
}: {
    articles: Article[];
    categories: Category[];
}) {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
            <div className="grid gap-6">
                {articles.map((article) => (
                    <Card key={article.id}>
                        <CardHeader>
                            <CardTitle className="text-2xl">
                                {article.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-col">
                            <p className="text-foreground text-lg">
                                {article.content}
                            </p>
                            <div className="inline-flex gap-2">
                                <h1 className="text-sm text-foreground">
                                    Categories:
                                </h1>    
                                {article.categories.map((category) => (
                                    <div className="flex gap-2 items-center" key={category.id}>
                                        <span className="text-xs text-foreground/50">
                                            {category.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">
                                {" "}
                                {new Date(article.created_at).toLocaleString()}
                            </span>
    
                            <Link
                                href={route("articles.show", article.id)}
                                className="text-primary hover:underline"
                            >
                                Read more
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
