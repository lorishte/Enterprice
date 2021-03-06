/**
 * Created by Marian on 27.3.2017 г..
 */

const mongoose = require('mongoose');

let projectSchema = mongoose.Schema ({
    projectName: { type: String, required: true, unique: true},
    projectDescription: {type: String, required: true},
    projectCustomer: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Customer'},
    projectPrice: {type: Number, required: true},
    projectExpenses: {type: Number, default: 0},
    projectExpensesActual: {type: [{date: Date, description: String, amount: Number}]},
    projectWorkingHours: {type: Number, required: true},
    projectLaborCost: {type: Number, default: 0},
    projectProgress: {type: Number, default: 0},
    projectTeam: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Team'},
    projectDueDate: {type: Date, required: true},
    projectActive: {type: Boolean, default: true},
    projectTasks: [{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Task'}]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
