import { Request, Response } from 'express';
import { database, Hotel } from "../data/db";

export const getHotelById = (req: Request, res: Response): void => {
    const hotelId = parseInt(req.params.id, 10);
    const hotel = database.find((h: Hotel) => h.id === hotelId);

    if (hotel) {
        res.json(hotel);
    } else {
        res.status(404).json({ message: 'Hotel not found' });
    }
};

export const getAll = (req: Request, res: Response): void => {
        res.json(database);
};

export const postNew = (req: Request, res: Response): void => {
    const newItem = req.body;
    database.push(newItem);
    res.status(201).json(newItem);
};

// {
//     "id": 4,
//     "name": "The Cozy Inn",
//     "address": {
//       "street": "123 Main St",
//       "city": "Anytown",
//       "state": "CA",
//       "zip": "12345"
//     },
//     "price": 100
//   }
