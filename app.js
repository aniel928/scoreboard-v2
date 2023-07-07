const titleId = 'main-title';
const name = 'Anne';

const header = (
    <header>
        { /* my comment*/}
        <h1 id={titleId}> {name}'s First Element!</h1>
        <p className="main-desc">I just learned how to create a React node and render it to the DOM</p>
    </header>
);

ReactDOM.render(header, document.getElementById('root'));