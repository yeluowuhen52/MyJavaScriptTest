//蛇
(function () {
    var elements = [];

    function Snake(width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        this.direction = direction || "right";

        this.body = [
            {x: 3, y: 2, color: "red"},
            {x: 2, y: 2, color: "orange"},
            {x: 1, y: 2, color: "orange"}
        ];
    };
    // 初始化
    Snake.prototype.init = function (map) {
        //删除
        remove();
        for (var i = 0; i < this.body.length; i++) {
            var obj = this.body[i];
            var div = document.createElement("div");
            map.appendChild(div);
            //设置样式
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";

            div.style.left = obj.x * this.width + "px";
            div.style.top = obj.y * this.height + "px";

            div.style.backgroundColor = obj.color;

            elements.push(div);
        }
    };

    Snake.prototype.move = function (food, map) {
        console.log("move");
        //蛇的身体
        var i = this.body.length - 1;
        for (var i = this.body.length - 1; i > 0; i--) {
            // console.log(this.body[i].x);
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }

        //蛇头
        switch (this.direction) {
            case "right":
                this.body[0].x += 1;
                break;
            case "left":
                this.body[0].x -= 1;
                break;
            case "top":
                this.body[0].y += 1;
                break;
            case "bottom":
                this.body[0].y -= 1;
                break;
        }

        //判断食物吃没吃到
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;

        //食物
        var foodX = food.x;
        var foodY = food.y;

        // console.log(foodX + "----" + food.x);
        // console.log(headY + "----" + food.y);

        if (headX == food.x && headY == food.y) {
            //获取尾巴
            var last = this.body[this.body.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });

            //删除食物
            food.init(map);
        }


    };

    function remove() {
        var i = elements.length - 1;

        for (; i >= 0; i--) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }


    }

    window.Snake = Snake;
}());