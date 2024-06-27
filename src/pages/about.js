import Image from "next/image";
import "@/styles/site-policy.css";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Router from "next/router";
export default function about({ stores }) {
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
                        <div class="col-12">
                            <h1 class="text-center"> About andDeals</h1>
                            <p>
                                Welcome to Anddeals, your go-to destination for the best deals and coupons. We believe everyone deserves to save money; therefore we have brought together all the amazing deals and coupons available on the web. On our platform, you will find great ways to grab incredible discounts on a broad range of products and services. Browse our website to discover the latest deals, promo codes, and discounts. 
                            </p>
                            <p>
                                Join us at Anddeals and start saving money today! 
                            </p>
                            <h2>
                                Our Mission
                            </h2>
                            <p>
                                Our mission is simple: to provide a user-friendly platform where you can discover exclusive coupons and offers from your favorite online stores. We aim to help our customers save money and make smart purchasing decisions. We understand that saving money is important to you in today’s economy, and that’s why we strive to provide the most up-to-date and exclusive deals on a wide range of products and services. Anddeals helps you score the best deals and discounts on electronics, fashion, travel, and anything in between.
                            </p>
                            <p>
                                Here’s how we achieve our mission:
                            </p>
                            <ul>
                                    <li>Our dedicated team finds and verifies the top deals, so you always have access to the best savings opportunities.
                                    </li>
                                    <li>We have designed our website with simplicity in mind. Finding the coupons you need is quick and easy.</li>
                                    <li>We offer deals and coupon codes across a vast range of categories. You can save on everything from groceries and clothing to travel and entertainment. 
                                    </li>
                            </ul>
                            <h2>Our Values </h2>
                            <h2>1. Customer-Centric Approach</h2>
                            <p>
                                Our commitment knows no bounds when it comes to providing our users with the most accurate deals. We hold a belief in simplicity and ease of use. Our site is designed with an intuitive interface where any individual can easily find discounts across various categories. By just a few clicks you are able to obtain either the promo codes or direct links to discounted products. Additionally, our customers form a valued community for whom we always provide exceptional customer service.
                            </p>
                            <h2>
                                2. Accuracy
                            </h2>
                            <p>
                                To find you the most valuable discounts, our dedicated team of bargain hunters browse the web. We handpick each coupon code and deal to make sure it is genuine. Before posting anything, we authenticate all deals which we have featured. Thus, whatever offer you will ever come across at Anddeals is genuine and can help you save money on your purchases.
                            </p>
                            <h2>
                                3. Privacy 
                            </h2>
                            <p>
                                What sets us apart is our commitment to protecting your privacy. We prioritize your data security and make sure that your personal information is never compromised. We do not use any tracking technologies that violate your privacy concern. Anddeals offers a completely safe browsing experience devoid of any kind of data collection. 
                            </p>
                            <h2>
                                How Anddeals Works
                            </h2>
                            <p>
                                    
                                Anddeals generates revenue through its partnerships with online retailers and brands. In case a user visits our site and uses a link to buy something or applies the coupon code, Anddeals receives an affiliate commission. With this model, Anddeals is capable of giving exclusive deals and discounts to users while at the same time making money to continue running its operations.

                            </p>
                            <p>
                                    It’s important to note that the commission earned by Anddeals does not affect the price of the products or services. The commission is solely based on the referral and does not impact the user’s shopping experience or the final amount they pay. 
                            </p>
                            <p>
                                Thank you for choosing Anddeals as your trusted source for all things coupons and deals!

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
