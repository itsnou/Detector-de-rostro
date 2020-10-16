import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

import './App.css';


const app = new Clarifai.App({
  apiKey: '8ac4a070129b4a12ba9309639b92d6ac'
 });

const particlesOpt={
  particles: {
    number:{
      value:150,
      density:{
        enable:true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl:''
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }
 
  onSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      'c0c0ac362b03416da06ab3fa36fb58e3',
      this.state.input)
      .then(
        function(response){
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err){
          console.log(err);
        }
      );

  }

 render(){
  return (
    <div className="App">
      <Particles className='particles'
          params={particlesOpt} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onSubmit={this.onSubmit}
      />
      <FaceRecognition imageUrl={this.state.imageUrl} />
    </div>
  );
}
}

export default App;
