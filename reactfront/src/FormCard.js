import React, { Component } from "react";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID"

export default class FormCard extends Component {
    setCards = this.props.setCards;

    constructor(props) {
        super(props);

        this.state = {
            title: "" ,
            message: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const newItem = {
            id : generateUniqueID(),
            titre : this.state.title,
            message : this.state.message
        };

        this.setCards(prev => [...prev, newItem]);
    }

    getTitle = (e) => {
        this.setState({title: e.target.value});
    }

    getMessage = (e) => {
        this.setState({message: e.target.value});
    }


    render() {
        return(
            <form className="my-5 text-center" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control mb-3" placeholder="Titre" onChange={this.getTitle}/>
                <textarea rows="3" className="form-control mb-3" placeholder="Message" onChange={this.getMessage}/>
                <button type={"submit"} className="btn btn-primary"> C'est parti</button>
            </form>
        )
    }
}