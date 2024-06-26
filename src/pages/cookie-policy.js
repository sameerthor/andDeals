import Image from "next/image";
import "@/styles/site-policy.css";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Router from "next/router";
export default function cookiePolicy({ stores }) {
    return (
        <>
            <NextSeo
                title="Anddeals - Free Verified Coupons, Discount Codes, & Deals"
                description="Find the latest coupons and promo codes for your favorite stores. Our constantly updated discount codes and deals help you get instant savings. We have top stores, exclusive discounts, and verified codes for all your shopping needs!"
            />
            {/* ========privacy policy========= */}
            <section className="sitePolicy">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">Anddeals Cookie Policy</h1>
                            <h2>
                                 What are Cookies?
                            </h2>
                            <p>
                                Cookies are small files that a site or its service provider transfers to your device’s hard drive through your web browser, provided you grant permission. These cookies enable the site’s or service provider’s systems to recognize your browser and capture specific information.
                            </p>
                            <h2>
                                How We Use Cookies
                            </h2>
                            <p>
                                We use cookies to understand and retain your preferences for future visits, compile aggregate data regarding site traffic and site integration, and provide a superior site experience for our users. 
                            </p>
                            <h2>
                                Consent To Use Cookies
                            </h2>
                            <p>
                                By using the Anddeals website, you consent to the use of cookies in accordance with our privacy policy. We use cookies for tracking information about how users interact with our site.
                            </p>
                            <h2>
                                Managing Cookies
                            </h2>
                            <p>
                                You can choose to have your browser notify you when cookies are being used or disable cookies through your browser settings. That said, deactivating cookies may impact the functionality of certain parts of our website.
                            </p>
                            <h2>
                                Changes To Cookie Policy
                            </h2>
                            <p>
                                Anddeals reserves the right to amend or revise this cookie policy at any time. Your continued use of our website after any changes to this policy signifies your acceptance of the revised policy. 
                            </p>
                            <p>
                                For further inquiries regarding our cookie policy, kindly reach out to us at <a href="https://anddeals.com/contact-us">https://anddeals.com/contact-us</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
