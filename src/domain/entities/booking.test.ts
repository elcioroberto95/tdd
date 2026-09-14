import { Booking } from './booking';
import { Property } from './property';
import { DateRange } from '../value_objects/date_range';
import { User } from './user';
describe('booking Entity', () => {
    it('should create a valid booking object', () => {
        const id = 'booking-1';
        const propertyId = 'property-1';
        const userId = 'user-1';
        const startDate = new Date('2024-06-01');
        const endDate = new Date('2024-06-05');
        const property = new Property(propertyId, 'Property Name', 'Property Description', 4, 400);
        const dateRange = new DateRange(startDate, endDate);
        const user = new User(userId, 'John Doe', 'john.doe@example.com');
        const booking = new Booking(id, property, user, dateRange, 2);
        expect(booking.getId()).toBe(id);
        expect(booking.getProperty()).toBe(property);
        expect(booking.getUser()).toBe(user);
        expect(booking.getDateRange()).toBe(dateRange);
        expect(booking.getGuestCount()).toBe(2);
    })





    it('shoud be throw an error if the guest count be zero or negative', () => {

        const id = 'booking-1';
        const propertyId = 'property-1';
        const userId = 'user-1';
        const startDate = new Date('2024-06-01');
        const endDate = new Date('2024-06-05');
        const property = new Property(propertyId, 'Property Name', 'Property Description', 4, 400);
        const dateRange = new DateRange(startDate, endDate);
        const user = new User(userId, 'John Doe', 'john.doe@example.com');

        expect(() => new Booking(id, property, user, dateRange, 0)).toThrow('Guest count must be a positive number');

    })



    it('shoud be throw an error if the guest count be greather than the property max guests', () => {

        const id = 'booking-1';
        const propertyId = 'property-1';
        const userId = 'user-1';
        const startDate = new Date('2024-06-01');
        const endDate = new Date('2024-06-05');
        const property = new Property(propertyId, 'Property Name', 'Property Description', 4, 400);
        const dateRange = new DateRange(startDate, endDate);
        const user = new User(userId, 'John Doe', 'john.doe@example.com');
        expect(() => new Booking(id, property, user, dateRange, 100)).toThrow('Guest count cannot exceed max guests');

    })



    it('should change the status to CANCELLED when cancelled', () => {
        const id = 'booking-1';
        const propertyId = 'property-1';
        const userId = 'user-1';
        const startDate = new Date('2024-06-01');
        const endDate = new Date('2024-06-05');
        const property = new Property(propertyId, 'Property Name', 'Property Description', 4, 400);
        const dateRange = new DateRange(startDate, endDate);
        const user = new User(userId, 'John Doe', 'john.doe@example.com');
        const booking = new Booking(id, property, user, dateRange, 1);
        const currentDate = new Date('2024-05-31');
        booking.cancel(currentDate);

        expect(booking.getStatus()).toBe('CANCELLED');

    })




})