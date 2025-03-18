var ChatGroup = /** @class */ (function () {
    function ChatGroup() {
        this.suscribe = [];
    }
    ChatGroup.prototype.suscriberFunction = function (calllback) {
        this.suscribe.push(calllback);
    };
    ChatGroup.prototype.notify = function (message) {
        this.suscribe.forEach(function (callback) { return callback(message); });
    };
    return ChatGroup;
}());
var newGroup = new ChatGroup;
newGroup.suscriberFunction(function (notification) {
    console.log("recibiste una nueva ".concat(notification));
});
newGroup.notify("notificacion");
