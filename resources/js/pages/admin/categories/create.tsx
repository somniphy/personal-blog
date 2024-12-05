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




export default function CreateCategory({}: Category) {

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("categories.store"));
    };


    return (
        <AuthenticatedLayout header={{ title: "Create Category" }}>
            <Card className="mx-auto max-w-4xl mt-10">
                <CardHeader>
                    <CardTitle className="text-2xl">Create Category</CardTitle>
                    <CardDescription>Enter category details.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full focus-visible:ring-0"
                                autoComplete="name"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="description">Description</Label>

                            <Input
                                id="description"
                                type="text"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full focus-visible:ring-0"
                                autoComplete="description"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4 flex">
                            <Button
                                variant="default"
                                className="w-full"
                                disabled={processing}
                            >
                                Create Category
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
