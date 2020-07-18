## 广州大学华软软件学院社团联合会官网

> 这是广大华软社团联合会的官网，使用到的技术栈为vue全家桶，脚手架一开始是自己搭建的，没使用vue-cli，配置文件在config/webpack.config.js，后期具体忘了什么原因我构建工具换成了vue-cli-service。

##### [线上地址](https://www.cairunyu.top/sl)

## 目录	

```
├── build						# 构建相关
├── config						# webpack配置文件
│	├── webpack.conf.dev.js		# webpack开发环境配置文件
│	├──	webpack.conf.prod.js	# webpack生产环境配置文件
│	└── webpack.config.js		# webpack默认配置文件
├── dist						# 打包后目录
├── public						# 静态资源
│	│── favicon.png            	# favicon图标
│   └── index.html  			# html模板
├── src							# 源代码
│	├── api						# 所有请求
│	├──	assets					# 主题 字体等静态资源
│	├──	components				# 全局公用组件
│	├──	router					# vue路由
│	├──	store					# 全局 store管理
│	├──	utils					# 全局工具类
│	├──	views					# views所有页面
│	├──	app.vue					# 入口页面
│	├── main.js					# 入口文件 加载组件 初始化等
│	└── setting.js				# 网站信息配置我呢间
├── package.json				# package.json
├── package-lock.json			# package-lock.json
├── vue.config.js				# vue-cli 配置
└── .babelrc					# babel-loader 配置
```

## 安装

```
# 需要安装node环境和npm包管理工具

# 克隆项目
git clone https://github.com/ChoyRunYu/sl-vue.git

# 进入目录
cd sl-vue

# 安装依赖
npm install

# 本地开发 启动项目
# 使用vue-cli-service构建(推荐)
npm ren serve
# 使用webpack-dev-server构建
npm run dev 		     
```

## 打包

```
# 使用vue-cli-service打包(推荐)
npm run build2
# 使用webpack-dev-server打包
npm run build
```

