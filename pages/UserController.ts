import { userRegistration } from '../utilities/Interfaces';

export class UserController {
    readonly apiContext: any;

    constructor(apiContext: any) {
        this.apiContext = apiContext;
    }

    async userRegistration(payLoad: userRegistration): Promise<any> {
        return await this.apiContext.post('https://petstore.swagger.io/v2/user', { data: payLoad });
    }

    async userLogin(login: string, password: string): Promise<any> {
        return await this.apiContext.get(`https://petstore.swagger.io/v2/user/login?username=${login}&password=${password}`);
    }

    async updateUserName(login: string, payLoad: userRegistration): Promise<any> {
        return await this.apiContext.put(`https://petstore.swagger.io/v2/user/${login}`, { data: payLoad });
    }

    async deleteUser(login: string): Promise<any> {
        return await this.apiContext.delete(`https://petstore.swagger.io/v2/user/${login}`);
    }
}