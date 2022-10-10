import { test, expect, request } from '@playwright/test';
import { UserController } from '../../pages/UserController';
import { payLoad } from '../../fixtures/UserController/TestData';

test('POST', async () => {
    const apiContext = await request.newContext();
    const userController = new UserController(apiContext);
    const creatUserResponse = await userController.userRegistration(payLoad);
    expect(creatUserResponse.ok()).toBeTruthy();
});

test('GET', async () => {
    const apiContext = await request.newContext();
    const userController = new UserController(apiContext);
    const loginUserResponse = await userController.userLogin(payLoad.username, payLoad.password);
    expect(loginUserResponse.ok()).toBeTruthy();
});

test('PUT', async () => {
    const apiContext = await request.newContext();
    const userController = new UserController(apiContext);
    const updateUserResponse = await userController.updateUserName(payLoad.username, payLoad);
    console.log(await updateUserResponse.json());
    expect(updateUserResponse.ok()).toBeTruthy();
});

test('DELETE', async () => {
    const apiContext = await request.newContext();
    const userController = new UserController(apiContext);
    const deleteUserResponse = await userController.deleteUser(payLoad.username);
    console.log(deleteUserResponse);
    expect(deleteUserResponse.ok()).toBeTruthy();
});