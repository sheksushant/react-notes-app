const obj = {
    name: "sushant",
    getName() {
      return this.name;
    }
  };
  
  class NotesApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePik = this.handlePik.bind(this);
      this.state = {
        options: ["Something", "Something Else"]
      };
    }
    handleDeleteOptions() {
      this.setState(() => {
        return {
          options: []
        };
      });
    }

    handlePik() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.option(randomNum);
      alert(option);
    }
  
    render() {
      const title = "Note Taking App";
      const subtitle = "made with reactJS";
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action 
          hasOptions={this.state.options.length > 0} 
          handlePik={this.handlePik} 
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
          />
          <AddOption />
        </div>
      );
    }
  }
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1> {this.props.title} </h1> <h2> {this.props.subtitle} </h2>{" "}
        </div>
      );
    }
  }
  class Action extends React.Component {
    render() {
      return (
        <div>
          <button onClick={this.props.handlePik} disabled={!this.props.hasOptions}>
            What Should I do ?{" "}
          </button>{" "}
        </div>
      );
    }
  }
  
  class Options extends React.Component {
    render() {
      return (
        <div>
          <button onClick={this.props.handleDeleteOptions}> Remove All </button>{" "}
          {this.props.options.map(option => (
            <Option key={option} optionText={option} />
          ))}{" "}
        </div>
      );
    }
  }
  
  class Option extends React.Component {
    render() {
      return (
        <div>
          <p> {this.props.optionText} </p>{" "}
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    handleAddOption(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      if (option) {
        alert(option);
      }
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button> Add Option </button>{" "}
          </form>{" "}
        </div>
      );
    }
  }
  
  const app = document.getElementById("app");
  
  ReactDOM.render(<NotesApp />, app);
  