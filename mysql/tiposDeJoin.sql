SELECT * FROM prefeitos;
SELECT * FROM cidades;

SELECT * FROM cidades c INNER JOIN prefeitos p ON c.id = p.cidade_id;
SELECT * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id;
SELECT * FROM cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id;
-- SELECT * FROM cidades c FULL JOIN prefeitos p on c.id = p.cidade_id;

SELECT * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id
UNION
SELECT * FROM cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id