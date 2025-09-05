# Shaokun Library - Vue.js JSON Lab

这是一个Vue.js项目，用于学习Vue.js中的JSON数据处理和指令使用。

## 项目结构

```
shaokun-library/
├── index.html              # HTML入口文件
├── package.json            # 项目依赖配置
├── vite.config.js         # Vite构建配置
├── src/
│   ├── main.js            # Vue应用入口
│   ├── App.vue            # 主应用组件
│   ├── assets/
│   │   └── json/
│   │       ├── authors.json      # 作者数据
│   │       └── bookstores.json   # 书店数据
│   └── components/
│       └── JSON.vue       # JSON实验组件
```

## 功能特性

- ✅ JSON文件导入和使用
- ✅ Vue指令实践 (v-for, v-if, v-else, v-bind)
- ✅ 数组操作 (过滤、映射、查找)
- ✅ 对象属性访问和迭代
- ✅ 响应式数据绑定
- ✅ 条件渲染
- ✅ 动态样式绑定

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

4. 预览生产版本：
```bash
npm run preview
```

## 学习内容

### JSON数组操作
- 使用 `v-for` 遍历数组
- 使用 `filter()` 过滤数组
- 使用 `flatMap()` 展平嵌套数组
- 使用 `find()` 查找特定元素

### JSON对象操作
- 访问对象属性
- 遍历对象属性
- 处理嵌套对象
- 处理对象中的数组

### Vue指令
- `v-for`: 列表渲染
- `v-if` / `v-else`: 条件渲染
- `v-bind`: 属性、类和样式绑定
- `@click`: 事件处理

## 技术栈

- Vue 3 (Composition API)
- Vite (构建工具)
- JavaScript ES6+
- CSS3

## 作者

Shaokun - FIT5032 Vue.js学习项目
