CREATE TABLE restaurants (
    restaurant_id INT PRIMARY KEY,
    name VARCHAR(100),
    logo VARCHAR(255)
);

CREATE TABLE menu_items (
    item_id INT PRIMARY KEY,
    restaurant_id INT,
    name VARCHAR(100),
    price DECIMAL(10,2)
);
