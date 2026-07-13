const express = require("express");

const router = express.Router();

// Temporary database
let menuItems = [
    {
        id: 1,
        restaurant_id: 101,
        category: "Beverage",
        name: "Coffee Latte",
        description: "Hot coffee with milk",
        price: 4.50,
        available: true
    },
    {
        id: 2,
        restaurant_id: 101,
        category: "Food",
        name: "Chicken Burger",
        description: "Burger with chicken patty",
        price: 8.00,
        available: true
    }
    {
        id: 3,
        restaurant_id: 101,
        category: "Food",
        name: "Beef Burger",
        description: "Burger with beef",
        price: 10.00,
        available: true
    }
    {
        id: 4,
        restaurant_id: 101,
        category: "Carbonated Beverages",
        name: "Coca Cola",
        description: "Can of Cocacola",
        price: 1.00,
        available: true
    }
];

// Get menu by restaurant

router.get("/:restaurant_id", (req, res) => {
    const restaurantId = req.params.restaurant_id;
    const menu = menuItems.filter(
        item => item.restaurant_id == restaurantId
    );
    res.json(menu);
});

// Add new menu item

router.post("/", (req, res) => {
    const newItem = {
        id: menuItems.length + 1,
        restaurant_id: req.body.restaurant_id,
        category: req.body.category,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        available: true
    };

    menuItems.push(newItem);
    res.json({
        message: "Menu item added",
        item: newItem
    });
});

// Update menu item

router.put("/:id", (req,res)=>{
    const id = req.params.id;
    const item = menuItems.find(
        item => item.id == id
    );
    if(!item){
        return res.status(404).json({
            message:"Item not found"
        });
    }
    item.name = req.body.name || item.name;
    item.price = req.body.price || item.price;
    item.available =
        req.body.available ?? item.available;
    res.json({
        message:"Menu updated",
        item:item
    });
});

// Delete menu item

router.delete("/:id",(req,res)=>{
    menuItems = menuItems.filter(
        item => item.id != req.params.id
    );
    res.json({
        message:"Menu item deleted"
    });
});

module.exports = router;
