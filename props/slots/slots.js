class Slots extends React.Component {
    render() {
        let char = Math.floor(Math.random()*3 + 1);
        return (
            <div>
                {char}
                
            </div>
        )
    }
}

