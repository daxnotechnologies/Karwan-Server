const express = require("express");

const {
  getUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
  updateFamily,
  deleteFamily
} = require("../controllers/admin.controllers");

const router = express.Router();

router.get("/get-admin", getUsers);
router.get("/get-admin/:id", getSingleUser);
router.post("/add-admin", addUser);
router.patch("/update-admin/:id", updateUser);
router.delete("/delete-admin/:id", deleteUser);
router.patch("/update-admin/:id", updateFamily);
router.delete("/delete-admin/:id", deleteFamily);

module.exports = router;
