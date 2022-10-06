import { request } from '@playwright/test';

export abstract class UserController {

    async userRegistration(payLoad) {
        const apiContext = await request.newContext();
        const creatUserResponse = await apiContext.post('https://petstore.swagger.io/v2/user', { data: payLoad });
    }
}