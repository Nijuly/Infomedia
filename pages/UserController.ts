import { request } from '@playwright/test';

interface userRegistration {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    userStatus: number
}

export class UserController {
    readonly apiContext: any;

    constructor(apiContext) {
        this.apiContext = apiContext;
    }

    async userRegistration(payLoad: userRegistration) {
        return await this.apiContext.post('https://petstore.swagger.io/v2/user', { data: payLoad });
    }

    async userLogin(login: string, password: string) {
        return await this.apiContext.get(`https://petstore.swagger.io/v2/user/login?username=${login}&password=${password}`);
    }

    async updateUserName(login: string, payLoad: userRegistration) {
        return await this.apiContext.put(`https://petstore.swagger.io/v2/user/${login}`, { data: payLoad });
    }

    async deleteUser(login: string) {
        return await this.apiContext.delete(`https://petstore.swagger.io/v2/user/${login}`);
    }
}