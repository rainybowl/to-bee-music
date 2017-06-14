import React from 'react';
import ReactDOM from 'react-dom';
import YandexMusicApi from 'yandex-music-api';


// var api = new YandexMusicApi();

// api.init({username: 'rainybowls@yandex.ru', password: 'rainyBowl7'}).then(function() {
// 	// place code here
// 	console.log('reached api')
// })



// var ToBeeMusicApp = React.createClass({

//   changeUser: function(username) {
//     this.setState({
//        user: {
//         name: username
//        }
//     }//, function() {
//       //  console.log('changing user ', this.state.user.name)
//       // this.getRecentTracks();
//     //}
//     );     
//   },

//   getRecentTracks: function() {

//       var self = this;

//        if(!self.state.user.name) return;
     
//         getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' +  self.state.user.name + '&api_key=413029c5635ced2aba359f7ebe1ef299&format=json',
//           function(data){
//             self.setState({
//                 tracks: data.recenttracks.track,
//                 currentTrack: data.recenttracks.track[0],
//                 user: {
//                   name: self.state.user.name, // duplicate code
//                   isListeningNow: data.recenttracks.track[0]['@attr'] ?  data.recenttracks.track[0]['@attr']['nowplaying'] : 'false'
//                 }
//             },
//             function() {
//               console.log('got recenttracks ', self.state)
//             });
//           }
//         );
//     },

//   getInitialState: function() {
//     return {
//     	tracks: {},
//     	currentTrack: {},
//       user: {
//         name: '',
//         isListeningNow: false
//       },
    
//     };
//   },

//   componentDidMount: function(){
//   	console.log('RecentTracks mounted');

//       setInterval(
//         this.getRecentTracks,  
//         1000
//       );
//   },

//   render: function() {
//   	var artist = this.state.currentTrack.artist ? this.state.currentTrack.artist['#text'] : '',
//         imageSrc = this.state.currentTrack.image ? this.state.currentTrack.image[1]['#text'] : '';

//     return (
//      <div className="bee-app">

//          <SettingsPanel username={this.state.user.name} onChangeUser={this.changeUser} />

//          <div className="bee-tracks">
//            {this.state.user.name && this.state.user.isListeningNow === 'true' &&
//              <CurrentTrack title={this.state.currentTrack.name} artist={artist} img={imageSrc} />
//            }

//            {this.state.user.name &&
//             <RecentTracks caption="Scrobbels! =)" viewType="bees" count="15" tracks={this.state.tracks} />
//            }
//         </div>

//       </div>
//     );
//   }
// }),

// SettingsPanel = React.createClass({

//   getInitialState: function() {
//     return {
//       userName: this.props.username
//     };
//   },

//   setUser: function(e){
//     this.setState({
//       userName: e.target.value
//      })
//   },

//   changeUser: function(e){
//     e.preventDefault();
//     this.props.onChangeUser(this.state.userName);
//   },

//   render: function() {
//     return (
//       <div>
//         <form className="bee-panel">
//           <label for="user">User name: </label>
//           <input type="text" name="user" value={this.state.userName} onChange={this.setUser} />
//           <input type="submit" value="Change" onClick={this.changeUser} />
//         </form>

//         {this.props.username !='' &&
//           <span>Now using: {this.props.username}_s Musiksammlung!</span>
//         }
//       </div>
//     );
//   }
// }),

// CurrentTrack = React.createClass({

//    getInitialState: function() {
//     return {
//       currentTime: new Date().getTime()
//     };
//   },

//   render: function() {
//     return (
//       <div className="current-track-wrapper">

//         <div className="current-track-caption">
//           Current track
//         </div>
       
//         <div className="current-track">
//           {this.props.img &&
//             <img src={this.props.img} />
//           }
//           <div className="track-desc">
//             <span>"{this.props.title}"</span>
//             <span>{this.props.artist}</span>
//           </div>

//           <br/>
//           <br/>

//           <span>Current UTC is  {this.state.currentTime}</span>
//           <span>Song UTC is  {this.state.currentTime}</span>
//           <span>Song started playing {this.state.currentTime} milliseconds ago</span>

//         </div>
//       </div>
//     );
//   }
// }),

// RecentTracks = React.createClass({

//   getInitialState: function() {
//     return {
//     //  tracks: this.props.tracks,
//     //	songs: []//,
//      // isListeningNow: true
//     };
//   },

//   render: function() {
//   	console.log('RecentTracks rendering');

//   	//var count = this.state.tracks.length; 
//   	var count = +this.props.count//,
//        _songs = [];
        
//   	if(this.props.tracks.length){
//   		for (var i = 0; i < count; i++) {
//   			var _track = this.props.tracks[i];
//         _songs.push(<Song title={_track.name} artist={_track.artist['#text']} now={!i && this.state.isListeningNow} />)
//   			//this.state.songs.push(<Song title={_track.name} artist={_track.artist['#text']} now={!i && this.state.isListeningNow} />)
//   		};
// 	  }

//     return (
//     	<table className={this.props.viewType}>
// 	    	<caption>{this.props.caption}</caption>
// 	    	 {_songs}
//     	</table>
//     );
//   }
// }),

// Song = React.createClass({
//   componentDidMount: function(){
//   	console.log('Song mounted')
//   },

//   render: function() {
//     return (
//     	<tr>
//     		<td>{this.props.title}</td>
//     		<td>{this.props.artist}</td>
//     	</tr>
//     );
//   }
// });

// ReactDOM.render(
//  <ToBeeMusicApp />,
//   document.getElementById('to-bee-music')
// );
