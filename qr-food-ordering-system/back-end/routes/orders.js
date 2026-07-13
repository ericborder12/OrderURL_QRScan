// Order Management API

const express = require("express");
const router = express.Router();
let orders = [];

// Create order

router.post("/", (req,res)=>{
    const order = {
        id: orders.length + 1,
        restaurant_id:
            req.body.restaurant_id,
        table_number:
            req.body.table_number,
        customer_name:
            req.body.customer_name,
        items:
            req.body.items,
        total:
            req.body.total,
        status:"Pending",
        created_at:
            new Date()
    };

    orders.push(order);
    res.json({
        message:"Order created",
        order:order
    });
});

// Get restaurant orders

router.get("/:restaurant_id",(req,res)=>{
    const result =
        orders.filter(
            order =>
            order.restaurant_id ==
            req.params.restaurant_id
        );
    res.json(result);
});

// Update order status

router.put("/:id",(req,res)=>{
    const order =
        orders.find(
            order =>
            order.id ==
            req.params.id
        );
    if(!order){
        return res.status(404).json({
            message:"Order not found"
        });
    }
    order.status =
        req.body.status;
    res.json({
        message:"Order status updated",
        order:order
    });
});

module.exports = router;
