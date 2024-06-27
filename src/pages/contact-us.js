import Image from "next/image";
import "@/styles/contact.css";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Router from "next/router";
export default function contact({ stores }) {
    return (
        <>
            <NextSeo
                title="Anddeals - Free Verified Coupons, Discount Codes, & Deals"
                description="Find the latest coupons and promo codes for your favorite stores. Our constantly updated discount codes and deals help you get instant savings. We have top stores, exclusive discounts, and verified codes for all your shopping needs!"
            />
            {/* ========privacy policy========= */}
            <section className="contactBox" style={{ backgroundImage: (`url(https://tax2win.in/assets-new/img/ca-assisted/banner-element.png)`) }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-0">
                            <h1 className="text-center">Contact anddeals</h1>
                            <form action="#NoWhere" className="contactForm row">
                                <div className="row p-0 inputGroup">
                                    <div className="col-md-6 mb-3">
                                        <input type="text" placeholder="Name" className="form-control" name="name" required/>
                                    </div>
                                    <div class=" col-md-6 mb-3">
                                        <input type="text" placeholder="Email" className="form-control" name="email" required/>
                                    </div>
                                </div>
                                <div className="col-md-12 inputGroup">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected> Select Visitor Type</option>
                                        <option value="1">Customer</option>
                                        <option value="2">Merchant</option>
                                        <option value="3">Non-Profit-Organization</option>
                                        <option value="4">Other</option>
                                    </select>
                                </div>
                                <div className="col-md-12 inputGroup">
                                    <textarea className="form-control" placeholder="Please provide some details" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="text-center contactBtn">
                                    <button className="btn" title="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
