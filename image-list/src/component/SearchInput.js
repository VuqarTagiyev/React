import React from 'react';

class SearchInput extends React.Component {

    state = {
        entry: ''
    }

    onInputChange(event) {
        this.setState({
            entry: event.target.value
        })
    }

    render(){
        return(
            <div className = 'ui segment'>
                <form action = "" className = 'ui form'>
                    <div className = 'field'>
                        <div className = 'ui massive icon input'>
                            <input type = "text" placeholder = "search..." 
                            onChange = { this.onInputChange }
                            value = {this.state.entry} />
                            <i className = 'search icon'/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;