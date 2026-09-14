export class DateRange {
    private readonly startDate: Date;
    private readonly endDate: Date;
    constructor(startDate: Date, endDate: Date) {

        this.startDate = startDate;
        this.endDate = endDate;
        this.validateDates();
    }
    validateDates(): void {
        if (this.endDate < this.startDate) {
            throw new Error('The end date must be after the start date');
        }
        if (this.endDate.getTime() === this.startDate.getTime()) {
            throw new Error('The start date and end date cannot be the same');
        }
    }
    getStartDate(): Date {
        return this.startDate;
    }
    getEndDate(): Date {
        return this.endDate;
    }

    getTotalNights(): number {
        const diffTime = Math.abs(this.endDate.getTime() - this.startDate.getTime());
        return Math.ceil(diffTime / (1000 * 3600 * 24));
    }


    overlaps(other: DateRange): boolean {
        return this.startDate < other.getEndDate() && this.endDate > other.getStartDate();
    }
}