
## create-react-app脚手架

使用react官方脚手架搭建，截止至2020/7/1安装了最新的依赖，添加的配置如下：

#### 添加的配置

✅ 热更新，index入口文件 

    react默认热更新是刷新整个页面，为了开发优化性能减少渲染，设置为局部热更新。

✅ 样式使用sass 

    create-react-app默认支持css/less/scss文件类型，可以根据个人习惯选择。

✅ 添加路由 [reac-router-doc](https://create-react-app.dev/docs/adding-a-router/)

    使用react-router-config实现路由配置，可以做路由权限(待更新...)

✅ antdUI组件库

    antd4已默认支持按需加载，不需要额外配置

✅ 状态管理redux、react-redux

    src/redux/state/* - 设置state、reduce方法(根据dispatch传入的payload更改state数据)
    src/redux/constant.js - 设置action的名称，用于dispatch方法触发
    src/redux/index.js - state文件夹下定义的state模块都需要在这里注册

✅ 异步请求axio

    已封装常用的get/post/delete方法，根据不同的code码拦截请求结果，后续也可以自行封装put等其他方法

✅ ts [typescript-doc](https://create-react-app.dev/docs/adding-typescript/)

    src文件夹下可以ts、js、tsx、均可以正常使用，若不习惯使用ts，react依然可以使用js开发

✅ seamless-immutable - immutable data(不可变数据)

  [seamless-immutable使用方法](https://www.npmjs.com/package/seamless-immutable)

    immutable data就是一旦创建，就不能再被更改的数据。对immutable对象的任何修改或添加删除操作都会返回一个新的immutable对象。
    使用旧数据创建新数据时，要保证旧数据同事可用且不变。
    immutable使用了structural sharing 数据共享，即如果对象树中一个节点发生改变，只修改这个节点和守它影响的父节点，其他节点则进行共享。
  
✅ 函数式编程开发工具库 

    依个人习惯，有需要可自行安装lodash、underscore、Ramda或其他函数式编程的库。函数式编程非常好用，强烈推荐。

  [lodash](https://www.lodashjs.com/)


### `npm install` - 安装依赖

安装过程中可能出现的问题：

1、由于使用了sass-loader，所以很大可能是由于node-sass未安装成功，出现node-sass错误需要单独安装node-sass和sass
2、开发过程中，安装了新的依赖，ts类型检测大部分情况会提示找不到module，
   解决方法： 需要安装@types/[依赖名]，在[npm官网](https://www.npmjs.com/)查找次ts类型声明依赖，99%的npm依赖都已支持ts。

### `npm start` - 启动

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build` - 打包

Builds the app for production to the `build` folder.<br />
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

打包之后的index.html中，create-react-app默认文件引入的路径为 '/static/*/*', 
部署到服务器，会默认到域名所在的根目录下查找文件，其实根目录下是没有这个文件的，需要到部署的文件夹下寻找，
这样就需要更改生成index.html中文件的引入路径，
解决方法是在 package.json 中设置 homepage : "." (脚手架已设置)

## Analyzing the Bundle Size  
#### - 安装这个插件可以查看打包之后的文件大小以及占比，用于代码优化（很有用）

[分析打包之后的文件大小-文档](https://create-react-app.dev/docs/analyzing-the-bundle-size/)

### `npm run eject` - 暴露（(webpack, Babel, ESLint, etc）配置

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### `npm test` - 单元测试

App.test.tsx文件是一个简单的例子，测试a链接是否正常可以打开链接，
有兴趣的可以看一下前端单元测试，开发中还是很有用的，尤其是表单自动化测试。

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


2020/7/1