import { Router } from "express";
import { deleteUser, getAllUsers, insertUser } from "../respositories/User";

const router = Router();

router.get("/", async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json({ users });
});

router.post("/", async (req, res) => {
  const { username, password, name } = req.body;
  const id = await insertUser(username, password, name);
  res.status(200).json({ message: "User inserted successfully", id: id });
});

router.delete("/", async (req, res) => {
  const id = req.body.id;
  const deletedId = await deleteUser(id);
  if (deletedId)
    res.status(200).json({ message: "User deleted successfully", id: id });
  else res.status(400).send("Something went wrong");
});

export default router;
