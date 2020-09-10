class Slots extends React.Component {
    render() {
        console.log(this.props);
        const {s1,s2,s3} = this.props;
        const win = (s1===s2) && (s2===s3);
        return (
            <div>  
                <h1>{win ? 'w' : 'l'}</h1>
            </div>
        )
    }
}

