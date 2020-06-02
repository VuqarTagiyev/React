import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component {

    state = {
        images: []
    }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=16824989-8faeb0ed4292d5c33892146bf&q=${entry}&image_type=photo`)
        this.setState({
            images: response.data.hits
        })
    }
    render(){
        return(
            <div className = 'ui container' style = {{ marginTop: '30px'}}>
                <SearchInput onSearchSubmit = {this.onSearchSubmit} />
                We have {this.state.images.length} images
                <ImageList images = {this.state.images} />
            </div>
        )
     }
}


export default App;