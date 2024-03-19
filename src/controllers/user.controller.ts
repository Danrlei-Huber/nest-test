import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserDTO } from "../domain/entities/user/userDTO";
import { ResponseDTO } from "../domain/requestDTO";
import { UserService } from "../services/user.service";


@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }
    
    @Post('create')
    getDataDB(@Body() userDTO: UserDTO): ResponseDTO {
        return this.userService.createNewUser(userDTO);
    }

}