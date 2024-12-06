import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Article, Category, PageProps } from "@/types";
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
import GuestLayout from "@/layouts/guest-layout";

export default function ArticleView({
    article,
    auth,
    flash,
    categories,
}: PageProps<{ article: Article; categories: Category[] }>) {
    return (
        <GuestLayout
            header={{ title: "Article Information" }}
            auth={auth}
            flash={{ message: "" }}
        >
            <div className="min-h-screen bg-background">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-grow">
                            <Card>
                                <CardHeader>
                                    <CardTitle>{article.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{article.content}</p>
                                    <div className="inline-flex gap-2">
                                        <span className="text-sm text-foreground">
                                            Categories:
                                        </span>
                                        {article.categories.map((category) => (
                                            <div
                                                className="flex gap-2 items-center"
                                                key={category.id}
                                            >
                                                <span className="text-xs text-foreground/50">
                                                    {category.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
