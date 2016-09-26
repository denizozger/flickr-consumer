import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';



// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// var UserGist = React.createClass({
//   getInitialState: function() {
//     return {
//       username: '',
//       lastGistUrl: ''
//     };
//   },

//   componentDidMount: function() {
//     this.serverRequest = $.get(this.props.source, function (result) {
//       var lastGist = result[0];
//       this.setState({
//         username: lastGist.owner.login,
//         lastGistUrl: lastGist.html_url
//       });
//     }.bind(this));
//   },

//   componentWillUnmount: function() {
//     this.serverRequest.abort();
//   },

//   render: function() {
//     return (
//       <div>
//         {this.state.username}'s last gist is
//         <a href={this.state.lastGistUrl}>here</a>.
//       </div>
//     );
//   }
// });

ReactDOM.render(
  <App source="https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?" />,
  document.getElementById('root')
);