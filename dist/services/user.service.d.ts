import { User } from "src/domain/entitys/user/user";
import { UserDTO } from "src/domain/entitys/user/userDTO";
import { ResponseDTO } from "src/domain/requestDTO";
import { Repository } from "typeorm";
export declare class UserService {
    userRepository: Repository<User>;
    createNewUser(userDTO: UserDTO): ResponseDTO;
}
