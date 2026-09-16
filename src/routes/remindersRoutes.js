import { Router } from "express";
import { ReminderController } from "../controllers/reminderController.js";
import { validateData } from "../middlewares/validationMiddleware.js";
import {
  createReminderSchema,
  updateReminderSchema,
} from "../schemas/reminderSchema.js";

const router = Router();


router.get("/", ReminderController.getAllReminders);

router.delete("/", ReminderController.deleteAllReminders);

router.get("/:id", ReminderController.getRemindersById);

router.post(
  "/",
  validateData(createReminderSchema),
  ReminderController.createReminder,
);


router.put(
  "/:id",
  validateData(updateReminderSchema),
  ReminderController.updateReminder,
);


router.delete("/:id", ReminderController.deleteReminder);

export default router;
