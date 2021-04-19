"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// logea las peticiones => "GET /students 304 2.232 ms - -""
const morgan_1 = __importDefault(require("morgan"));
//permite setear que servidores tienen permitido hacer peticiones;
const cors_1 = __importDefault(require("cors"));
const students_routes_1 = __importDefault(require("./routes/students.routes"));
const app = express_1.default();
app.use(morgan_1.default('dev'));
// cualquier servidor puede hacer peticiones 
app.use(cors_1.default());
// reconocer peticion con objetos json
app.use(express_1.default.json());
//reconocer datos que vienen de los formularios
app.use(express_1.default.urlencoded({ extended: false }));
app.use(students_routes_1.default);
exports.default = app;
