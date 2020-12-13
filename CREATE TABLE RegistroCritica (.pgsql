CREATE TABLE RegistroCritica (
    CRITICA  VARCHAR(500) NOT NULL,
    SEMANA   VARCHAR(30)  NOT NULL
);
SELECT * FROM RegistroCritica; 
SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.semana LIKE '7/12';
SELECT CRITICA FROM RegistroCritica AS rc WHERE rc.nomefilme LIKE 'jurassicworld';
ALTER TABLE RegistroCritica ADD NOMEFILME VARCHAR(30) NULL