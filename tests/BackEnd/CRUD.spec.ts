import { test, expect, request } from '@playwright/test';

const payLoad = {
    "id": "123",
    "username": "Tester",
    "firstName": "Testerovich",
    "lastName": "Testerovich",
    "email": "string@ddd.com",
    "password": "dtfh2665333",
    "phone": "27363555727829",
    "userStatus": 0
}

test.only('POST', async () => {
    const apiContext = await request.newContext();
    const creatUserResponse = await apiContext.post('https://petstore.swagger.io/v2/user', { data: payLoad });
    expect(creatUserResponse.ok()).toBeTruthy();
});