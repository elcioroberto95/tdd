import { Property } from '../../domain/entities/property';
import { PropertyRepository } from '../../domain/repositories/property_repository';

export class PropertyService {
    public propertyRepository: PropertyRepository;
    constructor(propertyRepository: PropertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    async getPropertyById(id: string): Promise<Property | null> {
        const property = await this.propertyRepository.findById(id);
        return property;
    }
}