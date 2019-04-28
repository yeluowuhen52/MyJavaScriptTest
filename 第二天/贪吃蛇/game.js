//游戏对象
(function () {
    var that = null;

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.init = function () {
        this.food.init(this.map);
        this.snake.init(this.map);

        // setInterval(function () {
        //     that.snake.move(that.food, that.map);
        //     that.snake.init(that.map);
        // }, 150);
        this.runSnake(this.food, this.map);

        this.bindKey();
    };

    //设置蛇自动抛起来
    Game.prototype.runSnake = function (food, map) {
        var timeiId = setInterval(function () {
            this.snake.move(food, map);
            this.snake.init(map);
            var maxX = map.offsetWidth / this.snake.width;
            var maxY = map.offsetHeight / this.snake.height;
            //蛇头坐标
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;

            if (headX < 0 || headX >= maxX) {
                //撞墙
                clearInterval(timeiId);
                alert("游戏结束");
            }

            if (headY < 0 || headY >= maxY) {
                //撞墙
                clearInterval(timeiId);
                alert("游戏结束");
            }
        }.bind(that), 150);
    };

    //设置用户按键，改变方向
    Game.prototype.bindKey = function () {
        document.addEventListener("keydown", function (e) {
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = "left";
                    break;
                case 38:
                    this.snake.direction = "bottom";
                    break;
                case 39:
                    this.snake.direction = "right";
                    break;
                case 40:
                    this.snake.direction = "top";
                    break;
            }
        }.bind(that), false);
    };
    window.Game = Game;

}());
var game = new Game(document.querySelector(".map"));
game.init();
// var fd = new Food();
// fd.init(document.querySelector(".map"));
//
// var snake = new Snake();