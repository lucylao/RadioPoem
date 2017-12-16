const React = require('react')
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor() {
    super();
    this.fontSizes = ['small','medium','large'];
    this.state = {
      fontSize: 'medium'
    };
  }

  handleChange = e => {
    this.setState({
      fontSize: e.target.value
    });
  }

  render() {
    let poemFontSize = {};
    if (this.state.fontSize === 'small') {
      poemFontSize.fontSize = '8px';
    }
    if (this.state.fontSize === 'medium') {
      poemFontSize.fontSize = '15px';
    }
    if (this.state.fontSize === 'large') {
      poemFontSize.fontSize = '25px';
    }
    return(
      <div>
      {this.fontSizes.map(s => <div>
      <input 
        type='radio' 
        value={s} 
        checked={this.state.fontSize === s}
        onChange={this.handleChange} />{s}</div>)}
      <pre style={poemFontSize}>{`
        Apple
        Apple plum, carpet steak, seed clam, colored wine, 
        calm seen, cold cream, best shake, potato, potato and 
        no no gold work with pet, a green seen is called bake and 
        change sweet is bready, a little piece a little piece please.

        A little piece please. Cane again to the presupposed and 
        ready eucalyptus tree, count out sherry and ripe plates and 
        little corners of a kind of ham. This is use.
      `}</pre>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
