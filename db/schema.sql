DROP DATABASE IF EXISTS boozy_buddy;
CREATE DATABASE boozy_buddy;

USE boozy_buddy;

CREATE TABLE drinks (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(20) NOT NULL,
    location VARCHAR(50),
    price DECIMAL(6,2),
    description TEXT,
    rating TINYINT DEFAULT 3,
    love BOOLEAN DEFAULT false,
    hate BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

INSERT INTO drinks (name, type, location, price, description, rating)
VALUES ("Josh Cabernet", "wine", null, 8.75, "Tasty", 4);

SELECT * FROM drinks;