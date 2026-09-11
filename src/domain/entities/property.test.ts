const {Property} = require('./property');
describe('property Entity', () => {

    it('should create a valid property object', () => {
        const id = 'property-1';
        const name = 'Property Name';
        const description = 'Property Description';
        const maxGuests = 4;
        const price = 400;
        const property = new Property(id, name, description, maxGuests, price);
        expect(property.getId()).toBe(id);
        expect(property.getName()).toBe(name);
        expect(property.getDescription()).toBe(description);
        expect(property.getMaxGuests()).toBe(maxGuests);
        expect(property.getPrice()).toBe(price);
    })
    


})