import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { getHotelById, getAll, postNew } from '../controllers/hotel.controller';

const router = express.Router();
router.use(bodyParser.json());

router.get("/", (req: Request, res: Response) => {
    res.send("Welcome");
});

router.get("/hotel",    getAll);        //1. GET all items
router.get('/hotel/:id',getHotelById);  //2. GET one item
router.post("/new",     postNew);       //3. POST a new item


// // PUT update an item by ID
// router.put("/:id", (req: Request, res: Response) => {
//     const id = parseInt(req.params.id, 10);
//     const updatedItem = req.body;
//     const index = database.findIndex(item => item.id === id);

//     if (index !== -1) {
//         database[index] = { ...database[index], ...updatedItem };
//         res.json(database[index]);
//     } else {
//         res.status(404).json({ error: "Item not found" });
//     }
// });

// // DELETE an item by ID
// router.delete("/:id", (req: Request, res: Response) => {
//     const id = parseInt(req.params.id, 10);
//     const index = database.findIndex(item => item.id === id);

//     if (index !== -1) {
//         const deletedItem = database.splice(index, 1);
//         res.json(deletedItem);
//     } else {
//         res.status(404).json({ error: "Item not found" });
//     }
// });

export default router;