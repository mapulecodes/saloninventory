import { Router } from "express";
import user from "../model/user.js";

const usersRouter =   Router();



usersRouter.get("/", (req, res) => {
  user.fetchUsers(req, res);
});


usersRouter.get("/:id", (req, res) => {
  user.fetchUser(req, res); 
});


usersRouter.post("/addUser", (req, res) => {
  user.addUser(req, res);
});

usersRouter.patch("/update/:id", (req, res) => {
  user.updateUser(req, res);
});

usersRouter.delete("/delete/:id", (req, res) => {
  user.deleteUser(req, res);
});

export { usersRouter };
