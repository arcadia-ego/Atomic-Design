import React, { Component } from 'react';
import axios from 'axios';
import { Options } from '../templates';

class Breeds extends Component {
  state = {
    breeds: [],
    imgLabel: "",
    imgUrl: ""
  }

  filterBreeds(breeds) {
    const choiceBreeds = {
      hound: "hound",
      retriever: "retriever",
      terrier: "terrier",
      poodle: "poodle",
      setter: "setter"
    }

    return breeds.filter(breed => choiceBreeds[breed]);
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
        console.log(response);
        this.setState({ breeds: response.data.message });
        })
    .catch(error => {
        console.log(`There was an error getting dogs: ${error}`);
        });
      }

render() {
  console.log(this.state.breeds);
  return(
    <div>
      {/* <Options props={this.state.breeds} /> */}
    </div>
  )
}

}

export default Breeds;