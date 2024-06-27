import Image from "next/image";
import "@/styles/home.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NextSeo } from "next-seo";
import Link from "next/link";
import Router from "next/router";
export default function Home({ stores }) {
    return (

        <>
            <NextSeo
                title="Anddeals - Free Verified Coupons, Discount Codes, & Deals"
                description="Find the latest coupons and promo codes for your favorite stores. Our constantly updated discount codes and deals help you get instant savings. We have top stores, exclusive discounts, and verified codes for all your shopping needs!"
            />
            <section className="homeBanner">
                <div className="container">
                    <div className="banner-slider carousel-wrapper">
                        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
                            <div className="carousel-slide">
                                <a href="#">
                                    <Image src="/images/banner-1.png" width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} alt="" />
                                        <span className="sliderName"> Flipkart.com</span>
                                        <div class="overlay"></div>
                                        
                                </a>
                                <a href="#">
                                    <Image src="/images/banner-2.png" width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} alt="" />
                                        <span className="sliderName"> Amazon.com</span>
                                        <div class="overlay"></div>
                                </a>
                                <a href="#">
                                    <Image src="/images/banner-3.png" width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} alt="" />
                                        <span className="sliderName"> Wow skin care</span>
                                        <div class="overlay"></div>
                                </a>
                                <a href="#">
                                    <Image src="/images/banner-4.png" width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} alt="" />
                                        <span className="sliderName"> SBI Cards</span>
                                        <div class="overlay"></div>
                                </a>
                            </div>
                            <div className="carousel-slide">
                                <a href="#">
                                    <Image src="/images/banner-5.png" width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} alt="" />
                                         <span className="sliderName"> Cleartrip.com</span>
                                         <div class="overlay"></div>
                                </a>
                                <a href="#">
                                    <Image src="/images/banner-6.png" width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} alt="" />
                                         <span className="sliderName">Ajio.com</span>
                                         <div class="overlay"></div>
                                </a>
                                <a href="#">
                                    <Image src="/images/banner-7.png" width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} alt="" />
                                         <span className="sliderName"> diataal</span>
                                         <div class="overlay"></div>
                                </a>
                                <a href="#">
                                    <Image src="/images/banner-1.png" width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} alt="" />
                                        <span className="sliderName"> Flipkart.com</span>
                                        <div class="overlay"></div>
                                </a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
            <div className="container-fluid exclusive">
                <div className="container">
                    <div className="row">
                        <h2>Exclusive Deals &amp; Promocodes</h2>
                        {stores.filter(x => x.home_options == '1').map((item, index) =>
                            <div className="col-lg-3 col-md-4 col-sm-6 exclusive-box">
                                <Link href={`/${item.slug}`} className="exclusiveItem">
                                    <div className="circle">
                                        <Image
                                     width="100"
                                     height={100}
                                            src={`${item.image.replace('http://','https://')}`}
                                            alt={`${item.image_alt}`}
                                        />
                                    </div>
                                    <div className="storeDealCount">
                                        <p>{item.title}</p>
                                        <span>{item.coupon_set.length} Deals</span>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="more-btn text-center">
                        <button onClick={() => Router.push('/stores/')}>
                            View More
                        </button>
                    </div>
                </div>
            </div>
            {/* Top Deals on fav stores */}
            <section className="favDeals">
                <div className="container">
                    <h2>Top deals from favourite stores</h2>
                    <div className="deal-slider">
                        <Carousel showThumbs={false}>
                            {stores.filter(x => x.home_options == '2' && x.coupon_set.length > 1).map((item, index) =>
                                <div className="item">
                                    <Link href={`/${item.slug}`} className="dealBox">
                                        <div className="dealImg">
                                            <Image
                                          width="100"
                                          height={100}
                                                src={`${item.image.replace('http://','https://')}`}
                                                alt={`${item.image_alt}`}
                                            />
                                        </div>
                                        <p className="dealName">{item.title}</p>
                                        <p className="dealDesc">
                                            {item.coupon_set[0].content}
                                        </p>
                                        <span className="dealBtn">{item.coupon_set[0].discount_value}</span>
                                    </Link>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className="trandingDeals">
                <div className="container p-0">
                    <div className="trandingHeading">
                        <h2>Trending Deals</h2>
                        <Link href="/stores">Explore More</Link>
                    </div>
                    <div className="row">
                        {stores.filter(x => x.home_options == '3' && x.coupon_set.length > 1).map((item, index) =>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12  mb-3">
                                <Link className="trandingDealbox" href="#000">
                                    <div className="imgbox">
                                        <Image
                                            src={`${item.image.replace('http://','https://')}`}
                                            alt={`${item.image_alt}`}
                                            width="100"
                                            height={100}
                                        />
                                    </div>
                                    <div className="dealInfo">
                                        <h4 dangerouslySetInnerHTML={{__html:item.coupon_set[0].content}}></h4>
                                    </div>
                                    <span className="grabDeal">
                                        Grab Deal
                                        <svg
                                            width={16}
                                            fill="#fff"
                                            height={16}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* popular stores */}
            <section className="popularSection">
                <div className="container">
                    <h2>Popular Brands</h2>
                    <div className="popularStore">
                        <Carousel>
                            {stores.filter(x => x.home_options == '4' && x.coupon_set.length > 1).map((item, index) =>
                                <div className="item">
                                    <Link href={`/${item.slug}`} className="popularBox">
                                        <div className="imgBox">
                                            <Image
                                            width="100"
                                            height={100}
                                                src={`${item.image.replace('http://','https://')}`}
                                                alt={`${item.image_alt}`}
                                            />                </div>
                                        <div className="dealCount">
                                            <span>View {item.coupon_set.length} Coupons</span>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
            </section>
        </>


    );
}
export async function getStaticProps({ params }) {
    const res = await fetch(`https://backend.anddeals.com/stores?ordering=title`)
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