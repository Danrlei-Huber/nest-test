import { Injectable } from "@nestjs/common";
import { ResponseDTO } from "src/domain/requestDTO";

@Injectable()
export class apiInfoService{

	ola(): ResponseDTO {
		const response: ResponseDTO = new ResponseDTO(
			'deu certo criar o responseDTO no service',
			'deu bom'
		);
		
		return response;
	}
}
