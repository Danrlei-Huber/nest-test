export class ResponseDTO {

    msg: String;

    data: any;

    constructor(msg: String, data: any) {
        this.msg = msg;
        this.data = data;
    }

}