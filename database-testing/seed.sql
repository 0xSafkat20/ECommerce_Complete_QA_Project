INSERT INTO users(email,full_name,status) VALUES
('qa.user@example.com','QA User','ACTIVE'),('buyer.two@example.com','Buyer Two','ACTIVE');
INSERT INTO products(sku,title,category,price,stock) VALUES
('SKU-001','QA Backpack','bags',29.99,25),('SKU-002','QA Bike Light','accessories',9.99,40),('SKU-003','QA T-Shirt','apparel',15.49,10);
INSERT INTO carts(user_id,status) VALUES (1,'OPEN');
INSERT INTO cart_items(cart_id,product_id,quantity,unit_price) VALUES (1,1,2,29.99),(1,2,1,9.99);
INSERT INTO orders(user_id,status,tax) VALUES (1,'COMPLETED',5.60);
INSERT INTO order_items(order_id,product_id,quantity,unit_price) VALUES (1,1,1,29.99),(1,3,2,15.49);
