# node_expense_server
计算水电费

[表格处理参考](https://blog.csdn.net/qq_17828675/article/details/78801126)
[表格样式参考](https://blog.csdn.net/dopamy_busymonkey/article/details/79106660)

[日期选择样式](http://code.ciaoca.com/jquery/cxCalendar/)

- 房间表 room
  + 房间ID 字符
  + 用户IDs 字符
  + 用户名 字符
  
- 用户表 user
  + 用户id 字符
  + 用户名 字符
  + 部门 字符
  
- 房间花费表 roomExpense
  + 账单id 字符
  + 房间Id 字符
  + 本期水表数 整数
  + 本期电表数 整数
  + 记录日期 字符
  
- 个人花费表 userExpense
  + 账单id 字符
  + 用户id 字符
  + 水费 浮点
  + 电费 浮点
  + 日期 字符
