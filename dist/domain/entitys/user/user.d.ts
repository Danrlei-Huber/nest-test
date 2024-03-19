import { UserDTO } from "./userDTO";
export declare class User {
    userId: number;
    firstName: String;
    lastName: String;
    email: String;
    username: String;
    password: String;
    enabled: boolean;
    companyId: String;
    role: String;
    constructor(userDTO: UserDTO);
}
