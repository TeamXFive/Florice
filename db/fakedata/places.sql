-- Oracle DB - Generate fake inserts for places
-- clean the table first
START TRANSACTION;
delete from place;
COMMIT;

START TRANSACTION;
-- Insert fake data using CTE
INSERT INTO place (display_name, place_type, latitude, longitude, country, state, city, address, postal_code, created_at, updated_at)
  SELECT 'Germplasm Bank 1' AS display_name, 'germplasm_bank' AS place_type, 40.7128 AS latitude, -74.0060 AS longitude,
         'USA' AS country, 'NY' AS state, 'New York' AS city, '123 Main St' AS address, '10001' AS postal_code,
         CURRENT_TIMESTAMP AS created_at, CURRENT_TIMESTAMP AS updated_at FROM dual UNION ALL
  SELECT 'University 1', 'university', 34.0522, -118.2437, 'USA', 'CA', 'Los Angeles', '456 Elm St', '90001',
         CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM dual UNION ALL
  SELECT 'Lab 1', 'lab', 41.8781, -87.6298, 'USA', 'IL', 'Chicago', '789 Oak St', '60007', CURRENT_TIMESTAMP,
         CURRENT_TIMESTAMP FROM dual UNION ALL
  SELECT 'Farm 1', 'farm', 29.7604, -95.3698, 'USA', 'TX', 'Houston', '101 Pine St', '77001', CURRENT_TIMESTAMP,
         CURRENT_TIMESTAMP FROM dual UNION ALL
  SELECT 'Company 1', 'company', 33.4484, -112.0740, 'USA', 'AZ', 'Phoenix', '202 Maple St', '85001',
         CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM dual UNION ALL
  SELECT 'Other 1', 'other', 37.7749, -122.4194, 'USA', 'CA', 'San Francisco', '303 Cedar St', '94101',
         CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM dual;
COMMIT;

SELECT * FROM place;
