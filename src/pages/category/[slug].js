import Image from 'next/image'
import _ from 'lodash'
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Link from "next/link";
import Router from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "@/styles/categories.css";
import dynamic from "next/dynamic";

function Category({ category, categories }) {
    const CategoriesBox = dynamic(() => import('@/components/categorybox'), 
    {
       ssr: false,
    });
    return (
        <>
            <NextSeo
                title={category.meta_title.replace("%%currentyear%%", moment().format('YYYY'))}
                description={category.meta_description.replace("%%stores%%", _.map(category.store_set.sort(function (a, b) {
                    return b.coupon_set.length - a.coupon_set.length;
                }).slice(0, 3), 'title').join(', ') + ".")}
            />
            <section className="storePage">
                <div className="container">
                    <div className="breadcrumb">
                        <ul>
                            <li>
                                <Link href="/">andDeals.com</Link> /
                            </li>
                            <li>
                                <a href="/category">categories</a> /
                            </li>
                            <li>{category.title}</li>
                        </ul>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <h1 className="pageHeading">
                            Best {category.title} Coupons &amp; Deals for {moment().format("MMMM YYYY")}
                        </h1>
                        <div className="subCatBox">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="offerToday">
                                        <h3>Today's {category.title} Offers</h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>🛍️ Total Offers</td>
                                                    <td className="text-right">{category.store_set.reduce((count, current) => count + current.coupon_set.length, 0)}</td>
                                                </tr>
                                                <tr>
                                                    <td>🏷️ Active Coupon Codes</td>
                                                    <td className="text-right">{category.store_set.reduce((count, current) => count + current.coupon_set.filter(x => x.coupon_type == 'code').length, 0)}</td>
                                                </tr>
                                                <tr>
                                                    <td>🛒 Free Shipping</td>
                                                    <td className="text-right">{category.store_set.reduce((count, current) => count + current.coupon_set.filter(x => x.title.toLowerCase().includes("shipping")).length, 0)}</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="similarStore">
                                        <h3 className="widgetHeading">Similar Categories</h3>
                                        <CategoriesBox/>
                                      
                                    </div>
                                </div>
                                <div className="col-lg-9 p-0">
                                    <div className="row">
                                        {category.store_set.map(item =>
                                            <div className='col-md-3'>
                                                <Link href={`/${item.slug}`} className="storeBox">
                                                    <div className="imgBox">
                                                        <img src={`${item.image}`} alt="" />
                                                    </div>
                                                    <div className="dealCount">
                                                        <span>View {item.coupon_set.length} Coupons</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        )

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============= */}
                        {/* <div className="pagination">
                            <ul>
                                <li>
                                    <a href="#" className="active">
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">...</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-chevron-double-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </section>

        </>

    )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {

    const res = await fetch(`https://backend.anddeals.com/categories/${params.slug}`)
    const category = await res.json()
    if (category.detail) {
        return {
            notFound: true
        };
    }


  
    return {
        props: {
            category
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const res = await fetch('https://backend.anddeals.com/categories')
    const categories = await res.json()

    // Get the paths we want to pre-render based on categories
    const paths = categories.map((item) => ({
        params: { slug: item.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}

export default Category