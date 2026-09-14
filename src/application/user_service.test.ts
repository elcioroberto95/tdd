import { UserService } from './user_service';



describe('UserService', () => {


    let userService: UserService;

    beforeEach(() => {
        userService = new UserService();
    })
    it('shoud return null when an invalid id is provided', async () => {
        const user = await userService.getUserById('invalid-id');
        expect(user).toBeNull();
    })


    it('should return a valid user when a valid id is provided', async () => {
        const user = await userService.getUserById('valid-id');
        expect(user).not.toBeNull();
        expect(user?.getId()).toBe('valid-id');
    })
})