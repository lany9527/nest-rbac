CREATE database nestjs;
use nestjs;

-- 部门表
CREATE TABLE `department`
(
    `id`        bigint      NOT NULL PRIMARY KEY,
    `parent_id` bigint DEFAULT NULL,
    `name`      varchar(50) NOT NULL,
    `type`      enum('company', 'department', 'position', 'team') NOT NULL,
    UNIQUE KEY `uk_parent_id_name` (`parent_id`, `name`),
    FOREIGN KEY (`parent_id`) REFERENCES `department` (`id`)
);

-- 用户表
CREATE TABLE `user`
(
    `id`       bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name`     varchar(50)  NOT NULL,
    `password` varchar(100) NOT NULL,
    `phone`    varchar(50),
    `email`    varchar(50),
    UNIQUE KEY `uk_name` (`name`)
);

-- 角色表
CREATE TABLE `role`
(
    `id`   bigint      NOT NULL PRIMARY KEY,
    `name` varchar(50) NOT NULL,
    UNIQUE KEY `uk_name` (`name`)
);

-- 权限表
CREATE TABLE `permission`
(
    `id`   bigint      NOT NULL PRIMARY KEY,
    `name` varchar(50) NOT NULL,
    UNIQUE KEY `uk_name` (`name`)
);

-- 用户和角色关系表
CREATE TABLE `user_role`
(
    `id`      bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` bigint NOT NULL,
    `role_id` bigint NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
);

-- 角色和权限关系表
CREATE TABLE `role_permission`
(
    `id`            bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `role_id`       bigint NOT NULL,
    `permission_id` bigint NOT NULL,
    FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
    FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`)
);

-- 部门和用户关系表
CREATE TABLE `department_user`
(
    `id`            bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `department_id` bigint NOT NULL,
    `user_id`       bigint NOT NULL,
    FOREIGN KEY (`department_id`) REFERENCES `department` (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
);

-- 部门和权限关系表
CREATE TABLE `department_permission`
(
    `id`            bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `department_id` bigint NOT NULL,
    `permission_id` bigint NOT NULL,
    FOREIGN KEY (`department_id`) REFERENCES `department` (`id`),
    FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`)
);
