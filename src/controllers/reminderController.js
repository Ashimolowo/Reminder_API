import { ReminderService } from "../services/remindersService.js";

export const ReminderController = {
  async getAllReminders(req, res) {
    try {
      const reminders = ReminderService.getAllReminders();
      res.status(200).json(reminders);
    } catch (error) {
      res.status(500).send({ message: "Internal Server Eror" });
    }
  },

  async getRemindersById(req, res) {
    try {
      const reminderId = parseInt(req.params.id);
      const reminder = ReminderService.getRemindersById(reminderId);
      res.status(200).json(reminder);
    } catch (error) {
      res.status(500).send({ message: "Internal Server Eror" });
    }
  },

  async createReminder(req, res) {
    try {
        const reminder = ReminderService.createReminder(req.body);
        
        res.status(200).json(reminder);
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error'})
    }
  },

  async updateReminder(req, res) {
    try {
        const reminderId = parseInt(req.params.id);
        const reminder = ReminderService.updateReminder(reminderId, req.body)
        res.status(200).json(reminder)
    } catch (error) {
         res.status(500).send({ message: "Internal Server Eror" });
   
    }},

  async deleteReminder(req, res) {
    try {
        const reminderId = parseInt(req.params.id);
        const reminder = ReminderService.deleteReminder(reminderId);
        res.status(200).json(reminder)
    } catch (error) {
         res.status(500).send({ message: "Internal Server Eror" });
   
    }

    res.send('Delete old reminder')
  },

  async deleteAllReminder(req, res) {
    try {
        const reminders = ReminderService.deleteAllReminder();
        res.status(200).json(reminders);
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
  },
};
