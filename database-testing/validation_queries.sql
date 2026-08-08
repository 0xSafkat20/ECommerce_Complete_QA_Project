-- 01 All active users
SELECT * FROM users WHERE status='ACTIVE';
-- 02 Find user by email
SELECT * FROM users WHERE email='qa.user@example.com';
-- 03 Duplicate emails
SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*)>1;
-- 04 Product list by price
SELECT id,sku,title,price,stock FROM products ORDER BY price ASC;
-- 05 Products with negative stock (should return none)
SELECT * FROM products WHERE stock<0;
-- 06 Out of stock products
SELECT * FROM products WHERE stock=0;
-- 07 Product count by category
SELECT category,COUNT(*) AS product_count FROM products GROUP BY category ORDER BY product_count DESC;
-- 08 Average product price
SELECT ROUND(AVG(price),2) AS avg_price FROM products;
-- 09 Cart rows for user 1
SELECT c.* FROM carts c WHERE c.user_id=1;
-- 10 Cart items with product details
SELECT ci.cart_id,p.sku,p.title,ci.quantity,ci.unit_price,(ci.quantity*ci.unit_price) AS line_total FROM cart_items ci JOIN products p ON p.id=ci.product_id WHERE ci.cart_id=1;
-- 11 Cart subtotal
SELECT cart_id,SUM(quantity*unit_price) AS subtotal FROM cart_items GROUP BY cart_id;
-- 12 Cart total quantity
SELECT cart_id,SUM(quantity) AS total_quantity FROM cart_items GROUP BY cart_id;
-- 13 Duplicate product in same cart (should return none due constraint)
SELECT cart_id,product_id,COUNT(*) FROM cart_items GROUP BY cart_id,product_id HAVING COUNT(*)>1;
-- 14 Orphan cart items (should return none)
SELECT ci.* FROM cart_items ci LEFT JOIN carts c ON c.id=ci.cart_id LEFT JOIN products p ON p.id=ci.product_id WHERE c.id IS NULL OR p.id IS NULL;
-- 15 Orders for user 1
SELECT * FROM orders WHERE user_id=1 ORDER BY created_at DESC;
-- 16 Order items with product details
SELECT oi.order_id,p.sku,p.title,oi.quantity,oi.unit_price,(oi.quantity*oi.unit_price) AS line_total FROM order_items oi JOIN products p ON p.id=oi.product_id WHERE oi.order_id=1;
-- 17 Order subtotal
SELECT order_id,SUM(quantity*unit_price) AS item_subtotal FROM order_items GROUP BY order_id;
-- 18 Order final total including tax
SELECT o.id,SUM(oi.quantity*oi.unit_price) AS subtotal,o.tax,SUM(oi.quantity*oi.unit_price)+o.tax AS final_total FROM orders o JOIN order_items oi ON oi.order_id=o.id GROUP BY o.id,o.tax;
-- 19 Orphan order items (should return none)
SELECT oi.* FROM order_items oi LEFT JOIN orders o ON o.id=oi.order_id LEFT JOIN products p ON p.id=oi.product_id WHERE o.id IS NULL OR p.id IS NULL;
-- 20 High-value products
SELECT * FROM products WHERE price>=20 ORDER BY price DESC;
-- 21 Low stock threshold
SELECT * FROM products WHERE stock BETWEEN 1 AND 10 ORDER BY stock ASC;
-- 22 User cart item count
SELECT c.user_id,COUNT(ci.id) AS distinct_cart_lines,SUM(ci.quantity) AS total_units FROM carts c LEFT JOIN cart_items ci ON ci.cart_id=c.id GROUP BY c.user_id;
-- 23 Completed order count by user
SELECT user_id,COUNT(*) FROM orders WHERE status='COMPLETED' GROUP BY user_id;
-- 24 Revenue represented by completed sample orders
SELECT SUM(oi.quantity*oi.unit_price + 0) AS item_revenue FROM orders o JOIN order_items oi ON oi.order_id=o.id WHERE o.status='COMPLETED';
-- 25 Email domain distribution
SELECT split_part(email,'@',2) AS domain,COUNT(*) FROM users GROUP BY domain;
-- 26 Products not referenced by any cart
SELECT p.* FROM products p LEFT JOIN cart_items ci ON ci.product_id=p.id WHERE ci.id IS NULL;
-- 27 Products not referenced by any order
SELECT p.* FROM products p LEFT JOIN order_items oi ON oi.product_id=p.id WHERE oi.id IS NULL;
-- 28 User combined cart/order activity
SELECT u.id,u.email,COUNT(DISTINCT c.id) AS carts,COUNT(DISTINCT o.id) AS orders FROM users u LEFT JOIN carts c ON c.user_id=u.id LEFT JOIN orders o ON o.user_id=u.id GROUP BY u.id,u.email;
