import { CreateBookingDTO } from "../../application/dtos/create_booking_dto";
import { Booking } from "../../domain/entities/booking";
import { BookingRepository } from "../../domain/repositories/booking_repository";
export class FakeBookingRepository implements BookingRepository {
    private bookings: { [id: string]: Booking } = {};

    async create(booking: Booking): Promise<void> {
        this.bookings[booking.getId()] = booking;
    }

    async findById(id: string): Promise<Booking | null> {
        return this.bookings[id] || null;
    }
}