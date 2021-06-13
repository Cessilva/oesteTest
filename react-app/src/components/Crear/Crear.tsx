import { Component } from 'react';
import { IsString, Length, IsDefined, IsNotEmpty, IsInt, Min } from 'class-validator';
import axios from '../../axios';
import CrearForm from '../../UI/Forms/CrearForm';
import { dataValidation } from '../../shared/dataValidation';


export class AuthUserValidator {
    @IsDefined({ message: `El nombre debe ser definido` })
    @IsNotEmpty({ message: `El nombre no debe estar vacio` })
    @IsString({ message: `El nombre debe ser un string` })
    nombre?: string;

    @IsDefined({ message: `La edad debe ser definida` })
    @IsNotEmpty({ message: `La edad  no debe estar vacia` })
    @IsInt({ message: `La edad  debe ser un entero` })
    @Min(1, { message: `La edad  debe ser mayor a 0` })
    edad?: number;

    @IsString({ message: `El sexo debe ser un string` })
    @Length(0, 1, { message: `Puede ser F o M` })
    sexo?: string;
}

class Persona {
    constructor(
        public nombre?: string,
        public edad?: number,
        public sexo?: string,
        public codigo?: string
    ) {
        this.nombre = nombre;
        this.edad = edad;
        this.codigo = this.generarCodigo();
        !sexo ? this.sexo = '' : this.sexo = sexo;
    }
    generarCodigo() {
        let letraNumero = ["a", "b", "c", "d", "e", "1", "2", "3", "4", "5"]
        let cadena = ''
        for (let i = 0; i < 10; i++) {
            cadena += (letraNumero[Math.floor(Math.random() * 10)])
        }
        return (cadena)
    }

}

interface Iprops {

}

class Crear extends Component<Iprops> {

    onCreateClickHandler = async (nombre: string, edad: number, sexo: string) => {
        const persona = new Persona(nombre, edad, sexo)
        const errors = await dataValidation(AuthUserValidator, { nombre, edad, sexo });
        if (errors) {
            console.log(`Data Valitation failed `, errors)
        } else {
            axios.post(`/api/users`, { nombre: persona.nombre, edad: persona.edad, sexo: persona.sexo, codigo: persona.codigo })
                .then(response => {
                    if (response.data.length) {
                        console.log(`API Validation succesful`, response.data[1].token, response.data[0]);
                    } else {
                        console.log(`API Validation unsuccesful`, response.data);
                    }
                })
                .catch(error => {
                    console.log(`Error al crear : `, error)
                })
        }
    }
    render() { return <CrearView {...this.props} botonHandler={this.onCreateClickHandler} /> }
}

interface IProps2 {
    botonHandler: any;
}
class CrearView extends Component<IProps2> {
    render() {
        return (
            <CrearForm botonHandler={this.props.botonHandler}></CrearForm>
        );
    }
}

export default Crear;
