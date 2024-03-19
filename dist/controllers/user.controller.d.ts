import { UserDTO } from "src/domain/entitys/user/userDTO";
import { ResponseDTO } from "src/domain/requestDTO";
import { UserService } from "src/services";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getDataDB(userDTO: UserDTO): ResponseDTO;
}
