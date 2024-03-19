import { Injectable } from "@nestjs/common";
import { AppDataSource } from "../config/data-source";
import { User } from "../domain/entities/user/user";
import { UserDTO } from "../domain/entities/user/userDTO";
import { ResponseDTO } from "../domain/requestDTO";
import { Any, Repository } from "typeorm";

@Injectable()
export class UserService {

    userRepository: Repository<User> = AppDataSource.getRepository(User);

    createNewUser(userDTO: UserDTO): ResponseDTO {
        try {
            const newUser: User = new User(userDTO);
            console.log("passei aqui: ", newUser);
            this.userRepository.save(newUser);
            return new ResponseDTO(true, "Usuario inserido com sucesso", newUser);
        } catch (error) {
            return new ResponseDTO(false, "Usuario nao inserido", Any);
        }
    }
}