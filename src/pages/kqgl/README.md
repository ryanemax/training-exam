# 项目信息
- 相关数据库集合
    - 考勤管理
- 功能描述
    - 考勤管理模块，主要功能是对用户出勤，休假，病假的增删改查管理
    - 通过户名和日期进行数据过滤
    - 统计一定时间内的出勤人数状况
- NG及TS依赖
    - KqglHomeComponent 自定义考勤列表组件
    - KqglDetailComponent 自定义考勤明细组件
    - Button1Directive 自定义按钮指令
    - ToDateYmd 自定义时间变换管道
    - ToCqzk 自定义时间显示管道
    - KqglService 自定义服务
    - MatTabsModule，MatButtonModule，MatFormFieldModule，MatInputModule，MatSelectModule
    - MatOptionModule，MatIconModule，MatMenuModule，MatDialogModule 官方提供MD组件库
    - Parse 后端数据访问库，cloud/cloud.ts
- ES4/5依赖
    - echarts.js 【ES4/5】旧版JS第三方库，用于图表绘制

- 目录结构(pages)
    - kqgl/
        - kqgl-detail
          - kqgl-detail.component.html
          - kqgl-detail.component.scss
          - kqgl-detail.component.spec.ts
          - kqgl-detail.component.ts
        - kqgl-dialog
          - app-kqgl-dialog.html
          - kqgl-dialog.ts
        - kqgl-home
          - kqgl-home.component.html
          - kqgl-home.component.scss
          - kqgl-home.component.spec.ts
          - kqgl-home.component.ts
        - sharing
          - button1.directive.ts
          - cqzk.pipe.ts
          - datetr.pipe.ts
        - kqgl-deta.ts
        - kqgl.module.ts
        - README.md

# 作者信息
## 作者1
- 姓名:许铁夫
- Github账号：https://github.com/xutiefu/xutiefu-exam
