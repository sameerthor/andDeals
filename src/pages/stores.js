import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faSearch
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "@/styles/stores.css";
import { NextSeo } from "next-seo";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export default function Stores({ stores }) {


    return (
        <>
            <NextSeo
                title="Stores 2024 - Anddeals"
                description="Anddeals brings the latest coupons & promo codes for thousands of stores. Save big on fashion, electronics, travel, and more. Get up to 40% Off discount codes for guaranteed savings. Enjoy Free Shipping Offers."
            />
            <section className="allStorePage">
                <div className="container">
                    <div className="storeBox">
                        <div className="alpha-store">
                            <h1 className="text-center">All Stores</h1>
                            <div>
                                <p className="all_list">
                                    <button type="button" class="getStore" onClick={(e) => {
                                        e.preventDefault();
                                        window.scrollTo({
                                            top: document.querySelector("#zeroToNine").offsetTop - 30,
                                            behavior: "smooth",
                                        });
                                    }} >0-9</button>
                                    {alphabet.split("").map((c) =>

                                        <button type="button" onClick={(e) => {
                                            e.preventDefault();
                                            window.scrollTo({
                                                top: document.querySelector("#alpha" + c.toUpperCase()).offsetTop - 30,
                                                behavior: "smooth",
                                            });
                                        }} class="getStore" >{c.toUpperCase()}</button>
                                    )}
                                </p>
                            </div>
                            <div class="storeList" id="zeroToNine">

                                <ul>
                                    {stores
                                        .filter((store) => store.title.toLowerCase().startsWith('#') || store.title.toLowerCase().startsWith('0') || store.title.toLowerCase().startsWith('1') || store.title.toLowerCase().startsWith('2') || store.title.toLowerCase().startsWith('3') || store.title.toLowerCase().startsWith('4') || store.title.toLowerCase().startsWith('5') || store.title.toLowerCase().startsWith('6') || store.title.toLowerCase().startsWith('7') || store.title.toLowerCase().startsWith('8') || store.title.toLowerCase().startsWith('9'))
                                        .map((item, index) => (
                                            <li key={index}><Link href={`/${item.slug}`}>{item.title}<span>{item.coupon_set.filter(item => item.coupon_type == "deal").length > 0 ? `${item.coupon_set.filter(item => item.coupon_type == "deal").length} deals` : ""} {item.coupon_set.filter(item => item.coupon_type == "deal").length > 0 && item.coupon_set.filter(item => item.coupon_type == "code").length > 0 ?"&":""} {item.coupon_set.filter(x => x.coupon_type == 'code').length > 0 && `${item.coupon_set.filter(x => x.coupon_type == 'code').length} codes`}</span></Link></li>

                                        ))}

                                </ul>
                            </div>
                            {alphabet.split("").map((c) => {
                                return (
                                    <>
                                        <div class="storeList" id={`alpha${c.toUpperCase()}`}>

                                            <ul>
                                                {stores
                                                    .filter((store) => store.title.toLowerCase().startsWith(c))
                                                    .map((item, index) => (
                                                        <li key={index}><Link href={`/${item.slug}`}>{item.title}<span>{item.coupon_set.filter(item => item.coupon_type == "deal").length > 0 ? `${item.coupon_set.filter(item => item.coupon_type == "deal").length} deals` : ""} {item.coupon_set.filter(item => item.coupon_type == "deal").length > 0 && item.coupon_set.filter(item => item.coupon_type == "code").length > 0 ?"&":""} {item.coupon_set.filter(x => x.coupon_type == 'code').length > 0 && `${item.coupon_set.filter(x => x.coupon_type == 'code').length} codes`}</span></Link></li>

                                                    ))}

                                            </ul>
                                        </div>

                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://backend.anddeals.com/stores`)
    const stores = await res.json()

    return {
        props: {
            stores
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}


