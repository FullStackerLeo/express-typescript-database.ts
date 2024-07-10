import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { database } from "../data/db";

const router = express.Router();
router.use(bodyParser.json());

// GET all items
router.get("/", (req: Request, res: Response) => {
    res.json(database);
});

// POST a new item
router.post("/new", (req: Request, res: Response) => {
    const newItem = req.body; 
    database.push(newItem);
    res.status(201).json(newItem);
});
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


// PUT update an item by ID
router.put("/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const updatedItem = req.body;
    const index = database.findIndex(item => item.id === id);

    if (index !== -1) {
        database[index] = { ...database[index], ...updatedItem };
        res.json(database[index]);
    } else {
        res.status(404).json({ error: "Item not found" });
    }
});

// DELETE an item by ID
router.delete("/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const index = database.findIndex(item => item.id === id);

    if (index !== -1) {
        const deletedItem = database.splice(index, 1);
        res.json(deletedItem);
    } else {
        res.status(404).json({ error: "Item not found" });
    }
});

export default router;