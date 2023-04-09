import { useState } from 'react'

import OnePost from '../components/OnePost'
import FetchPost from '../components/FetchPost'



export default function ListPosts({ posts: propsPosts }) {
  const [statePostsIds, setPosts] = useState([]);
  const newNumbers = [...Array(10).keys()].map(x=>x+1 + propsPosts.length + statePostsIds.length);
  return (<div className="post-list">
    { propsPosts.map((post,k) => <OnePost post={post} key={k}/>)}
    { statePostsIds.map(id => <FetchPost id={id} key={id}/>)}
    <button onClick={() => setPosts(old => [...old, ...newNumbers])} >Next 10 posts</button>
  </div>)
}