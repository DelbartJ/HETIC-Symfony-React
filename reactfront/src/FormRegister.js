import React, { Component } from "react";

export default class FormRegister extends Component {
    
    setUser = this.props.setUser;

    constructor(props) {
        super(props);

        this.state = {
            email: "" ,
            username: "",
            password: ""
        }

    }

    handleSubmit(event) {
        event.preventDefault();
        const newItem = {
            id : generateUniqueID(),
            username : this.state.username,
            email : this.state.email,
            password: this.password
        };

        this.setUser(prev => [...prev, newItem]);
    }

    getUsername = (e) => {
        this.setState({username: e.target.value});
    }

    getEmail = (e) => {
        this.setState({email: e.target.value});
    }
    
    getPassword = (e) => {
        this.setState({password: e.target.value});
    }

    render() {
        return(
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="email"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" aria-describedby="username"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        )
    }
}