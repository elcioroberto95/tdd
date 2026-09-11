export class DateRange {
    private readonly startDate: Date;
    private readonly endDate: Date;
    constructor(startDate: Date, endDate: Date) {
        if (endDate < startDate) {
            throw new Error('The end date must be after the start date');
        }
        if(endDate.getTime() === startDate.getTime()) {
            throw new Error('The start date and end date cannot be the same');
        }
        this.startDate = startDate;
        this.endDate = endDate;
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