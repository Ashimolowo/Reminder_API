import { ReminderModel } from "../models/reminderModel.js";

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
      throw new Error("Reminder not found");
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
    const setClauses = fields.map((key, index) => {
      const dbColumn = toSnakeCase(key);
      return `${dbColumn} = $${index + 1}`;
    });

    const values = Object.values(newValues);
    values.push(reminderId);

    const query = `UPDATE reminders SET ${setClauses.join(", ")} WHERE id = $${values.length} RETURNING *`;
    console.log("Update query:", query);
    console.log("Values:", values);

    const updateReminder = await ReminderModel.update(query, values);
    if (!updateReminder) {
      throw new Error("Reminder not found");
    }
    return updateReminder;
  },

  async deleteReminder(reminderId) {
    const authenticatedUserId = 1;

    const reminder = await ReminderModel.findById(reminderId);

    if (!reminder) {
      throw new Error("Reminder not found");
    }

    if (reminder.user_id !== authenticatedUserId) {
      throw new Error("You are not authorized");
    }

    const rowCount = await ReminderModel.delete(reminderId);

    if (rowCount === 0) {
      throw new Error("Failed to delete a reminder");
    }
    return { message: "Reminder deleted successfully" };
  },

  async deleteAllReminders() {
    const rowCount = await ReminderModel.deleteAll();
    return { message: `${rowCount} reminders deleted successfully` };
  },
};
