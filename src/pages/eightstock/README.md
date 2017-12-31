# 作者
- 姓名：qingyuan.li
- Github：hatherlee

# 项目信息
- 8方财富
    好用的看盘网站.
    - eightstock

- 功能描述
    - 查看股票市场大盘及个股行情,并可根据列表内容进行排序(包含正序和逆序).
    - 点击个股条目,可以详细查看个股信息,包括分时图和成交量,并可凭自己喜好.
    - 在详细画面可以添加/删除自选股,该结果会反应到自选TAB中.
    - 浏览财经资讯,并可对资讯内容进行评论及删除评论
    
- NG及TS依赖
    - MatCardModule官方提供MD组件库
    - MatTabsModule官方提供MD组件库
    - MatButtonModule官方提供MD组件库
    - MatDialogModule官方提供MD组件库  
    - MatTooltipModule官方提供MD组件库 
    - PipesModule 本项目的自定义管道
    - DirectivesModule 本项目的自定义指令
    - Parse 后端数据访问库，cloud/cloud.ts
- ES4/5依赖
    - echarts.js 【ES4/5】旧版JS第三方库，用于图表绘制

- 目录结构(pages)
    - student/
        - eightstock-home:主页,包括自选列表,行情列表及财经资讯.
        - eightstock-listitem:股票列表的个性组件.上涨为红色,下跌为绿色.
        - eightstock-detail:股票详情画面
        - eightstock-newchat:发表评论的Dialog

# 作者信息
## 作者
- qingyuan.li
- hatherlee
