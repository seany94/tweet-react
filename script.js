var monkey = "hello";
// var textArr = [];
// var createdArr = [];
// for(var i = 0; i < tweets.length; i++) {
//     var obj = tweets[i];
//     var name = obj.user.screen_name;
//     textArr.push(obj.text);
//     createdArr.push(obj.created_at);

//     // console.log("Name: " + obj.text);
// }

class Tweets extends React.Component {
  render() {
    // console.log(this.props.tweet)
    let tweets = this.props.tweet.map(item => {
      return <p>Tweet ID: {item.id}<br/><img src = {item.user.profile_image_url}/>@{item.user.screen_name}<span> </span>{item.created_at}<br/>{item.text}<br/>Favorites: {item.favorite_count}<span> </span>Retweets: {item.retweet_count}<hr/></p>
  });
    return (
      <div>
        {tweets}
      </div>
      );
    }
}

ReactDOM.render(
    <div>
    <h1>Hello Kanye West</h1>
    <br/>
    Tweets:
    <hr/>
    <Tweets tweet={tweets}/>
    </div>,
    document.getElementById('root')
);