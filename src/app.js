const obj = {
    name: 'sushant',
    getName() {
        return this.name;
    }
};

class NotesApp extends React.Component {
    render() {
        const title = 'Note Taking App';
        const subtitle = "made with reactJS";
        const options = ['1','2','3'];
        return (
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options = {options} />
            <AddOption />
            </div>
        )
    }
}
class Header extends React.Component {
    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
class Action extends React.Component {
    handlePick() {
            alert('o');
    }
    render() {
        return (<div>
            <button onClick={this.handlePick} >What Should I do? </button>
       </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
            alert('ok');
    }
    render() {
        return (<div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            {
                this.props.options.map((option)=> <Option key={option} optionText = {option} />)
            }
        </div>
        )
    };
}

class Option extends React.Component {
    render() {
        return (
            <div>
            <p>{this.props.optionText}</p>
            </div>
        );
    };
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
        alert(option);}
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}> 
                <input type="text" name="option" />
                <button >Add Option</button>
                </form>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render( <NotesApp />,app);