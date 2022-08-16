-- Active: 1660153665492@@127.0.0.1@3306@northwind
SELECT * FROM northwind.purchase_orders
WHERE supplier_id IN (3) AND status_id IN(2);