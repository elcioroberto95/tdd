const { DateRange } = require('./date_range');
describe('DateRange ValueObject', () => {

    it('should create a valid DateRange object', () => {
        const startDate = new Date('2024-12-20');
        const endDate = new Date('2024-12-25');
        const dateRange = new DateRange(startDate, endDate);
        expect(dateRange.getStartDate()).toBe(startDate);
        expect(dateRange.getEndDate()).toBe(endDate);
    });


    it('should throw an error if the end date is before the start date', () => {
        expect(() => {
            new DateRange(new Date('2024-12-25'), new Date('2024-12-20'))
        }).toThrow('The end date must be after the start date');
    });


    it('should calculate the total nights correctly', () => {
        const startDate = new Date('2024-12-20');
        const endDate = new Date('2024-12-25');
        const dateRange = new DateRange(startDate, endDate);
        expect(dateRange.getTotalNights()).toBe(5);
    })


    it('should correctly determine if two date ranges overlap', () => {
        const range1 = new DateRange(new Date('2024-12-20'), new Date('2024-12-25'));
        const range2 = new DateRange(new Date('2024-12-24'), new Date('2024-12-30'));
        const range3 = new DateRange(new Date('2024-12-26'), new Date('2024-12-30'));
        expect(range1.overlaps(range2)).toBe(true);
        expect(range1.overlaps(range3)).toBe(false);
    });


    it('should throw an error if the start date is equal to the end date', () => {
        expect(() => {
            new DateRange(new Date('2024-12-20'), new Date('2024-12-20'))
        }).toThrow('The end date must be after the start date');
    })
});