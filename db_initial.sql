create table Products (
	id int primary key,
	categoryId int,
	name varchar(50),
	description varchar(255),
	imageName varchar(50),
	rating double,
	about text
);

create table Category (
	id int primary key,
	name varchar(50)
);

create table Users (
	userId int primary key,
	username varchar(50),
	password varchar(100),
	name varchar(100),
	createDate DateTime,
	lastSeen DateTime,
);

create table Permissions (
	userId int,
	permissionId smallint,
	permissionVal varchar(20)
);
