SELECT 
    e.nome as Estados,
    c.nome as Cidades,
    regiao as Região
FROM estados e, cidades c 
where e.id = c.estados_id;

SELECT 
    e.nome as Estados,
    c.nome as Cidades,
    regiao as Região
FROM estados e
INNER join cidades c 
    on e.id = c.estados_id