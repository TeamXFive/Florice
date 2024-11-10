-- Oracle DB - Generate fake inserts for florice_user
-- clean the table first
START TRANSACTION;
delete from florice_user;
COMMIT;

START TRANSACTION;
-- Insert fake data using CTE
INSERT INTO florice_user (username, email, password, created_at, updated_at)
  SELECT 'sani' AS username, 'henriquesani02@gmail.com' AS email, '$2a$12$t/va9Qtgmo.KYm5Zp1IVpOXxWAM4dtNEL87bdVJxcBF8mwMJRqWkC' as password,
  CURRENT_TIMESTAMP AS created_at, CURRENT_TIMESTAMP AS updated_at FROM dual UNION ALL
  SELECT 'othon' AS username, 'othon200@gmail.com' AS email, '$2a$12$t/va9Qtgmo.KYm5Zp1IVpOXxWAM4dtNEL87bdVJxcBF8mwMJRqWkC' as password,
  CURRENT_TIMESTAMP AS created_at, CURRENT_TIMESTAMP AS updated_at FROM dual UNION ALL
  SELECT 'ivan' AS username, 'ivan.biagioni@icloud.com' AS email, '$2a$12$t/va9Qtgmo.KYm5Zp1IVpOXxWAM4dtNEL87bdVJxcBF8mwMJRqWkC' as password,
  CURRENT_TIMESTAMP AS created_at, CURRENT_TIMESTAMP AS updated_at FROM dual UNION ALL
  SELECT 'carol' AS username, 'carolinenunesjk@gmail.com' AS email, '$2a$12$t/va9Qtgmo.KYm5Zp1IVpOXxWAM4dtNEL87bdVJxcBF8mwMJRqWkC' as password,
  CURRENT_TIMESTAMP AS created_at, CURRENT_TIMESTAMP AS updated_at FROM dual UNION ALL
  SELECT 'lorenzo' AS username, 'lorenzozimbresfilmmaker@gmail.com' AS email, '$2a$12$t/va9Qtgmo.KYm5Zp1IVpOXxWAM4dtNEL87bdVJxcBF8mwMJRqWkC' as password,
  CURRENT_TIMESTAMP AS created_at, CURRENT_TIMESTAMP AS updated_at FROM dual UNION ALL
  SELECT 'tester' AS username, 'tester@florice.com.br' AS email, '$2a$12$j.QwsdeFDAfRcs10L.mEi.HUfwI3VIBIPthUos7EBpcoS8.7vOELu' as password,
  CURRENT_TIMESTAMP AS created_at, CURRENT_TIMESTAMP AS updated_at FROM dual;  
COMMIT;

SELECT * FROM florice_user;
