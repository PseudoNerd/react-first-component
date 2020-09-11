class Friends extends React.Component{

    static defaultProps = {
        from: "Sweta"
    };

    render() {        
        const props  = this.props
        const {name, hobbies} = props;

        return (
            <div>
                <h1>Hi {name} from {props.from}</h1>
                <ul>
                    { hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}
