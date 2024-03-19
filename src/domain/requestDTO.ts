export class ResponseDTO {

    status: boolean

    msg: String;

    data: any;

    constructor(status: boolean, msg: String, data: any) {
        this.status = status;
        this.msg = msg;
        this.data = data;
    }

}