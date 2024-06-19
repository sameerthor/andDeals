import { useState } from 'react';

export default function Coupon({ index_id, store_data, coupon_data }) {
    const [couponShow, setCouponShow] = useState(false);
    const [copyTextShow, setCopyTextShow] = useState(false);
    const [dealTextShow, setDealTextShow] = useState(false);


    setTimeout(() => {
        if (process.browser) {
            var c_id = localStorage.getItem("copied_code")
            if (c_id) {
                setCouponShow(true)
            }
            if (c_id == coupon_data.id) {
                setCopyTextShow(true);
                setTimeout(() => {
                    localStorage.removeItem("copied_code");

                }, 2000)

            }
        }
    }, 1000)

    return (
        <>
            <div className="couponItem" key={index_id} id={`c=${coupon_data.id}`}>
                <div className="couponBox">
                    <div>
                        <div className="isverified">
                            <span className="storeName">{store_data.title} Coupon</span>
                            <span className="verifiedIcon">
                                <img src="/images/verified.svg" width={14} height={14} />
                                <small>Verified</small>
                            </span>
                        </div>
                        <h2 className="couponDiscount">
                            <a href="#">{coupon_data.title != "" ? coupon_data.title : "Best Deal"}</a>
                        </h2>
                        <p className="couponDesc">
                            {coupon_data.content}
                        </p>
                    </div>
                    {coupon_data.coupon_type == "code" ? <div className="couponBtn">
                        <a
                            className="codeLink"
                            href="javascript:void(0)"
                            onClick={async (e) => {
                                await localStorage.setItem('copied_code', coupon_data.id)
                                navigator.clipboard.writeText(coupon_data.coupon_code);
                                window.open(`/${store_data.slug}/#c=${coupon_data.id}`, "_blank");
                                window.open(store_data.affiliate_url, "_self");

                            }}
                        >
                            {couponShow ? coupon_data.coupon_code : coupon_data.coupon_code.replace(/(\w{3}).*/g, "$1" + (new Array(coupon_data.coupon_code.length - 3 + 1).join('*')))}

                        </a>
                        {copyTextShow && <div className="popover"> Code Copied ✅</div>}

                    </div> : <div className="couponBtn getDeal">
                        <a onClick={(e) => {
                            setCouponShow(true)
                            setDealTextShow(true)
                            setTimeout(() => {
                                setDealTextShow(false)
                                ; window.open(store_data.affiliate_url, "_blank");
                            }, 1500)


                        }} href="javascript:void(0)">
                            Get Deal
                        </a>
                        {dealTextShow && <div className="popover"> Get Deal ✅</div>}

                    </div>}


                </div>

            </div>
        </>

    )

}
