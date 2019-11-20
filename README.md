# node_expense_server
计算水电费

[表格处理参考](https://blog.csdn.net/qq_17828675/article/details/78801126)
[表格样式参考](https://blog.csdn.net/dopamy_busymonkey/article/details/79106660)
[日期选择样式](http://code.ciaoca.com/jquery/cxCalendar/)
[token参考](https://segmentfault.com/a/1190000009494020?utm_source=tag-newest)

- 房间表 room  

  | 属性名   | 字段名 | 类型 | 要求 |
  | ------ | ------ | ---- | ---- |
  | id       | 记录id | 整数 | 主键 |
  | rid      | 房间id | 字符 | 非空 |
  | userId   | 用户id | 整数 | 非空 |
  | userName | 用户名 | 字符 | 非空 |

  

- 用户表 user
  
  | 属性名   | 字段名 | 类型 | 要求 |
  | -------- | ------ | ---- | ---- |
  | userId   | 用户id | 整数 | 主键 |
  | userName | 用户名 | 字符 | 非空 |
  | class    | 部门   | 字符 |      |
  
  
  
- 房间花费表 roomExpense
  
  | 属性名 | 字段名   | 类型 | 要求 |
  | ------ | -------- | ---- | ---- |
  | eid    | 记录id   | 整数 | 主键 |
  | rid    | 房间id   | 字符 | 非空 |
  | water  | 水表记录 | 整数 | 非空 |
  | elec   | 电表记录 | 整数 | 非空 |
  | date   | 记录时间 | 字符 | 非空 |
  
  
  
- 个人花费表 userExpense
  
  | 属性名 | 字段名   | 类型   | 要求 |
  | ------ | -------- | ------ | ---- |
  | eid    | 记录id   | 整数   | 主键 |
  | rid    | 房间id   | 字符   | 非空 |
  | water  | 水费     | 浮点型 | 非空 |
  | elec   | 电费     | 浮点型 | 非空 |
  | days   | 住宿天数 | 整数   | 非空 |
  | date   | 记录时间 | 字符   | 非空 |
  
  
  
- 管理员表 manager

  | 属性名   | 字段名 | 类型 | 要求 |
  | -------- | ------ | ---- | ---- |
  | id       | id     | 字符 | 主键 |
  | name     | 昵称   | 字符 | 非空 |
  | password | 密码   | 字符 | 非空 |



- 记录表 record

  | 属性名 | 字段名     | 类型 | 要求 |
  | ------ | ---------- | ---- | ---- |
  | id     | 记录id     | 整数 | 主键 |
  | rid    | 房间id     | 字符 | 非空 |
  | water  | 水表抄表数 | 整数 | 非空 |
  | elec   | 电表抄表数 | 整数 | 非空 |
  | date   | 记录日期   | 字符 | 非空 |

  
  
- 记录时间表 recordDate

  | 属性名 | 字段名 | 类型 | 要求 |
  | ------ | ------ | ---- | ---- |
  | id     | 记录id | 整数 | 主键 |
  |        | 时间   | 字符 | 非空 |

  

