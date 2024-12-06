import AuthenticatedLayout from "@/layouts/authenticated-layout";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Article, Category } from "@/types";
import { Button } from "@/components/ui/button";
import { Link, useForm } from "@inertiajs/react";
import { ArrowLeftIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import InputError from "@/components/input-error";
import { FormEventHandler, useState } from "react";

import {
    DialogFooter,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogClose,
    DialogDescription,
    DialogTitle,
    Dialog,
} from "@/components/ui/dialog";
import { Transition } from "@headlessui/react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function ArticleView({
    article,
    categories,
}: {
    article: Article;
    categories: Category[]; 
}) {
    const [confirmingArticleDeletion, setConfirmingArticleDeletion] =
        useState(false);
    const {
        data,
        setData,
        patch,
        errors,
        recentlySuccessful,
        delete: destroy,
        processing,
    } = useForm<{
        title: string;
        content: string;
        category_ids: number[]; 
    }>({
        title: article.title,
        content: article.content,
        category_ids: article.categories.map(cat => cat.id), 
    });

    const update: FormEventHandler = (e) => {
        e.preventDefault();
        const articleId = article.id;
        patch(route("articles.update", articleId), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const confirmArticleDeletion = () => {
        setConfirmingArticleDeletion(true);
    };

    const deleteArticle: FormEventHandler = (e) => {
        e.preventDefault();
        const articleId = article.id;
        destroy(route("articles.destroy", articleId), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
    };

    const closeModal = () => {
        setConfirmingArticleDeletion(false);
    };

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
                        <form onSubmit={update} className="mt-6 space-y-6">
                            <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                                <Label
                                    htmlFor="title"
                                    className="font-medium text-foreground"
                                >
                                    Title
                                </Label>
                                <Input
                                    id="title"
                                    className="mt-1 block w-full"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                    autoComplete="title"
                                />
                                <InputError
                                    className=""
                                    message={errors.title}
                                />
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
                                <Textarea
                                    id="content"
                                    className="mt-1 block w-full"
                                    value={data.content}
                                    onChange={(e) =>
                                        setData("content", e.target.value)
                                    }
                                    required
                                    autoComplete="content"
                                />
                                <InputError
                                    className=""
                                    message={errors.content}
                                />
                            </div>
                            <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                                <Label
                                    htmlFor="created_at"
                                    className="font-medium text-foreground"
                                >
                                    Created At
                                </Label>
                                <span className="text-foreground text-sm">
                                    {new Date(
                                        article.created_at
                                    ).toLocaleString()}
                                </span>
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="categories">Categories</Label>
                                {categories.map((category) => (
                                    <div key={category.id} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`category-${category.id}`}
                                            checked={data.category_ids.includes(category.id)}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    setData("category_ids", [
                                                        ...data.category_ids,
                                                        category.id,
                                                    ]);
                                                } else {
                                                    setData(
                                                        "category_ids",
                                                        data.category_ids.filter(
                                                            (catId) =>
                                                                catId !== category.id
                                                        )
                                                    );
                                                }
                                            }}
                                        />
                                        <Label
                                            htmlFor={`category-${category.id}`}
                                        >
                                            {category.name}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                                <Label
                                    htmlFor="updated_at"
                                    className="font-medium text-foreground"
                                >
                                    Updated At
                                </Label>
                                <span className="text-foreground text-sm">
                                    {new Date(
                                        article.updated_at
                                    ).toLocaleString()}
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Button type="submit" disabled={processing}>
                                    Save
                                </Button>

                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="pt-4 text-sm text-green-500">
                                        Saved.
                                    </p>
                                </Transition>
                            </div>
                        </form>
                        <CardFooter className="flex justify-between">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="destructive"
                                        onClick={confirmArticleDeletion}
                                    >
                                        Delete Article
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <form onSubmit={deleteArticle}>
                                        <DialogHeader>
                                            <DialogTitle>
                                                Are you sure you want to delete
                                                this category?
                                            </DialogTitle>
                                            <DialogDescription>
                                                This action cannot be undone.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <div className="mt-6 flex justify-end">
                                                <DialogClose asChild>
                                                    <Button variant="outline">
                                                        Cancel
                                                    </Button>
                                                </DialogClose>

                                                <Button
                                                    type="submit"
                                                    variant="destructive"
                                                    className="ms-3"
                                                    disabled={processing}
                                                >
                                                    Delete Article
                                                </Button>
                                            </div>
                                        </DialogFooter>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </CardFooter>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}