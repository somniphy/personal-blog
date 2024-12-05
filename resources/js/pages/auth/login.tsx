import InputError from "@/components/input-error";
import GuestLayout from "@/layouts/guest-layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login({
    status,
    canResetPassword,
    auth,
}: PageProps<{
    status?: string;
    canResetPassword: boolean;
}>) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout header={{ title: "Log in" }} auth={auth}>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <Card className="mx-auto max-w-sm mt-10">
                <CardHeader>
                    <CardTitle className="text-2xl">Log in</CardTitle>
                    <CardDescription>
                        Enter your email and password to log in.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    placeholder="email@example.com"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    autoComplete="email"
                                    required
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                    autoComplete="current-password"
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="text-sm ml-auto inline-block underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>

                            <div className="mt-4 flex items-center space-x-2">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    checked={data.remember}
                                    onCheckedChange={(checked: boolean) =>
                                        setData("remember", checked)
                                    }
                                />
                                <label
                                    htmlFor="remember"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="mt-4 items-center">
                                <Button
                                    type="submit"
                                    variant="default"
                                    disabled={processing}
                                    className="w-full"
                                >
                                    Log in
                                </Button>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Don't have an account?{" "}
                                <Link
                                    href={route("register")}
                                    className="ml-auto inline-block underline"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </GuestLayout>
    );
}
