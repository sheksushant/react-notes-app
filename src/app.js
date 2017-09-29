
const app = {
    title : 'React Notes',
    subtitle: 'Lets Note...',
    options : []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const wipe = ()=> {
    app.options = [];
    render();
}

const numbers = [10,20];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    render();
};

const appRoot = document.getElementById('app');
let i = 0;
const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        
        <button disabled={app.options.length=== 0} onClick= {onMakeDecision}>What Should I do?</button>
        <button onClick={wipe}>Remove All</button>

        <ol>
        {
            app.options.map((option) => {
                return <li key={option}>{option}</li>
            })
        }
        </ol>
        
        <form onSubmit = {onFormSubmit}>
            <input type="text" name= "option"></input>
            <button>Add Option</button>
        </form>
        </div>);

    ReactDOM.render(template,appRoot);
};
render();