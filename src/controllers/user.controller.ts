import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserDTO } from "src/domain/entitys/user/userDTO";
import { ResponseDTO } from "src/domain/requestDTO";
import { UserService } from "src/services";


@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }
    
    @Post('create')
    getDataDB(@Body() userDTO: UserDTO): ResponseDTO {
        return this.userService.createNewUser(userDTO);
    }

}