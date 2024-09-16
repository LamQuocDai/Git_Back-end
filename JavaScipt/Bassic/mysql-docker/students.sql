CREATE DATABASE IF NOT EXISTS student;
USE student;

CREATE TABLE IF NOT EXISTS student (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT NOT NULL,
  idClass INT NOT NULL
);

CREATE TABLE IF NOT EXISTS class (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  teacher VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL
);

INSERT INTO class (name, teacher, department) VALUES 
('A', 'Mr. A', 'Math'), 
('B', 'Mr. B', 'Science'), 
('C', 'Mr. C', 'English');

INSERT INTO student (name, age, idClass) VALUES 
('Alice', 20, 1), 
('Bob', 21, 2), 
('Charlie', 22, 3);

ALTER TABLE student 
ADD CONSTRAINT fk_student_class
FOREIGN KEY (idClass) REFERENCES class(id);