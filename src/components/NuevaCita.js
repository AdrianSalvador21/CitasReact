import React, {Component} from 'react';
import uuid from 'uuid';

const stateInicial = {
    cita : {
        mascota : '',
        propietario: '',
        fecha: '',
        sintomas: ''
    },
    error : false
};

class NuevaCita extends Component {
    state = {...stateInicial};


    // Usuario escribe en los inputs
    handleChange = e => {
        console.log(e.target.name, e.target.value);

        // Colocar lo que el usuario escribe en el state
        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name]: e.target.value
            },
            error: false
        })
    };

    // cuando el usuario envia el formulario
    handleSubmit = e => {
      e.preventDefault();
      // extraer los valores del state
        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;
        // validar que todos los campos esten llenos
        if (mascota === '' || propietario === '' || fecha === '' || hora === '') {
            this.setState({
                error: true
            });
            // Detener la ejecucion con un return si no hay datos
            return;
        }


        // Generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();
        // Agregar la cita al state de app
        this.props.crearNuevaCita(nuevaCita);


        // Colocar en el state inicial
        this.setState({
            ...stateInicial
        });
    };

    render() {
        // extraer valor del state
        const {error} = this.state;
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">
                        Todos los campos son obligatorios
                    </div>  : null}

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascota
                            </label>

                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    value={this.state.cita.mascota}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueño
                            </label>

                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="propietario"
                                    value={this.state.cita.propietario}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>

                            <div className="col-sm-4 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    value={this.state.cita.fecha}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>

                            <div className="col-sm-4 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    value={this.state.cita.hora}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Síntomas
                            </label>

                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control"
                                          name="sintomas"
                                          placeholder="Describe los sintomas"
                                          value={this.state.cita.sintomas}
                                          onChange={this.handleChange}
                                >
                                </textarea>
                            </div>
                        </div>

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block"
                                value="Agregar Nueva Cita"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;
