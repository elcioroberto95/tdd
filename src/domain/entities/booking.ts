import { Property } from './property';
import { DateRange } from '../value_objects/date_range';
import { User } from './user';
export class Booking {
    private readonly id: string;
    private readonly property: Property;
    private readonly user: User;
    private readonly dateRange: DateRange;
    private readonly guestCount: number;
    private status: 'CONFIRMED' | 'CANCELLED' = 'CONFIRMED';

    constructor(id: string, property: Property, user: User, dateRange: DateRange, guestCount: number = 0) {


        this.id = id;
        this.property = property;
        this.user = user;
        this.dateRange = dateRange;
        this.guestCount = guestCount;
        this.validateGuestCount();
        property.addBooking(this);
    }

    getId(): string {
        return this.id;
    }
    getProperty(): Property {
        return this.property;
    }
    getUser(): User {
        return this.user;
    }
    getDateRange(): DateRange {
        return this.dateRange;
    }
    getGuestCount(): number {
        return this.guestCount;
    }
    getStatus(): 'CONFIRMED' | 'CANCELLED' {
        return this.status;
    }

    validateGuestCount(): void {
        if (this.guestCount <= 0) {
            throw new Error('Guest count must be a positive number');
        }
        if (this.guestCount > this.property.maxGuests) {
            throw new Error('Guest count cannot exceed max guests');
        }
    }



    cancel(currentDate: Date): void {
        this.status = 'CANCELLED';
    }
}
