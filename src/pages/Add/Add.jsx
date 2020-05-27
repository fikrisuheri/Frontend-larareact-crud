import React, { Component } from 'react'
import { NavComponent } from '../../Component'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { connect } from 'react-redux'
import { setAlertTrue } from '../../redux/action/alert';

class Add extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: '',
                age: '',
                address: '',
                gender: 'Laki-laki'
            }
        }
    }

    _savePeople = async () => {
        try {
            const response = await Axios.post('http://127.0.0.1:8000/api/people/store', this.state.form)
            this.props.setTrue('Berhasil Menambah Data');
            this.props.history.push('/data');
        } catch (error) {
            console.log(error);
        }
    }

    _handleSubmitForm = () => {
        this._savePeople();
    }

    _handleFormChange = (event) => {
        let formData = { ...this.state.form }
        formData[event.target.name] = event.target.value;
        this.setState({
            form: formData
        })
    }

    render() {
        return (
            <div>
                <NavComponent />

                <div className="container mt-5">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            Tambah Pengguna
                            <Link to="/data" className="btn btn-primary">Kembali</Link>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="">Nama Lengkap</label>
                                <input type="text" className="form-control" name="name" onChange={this._handleFormChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Jenis Kelamin</label>
                                <select name="gender" value={this.state.form.gender} className="form-control" onChange={this._handleFormChange}>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Umur</label>
                                <input type="text" className="form-control" name="age" onChange={this._handleFormChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Alamat</label>
                                <input type="text" className="form-control" name="address" onChange={this._handleFormChange} />
                            </div>
                            <button type="button" className="btn btn-success" onClick={this._handleSubmitForm}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setTrue: message => dispatch(setAlertTrue(message))
})

export default connect(null, mapDispatchToProps)(Add);
