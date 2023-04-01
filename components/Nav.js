import Link from 'next/link'

export default function Nav(){
    return <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/info">Info</Link></li>
            <li><Link href="/users">Users</Link></li>
            <li><Link href="/posts">Posts</Link></li>
        </ul>
    </nav>
}