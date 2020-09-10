class App extends React.Component {
    render () {
        return (
            <div>
                <greet />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));