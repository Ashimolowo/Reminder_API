import ERROR_MESSAGES from "../constants/errorMessages.js";
import { ReminderModel } from "../models/reminderModel.js";
import CustomError from "../utils/CustomError.js";

// Helper function to convert camelCase to snake_case
const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const ReminderService = {
  async getAllReminders() {
    return ReminderModel.getAll();
  },

  async getRemindersById(reminderId) {
    const reminder = await ReminderModel.findById(reminderId);
    if (!reminder) {
      throw new CustomError(ERROR_MESSAGES.REMINDER_NOT_FOUND, 404);
    }
    return reminder;
  },

  async createReminder(newReminder) {
    const { reminder, notes, userId } = newReminder;

    const sanitizedReminder = {
      reminder: reminder?.trim(),
      notes: notes?.trim(),
      userId,
    };

    const createReminder = await ReminderModel.create(sanitizedReminder);
    console.log("Created-reminder", createReminder);
    return createReminder;
  },

  async updateReminder(reminderId, newValues) {
    const fields = Object.keys(newValues);

    // Convert camelCase keys to snake_case for database columns
    const setClauses = fields.map((key, index) => `${key} = $${index + 1}`);

    const values = Object.values(newValues);
    values.push(reminderId);

    const query = `UPDATE reminders SET ${setClauses.join(", ")} WHERE id = $${values.length} RETURNING *`;
    console.log("Update query:", query);
    console.log("Values:", values);

    const updateReminder = await ReminderModel.update(query, values);
    if (!updateReminder) {
      throw new CustomError(ERROR_MESSAGES.REMINDER_NOT_FOUND, 404);
    }
    return updateReminder;
  },

  async deleteReminder(reminderId) {
    const authenticatedUserId = 1;

    const reminder = await ReminderModel.findById(reminderId);

    if (!reminder) {
      throw new CustomError(ERROR_MESSAGES.REMINDER_NOT_FOUND, 404);
    }

    if (reminder.user_id !== authenticatedUserId) {
      throw new CustomError(ERROR_MESSAGES.UNAUTHORIZED, 401);
    }

    const rowCount = await ReminderModel.delete(reminderId);

    if (rowCount === 0) {
      throw new CustomError(ERROR_MESSAGES.INTERNAL_SERVER_ERROR, 500);
    }
    return { message: "Reminder deleted successfully" };
  },

  async deleteAllReminders() {
    const rowCount = await ReminderModel.deleteAll();
    return { message: `${rowCount} reminders deleted successfully` };
  },
};
