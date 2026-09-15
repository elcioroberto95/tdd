import { User } from '../../domain/entities/user';
import { UserRepository } from '../../domain/repositories/user_repository';
export class UserService {
    public userRepository: UserRepository;
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async getUserById(id: string): Promise<User | null> {
        const user = await this.userRepository.findById(id);
        return user;
    }
}