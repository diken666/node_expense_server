CREATE TABLE `edb`.`room` (
  `rid` VARCHAR(20) NOT NULL,
  `usesId` VARCHAR(100) NULL,
  `usersName` VARCHAR(200) NULL,
  PRIMARY KEY (`rid`));


CREATE TABLE `edb`.`user` (
  `uid` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  `class` VARCHAR(45) NULL,
  PRIMARY KEY (`uid`));


CREATE TABLE `edb`.`roomexpense` (
  `eid` INT NOT NULL AUTO_INCREMENT,
  `rid` VARCHAR(20) NOT NULL,
  `water` INT NOT NULL,
  `elec` INT NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`eid`));


CREATE TABLE `edb`.`userexpense` (
  `eid` INT NOT NULL AUTO_INCREMENT,
  `uid` INT NOT NULL,
  `water` FLOAT NOT NULL,
  `elec` FLOAT NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`eid`));


CREATE TABLE `edb`.`manager` (
  `id` VARCHAR(20) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `edb`.`record` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rid` VARCHAR(45) NOT NULL,
  `water` INT NOT NULL,
  `elec` INT NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

