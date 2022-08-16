-- Active: 1660153665492@@127.0.0.1@3306@northwind
SELECT supplier_id FROM northwind.purchase_orders
WHERE supplier_id IN (1, 2, 3);