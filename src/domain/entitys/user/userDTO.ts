import { rolesEnum } from "src/enums/roles";

export class UserDTO {

    userId: number;

    firstName: String;

    lastName: String;

    email: String;

    username: String;

    password: String;

    enabled: boolean;

    companyId: String;

    role: rolesEnum;

}