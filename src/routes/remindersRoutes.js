import { Router } from "express";
import { ReminderController } from "../controllers/reminderController.js";

const router = Router();


router.get("/", ReminderController.getAllReminders);

router.get("/:id", (req, res) => {
  res.send("Get single reminder by id");
});

router.post("/", (req, res) => {
  res.send("Create a new reminder");
});

router.patch("/:id", (req, res) => {
  res.send("Update some fields for existing reminder");
});

router.delete("/:id", (req, res) => {
  res.send("Delete a reminder");
});

router.delete("/", (req, res) => {
  res.send("Delete all reminder");
});

export default router;