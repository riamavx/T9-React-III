import React, { Component } from 'react';
import api from "../../services/api/api"
import {Link} from 'react-router-dom'
import './style.css'

class Main extends Component {
    state = {
        biographies: []
    }

    componentDidMount() {
        this.loadBiographies();
    }

    loadBiographies = async () => {
        //resposta da ipi
        const response = await api.get(`/biographies`)


        const { docs } = response.data


        this.setState({ biographies: docs })
    }


    render() {
        const { biographies } = this.state;

        return (
            <div className="biography_list">
                {biographies.map(biography=>(
                    <article key={biography._id}>
                        <strong>{biography.nome}</strong>
                         <p className="biography_description">{biography.description}</p>
                         <Link to={`/biograpies/${biography._id}`}>Acessar</Link>
                    </article>
                ) )}


            </div>
        )

    }

}


export default Main;