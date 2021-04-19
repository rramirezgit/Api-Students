"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv lee el archivo .env y trae las variables configuradas (configuracion para desarrollo) 
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// si la variable no esta configurada setea un valor 
exports.default = {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'Estudiantes',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost'
};
