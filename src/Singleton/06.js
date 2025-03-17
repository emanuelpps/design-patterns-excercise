// Crear una clase DatabaseConnection que maneje la conexión a una base de datos como un Singleton. La clase debe simular la conexión a una base de datos, manteniendo la única instancia activa durante toda la ejecución de la aplicación.
var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection() {
        this.dbConnection = false;
    }
    DatabaseConnection.getInstance = function () {
        if (!DatabaseConnection.instance) {
            return (DatabaseConnection.instance = new DatabaseConnection());
        }
        return DatabaseConnection.instance;
    };
    DatabaseConnection.prototype.connectDB = function (connection) {
        return (this.dbConnection = connection);
    };
    DatabaseConnection.prototype.disconnectDB = function (connection) {
        return (this.dbConnection = connection);
    };
    DatabaseConnection.prototype.checkDbConnection = function () {
        return this.dbConnection;
    };
    return DatabaseConnection;
}());
var DBconnections = DatabaseConnection.getInstance();
DBconnections.connectDB(true);
console.log(DBconnections.checkDbConnection());
