import { ReminderService } from "../services/remindersService.js";

export const ReminderController = {
  async getAllReminders(req, res, next) {
    try {
      const reminders = await ReminderService.getAllReminders();
      res.status(200).json(reminders);
    } catch (error) {
      next(error)
    }
  },

  async getRemindersById(req, res, next) {
    try {
      const reminderId = parseInt(req.params.id);
      const reminder = await ReminderService.getRemindersById(reminderId);
      res.status(200).json(reminder);
    } catch (error) {
      next(error)
    }
  },

  async createReminder(req, res, next) {
    try {
      const reminder = await ReminderService.createReminder(req.body);

      res.status(200).json(reminder);
    } catch (error) {
      next(error)
    }
  },

  async updateReminder(req, res, next) {
    try {
      const reminderId = parseInt(req.params.id);
      const reminder = await ReminderService.updateReminder(
        reminderId,
        req.body,
      );
      res.status(200).json(reminder);
    } catch (error) {
      console.log("Update👁️👀", error);
      next(error)
    }
  },

  async deleteReminder(req, res, next) {
    try {
      const reminderId = parseInt(req.params.id);
      const reminder = await ReminderService.deleteReminder(reminderId);
      res.status(200).json(reminder);
    } catch (error) {
      next(error)
    }

    res.send("Delete old reminder");
  },

  async deleteAllReminders(req, res, next) {
    try {
      const result = await ReminderService.deleteAllReminders();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      next(error)
    }
  },
};
