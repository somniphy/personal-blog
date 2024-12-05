export interface Role {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
    permissions: Permission[];
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    avatar: string;
    created_at: string;
    updated_at: string;
    roles: Role[];
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export interface Article {
    id:number;
    title:string;
    slug:string;
    content:string;
    user: User;
    created_at: string;
    updated_at: string;
    categories: Category[];
}


export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    flash: {
        message: string;
    };
};
