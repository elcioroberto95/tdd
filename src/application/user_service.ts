import { User } from '../entities/user';
import { FakeUserRepository } from '../infrastracture/FakeUserRepository';
export class UserService {
    public userRepository: FakeUserRepository;
    constructor(userRepository: FakeUserRepository) {
        this.userRepository = userRepository;
    }

    async getUserById(id: string): Promise<User | null> {
        const user = await this.userRepository.findById(id);
        return user;
    }
}