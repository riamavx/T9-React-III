import React, {Component} from 'react';
import api from '../../services/api/api';
import './biography.css';


class Biography extends Component{
    state={
        biography:{}
    }
    async componentDidMount(){
        const {id} = this.props.match.params;
        
        const response = await api.get(`/biography/${id}`)
        this.setState({biography: response.data})
    }
    render(){
        const {biography} = this.state;

        return(
            <div className="biography_info">
                <h1>{biography.nome}</h1>
                <p className="biography_description">{biography.description}</p>
                <a href={biography.url}>Leia Mais </a>
            </div>
        )
    }
}



export default Biography;