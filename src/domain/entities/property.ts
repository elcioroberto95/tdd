export class Property {
    public id: string;
    public name: string
    public description: string;
    public maxGuests: number
    public price: number;

    constructor(id: string, name: string, description: string, maxGuests: number, price: number) {
        if (!id) {
            throw new Error('ID cannot be empty');
        }
        if (!name) {
            throw new Error('Name cannot be empty');
        }
        if (!description) {
            throw new Error('Description cannot be empty');
        }
        if (maxGuests <= 0) {
            throw new Error('Max guests must be a positive number');
        }
        if (price <= 0) {
            throw new Error('Price must be a positive number');
        }
        this.id = id;
        this.name = name;
        this.description = description;
        this.maxGuests = maxGuests;
        this.price = price;
    }

    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getDescription(): string {
        return this.description;
    }
    getPrice(): number {
        return this.price;
    }
    getMaxGuests(): number {
        return this.maxGuests;
    }
}