create table Products (
	id int,
	categoryId int,
	name varchar(50),
	description varchar(255),
	imageName varchar(50),
	rating double,
	about text
);

create table Category (
	id int,
	name varchar(50)
);

create table Users (
	userId int,
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
