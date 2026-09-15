import { CreateBookingDTO } from '../dtos/create_booking_dto';
import { BookingService } from './booking_service'
import { Booking } from '../../domain/entities/booking';
import { PropertyService } from './property_service'
import { UserService } from './user_service'
import { FakeBookingRepository } from '../../infrastracture/repositories/FakeBookingRepository'
describe("BookingService", () => {
    let bookingRepository: FakeBookingRepository;
    let bookingService: BookingService;
    let mockPropertyService: { getPropertyById: jest.Mock };
    let mockUserService: { getUserById: jest.Mock };

    beforeEach(() => {
        mockPropertyService = {
            getPropertyById: jest.fn()
        };
        mockUserService = {
            getUserById: jest.fn()
        };

        bookingRepository = new FakeBookingRepository();
        bookingService = new BookingService(
            bookingRepository,
            mockPropertyService as unknown as PropertyService,
            mockUserService as unknown as UserService
        );
    })
    it('should be able to create a booking using fake repositories', async () => {
        const mockProperty = {
            getId: jest.fn().mockReturnValue("1"),
            isAvailable: jest.fn().mockReturnValue(true),
            validateGuestCount: jest.fn(),
            calculateTotalPrice: jest.fn().mockReturnValue(500),
            addBooking: jest.fn()
        } as any
        const mockUser = {
            getId: jest.fn().mockReturnValue("1")
        } as any


        mockPropertyService.getPropertyById.mockResolvedValue(mockProperty)
        mockUserService.getUserById.mockResolvedValue(mockUser)
        const createbookingDTO: CreateBookingDTO = {
            propertyId: '1',
            guestId: '1',
            startDate: new Date('2024-12-20'),
            endDate: new Date('2024-12-25'),
            guestCount: 2,
        };

        const result = await bookingService.createBooking(createbookingDTO);

        expect(result).toBeInstanceOf(Booking);
        expect(result?.getGuestCount()).toBe(2);
        expect(result?.getStatus()).toBe("CONFIRMED");

        const savedBooking = await bookingRepository.findById(result?.getId() || '')
        expect(savedBooking).not.toBeNull();
        expect(savedBooking?.getId()).toBe(result?.getId())
    });
});