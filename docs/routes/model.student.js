"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        trim: true,
        require: true
    },
    lastName: {
        type: String,
        trim: true,
        require: true
    },
    dni: {
        type: Number,
        trim: true,
        require: true,
        unique: true
    },
    avatarUrl: {
        type: String,
        trim: true,
    },
}, {
    versionKey: false,
    timestamps: true // fecha de creacion y actualizacion
});
exports.default = mongoose_1.model('estudiantes', studentSchema); // nombre del modelo y schema
