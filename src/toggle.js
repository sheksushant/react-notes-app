const app = document.getElementById('app');

let buttonText = 'Show';
let text = '';
const toggle = ()=> {
    if(text === ''){
    text = 'jiber jaber';
    buttonText = 'Hide';
}
else {
    text = '';
    buttonText = 'Show';
}


    render();

}

const render = ()=> {
    const template = (
        <div>
        <h1>Visibility</h1>
        <button onClick={toggle}>{buttonText}</button>
        <p>
        {text}</p>
        </div>
    );

    ReactDOM.render(template,app);
}

render();