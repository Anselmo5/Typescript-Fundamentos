// Somentes numeros
var boat;
(function (boat) {
    boat[boat["engine"] = 2] = "engine";
    boat[boat["bow"] = 1] = "bow";
    boat[boat["stern"] = 1] = "stern";
})(boat || (boat = {}));
var num = boat.engine;
console.log(num);
boat.bow = 10;
boat.engine = 20;
boat.stern = 2;
