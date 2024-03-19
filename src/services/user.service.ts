import { Injectable } from "@nestjs/common";
import { AppDataSource } from "src/config/data-source";
import { User } from "src/domain/entitys/user/user";
import { UserDTO } from "src/domain/entitys/user/userDTO";
import { ResponseDTO } from "src/domain/requestDTO";
import { Any, Repository } from "typeorm";

@Injectable()
export class UserService {

    userRepository: Repository<User> = AppDataSource.getRepository(User);

    createNewUser(userDTO: UserDTO): ResponseDTO {
        try {
            const newUser: User = new User(userDTO);
            this.userRepository.save(newUser);
            return new ResponseDTO(true, "Usuario inserido com sucesso", newUser);
        } catch (error) {
            return new ResponseDTO(false, "Usuario nao inserido", Any);
        }
    }
}