export interface IUser {
    id: string|number;
    username: string;
    password: string;
    email: string;
    address: string;
    role: string;
    phone: string;
    dateCreated: Date;
    IdVoucher: (string | number)[];
}
export interface IContact {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    message: string;
}
