const { User } = require('./user');
describe('User Entity', () => {

    it('should create a valid User object', () => {
        const name = 'John Doe';
        const email = 'john.doe@example.com';
        const user = new User('user-1', name, email);
        expect(user.getId()).toBe('user-1');
        expect(user.getName()).toBe(name);
        expect(user.getEmail()).toBe(email);
    })
    it('should throw an error when creating a user with empty name', () => {
        const name = '';
        const email = 'john.doe@example.com'

        expect(
            () => new User('user-1', name, email)
        ).toThrow('Name cannot be empty');
    }
    )

     it('should throw an error when creating a user with empty id', () => {
        const name = 'John Doe';
        const email = 'john.doe@example.com'

        expect(
            () => new User('', name, email)
        ).toThrow('ID cannot be empty');
    }
    )



})