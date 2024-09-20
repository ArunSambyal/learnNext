import Link from "next/link";

export default  function NotFound(){
    return(
        <>
            <h2>Not found</h2>
            <p>could not found  request resource</p>
            <Link href="/" className="text-blue-500">Return Home</Link>
        </>
    )
}