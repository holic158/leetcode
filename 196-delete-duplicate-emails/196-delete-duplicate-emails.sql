    DELETE FROM PERSON
    WHERE ID NOT IN (
    SELECT A.MINID
    FROM (
        SELECT MIN(ID) MINID, EMAIL
        FROM PERSON
        GROUP BY EMAIL) A)