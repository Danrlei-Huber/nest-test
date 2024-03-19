import { Injectable } from "@nestjs/common";
import { AppDataSource } from "src/config/data-source";
import { User } from "src/domain/entitys/user/user";
import { UserDTO } from "src/domain/entitys/user/userDTO";
import { ResponseDTO } from "src/domain/requestDTO";
import { Any } from "typeorm";
import { Repository } from "typeorm/repository/Repository";
import { v4 as uuidv4 } from 'uuid';

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
