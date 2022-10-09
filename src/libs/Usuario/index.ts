import { getConnection } from "@models/sqlite/SqliteConn";
import { UsuarioDao } from "@models/sqlite/UsuarioDao";
export interface IUsuario {
    nombre: string;
    contrasena: string;
    correo: string;
};

export class Usuario {
  private dao: UsuarioDao;
  public constructor(){
    getConnection()
      .then(conn=>{
        this.dao = new UsuarioDao(conn);
    })
    .catch(ex=>console.error(ex));
  }
  // Consultas
  public getAllUsuario() {
    return this.dao.getUsuarios()
  }
  public getUsuarioByIndex( index:string) {
      return this.dao.getUsuarioById({_id:index});
  }

  public addUsuario( Usuario:IUsuario) {
    return this.dao.insertNewUsuario(Usuario);
  }
  public updateUsuario( index:string, Usuario:IUsuario){
  return this.dao.update({_id:index}, Usuario);
  }
  public deleteUsuario( index:string) {
    return this.dao.deleteUsuario({_id:index});
  }
}
