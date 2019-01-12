class NufxApp extends React.Component {
  render() {
    const title = 'Nutrient Fix - Bootcamp';
    const subtitle = 'Revamp Your Health, Climb That Mountain of Health';
    const options = ['No more counting calories. ', 'Boost your micro-nutrient levels with these tasty recipes.'];
    

    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Action />
      <Options options={options} />
      <AddOption />      
       </div>
    );
  }
}

class Header extends React.Component {
    render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
       </div>
    );
  }
}

class Action extends React.Component {
 handlePick() {
  alert('handlePick');
 }
 
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>Ready To Begin ?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('Revamp your health');
   }
  
  render() {
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Ready To Begin ?</button>
      {this.props.options.map((option) => <Option key={option} optionText={option}/>)
      }  
      
      
      </div> 
    );
  }
}


class Option extends React.Component {
  render() {
    return (
      <div>
     {this.props.optionText}
        <button>B-Vitamin boost</button>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleGetStarted(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
    
  render() {
    return (
      <div>
      <form onSubmit={this.handleGetStarted}>
      <input type="text" name="option"></input>
      <button>Get Started</button>
      </form>
      </div>
    );
  }
}


ReactDOM.render(<NufxApp />, document.getElementById('app'));
