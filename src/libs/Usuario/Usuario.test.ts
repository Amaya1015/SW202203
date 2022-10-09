import {IUsuario, Usuario} from './index';

describe('Usuario Lib Unit Tests', ()=>{

it( 'should Create an Instance of Usuario', ()=>{
    const usuarioInstance = new Usuario();
    expect(usuarioInstance).toBeDefined();
});
it(' should Add a new Usuario Item', ()=>{
    const usuarioInstance = new Usuario();
    const usuarioItem : IUsuario = {
        nombre: 'Carlos Amaya',
        contrasena: 'amasha15',
        correo: 'carlosdaniel1899@gmail.com'
    };
    const index = usuarioInstance.addUsuario(usuarioItem);
    expect(index).toBe(0);
    });
});
