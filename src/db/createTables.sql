CREATE TABLE jccs(
	ID int NOT NULL AUTO_INCREMENT,
	nombre varchar(50) NOT NULL,
	apellido varchar(50) NOT NULL,
	legajo int NOT NULL,
	fecha_ingreso DATE NOT NULL,
	dni int NOT NULL,
	mail varchar(50) NOT NULL,
	deleted int NOT null,
    PRIMARY KEY (ID)
);
CREATE TABLE sups(
	ID int NOT NULL AUTO_INCREMENT,
	nombre varchar(50) NOT NULL,
	apellido varchar(50) NOT NULL,
	legajo int NOT NULL,
	fecha_ingreso DATE NOT NULL,
	dni int NOT NULL,
	mail varchar(50) NOT NULL,
	jcc_id int NOT NULL,
	deleted int NOT null,
    PRIMARY KEY (ID),
	FOREIGN KEY (jcc_id) REFERENCES jccs(ID)
);
CREATE TABLE agentes(
	ID int NOT NULL AUTO_INCREMENT,
    usuario_teco varchar(10) NOT NULL,
	nombre varchar(50) NOT NULL,
	apellido varchar(50) NOT NULL,
	legajo int NOT NULL,
	fecha_ingreso DATE NOT NULL,
	score varchar(50) NOT NULL,
	dni int NOT NULL,
	mail varchar(50) NOT NULL,
	sup_id int NOT NULL,
	deleted int NOT null,
    PRIMARY KEY (ID),
	FOREIGN KEY (sup_id) REFERENCES sups(ID) 
);
CREATE TABLE clusters(
	ID int NOT NULL AUTO_INCREMENT,
	cluster VARCHAR(50) NOT NULL,
	deleted int NOT null,
	PRIMARY KEY (ID)
);
CREATE TABLE cuartiles(
	ID int NOT NULL AUTO_INCREMENT,
	cuartiles VARCHAR(50) NOT NULL,
	deleted int NOT null,
	PRIMARY KEY (ID)
);
CREATE TABLE perfilamientos(
	ID int NOT NULL AUTO_INCREMENT,
	agente_id int NOT NULL,
	mes int NOT NULL,
	cluster_id int NOT NULL,
	cuartil_id int NOT NULL,
	deleted int NOT null,
    PRIMARY KEY (ID),
	FOREIGN KEY (cluster_id) REFERENCES clusters(ID), 
	FOREIGN KEY (cuartil_id) REFERENCES cuartiles(ID) 
);
CREATE TABLE devoluciones(
	ID int NOT NULL AUTO_INCREMENT,
	agente_id int NOT NULL,
	fecha DATE NOT NULL,
	llamada_id TEXT NOT NULL,
	plan_trabajo TEXT NOT NULL,
	a_mejorar TEXT NOT NULL,
	nps float NOT NULL,
	fcr float NOT NULL,
	rente float NOT NULL,
	tmo int NOT NULL,
	deleted int NOT null,
    PRIMARY KEY (ID),
	FOREIGN KEY (agente_id) REFERENCES agentes(ID) 
);
CREATE TABLE ausentismos(
	ID int NOT NULL AUTO_INCREMENT,
	agente_id int NOT NULL,
	fecha DATE NOT NULL,
	motivo varchar(30) NOT NULL,
	deleted int NOT null,
	PRIMARY KEY (ID),
	FOREIGN KEY (agente_id) REFERENCES agentes(ID) 
);
CREATE TABLE deslogueos(
	ID int NOT NULL AUTO_INCREMENT,
	agente_id int NOT NULL,
	fecha DATE NOT NULL,
	inicio TIME NOT NULL,
	fin TIME NOT NULL,
	motivo varchar(30) NOT NULL,
	deleted int NOT null,
	PRIMARY KEY (ID),
	FOREIGN KEY (agente_id) REFERENCES agentes(ID) 
);