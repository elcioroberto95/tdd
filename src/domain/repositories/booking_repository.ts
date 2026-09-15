import { CreateBookingDTO } from '../../application/dtos/create_booking_dto';
import { Booking } from '../entities/booking';
export interface BookingRepository {
    findById(id: string): Promise<Booking | null>;
    create(booking: Booking): Promise<void>;
}