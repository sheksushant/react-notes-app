import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class NotesApp extends React.Component {

  state = {
    options  :[],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({
        options: []
    }));
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState)=> ({
        options : prevState.options.filter((option)=>{
          return (optionToRemove !== option);
        })
    }))
  }

  handlePick=()=> {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  }
  handleAddOption=(option)=>{
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
          <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
        </div>
      );
    }
  }

