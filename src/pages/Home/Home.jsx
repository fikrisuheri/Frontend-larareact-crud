import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavComponent } from '../../Component'
import { Jumbotron, Button } from 'react-bootstrap'
export default class Home extends Component {
    render() {
        return (
            <div>
                <NavComponent />
                
                <div className="container mt-5">
                    <Jumbotron>
                        <h1>Selamat Datang Di LaraReact Crud</h1>
                        <p>Aplikasi crud sederhana menggunakan framework laravel sebagai teknologi backendnya dan React Js sebagai teknologi frontendnya</p>
                        <p>
                            <Button variant="primary" href="https://github.com/fikrisuheri" >See My Github</Button>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}
