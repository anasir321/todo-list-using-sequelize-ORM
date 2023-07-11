"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todosRoutes_1 = __importDefault(require("./routes/todosRoutes"));
const body_parser_1 = require("body-parser");
const config_1 = __importDefault(require("./db/config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", todosRoutes_1.default);
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default
    .sync()
    .then(() => {
    console.log("Database successfully connected");
})
    .catch((err) => {
    console.log("Error", err);
});
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
