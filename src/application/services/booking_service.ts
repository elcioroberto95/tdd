import { randomUUID } from 'crypto';
import { Booking } from "../../domain/entities/booking";
import { BookingRepository } from "../../domain/repositories/booking_repository";
import { DateRange } from "../../domain/value_objects/date_range";
import { CreateBookingDTO } from "../dtos/create_booking_dto";
import { PropertyService } from "./property_service";
import { UserService } from "./user_service";

export class BookingService {
    public bookingRepository: BookingRepository;
    public propertyService: PropertyService
    public userService: UserService
    constructor(bookingRepository: BookingRepository, propertyService: PropertyService, userService: UserService) {
        this.bookingRepository = bookingRepository;
        this.propertyService = propertyService;
        this.userService = userService;
    }

    async createBooking(bookingDTO: CreateBookingDTO): Promise<Booking | null> {
        const property = await this.propertyService.getPropertyById(bookingDTO.propertyId);
        if (!property) {
            throw new Error('property not found');
        }
        const guest = await this.userService.getUserById(bookingDTO.guestId);
        if (!guest) {
            throw new Error('user not found');
        }
        const dateRange = new DateRange(bookingDTO.startDate, bookingDTO.endDate);
        const booking = new Booking(randomUUID(), property, guest, dateRange, bookingDTO.guestCount);

        await this.bookingRepository.create(booking);

        return booking;
    }
}