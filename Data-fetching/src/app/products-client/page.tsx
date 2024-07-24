"use client";

import { useEffect, useState } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
}

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:3001/products");
                if (!res.ok) {
                    throw new Error("Network response was not OKAY");
                }
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="grid grid-cols-2 gap-2 p-4">
            {products.map((product: Product) => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-black">
                    <div className="flex flex-col space-y-1">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-sm">{product.description}</p>
                    </div>
                    <div className="flex flex-col space-y-1 items-end">
                        <div className="text-md">{product.price}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ProductsPage;