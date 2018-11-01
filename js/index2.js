// 获取目标元素
var box = document.getElementById('box');

// 对目标元素target的圆形区域进行一个点击事件绑定
function bindClickOnCircleArea(target, callback) {
  target.onclick = function (e) {
    e = e || window.event;

    // target中心点的坐标
    var x1 = 100;
    var y1 = 100;

    // 事件源坐标
    var x2 = e.offsetX;
    var y2 = e.offsetY;

    // 校验是否在圆形点击区，在的话就执行callback回调
    // 计算事件触发点与target中心的位置
    var len = Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    // 通过半径进行校验
    if (len <= 100) {
      callback();
    } else {
      alert('死鬼，跑哪去啊，你老婆我是黄皮肤还是白皮肤都分不清了吗');
    }
  }
}

// 执行
bindClickOnCircleArea(box, function () {
  alert('老婆，你让我好找啊，呜呜呜');
});