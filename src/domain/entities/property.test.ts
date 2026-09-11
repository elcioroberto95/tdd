import { Property } from './property';
import { DateRange } from '../value_objects/date_range';

describe('Property Entity', () => {

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
    });

    it('should throw an error when creating a property with empty id', () => {
        expect(
            () => new Property('', 'Property Name', 'Property Description', 4, 400)
        ).toThrow('ID cannot be empty');
    });

    it('should throw an error when creating a property with empty name', () => {
        expect(
            () => new Property('property-1', '', 'Property Description', 4, 400)
        ).toThrow('Name cannot be empty');
    });

    it('should throw an error when creating a property with empty description', () => {
        expect(
            () => new Property('property-1', 'Property Name', '', 4, 400)
        ).toThrow('Description cannot be empty');
    });

    it('should throw an error when max guests is zero', () => {
        expect(
            () => new Property('property-1', 'Property Name', 'Property Description', 0, 400)
        ).toThrow('Max guests must be a positive number');
    });

    it('should throw an error when max guests is negative', () => {
        expect(
            () => new Property('property-1', 'Property Name', 'Property Description', -1, 400)
        ).toThrow('Max guests must be a positive number');
    });

    it('should throw an error when price is zero', () => {
        expect(
            () => new Property('property-1', 'Property Name', 'Property Description', 4, 0)
        ).toThrow('Price must be a positive number');
    });

    it('should throw an error when price is negative', () => {
        expect(
            () => new Property('property-1', 'Property Name', 'Property Description', 4, -100)
        ).toThrow('Price must be a positive number');
    });

    it('should not apply a discount to stays of fewer than 7 nights.', () => {
        const property = new Property('property-1', 'Property Name', 'Property Description', 4, 400);
        const dateRange = new DateRange(new Date('2024-06-01'), new Date('2024-06-05')); // 4 nights
        const totalPrice = property.calculateTotalPrice(dateRange);
        expect(totalPrice).toBe(1600); // 4 nights * $400 per night
    });
})
