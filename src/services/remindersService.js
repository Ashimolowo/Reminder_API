export const reminderService = {
  async getAllReminders() {
    //fetch all reminders
    return []
  },

  async getRemindersById() {

    // fetch reminder by id
    return {};
  },

  async createReminder(newReminder) {
   //create reminder;
   return {}
  },

  async updateReminder(reminderId, newValues) {
//update reminder
return {}
 },

  async deleteReminder(reminderId) {
    //delete reminder
    return { message: 'Reminder deleted successfully'}
  },

  async deleteAllReminder() {
    //delete all reminders;
   return { message: 'All Reminders deleted successfully'}
 
  },
};