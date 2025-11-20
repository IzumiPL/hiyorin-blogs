---
title: MySql基础命令
published: 2024-04-12
description: '基础Sql语句'
image: ''
tags: ["Sql", "MySql", "Database"]
category: 'Sql'
draft: false 
lang: ''
pinned: false
author: Mikuas
---

### Sql基础语法

#### 1. 数据库操作
```sql
# 创建数据库
CREATE DATABASE 'databaseName';

# 删除数据库
DROP DATABASE 'databaseName';

# 查看所有数据库
SHOW DATABASES;

# 使用数据库
USE 'databaseName';

# 查看当前使用的数据库
SELECT DATABASE();


```

#### 2. 表操作
```sql
# 判断表是否存在,存在删除
DROP TABLE IF EXISTS 'tableName';

# 创建表
CREATE TABLE 'tableName' (
    id char(8) PRIMARY KEY NOT NULL, # 主键 不为空
    name VARCHAR(20) NOT NULL,
    age int,
    gender CHAR(2) DEFAULT "男" # 默认值
);

# 查看所有表
SHOW TABLES;

# 查看表结构
DESC 'tableName';

# 修改表名
RENAME TABLE 'oldTableName' to 'newTableName'

# 增加列
ALTER TABLE 'talbeName' add 'columnName' 'dataType' [约束];


# 修改列数据类型
ALTER TABLE 'tableName' MODIFY 'columnName' 'newDataType';

# 修改列名
ALTER TABLE 'tableName' CHANGE 'oldColumnName' 'newColumnName' 'dataType';

# 删除列
ALTER TABLE 'tableName' DROP 'columnName';

# 删除表
DROP TABLE 'tableName';

```

:::note
数据类型(Data Types)

* 数值类型

| 类型             | 说明          | 示例        |
| -------------- | ----------- | --------- |
| `INT`          | 整数          | 123       |
| `FLOAT`        | 小数（单精度）     | 3.14      |
| `DOUBLE`       | 小数（双精度）     | 3.1415926 |
| `DECIMAL(m,n)` | 精确小数（常用于金额） | 12.34     |

* 字符串类型

| 类型           | 说明      | 示例            |
| ------------ | ------- | ------------- |
| `CHAR(n)`    | 固定长度字符串 | CHAR(10)      |
| `VARCHAR(n)` | 可变长度字符串 | VARCHAR(255)  |
| `TEXT`       | 长文本     | 新闻、描述         |
| `ENUM`       | 枚举类型    | ENUM('M','F') |

* 日期与时间类型

| 类型          | 说明       | 示例                    |
| ----------- | -------- | --------------------- |
| `DATE`      | 日期       | '2025-11-07'          |
| `TIME`      | 时间       | '14:30:00'            |
| `DATETIME`  | 日期+时间    | '2025-11-07 14:30:00' |
| `TIMESTAMP` | 自动记录修改时间 | 自动更新                  |

:::


#### 3. 数据操作
1. 插入数据
```sql

INSERT INTO 'tableName'(c1, c2, ...) VALUES (v1, v2, ...)[, (v1, v2, ...), (v1, v2, ...)];

INSERT INTO 'tableName' VALUES (v1, v2, ...)[, ()];


```

2. 查询数据
```sql

# 查询全部数据
SELECT * FROM 'tableName';

# 查询指定列
SELECT c1, c2, FROM 'tableName';

# 条件查询
SELECT * FROM 'tableName' WHERE 条件;

# 排序
SELECT * FROM 'tableName' ORDER BY 'columnName' ASC|DESC;

# 去重
SELECT DISTINCT 'columnName' FROM 'tableName';

# 限制结果数量
SELECT * FROM 'tableName' LIMIT n; # 前n条
SELECT * FROM 'tableName' LIMIT m, n; # 从第m+1条开始取n条
```

3. 更新数据
```sql
UPDATE 'tableName' SET c1 = v1, c2 = v2 WHERE 条件;


```

4. 删除数据
```sql
DELETE FROM 'tableName' WHERE 条件;

# 清空表,保留解构
TRUNCATE TABLE 'tableName';
```

#### 4. 条件与运算符

```sql
# 比较
=       # 等于
<>      # 不等于
>       # 大于
<       # 小于
>=      # 大于等于
<=      # 小于等于

# 逻辑
AND     # 与
OR      # 或
NOT     # 非

# 范围
BETWEEN v1 AND v2

# 集合
IN (v1, v2, ...)

# 模糊匹配
LIKE 'A%'       # 以A开头
LIKE '%A'       # 以A结尾
LIKE '%A%'      # 包含A

# 空值判断
IS NULL
IS NOT NULL
```

#### 5. 函数
```sql
# 聚合函数
COUNT(*)                     # 统计数量
SUM('columnName')            # 求和
AVG('columnName')            # 平均值
MAX('columnName')            # 最大值
MIN('columnName')            # 最小值

# 字符串
CONCAT(a, b)                # 拼接
LENGTH('columnName')        # 长度
UPPER()/LOWER()             # 大写/小写转换
SUBSTRING(str, pos, len)    # 截取


# 日期
NOW()           # 当前时间
CURDATE()       # 当前日期
YEAR(date)      # 提取年份
MONTH(date)     # 提取月份
DAY(date)       # 提取天数

```

#### 6. 分组聚合
```sql
# 分组
SELECT 'columnName', 聚合函数 FROM 'tableName' GROUP BY 'columnName';

# 分组后筛选
SELECT 'columnName', 聚合函数 FROM 'tableName' GROUP BY 'columnName' HAVING 条件;
```

#### 7. 约束
| 约束名         | 说明           |
| :---------- | :----------- |
| PRIMARY KEY | 主键（唯一且非空）    |
| FOREIGN KEY | 外键（建立表间关系）   |
| NOT NULL    | 不允许为空        |
| UNIQUE      | 唯一值          |
| DEFAULT     | 默认值          |
| CHECK       | 检查条件（部分版本支持） |

```sql
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age INT CHECK(age >= 0),
    email VARCHAR(100) UNIQUE
);
```

