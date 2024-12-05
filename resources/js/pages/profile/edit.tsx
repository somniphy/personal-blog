import { PageProps } from "@/types";
// import DeleteUserForm from "./partials/delete-user-form";
import UpdatePasswordForm from "@/pages/profile/partials/update-password";
import UpdateProfileInformationForm from "@/pages/profile/partials/update-profile";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import DeleteUserForm from "./partials/delete-user";
import UpdateAvatar from "./partials/update-avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Edit({
    mustVerifyEmail,
    status,
    auth,
    message,    
}: PageProps<{ mustVerifyEmail: boolean; status?: string; message?: string }>) {
    return (
        <AuthenticatedLayout header={{ title: "Profile" }}>
            <Head title="Profile" />
            <div className="py-6">
                <div className="max-w-7xl space-y-6 sm:px-6">
                
                    <UpdateAvatar auth={auth} />
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                    <UpdatePasswordForm />
                    <DeleteUserForm />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
