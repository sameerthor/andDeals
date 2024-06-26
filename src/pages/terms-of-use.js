import Image from "next/image";
import "@/styles/site-policy.css";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Router from "next/router";
export default function termsOfUse({ stores }) {
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
                            <h1 className="text-center">Anddeals Terms Of Use</h1>
                            <p>
                                Welcome to Anddeals, a website where you can find coupons and discounts on a variety of products. By accessing and using our website, you agree to comply with the following terms of use. We advise you to thoroughly read the “Terms of Use'' as they hold vital information regarding your legal rights and responsibilities. For individuals residing in the United States, it is important to understand that our terms of service include an arbitration clause and a class action waiver. By accepting these terms of use, you agree to be bound by this arbitration provision. Before using our services, please carefully read the instructions outlined in these terms and conditions.
                            </p>
                            <h2>
                                Acceptance Of Terms
                            </h2>
                            <p>
                                By using Anddeals website, you acknowledge that you have read, understand, and agree to be bound by these terms of use. If you do not agree with any of these Terms of Use, you are not authorized to use our services. Our Terms of Use are intended for all users, including those who are navigating the site or those who have a registered account.
                            </p>
                            <h2>
                                    Use Of Services
                            </h2>
                            <p>
                                You may use our website Anddeals.com to browse, obtain, and redeem discount coupons and deals offered by various merchants. The legitimacy, accuracy, and completeness of any coupons or discounts are not guaranteed by Anddeals. It is your responsibility to ensure that any discounts or coupons you get from our website are accurate and used appropriately. 
                            </p>
                            
                            <h2>
                                User Conduct
                            </h2>
                            <p>
                                You agree to use the Anddeals website and services in accordance with all applicable laws and regulations. You also agree to not engage in any activity that interferes or disrupts our website or services. You may agree not to:

                            </p>
                            <ul>
                                <li>Use the platform for any illegal or unauthorized purpose.</li>
                                <li>Infringe upon the intellectual property of Anddeals or any third party. </li>
                                <li>Manipulate or disrupt the platform's security. </li>
                                <li>Send any malicious programs, viruses, or other files.</li>
                                <li>Scrape or extract data from the platform without prior written consent.</li>
                                <li>Create or spread false or misleading content on the platform.</li>
                                <li>Violate another user's right to privacy.</li>
                            </ul>
                            <h2>Intellectual Property Rights</h2>
                            <p>
                                The content, trademark, logos, and other intellectual property displayed on the Anddeals website are the property of Anddeals or its licensors. You may not use, reproduce, or distribute any content from our website without prior written permission.
                            </p>
                            <h2>
                                Disclaimer Of Warranties
                            </h2>
                            <p>
                                Anddeals provides its services on an “as is'' and “as available” basis. We do not make any warranties regarding the availability, accuracy, or reliability of our website or the deals and coupons provided.
                            </p>
                            <h2>
                                Limitation Of Liability
                            </h2>
                            <p>
                                In no circumstances shall Anddeals be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our website or services.
                            </p>
                            <h2>
                                Governing Law
                            </h2>
                            <p>
                                These terms of use are governed and constructed under the laws of the United States, without regard to its conflict of law principles.
                            </p>
                            <h2>
                                Changes to Terms
                            </h2>
                            <p>
                                Anddeals reserves the right to modify or revise these terms of use at any time. You are responsible for periodically reviewing the Terms of Use. Your continued use of our website after any changes to these terms constitutes your acceptance of the revised terms.
                            </p>
                            <p>
                                By using the Anddeals website, you signify your agreement to these terms of use. If you do not agree to these terms and conditions, please do not use our website. If you have any questions about these terms, please contact us at  <a href="https://anddeals.com/contact-us.">https://anddeals.com/contact-us.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
