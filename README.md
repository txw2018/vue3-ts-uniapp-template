### 项目技术栈

uniapp ： vue3 + ts + vite + axios + pinia + sass

### git 提交规范 [相关文章](https://juejin.cn/post/6844903606815064077)

- type: commit 的类型
- feat: 新特性
- fix: 修改问题
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改
- test: 测试用例修改
- chore: 其他修改, 比如构建流程, 依赖管理.
- scope: commit 影响的范围, 比如: route, component, utils, build...
- subject: commit 的概述, 建议符合 [50/72 formatting](https://link.juejin.cn/?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%253A%2F%2Fstackoverflow.com%2Fquestions%2F2290016%2Fgit-commit-messages-50-72-formatting)
- body: commit 具体修改内容, 可以分为多行, 建议符合 [50/72 formatting](https://link.juejin.cn/?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%253A%2F%2Fstackoverflow.com%2Fquestions%2F2290016%2Fgit-commit-messages-50-72-formatting)
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.

### app 更新方案

|            | ios              | 安卓       |
| ---------- | ---------------- | ---------- |
| 整包更新   | 去 appstore 更新 | app 内更新 |
| 资源热更新 | app 内更新       | app 内更新 |

[整包更新](https://ask.dcloud.net.cn/article/34972)
[资源热更新](https://ask.dcloud.net.cn/article/35667)

### 项目解构

```bash
├─.commitlintrc.js          # commitlint配置文件
├─.env.development          # 环境变量
├─.env.production
├─.env.qa1
├─.env.qa2
├─.env.qa3
├─.env.qa4
├─.env.release
├─.eslintignore
├─.eslintrc.cjs             # eslint配置
├─.gitignore
├─index.html
├─package-lock.json
├─package.json
├─README.md
├─tsconfig.json             # ts配置
├─vite.config.ts            # vite配置
├─src
| ├─App.vue
| ├─env.d.ts
| ├─main.ts
| ├─manifest.json
| ├─pages.json
| ├─plugin.d.ts
| ├─uni.scss
| ├─utils
| | ├─request.ts
| | └validate.ts
| ├─types                   # 全局ts类型
| | └index.ts
| ├─svg
| | ├─home.svg
| | ├─icon
| | | └home.svg
| ├─store                   # 数据管理
| | └user.ts
| ├─static
| | └logo.png
| ├─pages                   # 路由页面
| | ├─my
| | | └index.vue
| | ├─index
| | | └index.vue
| ├─components              # 组件    ui组件放在base下面 业务组件放在components下
| | ├─base
| | | └svg-icon.vue
| ├─api                     # axios请求api
| | └home.ts
├─.vscode
| └settings.json
├─.husky                    # husky钩子（git提交钩子）
| ├─commit-msg
| ├─\_
| | ├─.gitignore
| | └husky.sh
```

### 组件规范

文件命名 my-component

### 修改组件样式

```css
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ::v-deep .uni-navbar {
    width: 100vw;
  }
}
```
