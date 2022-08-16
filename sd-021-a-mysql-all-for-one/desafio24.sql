-- Active: 1660153665492@@127.0.0.1@3306@northwind
UPDATE northwind.order_details SET discount = 45
WHERE unit_price > 10.0000 AND id BETWEEN 30 AND 40;