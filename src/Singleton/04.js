var GlobalConfig = /** @class */ (function () {
    function GlobalConfig() {
        this.ConfigValues = [];
    }
    GlobalConfig.getInstance = function () {
        if (!GlobalConfig.instance) {
            return (GlobalConfig.instance = new GlobalConfig());
        }
        return GlobalConfig.instance;
    };
    GlobalConfig.prototype.setGlobalConfig = function (header, api) {
        this.ConfigValues = [header, api];
    };
    GlobalConfig.prototype.getGlobalConfig = function () {
        return this.ConfigValues;
    };
    return GlobalConfig;
}());
var config = GlobalConfig.getInstance();
config.setGlobalConfig("laldkasldkas", "http:///www.api.dev");
console.log(config.getGlobalConfig());
