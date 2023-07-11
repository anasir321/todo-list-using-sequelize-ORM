import express from "express";
import todoRoutes from "./routes/todosRoutes";
import { urlencoded } from "body-parser";
import connection from './db/config';

const app = express();

app.use(express.json());
app.use("/api", todoRoutes);
app.use(urlencoded({ extended: true }));

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
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
