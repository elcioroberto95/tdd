import { Property } from "../../domain/entities/property";
import { PropertyRepository } from "../../domain/repositories/property_repository";
export class FakePropertyRepository implements PropertyRepository {
    private properties: { [id: string]: Property } = {
        '1': new Property('1', 'Property Name', 'Property Description', 4, 400),
        '2': new Property('2', 'Property Name 2', 'Property Description 2', 3, 300)
    };

    async create(property: Property): Promise<void> {
        this.properties[property.getId()] = property;
    }

    async findById(id: string): Promise<Property | null> {
        return this.properties[id] || null;
    }
}