//食物
(function () {
    //保存方块用
    var element = [];

    function Food(x, y, width, height, color) {
        this.x = x || 0;
        thisy = y || 0;
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "green";
    };
    //实物需要在地图上展示
    Food.prototype.init = function (map) {
        remove();
        var div = document.createElement("div");
        map.appendChild(div);
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;

        div.style.position = "absolute";

        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;

        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        // 把div加入到数组
        element.push(div);
    };

    function remove() {
        for (var i = 0; i < element.length; i++) {
            var temp = element[i];
            temp.parentNode.removeChild(temp);
            element.splice(i, 1);
        }
    };
    //为了外部调用
    window.Food = Food;
}());