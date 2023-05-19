-- Lists all the cities of California registered in the database
 -- Query to list all the cities from California and to get the id of California
SELECT id, name
FROM cities
WHERE state_id = (
      SELECT id
      FROM states
      WHERE name = "California");
