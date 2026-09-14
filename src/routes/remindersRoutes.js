import { Router } from "express";
import { ReminderController } from "../controllers/reminderController.js";

const router = Router();


router.get("/", ReminderController.getAllReminders);

router.get("/:id", ReminderController.getRemindersById);

router.post("/", ReminderController.createReminder);

router.patch("/:id", ReminderController.updateReminder);

router.delete("/:id", ReminderController.deleteReminder);

router.delete("/", ReminderController.deleteAllReminder);

export default router;