class App extends React.Component {
    render() {
        return (
            <div>
                <Friends name = "Rishu" hobbies = {['dancing', 'coding']} from= "Tanmay" />
                <Friends name = "Rishu" hobbies = {['dancing', 'coding']} /> 
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));