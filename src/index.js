import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

////////////////////////////////////////////////////////////
//EMBEDDING EXPRESSIONS IN JSX(SUCCESS)
ReactDOM.render(
  <h1>Hello, Class!</h1>,
  document.getElementById('root')
)

function people(person, message){
  return person + ' was always ' + message;
}

const name = (
  <h1>
    {people('Emma', 'a Monster')}<br/>
    {people('Jay', 'super loco')}<br/>
    {people('Peca', 'a Monkey')}<br/>
    {people('Brandon', 'kinda intense')}
  </h1>
)

ReactDOM.render(
  name,
  document.getElementById('people'),
)


/////////////////////////////////////////////////////////////
// ADDING JSX TO REGULAR JS (UNSUCCESFUL)
// if(name = null){
//   return 'You need to put in some values!'
// } else {
//    return name
// }


/////////////////////////////////////////////////////////////
//SPECIFYING ATTRIBUTES WITH JSX: I still don't fully know how this works, make sure you ask Teako
//(SUCCESFUL!)

//You may use quites to specify string literals as attributes
// const element = <div tabIndex="0"></div>

//You may also use curly braces to embed a JS expression in an attribute.
// const secondElement = <img src={user.avatarUrl}></img>

function classShifter(name){
  return name
}

const bodySection = (
  <div className={classShifter('red')}>"Try this section"</div>
)

const bodyTwo = (
  <div className={classShifter('blue')}>'This section is supposed to be blue!'</div>
)


ReactDOM.render(
  [bodySection, bodyTwo],
  document.getElementById('colors')
)



//SPECIFYING CHILDREN WITH JSX
//NOTICE: if a tag is empty, you may close it immediately with />, like XML
//(SUCCESSFUL)
  let topDescription = (
    <div>
      <section className= 'myTexts'>
        <h3>'This is just one sample text'</h3>
        <h3>'This is another sample text'</h3>
      </section>
    </div>
  )

  ReactDOM.render(
    topDescription,
    document.getElementById('description1')
  )

// CONVERTING IT TO CREATEELEMENT
//(UNSUCCESSFUL: I don't know how to embed children elements using this format)

  // let topDescription = React.createElement(
  //   'div',
  //   'section',
  //   {className: 'myTexts'},
  //
  // )

  //////////////////////////////////////////////////////////////////////////////////////////////


//RENDERING AN ELEMENT INTO THE DOM:
//MEGA SUCCESS!!! Not only did I render it, but I found a way to render, multiple objects into 1 element, by using arrays. LOOK AT THE EXAMPLE BELOW!

  let weather = <h3>'This Weather is crazy. Watch out!'</h3>;
  ReactDOM.render(weather, document.getElementById('weather'));


//COMBINING A FUNCTION WITH JSX STOCK EXAMPLE:
//SUCCESS: Don't forget to get good at the setting time interval, and all that has to do with time with JS.
  function tick(){
    const element = (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )

    ReactDOM.render(element, document.getElementById('root'));
  }

  setInterval(tick, 1000);

//CREATING A COMPONENT AND DEFINING AN ELEMENT FOR IT:
//SUCCESS: Although, I wasn't able to create an id within it and call it in css. I also got some kind of warning about having a unique key prop. Look into it.

class Machines extends React.Component{
  render(){
    return <h2>This Machine is {this.props.jay}</h2>
  }
}

let machines = (
  <Machines jay="myMac"/>
)

ReactDOM.render(
  machines,
  document.getElementById('mac')
)

//FUNCTIONAL COMPONENT
//RULES: Components are always Capitalized.
//Don't forget to include parenthesis for your return statement, otherwise it's not going to register your return statement

 function MiniDisplay(){
  return(
  <div className = 'displays'>
    <div className = 'display-screen'>
      KEEP IT UP
    </div>

    <button>Previous step</button>
    <button>Current step</button>
    <button>Future step</button>
  </div>
  )
 }

//Make sure you convert your function to an element, before you pass it in.
 const miniDisplay = <MiniDisplay />

 ReactDOM.render(
   miniDisplay,
   document.getElementById('displays')
 )

 //CLASS COMPONENT:
 //NOTICE: Whatever elements you include in your component must be wrapped inside a single element.

class Hotels extends React.Component {
  render(){
    return (
      <div>
        <h2>LIST OF HOTELS IN THE AREA</h2>
        <ul>
          <li>Marriot</li>
          <li>Ritz Carlton</li>
          <li>Holiday Inn</li>
        </ul>
      </div>
    )
  }
}

const hotels = <Hotels />

ReactDOM.render(
  hotels,
  document.getElementById('hotels')
)

//CLASS COMPONENT WITH A SINGLE prop

class HotelCreator extends React.Component {
  render(){
    <div>
      <h2>HOTELS RENDERED</h2>
      <ul>
        <li></li>
      </ul>
    </div>

  }
}



















//
