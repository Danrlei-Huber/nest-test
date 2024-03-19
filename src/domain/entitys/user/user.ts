import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { UserDTO } from "./userDTO";
import { rolesEnum } from "src/enums/roles";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    userId: number;

    @Column()
    firstName: String;

    @Column()
    lastName: String;

    @Column()
    email: String;

    @Column()
    username: String;

    @Column()
    password: String;

    @Column()
    enabled: boolean;

    @Column()
    companyId: String;

    @Column()
    role: String;

    constructor(userDTO: UserDTO) {
        this.userId = uuidv4();
        this.firstName = userDTO.firstName;
        this.lastName = userDTO.lastName;
        this.email = userDTO.email;
        this.username = userDTO.username;
        this.password = userDTO.password;
        this.enabled = userDTO.enabled;
        this.companyId = userDTO.companyId;
        this.role = rolesEnum.ADMIN;
    }

}