import { Injectable } from "@nestjs/common";
import { AppDataSource } from "../config/data-source";
import { User } from "../domain/entities/user/user";
import { UserDTO } from "../domain/entities/user/userDTO";
import { ResponseDTO } from "../domain/requestDTO";
import { Any } from "typeorm";
import { Repository } from "typeorm/repository/Repository";

@Injectable()
export class apiInfoService {

    userRepository: Repository<User> = AppDataSource.getRepository(User);

    ola(): ResponseDTO {
        const response: ResponseDTO = new ResponseDTO(true,
            'api online',
            Any
        );

        return response;
    }

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
