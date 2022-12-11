const express = require("express");

const {
  getVisa,
  getSingleVisa,
  getSingleVisaRef,
  addVisa,
  updateVisa,
  deleteVisa,
} = require("../controllers/visatype.controllers");

const router = express.Router();
router.get("/get-visatype", getVisa);
router.get("/get-visatype/:id", getSingleVisa);
router.post("/get-visatype-ref", getSingleVisaRef);

router.post("/add-visatype", addVisa);
router.patch("/update-visatype/:id", updateVisa);
router.delete("/delete-visatype/:id", deleteVisa);

module.exports = router;
