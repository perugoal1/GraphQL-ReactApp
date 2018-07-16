import React, {Component} from 'react';
import gql from 'graphql-tag'; 
import {graphql} from 'react-apollo';


class SongList extends Component{

    renderSongs(){
        return this.props.data.songs.map((song, id) =>{
            return (
                <li key={id}>asdasd</li>
            )
        })
    }

    render(){
        if(this.props.data.loading){
            return(
                <div>Loading...</div>
            )
        }
        return(
            <div>
                <ul>{this.renderSongs()}</ul> 
            </div>
        )
    }
} 

const query = gql `
    {
        songs{
            title
        }
    }
`;


export default graphql(query)(SongList);