// crear una clase language con el valor es, obten su valor desde otra instancia
var LanguageInstance = /** @class */ (function () {
    function LanguageInstance() {
        this.language = "es";
    }
    LanguageInstance.getInstance = function () {
        if (!LanguageInstance.instance) {
            LanguageInstance.instance = new LanguageInstance();
        }
        return LanguageInstance.instance;
    };
    return LanguageInstance;
}());
var getThisInstance = LanguageInstance.getInstance();
console.log(getThisInstance);
