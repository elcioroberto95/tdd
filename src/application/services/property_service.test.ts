import { FakePropertyRepository } from '../../infrastracture/repositories/FakePropertyRepository';
import { PropertyService } from '../services/property_service';
import { Property } from '../../domain/entities/property';



describe('PropertyService', () => {


    let propertyService: PropertyService;
    let propertyRepository: FakePropertyRepository;

    beforeEach(() => {
        propertyRepository = new FakePropertyRepository();
        propertyService = new PropertyService(propertyRepository);
    })
    it('should return null when an invalid id is provided', async () => {
        const property = await propertyService.getPropertyById('invalid-id');
        expect(property).toBeNull();
    })
    it('should return a valid property when a valid id is provided', async () => {
        const property = await propertyService.getPropertyById('1');
        expect(property).not.toBeNull();
        expect(property?.getId()).toBe('1');
    })


    it('should be able to create a new property', async () => {
        const newProperty = new Property('3', 'Property Name 3', 'Property Description 3', 5, 500);
        await propertyRepository.create(newProperty);
        const property = await propertyService.getPropertyById('3');
        expect(property).not.toBeNull();
        expect(property?.getId()).toBe('3');
    })
})