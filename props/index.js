
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi</h1>
                <Hello to = "Rishu" from = "Tanmay" />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));