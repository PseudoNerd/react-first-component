class App extends React.Component {
    render() {
        return (
            <Slots 
                s1 = "a"
                s2 = "a"
                s3 = "a"   
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));