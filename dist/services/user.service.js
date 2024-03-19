"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const data_source_1 = require("../config/data-source");
const user_1 = require("../domain/entitys/user/user");
const requestDTO_1 = require("../domain/requestDTO");
const typeorm_1 = require("typeorm");
let UserService = class UserService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
    createNewUser(userDTO) {
        try {
            const newUser = new user_1.User(userDTO);
            this.userRepository.save(newUser);
            return new requestDTO_1.ResponseDTO(true, "Usuario inserido com sucesso", newUser);
        }
        catch (error) {
            return new requestDTO_1.ResponseDTO(false, "Usuario nao inserido", typeorm_1.Any);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map