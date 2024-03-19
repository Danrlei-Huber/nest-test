import { User } from "src/domain/entitys/user/user";
import { UserDTO } from "src/domain/entitys/user/userDTO";
import { ResponseDTO } from "src/domain/requestDTO";
import { Repository } from "typeorm/repository/Repository";
export declare class apiInfoService {
    userRepository: Repository<User>;
    ola(): ResponseDTO;
    createNewUser(userDTO: UserDTO): ResponseDTO;
}
