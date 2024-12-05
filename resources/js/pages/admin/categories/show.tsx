import AuthenticatedLayout from "@/layouts/authenticated-layout";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Category, PageProps } from "@/types";
import { Button } from "@/components/ui/button";
import { Link, useForm } from "@inertiajs/react";
import { ArrowLeftIcon, TrashIcon } from "lucide-react";
import { FormEventHandler, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogTrigger,
    DialogClose,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import InputError from "@/components/input-error";
import { Transition } from "@headlessui/react";

interface Props extends PageProps<{ category: Category }> {}

export default function CategoryView({ category }: Props) {
    const [confirmingCategoryDeletion, setConfirmingCategoryDeletion] =
        useState(false);
    const {
        data,
        setData,
        patch,
        errors,
        recentlySuccessful,
        delete: destroy,
        processing,
    } = useForm({
        name: category.name,
        description: category.description,
    });

    const update: FormEventHandler = (e) => {
        e.preventDefault();
        const categoryId = category.id;
        patch(route("categories.update", categoryId));
    };
    const confirmCategoryDeletion = () => {
        setConfirmingCategoryDeletion(true);
    };
    const deleteCategory: FormEventHandler = (e) => {
        e.preventDefault();
        const categoryId = category.id;
        destroy(route("categories.destroy", categoryId), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
    };
    const closeModal = () => {
        setConfirmingCategoryDeletion(false);
    };
    return (
        <AuthenticatedLayout header={{ title: "Category Information" }}>
            <div className="space-y-6">
                <Card>
                    <CardHeader className="border-b">
                        <div className="flex items-center gap-2">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-foreground">
                                    Category Information
                                </h2>
                            </div>
                            <Button variant="default" asChild>
                                <Link
                                    href={route("categories.index")}
                                    preserveScroll
                                >
                                    <ArrowLeftIcon className="w-2 h-2 mr-2" />
                                    Back
                                </Link>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                        <form onSubmit={update} className="mt-6 space-y-6">
                            <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        className="mt-1 block w-full"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                        autoComplete="name"
                                    />
                                    <InputError
                                        className="mt-2"
                                        message={errors.name}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                                <Label
                                    htmlFor="slug"
                                    className="font-medium text-foreground"
                                >
                                    Slug
                                </Label>
                                <span className="text-foreground text-sm">
                                    {category.slug}
                                </span>
                            </div>
                            <div className="mt-2">
                                <Label htmlFor="description">Description</Label>

                                <Input
                                    id="description"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    required
                                    autoComplete="description"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.description}
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
                                        category.created_at
                                    ).toLocaleString()}
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
                                    {new Date(
                                        category.updated_at
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
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="destructive"
                                    onClick={confirmCategoryDeletion}
                                >
                                    Delete Category
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <form onSubmit={deleteCategory}>
                                    <DialogHeader>
                                        <DialogTitle>
                                            Are you sure you want to delete this
                                            category?
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
                                                Delete Category
                                            </Button>
                                        </div>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </CardFooter>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
