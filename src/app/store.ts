export class Store {
    id!: number;
    name!: string;
    address!: string;
    location!: {
        type: string;
        coordinates: [number, number];
    };

}