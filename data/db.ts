// db.ts
export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface Hotel {
    id: number;
    name: string;
    address: Address;
}


export let database:Hotel[] = [
    {
        id: 1,
        name: "Sheriton Dallas Hotel",
        address:
        {
            street: "1234 Main St",
            city: "Dallas",
            state: "TX",
            zip: "75201"
        },
    },
    {
        id: 2,
        name: "Miami Hilton",
        address:
        {
            street: "1234 Dubbo St",
            city: "Miami",
            state: "FL",
            zip: "75201"
        },
    },

]
