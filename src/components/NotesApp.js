import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class NotesApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: []
      };
    }
  
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
        this.setState(() => ({options}))}
      } catch (e) {
        console.log(e);
      }
    }
  
    componentDidUpdate(prevProps,prevState) {
      if(prevState.options.lengtn !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
      }
    }
  
    handleDeleteOptions() {
      this.setState(() => ({
          options: []
      }));
    }
  
    handleDeleteOption(optionToRemove) {
      this.setState((prevState)=> ({
          options : prevState.options.filter((option)=>{
            return (optionToRemove !== option);
          })
      }))
    }
  
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
    handleAddOption(option){
      if(!option){
        return 'Enter Task..'
      }
      else if (this.state.options.indexOf(option) > -1){
          return 'Task Exists..'
      }
      this.setState((prevState) => ({
          options: prevState.options.concat([option])
      }));
      console.log(option);
    }
    render() {
      const title = 'React Notes App';
      const subtitle = 'Random Task Assigner';
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
      );
    }
  }

