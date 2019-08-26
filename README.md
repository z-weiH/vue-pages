### 根据vue-cli 3.0构建多页应用

<!-- 已知问题 -->
1. pages可以根据目录自动引入，新建pages时还需要复制文件的方式（或者使用命令行 | 未完成）
2. 如果router使用 history模式的话 需要加入base属性如： {..., base: 'home.html' || 'home'} 对应地址为 192.168.1.1:8080/home || 192.168.1.1:8080/home.html