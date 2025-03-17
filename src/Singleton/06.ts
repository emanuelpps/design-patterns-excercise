// Crear una clase DatabaseConnection que maneje la conexión a una base de datos como un Singleton. La clase debe simular la conexión a una base de datos, manteniendo la única instancia activa durante toda la ejecución de la aplicación.

class DatabaseConnection {
  private static instance: DatabaseConnection;
  public dbConnection: boolean = false;

  private constructor() {}

  public static getInstance() {
    if (!DatabaseConnection.instance) {
      return (DatabaseConnection.instance = new DatabaseConnection());
    }
    return DatabaseConnection.instance;
  }

  connectDB(connection: boolean) {
    return (this.dbConnection = connection);
  }

  disconnectDB(connection: boolean) {
    return (this.dbConnection = connection);
  }

  checkDbConnection() {
    return this.dbConnection;
  }
}

const DBconnections = DatabaseConnection.getInstance();

DBconnections.connectDB(true);

console.log(DBconnections.checkDbConnection());
