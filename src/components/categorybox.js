'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

import Link from 'next/link';
export default function CategpryBox() {

    const [categories, setFilterdata] = useState([]);
    useEffect(() => {
        axios.get('https://backend.anddeals.com/categories/')
            .then(function (response) {
                setFilterdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);
    return (
        <>
            <ul>

                {categories.map((item, index) =>
                    <li key={index}>
                        <Link href={`/category/${item.slug}`}>{item.title}</Link>
                    </li>
                )}

            </ul>

        </>
    )

}
