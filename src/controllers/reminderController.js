export const ReminderController = {
    async getAllReminders(req, res) {
         res.send("Get all reminders");
    }, 

    async getRemindersById(req, res) {
        const reminderId = parseInt(req.params.id)
          res.send(`Get single reminder by ${reminderId}`);
    },

    async createReminder(req, res) {
        const reminder = req.body.reminder
        console.log(req.body)
  res.send(reminder);
},

async updateReminder(req, res) {
    const reminderId = parseInt(req.params.id);
     res.send(`Update some fields for existing ${reminderId}`);

},

async deleteReminder(req, res) {
     const reminderId = parseInt(req.params.id);
     res.send(`Delete a reminder ${reminderId}`);
},

async deleteAllReminder(req, res) {
    res.send("Delete all reminder");
}
}