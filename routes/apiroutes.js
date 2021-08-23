const router = require("express").Router()
const fs = require("fs")
let db = require("../db/db.json")

router.get("/api/notes", function (req,res) {
    res.json(db)
})

router.post("/api/notes", function (req,res) {
    db.push(req.body)
    fs.writeFileSync("./db/db.json", JSON.stringify(db,null,2))
    res.json(db)
})

module.exports = router