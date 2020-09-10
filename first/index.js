 function getMood() {
	const moods = ['angry', 'happy', 'sad' , 'horny', 'paranoid'];
	return moods[Math.floor(Math.random()*moods.length)];
 }
 
 
 class Hi extends React.Component {
	 render () {
		var mood = getMood();
		 return (
			 <div>
				<h1>Mood is : {mood}</h1>
		 		<p>{ mood === "sad" ? "why you sad":"awesome" }</p>
			 </div>
		 );
	 }
 }

 ReactDOM.render(<Hi />, document.getElementById('root'));