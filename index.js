 function getMood() {
	const moods = ['angry', 'happy', 'sad' , 'horny', 'paranoid'];
	return moods[Math.floor(Math.random()*moods.length)];
 }
 
 
 class Hi extends React.Component {
	 render () {
		 return (
			 <div>
				 <h1>Mood is : {getMood()}</h1>
			 </div>
		 );
	 }
 }

 ReactDOM.render(<Hi />, document.getElementById('root'));