import React, { Component }  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timeline from './components/Timeline'
import Spots from './components/Spots'
import Compliments from './components/Compliments'
import Meeps from './components/Meeps.js'
import ReactAudioPlayer from 'react-audio-player';
import Art from './components/Art'
import mp3_file from './components/sounds/claire.m4a';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      compliments: ["You have the most contagious smile", 
      "You're good at explaining multivariable calculus", 
      "You're extremely huggable", 
      "You still give me butterflies",
      "You're a beautiful writer", 
      "You look good in everything", 
      "You're non-judgemental",
      "You have nice calves", 
      "You always see the silver lining in things", 
      "You have the most gorgeous eyes",
      "You're a prodigy piano player", 
      "You plan amazing dates", 
      "You can match my level of weirdness",
      "You have a sick LEGO collection",
      "You have thought-provoking opinions",
      "You can laugh at yourself", 
      "You give the most original compliments",
      "You're always full of life and energy", 
      "You're incredibly humble", 
      "I'm never bored when I'm with you",
      "You're spontaneous",
      "Arguing with you is fun (usually)", 
      "I've never met someone more loyal than you", 
      "You're great at navigating", 
      "You're a caring friend", 
      "Being around you makes me forget about life's problems", 
      "I can always count on you to make me smile",
      "You inspire me to be a better person"],
      id: 0
    }
  }

  changeTitle = (compliments, id) => {
      if (id === compliments.length-1) { 
        this.setState({ title: compliments[id], id: 0});
      } else {
        this.setState({ title: compliments[id], id: (id+1)});
      }
      console.log(id)
 };

  render(){
  return (
    <div className="App">
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
      <link href="https://fonts.googleapis.com/css?family=Tangerine" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Alegreya&display=swap" rel="stylesheet"/>


      <div className="container-fluid">
        <div className="parallax">
        <ReactAudioPlayer
        src={mp3_file}
        autoPlay
        controls
        />
          <p id="first-line-title" className="title">Happy One Year Anniversary</p>
          </div>
        
      </div>
      <Timeline />
      <div className="parallax2"></div>
      <Spots />
      <div className="parallax3"></div>
      <Compliments title={this.state.title} 
      changeTitle={this.changeTitle} compliments={this.state.compliments}
      id={this.state.id}/>
      <div className="parallax4"></div>
      <Meeps />
      <Art />
    </div>

  );
}
}
export default App;
