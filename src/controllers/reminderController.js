export const ReminderController = {
    async getAllReminders(req, res) {
         res.send("Get all reminders");
    }, 

    async getRemindersById(req, res) {
          res.send("Get single reminder by id");
    },

    async createReminder(req, res) {
  res.send("Create a new reminder");
},

async updateReminder(req, res) {
     res.send("Update some fields for existing reminder");

},

async deleteReminder(req, res) {
     res.send("Delete a reminder");
},

async deleteAllReminder(req, res) {
    res.send("Delete all reminder");
}
}