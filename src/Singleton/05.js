var Logger = /** @class */ (function () {
    function Logger() {
        this.messages = [];
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            return (Logger.instance = new Logger());
        }
        return Logger.instance;
    };
    Logger.prototype.logMessage = function (message) {
        return this.messages.push(message);
    };
    Logger.prototype.getMessages = function () {
        return this.messages;
    };
    return Logger;
}());
var readMessageInstance = Logger.getInstance();
readMessageInstance.logMessage("essste mensaje");
readMessageInstance.logMessage("otro mensaje massss");
console.log(readMessageInstance.getMessages());
