import OneUser from '../components/OneUser'
import FetchUser from '../components/FetchUser'
import { useState } from 'react'


export default function ListUser({ users: propsUsers }) {
  const [stateUsersIds, setUsers] = useState([]);
  return (<div className="user-list">
    { propsUsers.map((user,k) => <OneUser user={user} key={k}/>)}
    { stateUsersIds.map(id => <FetchUser id={id} key={id} />)}
    <button onClick={() => setUsers(old => [...old, 1 + propsUsers.length + stateUsersIds.length])} >Next User</button>
  </div>)
}