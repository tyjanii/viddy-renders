import React, { Component } from 'react'

export default class SearchBar extends Component {
    state={
        term:'',
    }
    onInputChange=(event)=>{
        this.setState({term:event.target.value})
    }
    onFormSubmit=event=>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
        //Make Sure we call stuff
    }

    render() {
        return (
            <div className=" search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" onChange={this.onInputChange} value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}
