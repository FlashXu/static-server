let ajax = (url) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.response);
        } else if (request.status === 400) {
          reject();
        }
      }
    };
    request.send();
  });
};

// 请求html
ajax("index.html").then(
  (data) => {
    console.log(data);
  },
  () => {
    console.log("error!");
  }
);

// 请求css
ajax("style.css").then(
  (data) => {
    let style = document.createElement("style");
    style.innerHTML = data;
    document.head.appendChild(style);
  },
  () => {
    console.log("error!");
  }
);

// 请求js
let script = document.createElement("script");
script.src = "test.js";
document.body.appendChild(script);

// 请求图片
let img = document.createElement("img");
img.src = "pic.jpg";
document.body.appendChild(img);

// 请求未知文件
ajax("test.unknown").then(
  (data) => {
    console.log(data);
  },
  () => {
    console.log("error!");
  }
);
