import InputError from "@/components/input-error";

import GuestLayout from "@/layouts/guest-layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Category } from "@/types";
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
import { toast } from "sonner";
import { Transition } from "@headlessui/react";

export default function CategoryEdit({ name, description }: Category) {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: name,
        description: description,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route("categories.update"));
    };

    return (
        <AuthenticatedLayout header={{ title: "Edit Category" }}>
            <Card>
                <CardHeader>
                    <h2 className="text-lg font-medium text-foreground">
                        Category Update Information
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Update the category information.
                    </p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit} className="mt-6 space-y-6">
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

                        <div>
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
            </Card>
        </AuthenticatedLayout>
    );
}
