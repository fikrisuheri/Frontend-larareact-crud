import React, { Component } from 'react'
import { NavComponent } from '../../Component'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getPeoples } from '../../redux/action/people';
import Axios from 'axios';
import { setAlertFalse, setAlertTrue } from '../../redux/action/alert';


class Data extends Component {

    constructor(props) {
        super(props)
        this.state = {
            people: [],
            isLoading: true,
            alertMessage: '',
        }
    }

    async _getPeople() {
        try {
            await this.props.get('http://127.0.0.1:8000/api/people/all')
            this.setState({
                people: this.props.dataPeople.peoples,
                isLoading: false,
            })

            setTimeout(() => {
                this.props.hiddenAlert('Berhasil menghapus Data');
                this.setState({
                    alertMessage: this.props.stateAlert.alertMessage
                })
            },3000)
        } catch (error) {
            console.log(error);
        }
    }

    _deletePeople = async (id) => {
        try {
            const response = await Axios.get(`http://127.0.0.1:8000/api/people/delete/${id}`)
            this.props.showAlert('Berhasil menghapus Data');
            this.setState({
                alertMessage: this.props.stateAlert.alertMessage
            })
            this._getPeople();
        } catch (error) {
            console.log(error);
        }
    }

    _handleEdit = (item) => {
        this.props.history.push({
            pathname: '/edit',
            state: {
                data: item
            }
        });
    }

    _setAlertRedux = () => {
        this.setState({
            alertMessage: this.props.stateAlert.alertMessage
        })
    }

    componentDidMount() {
        this._setAlertRedux();
        this._getPeople();
    }

    render() {
        return (
            <div>
                <NavComponent />
                <div className="container mt-5">
                    {
                        this.state.alertMessage == ''
                            ?
                            <div></div>
                            :
                            <div class="alert alert-success" role="alert">
                                <strong>Berhasil! {this.state.alertMessage} </strong>
                            </div>
                    }
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            Data Pengguna <Link className="btn btn-primary" to="/add">Tambah</Link>
                        </div>
                        <div className="card-body">
                            <table class="table table-bordered table-hovered">
                                <thead class="thead-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Nama</th>
                                        <th>Jenis Kelamin</th>
                                        <th>Umur</th>
                                        <th>Alamat</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.isLoading
                                            ?
                                            <tr>
                                                <td colSpan="7" className="text-center">Sedang Mengambil Data</td>
                                            </tr>
                                            :
                                            this.state.people.map((item, i) => (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.gender}</td>
                                                    <td>{item.age}</td>
                                                    <td>{item.address}</td>
                                                    <td>
                                                        <div className="d-flex justify-content-around">
                                                            <button onClick={() => this._handleEdit(item)} className="btn btn-warning">Edit</button>
                                                            <button onClick={() => this._deletePeople(item.id)} className="btn btn-danger">Hapus</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataPeople: state.listPeople,
        stateAlert: state.stateAlert
    }
}

const mapDispatchToProps = dispatch => ({
    get: url => dispatch(getPeoples(url)),
    hiddenAlert: () => dispatch(setAlertFalse()),
    showAlert: message => dispatch(setAlertTrue(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Data);