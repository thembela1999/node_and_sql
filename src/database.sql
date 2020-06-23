CREATE TABLE IF NOT EXISTS
    visitors(
 
    ID SERIAL PRIMARY KEY,
    visitor_name VARCHAR(50),
    visitor’s_age INT,
    date_of_visit DATE,
    time_of_visit TIME,
    assistant_name VARCHAR(50),
    comments VARCHAR(200)
)