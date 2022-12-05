"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb://127.0.0.1:27017/typescript-express", () => console.log("db connected!"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.get("/", (req, res, next) => {
    res.send("hello from express server!");
});
app.listen(PORT, () => console.log("server is running on port :", PORT));
//tsc -w (typescript transpiler)
// npm i -D nodemon (install locally ) 
// sudo npm i -g nodemon (install globally)
//nodemon ./build/app.js (run server)
