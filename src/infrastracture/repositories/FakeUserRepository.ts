import { User } from "../../domain/entities/user";
export class FakeUserRepository {
    private users: { [id: string]: User } = {
        '1': new User('1', 'John Doe', 'john@example'),
        '2': new User('2', 'Jane Smith', 'jane@example')
    };

    async create(user: User): Promise<void> {
        this.users[user.getId()] = user;
    }

    async findById(id: string): Promise<User | null> {
        return this.users[id] || null;
    }
}