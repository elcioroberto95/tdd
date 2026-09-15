import { FakeUserRepository } from '../../infrastracture/repositories/FakeUserRepository';
import { UserService } from './user_service';
import { User } from '../../domain/entities/user';



describe('UserService', () => {


    let userService: UserService;
    let userRepository: FakeUserRepository;

    beforeEach(() => {
        userRepository = new FakeUserRepository();
        userService = new UserService(userRepository);
    })
    it('shoud return null when an invalid id is provided', async () => {
        const user = await userService.getUserById('invalid-id');
        expect(user).toBeNull();
    })
    it('should return a valid user when a valid id is provided', async () => {
        const user = await userService.getUserById('1');
        expect(user).not.toBeNull();
        expect(user?.getId()).toBe('1');
    })


    it('should be able to create a new user', async () => {
        const newUser = new User('3', 'Bob Johnson', 'bob@example.com');
        await userRepository.create(newUser);
        const user = await userService.getUserById('3');
        expect(user).not.toBeNull();
        expect(user?.getId()).toBe('3');
    })
})