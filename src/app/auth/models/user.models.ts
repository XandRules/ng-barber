export interface UserLogin {
    email: string;
    senha: string;
}

export interface User {
    email?: string;
    uid?: string;
    user?: string;
    acesso?: string[]
}