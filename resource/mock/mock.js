// 使用 Mock 构建本地服务器输出数据结果
const Mock = require("mockjs");
const express = require("express");
const app = express();

//根据传入的参数 num，生成 num 条模拟的数据列表
function generatorList(num) {
  return Mock.mock({
    [`list|${num}`]: [
      {
        // 模拟 ID，自增方式追加
        "id|+1": 1,
        // 模拟标题，中文字符串长度为 20 位到 30 位
        title: "@ctitle(15,25)",
        // 模拟图片索引，自然数从 0 到 15
        image: "@natural(0,15)",
        // 模拟访问人数，自然数从 0 到 99999
        reads: "@natural(0,99999)",
        // 模拟新闻来源，中文字符串长度为 3 到 10 位
        from: "@ctitle(3,7)",
        // 模拟发布时间，时间格式
        date: "@date('yyyy-MM-dd')",
      },
    ],
  });
}

function newInfo(id) {
  return Mock.mock({
    // 模拟 ID，自增方式追加
    "id": id,
    // 模拟标题，中文字符串长度为 20 位到 30 位
    title: "@ctitle(15,25)",
    // 模拟图片索引，自然数从 0 到 15
    image: "@natural(0,15)",
    // 模拟访问人数，自然数从 0 到 99999
    reads: "@natural(0,99999)",
    // 模拟新闻来源，中文字符串长度为 3 到 10 位
    from: "@ctitle(3,7)",
    // 模拟发布时间，时间格式
    date: "@date('yyyy-MM-dd')",
    code: /\d{6}/,
    cpa: "@cparagraph(5, 10)",
  });
}

function Login() {
  return Mock.mock({
    username: "@cname(2,10)",
    token: "@guid()",
    msg: "登陆成功",
    status: 200,
  });
}

//允许跨域请求返回数据
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//截取路由并反馈数据
app.get("/data", function (req, res) {
  // 获取 get 请求数据条数参数 num
  const { num } = req.query;
  return res.send(generatorList(num));
});

//截取路由并反馈数据
app.get("/info", function (req, res) {
  const { id } = req.query;
  return res.send(newInfo(id));
});

//截取路由并反馈数据
app.get("/login", function (req, res) {
  return res.send(Login());
});

app.get("/code", function (req, res) {
  return res.send(
    Mock.mock({
      code: /\d{6}/,
    })
  );
});

//设置端口并打印对应调用结果
const server = app.listen(4000, function () {
  console.log(
    "本地mock服务启动，接口地址为：http://localhost:4000"
  );
});
