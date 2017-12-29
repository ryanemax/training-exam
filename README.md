# 学员管理
- training-exam

# Day 2 作业参考
## 如何加入版本库？
- 注册Github：https://github.com
- 将账号发在微信群

``` sh
git clone https://github.com/ryanemax/training-exam

cd training-exam

cnpm install

ng serve
```

## 如何创建一个特性模块，添加构造块？

``` sh
ng g module bigdata

ng g component bigdata-home --module bigdata
```

## 如何给特性模块配置路由？
- 引入关键的Module库
```
import { Routes, RouterModule } from '@angular/router';
```
- 配置Router
```
RouterModule.forChild([
      { path: '', component: BigdataHomeComponent, pathMatch: 'full' },
    ])
```

## 如何配置全局路由
- 找到路由配置文件：app-routing.module.ts
- 在const routes: Routes，列表中加一项自己的特性模块

## 如何加左侧导航链接？
- app.component.html
```
<li routerLink="/bigdata">大数据</li>
```

## 如何正确调整特性模块目录结构？

# Day 1 作业参考
## 提交作业流程
1. 确保ng serve项目启动正常
2. 显示隐藏文件，删除项目根目录.git文件夹
3. 编写自己的README.md文件，描述项目信息
4. 注册登陆github.com
5. 右上角加号，新建仓库

```
Repository name： ryane-exam

Init with README 不要打钩

两个Add，默认None
```

``` sh
git init
git add .
git commit -m "init ryane-exam v0.1"
git remote add origin https://github.com/ryanemax/ryane-exam.git
git push -u origin master
```

## 如何克隆一个已有项目？
``` sh
## 克隆项目文件
git clone https://github.com/ryanemax/ryane-exam
## 进入项目目录
cd ryane-exam
## 安装项目依赖
cnpm install
## 启动项目
```

## 如何提交新的更改到版本库？
1. 保存所有更改文件，ng serve确认正常启动
2. 在左侧源码管理，填写备注信息
    - feat: new xxxx
    - fix: issue 1234

feat：提交新特性

fix：解决项目BUG

3. 点击左下角同步按钮

## 作业指导
作业详细要求：
http://ng.futurestack.cn/chapter1/exam1-firstproject.php

1. 完成选题与模拟数据填写
2. 完成列表排序
3. 完成界面样式美化

# 作者
- 姓名：Ryane Liu
- Github：ryanemax
