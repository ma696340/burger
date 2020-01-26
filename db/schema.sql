DROP database if exists burgers_db;
create database burgers_db;
use burgers_db;


create table burgers(
    id INT NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    Primary key(id)

)
