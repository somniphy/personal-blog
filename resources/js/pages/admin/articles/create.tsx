import InputError from "@/components/input-error";

import GuestLayout from "@/layouts/guest-layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Article, Category } from "@/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthenticatedLayout from "@/layouts/authenticated-layout";

import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export default function CreateArticle({ categories }: Article) {
    const { data, setData, post, processing, errors } = useForm<{
        title: string;
        content: string;
        categories: number[];
    }>({
        title: "",
        content: "",
        categories: [],
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("articles.store"));
    };

    return (
        <AuthenticatedLayout header={{ title: "Create Category" }}>
            <Card className="mx-auto max-w-4xl mt-10">
                <CardHeader>
                    <CardTitle className="text-2xl">Create Article</CardTitle>
                    <CardDescription>Start writing.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full focus-visible:ring-0"
                                autoComplete="title"
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.title}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="content">Content</Label>

                            <Textarea
                                id="content"
                                placeholder="" 
                                name="content"
                                value={data.content}
                                className="mt-1 block w-full focus-visible:ring-0"
                                autoComplete="content"
                                onChange={(e) =>
                                    setData("content", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.content}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="categories">Categories</Label>
                            {categories.map((category) => (
                                <div key={category.id}>
                                    <Checkbox
                                        checked={data.categories.includes(category.id)}
                                        onCheckedChange={(checked) => {
                                            if (checked) {
                                                setData("categories", [
                                                    ...data.categories,
                                                    category.id,
                                                ]);
                                            } else {
                                                setData("categories", 
                                                    data.categories.filter(
                                                        (id) => id !== category.id
                                                    )
                                                );
                                            }
                                        }}
                                    />
                                    <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                                </div>
                                //todo: use form of shadcn
                            ))}
                        </div>

                        <div className="mt-4 flex">
                            <Button
                                variant="default"
                                className="w-full"
                                disabled={processing}
                            >
                                Create Article
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
