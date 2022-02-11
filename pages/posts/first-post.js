import Link from 'next/link'

export default function FirstPost() {
    return (
    <div>
        <h1>First Post</h1>
        <Link href="/">
            <a><h2>Go back to home!</h2></a>
        </Link>
    </div>
    )
}