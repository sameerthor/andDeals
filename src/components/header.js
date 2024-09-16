'use client'
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactSearchBox from "react-search-box";
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const [filterdata, setFilterdata] = useState([]);
    const [mobileSearchActive, setMobileSearchActive] = useState(false);

    // State for desktop search input (ReactSearchBox)
    const [desktopSearchData, setDesktopSearchData] = useState([]);
    
    // State for mobile search input (ReactSearchBox)
    const [mobileSearchData, setMobileSearchData] = useState([]);

    // Fetch data for both search bars
    useEffect(() => {
        axios.get('https://backend.anddeals.com/store-search/')
            .then(function (response) {
                const data = response.data.map(item => ({ key: item.slug, value: item.title }));
                setFilterdata(data); 
                setDesktopSearchData(data); // Set data for desktop search
                setMobileSearchData(data);  // Set data for mobile search
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const toggleMobileSearch = () => {
        setMobileSearchActive(!mobileSearchActive);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg pageHeader">
                {/* Mobile Search Bar */}
                <div className={`mobileSearchInput ${mobileSearchActive ? 'active' : ''}`}>
                    <ReactSearchBox
                        placeholder="Search Store"
                        value=""
                        className="d-flex navbarSearch"
                        data={mobileSearchData}
                        clearOnSelect={true}
                        onSelect={(record) => router.push('/' + record.item.key)}
                    />
                </div>
                <div className="container-fluid">
                    {/* Mobile search trigger */}
                    <div className="mobileSearch">
                        <button className="triggerSearch" onClick={toggleMobileSearch}>
                            {mobileSearchActive ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="18" height="18" fill="#000">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="#fff" className="bi bi-search" viewBox="0 0 20 20">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/* Brand */}
                    <Link className={`navbar-brand ${mobileSearchActive ? 'hidden' : ''}`} prefetch={false} href="/">
                        and<span>Deals</span>
                    </Link>

                    {/* Navbar toggler for mobile */}
                    <button className={`navbar-toggler ${mobileSearchActive ? 'hidden' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" disabled={mobileSearchActive}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={18} height={18} fill="#fff">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </button>

                    {/* Desktop Navbar */}
                    <div className={`collapse navbar-collapse ${mobileSearchActive ? 'hidden' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" prefetch={false} href="/stores">Stores</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" prefetch={false} href="/category">Categories</Link>
                            </li>
                        </ul>

                        {/* Desktop Search Bar */}
                        <ReactSearchBox
                            placeholder="Search Store"
                            value=""
                            className="d-flex navbarSearch"
                            data={desktopSearchData}
                            clearOnSelect={true}
                            onSelect={(record) => router.push('/' + record.item.key)}
                            leftIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#2f3c97" className="bi bi-search" viewBox="0 0 20 20">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </nav>
        </>
    );
}
