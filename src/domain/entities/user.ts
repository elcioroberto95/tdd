export class User {
    private readonly name: string;
    private readonly email: string;
    private readonly id: string;
    constructor(id: string, name: string, email: string) {
        if (!name) {
            throw new Error('Name cannot be empty');
        }
        if (!id) {
            throw new Error('ID cannot be empty');
        }
        this.id = id;
        this.name = name;
        this.email = email;

    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
    getEmail(): string {
        return this.email;
    }
}