# codex-test

这是一个用于学习与验证 Codex 基础能力的测试项目。

## 1. 项目用途

本项目是一个最简单的静态网页示例，主要用于：

- 作为 **Codex 测试项目**，演示从需求到代码生成的基础流程。
- 展示 HTML、CSS、JavaScript 的最小协作方式。
- 提供一个可直接运行的交互示例：点击按钮后显示当前时间。

## 2. 文件结构

```text
codex-test/
├── index.html    # 页面结构与内容
├── styles.css    # 页面样式
├── script.js     # 按钮点击后显示当前时间
└── README.md     # 项目说明文档
```

## 3. 如何在浏览器中打开 index.html

你可以直接打开文件：

1. 在文件管理器中进入项目目录。
2. 双击 `index.html`。
3. 浏览器将直接加载页面。

## 4. 如何用 `python -m http.server 8000` 启动本地服务

推荐使用本地服务方式访问页面：

1. 打开终端并进入项目目录：

   ```bash
   cd /workspace/codex-test
   ```

2. 启动本地 HTTP 服务：

   ```bash
   python -m http.server 8000
   ```

3. 在浏览器访问：

   ```text
   http://localhost:8000
   ```

4. 按 `Ctrl + C` 停止服务。

## 5. 说明

这是一个 **Codex 测试项目**，重点在于结构简单、便于快速验证与演示。
