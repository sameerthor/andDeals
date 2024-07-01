import Image from "next/image";
import Link from "next/link";
import { asyncMap } from 'modern-async'
import "@/styles/categories.css";
import moment from "moment";
import { NextSeo } from "next-seo";
export default function Categories({ categories }) {
    return (
        <>
        <NextSeo
                title="Category - Anddeals"
                description="Anddeals offers an extensive list of coupons and promo codes from top brands. Discover exclusive discount codes, free shipping offers, and unbeatable deals - all at one place. We are here to help you save money on everything you need."
            />
            <section className="allCategories">
                <div className="container">
                    {/* <h1>All Categories</h1> */}
                    <div className="row">
                        <div className="col-lg-9 p-0">
                            <div className="row catBox">
                                {categories.map((item, index) =>
                                    <div className="col-md-3 col-sm-6 p-1" key={index}>
                                        <Link className="catCard" href={`/category/${item.slug}`}>
                                            <div className="imgBox">
                                                {item.title}
                                            </div>
                                            <div className="dealCount">
                                                <span>
                                                    {item.store_set.reduce((count, current) => count + current.coupon_set.filter(x => x.coupon_type == 'code').length, 0)} coupons <small>|</small> {item.store_set.reduce((count, current) => count + current.coupon_set.filter(x => x.coupon_type == 'deal').length, 0)} Deals
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 p-0">
                            <div className="catSidebar">
                                <div className="sidebarWidget catDesc">
                                    <div className="catHeading">
                                        <h2>All Categories</h2>
                                    </div>
                                    <div className="catValue">
                                        <p>Total Categories:</p>
                                        <h4>{categories.length} +</h4>
                                        <p>Total Coupon &amp; Offers:</p>
                                        <h4> {categories.reduce((count, current) => count + current.store_set.reduce((count1, current1) => count1 + current1.coupon_set.length, 0), 0)} +</h4>
                                    </div>
                                    <div className="verifiedBox">
                                        <p className="text-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="#b9dc2f"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                            </svg>
                                            Verified On: {moment().format("dddd, Do MMMM YYYY")}
                                        </p>
                                    </div>
                                </div>
                                <div className="sidebarWidget">
                                    <h2>Popular Merchants</h2>
                                    <ul>
                                        {categories.map((item) =>
                                            item.store_set.map((item1, index) => {
                                                if (index == 0) {

                                                    return <li>
                                                        <Link href={`/${item1.slug}`}>{item1.title}</Link>
                                                    </li>
                                                }
                                            }))}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://backend.anddeals.com/categories?ordering=title`)
    const categories = await res.json()
  
    return {
        props: {
            categories
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}
