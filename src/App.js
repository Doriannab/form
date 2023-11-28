import React, { useRef, useState } from 'react'
// import Hello from './Hello';
import Tweet from './Tweet';
import Form from './Form';
import List from './List';


const DEFAULT_TWEET = [
  {
    id: 0,
    name:'Kevin',
    content:'Hop',
    like:237,
  },
  {
    id: 1,
    name:'Audrey',
    content:'Nice',
    like:98,
  },
  {
    id: 2,
    name:'Albert',
    content:'Good',
    like:503,
  },
  {
    id: 3,
    name:'Pierre',
    content:'cool',
    like:190,
  }
];

const useTweets = () => {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

    const addTweet = (tweet) => {
     
      setTweets(ann => {

        const newTweet = {
          id: ann[ann.length - 1]?.id + 1 ?? 0,
          name: tweet.name,
          content: tweet.content,
          like: 0,
        };
       return [...tweets, newTweet]
      });
  };

  const onDelete =  (tweetId) =>{
    setTweets((ann) => ann.filter((tweet) => tweet.id !== tweetId));
  };

  const onLike = (tweetId) => {
    setTweets(ann => {
      const copyTweet = [...ann];

      const likedTweet = copyTweet.find(tweet => tweet.id === tweetId);
      likedTweet.like += 1;

      return copyTweet

    });

  };

  return { onLike, onDelete, addTweet, tweets }
}


function App() {
  const { onLike, onDelete, addTweet, tweets } = useTweets();
  return (
    <div >
    <Form onSubmit ={addTweet} />
   <List tweets={tweets} onDelete={onDelete} onLike={onLike}/>
  </div>
  )
}


export default App;
