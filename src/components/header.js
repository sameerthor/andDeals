'use client'
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';

import ReactSearchBox from "react-search-box";
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    const [filterdata, setFilterdata] = useState([]);
    useEffect(() => {

        axios.get('https://backend.anddeals.com/store-search/')
            .then(function (response) {
                var d = response.data.map(item => { return { key: item.slug, value: item.title } })
                setFilterdata(d);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);
    return (
        <>
            <nav className="navbar navbar-expand-lg pageHeader">
                <div className="container-fluid">
                    <Link className="navbar-brand" prefetch={false} href="/">
                        and<span>Deals</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={18} height={18} fill="#fff">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    prefetch={false}
                                    href="/stores"
                                >
                                    Stores
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" prefetch={false} href="/category">
                                    Categories
                                </Link>
                            </li>

                        </ul>

                        <ReactSearchBox
                            placeholder="Search Store"
                            value=""
                            className="d-flex navbarSearch"
                            data={filterdata}
                            clearOnSelect={true}
                            onSelect={(record) => router.push('/' + record.item.key)}
                            leftIcon={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="#2f3c97"
                                className="bi bi-search"
                                viewBox="0 0 20 20"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>}
                        />
                    </div>
                </div>
            </nav>


        </>
    )

}
