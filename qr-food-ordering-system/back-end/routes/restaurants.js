const express = require("express");

const router = express.Router();

// Get all restaurants
router.get("/", (req,res)=>{
    res.json([
        {
            id:1,
            name:"Sample Coffee Shop"
        }
    ]);

});

// Create restaurant
router.post("/",(req,res)=>{

    const restaurant = req.body;

    res.json({
        message:"Restaurant created",
        data:restaurant
    });

});


module.exports = router;
