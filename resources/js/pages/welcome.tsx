import RecentPosts from "@/components/recent-posts";
import GuestLayout from "@/layouts/guest-layout";
import { Article, Category, PageProps } from "@/types";

export default function Welcome({ auth, articles, categories }: PageProps<{articles:Article[], categories:Category[]}>) {
    return (
        <GuestLayout
            header={{ title: "Welcome" }}
            auth={auth}
            flash={{ message: "" }}
        >
            {/* <div className="flex flex-1 flex-col gap-4 px-4 py-6">
                <div className="mx-auto h-24 w-full max-w-7xl rounded-xl bg-muted/50"></div>
            </div>
            <div className="flex flex-1 flex-col gap-4 pb-12 px-4">
                <div className="mx-auto h-screen w-full max-w-7xl rounded-xl bg-muted/50">
                    <div className="flex gap-12"></div>
                </div>
            </div> */}

            <div className="min-h-screen bg-background">
                <div className="container mx-auto px-4 py-8">
                    <RecentPosts articles={articles} categories={categories} />
                </div>
            </div>
        </GuestLayout>
    );
}
