import ListUser from "../components/ListUsers";

export default function UsersPage({users}){
    return <>
        <h1>Users</h1>
        <ListUser users={[...users]}/>
        </>
}

export async function getStaticProps(context) {
    const users = [
        await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
        await (await fetch('https://jsonplaceholder.typicode.com/users/2')).json()
    ];
    // users[0].name = 'VVVVVVVVVVVV';

    return {
      props: {users}, // will be passed to the page component as props
    }
  }