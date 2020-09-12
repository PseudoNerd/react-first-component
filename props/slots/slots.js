class Slots extends React.Component {
    render() {
        console.log(this.props);
        const {s1,s2,s3} = this.props;
        const win = (s1===s2) && (s2===s3);
        const colors =  { 
                            fontSize:'40px',
                            backgroundColor:'white',
                            border:'2px solid black'
                        }
        return (
            <div className="Slots">
                <p style={colors}>
                    {s1} {s2} {s3}
                </p>  
                <h1>{win ? 'w' : 'l'}</h1>
            </div>
        )
    }
}

