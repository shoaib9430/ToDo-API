const express = require('express');
const router = express.Router();
router.use('/user', require("./user"));
router.use("/todo", require("./todo"));

module.exports = router;