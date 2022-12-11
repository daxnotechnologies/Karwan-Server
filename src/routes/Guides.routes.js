const express = require("express");

const {
  getSupplications,
  getSingleSupplication,
  addSupplication,
  updateSupplication,
  deleteSupplication,
} = require("../controllers/Guides.controllers");

const router = express.Router();

router.get("/get-guides", getSupplications);
router.get("/get-guide/:id", getSingleSupplication);
router.post("/add-guide", addSupplication);
router.patch("/update-guide/:id", updateSupplication);
router.delete("/delete-guide/:id", deleteSupplication);

module.exports = router;
