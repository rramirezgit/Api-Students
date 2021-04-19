"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.addStudent = exports.getStudent = exports.getStudents = void 0;
const model_student_1 = __importDefault(require("./model.student"));
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield model_student_1.default.find();
        return res.json(students);
    }
    catch (error) {
        return res.json(error);
    }
});
exports.getStudents = getStudents;
const getStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield model_student_1.default.findById(req.params.id);
    if (!student) {
        return res.status(204).json();
    }
    return res.json(student);
});
exports.getStudent = getStudent;
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const studentFound = yield model_student_1.default.findOne({ dni: req.body.dni });
    //console.log(studentFound)
    if (studentFound) {
        return res.status(301).json({ masagge: "El DNI ya esta registrado" });
    }
    const student = new model_student_1.default(req.body);
    const savedStudent = yield student.save();
    return res.json(savedStudent);
});
exports.addStudent = addStudent;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield model_student_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true }); //new: true "devuelve el dato actualizado, si es false, el dato anterior"
    if (!student) {
        return res.status(204).json();
    }
    return res.json(student);
});
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield model_student_1.default.findByIdAndDelete(req.params.id);
    if (!student) {
        return res.status(204).json();
    }
    return res.json(student);
});
exports.deleteStudent = deleteStudent;
