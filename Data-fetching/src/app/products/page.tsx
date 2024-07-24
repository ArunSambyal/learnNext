
import Link from "next/link";
// import { cookies } from "next/headers";
// export const fetchCache = "default-cache";

type Products = {
    id: number,
    title: string,
    price: number,
    description: string
}


export default async function ProductsPage() {

    const res = await fetch("http://localhost:3001/products",{
        next:{
            revalidate:10 //revalidate the req 10seconds 
        }
    })
    const user = await res.json()
    // const cookiesStore = cookies()
    // cookiesStore.get("theme")
    // const detailsResponse = await fetch("http://localhost:3001/products/1")
    // const details = await detailsResponse.json()
    console.log(user);
    return (
        <>
            <div>
                <Link href={"/"}>Home</Link>
            </div>
            <div>
                {user.map((users: Products) =>
                    <div key={users.id}>
                        <h1>{users.title}</h1>
                        <h2>{users.price}</h2>
                        <h3>{users.description}</h3>
                        {/* <h2>{details.price}</h2> */}
                    </div>
                )}
            </div>
        </>
    )
};