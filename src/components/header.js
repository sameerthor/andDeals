'use client'
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';

import ReactSearchBox from "react-search-box";

export default function Header() {

    const [filterdata, setFilterdata] = useState([]);
    useEffect(() => {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

        axios.get('http://173.231.203.186:8083/stores/')
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
                    <button
                        className="navbar-toggler barBtn"
                        id="ChangeToggle"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="fa-solid fa-bars" />
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
                            onSelect={(record) => Router.push('/' + record.item.key)}
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
