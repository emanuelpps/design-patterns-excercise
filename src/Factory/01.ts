/*📌 1️⃣ Fábrica de Usuarios
📌 Objetivo: Crear una fábrica que genere distintos tipos de usuarios (Admin, Customer). */


interface userType {
  user: string;
}

class AdminUser implements userType {
   constructor(typeUser: string){
      =user = typeUser
   }
}
