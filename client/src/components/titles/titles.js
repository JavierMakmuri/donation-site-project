import React, { Component } from 'react';
import { render } from 'react-dom';

class Title extends Component {
    constructor() {
        super();
        this.state = {
            titles: []
        }
    }

    componentDidMount() {
        fetch('/api/getTitle')
        .then(res => res.json())
        .then(titles => this.setState({titles}, () => console.log("Titles fetched", titles)));
    }

  render() {
      return(
        <div>
        <h2>Titles</h2>
        <ul>
            {this.state.titles.map(title => 
            <li key={title.id}>{title.title}</li>
            )}
        </ul>
      </div>
      );
    }
}

export default Title;