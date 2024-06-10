import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

import {
    faComment,
    faEnvelope,
    faFaceSadTear,
    faFaceSmile,
    faStar as faRegularStar,
    faSadTear
} from "@fortawesome/free-regular-svg-icons";
import {
    faCartShopping,
    faWifi,
    faShareNodes
} from "@fortawesome/free-solid-svg-icons";
import { iteratee } from "lodash";
import Image from "next/image";

export default function Coupon({index_id,store_data, coupon_data }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [copytext, setCopyText] = useState("Copy code");

    return (
        <>
            <div className="couponItem" key={index_id}>
                <div className="couponBox">
                    <div>
                        <span className="storeName">{store_data.title}</span>
                        <h2 className="couponDiscount">
                            <a href="#">{coupon_data.title!=""?coupon_data.title:"Best Deal"}</a>
                        </h2>
                        <p className="couponDesc">
                            {coupon_data.content}
                        </p>
                    </div>
                    {coupon_data.coupon_type == "code" ? <div className="couponBtn">
                        <a
                            className="codeLink"
                            href="#"
                            onClick={async (e) => {
                                ; await setModalOpen(true); window.open(store_data.affiliate_url, "_blank");
                                let modal = new bootstrap.Modal(document.getElementById('getCode'));
                                modal.show();
                                navigator.clipboard.writeText(coupon_data.coupon_code);
                            }}
                        >
                            {coupon_data.coupon_code.replace(/(\w{3}).*/g, "$1"+(new Array(coupon_data.coupon_code.length -3 + 1).join( '*' )))}

                        </a>
                        {modalOpen && <div className="popover"> Code Copied ✅</div>}
                   
                    </div> : <div className="couponBtn getDeal">
                        <a onClick={async (e) => {
                            ; await setModalOpen(true); window.open(store_data.affiliate_url, "_blank");
                            let modal = new bootstrap.Modal(document.getElementById('getDeal'));
                            modal.show();
                        }} href="#">
                            Get Deal
                        </a>
                    </div>}


                </div>
              
            </div>

            <>
                {(coupon_data.coupon_type == "code" && modalOpen) &&
                    <div
                        className="modal fade"
                        id="getCode"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header" style={{ justifyContent: "space-between" }}>
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        {coupon_data.title}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={()=>setModalOpen(false)}

                                    />
                                </div>
                                <div className="modal-body text-center">
                                    <div className="modal-store-logo">
                                        <a href="#00">
                                            <img
                                                src={`${store_data.image}`}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="modalCode">
                                        <span>{coupon_data.coupon_code}</span>
                                    </div>
                                    <div className="codeCopyBtn" onClick={() => { navigator.clipboard.writeText(coupon_data.coupon_code); setCopyText('Copied') }}>
                                        <button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-scissors"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                            </svg>
                                            {copytext}
                                        </button>
                                    </div>
                                    <div className="storeBtn">
                                        <a href={`${store_data.affiliate_url}`}>
                                            visit at {store_data.title}
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
                                    </div>
                                    <div className="isWorked">
                                        <h4>Did this worked?</h4>
                                        <div className="workedbtn">
                                            <a href="#" className="btnVote">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    fill="#0ee032"
                                                    width={16}
                                                    height={16}
                                                >
                                                    <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
                                                </svg>
                                                Yes
                                            </a>
                                            <a href="#" className="btnVote">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    fill="#ff5f71"
                                                    width={16}
                                                    height={16}
                                                >
                                                    <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z" />
                                                </svg>
                                                No
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer"></div>
                            </div>
                        </div>
                    </div>
                }
                {/**********************************Coupon Pop-Up GET-deal Modal*********************************************** */}
                {(coupon_data.coupon_type == "deal" && modalOpen) &&
                    <div
                        className="modal fade"
                        id="getDeal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content" >
                                <div className="modal-header" style={{ justifyContent: "space-between" }}>
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        {coupon_data.title}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={()=>setModalOpen(false)}

                                    />
                                </div>
                                <div className="modal-body text-center">
                                    <div className="modal-store-logo">
                                        <a href="#00">
                                            <img
                                                src={`${store_data.image}`}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="modalCode d-flex align-items-center justify-content-center">
                                        <span>
                                            Deal Activated{" "}
                                            <svg
                                                height={25}
                                                width={25}
                                                fill="#0ee032"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="storeBtn">
                                        <a href={`${store_data.affiliate_url}`}>
                                            Redeem at {store_data.title}
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
                                    </div>
                                    <div className="isWorked">
                                        <h4>Did this worked?</h4>
                                        <div className="workedbtn">
                                            <a href="#" className="btnVote">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    fill="#0ee032"
                                                    width={16}
                                                    height={16}
                                                >
                                                    <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
                                                </svg>
                                                Yes
                                            </a>
                                            <a href="#" className="btnVote">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    fill="#ff5f71"
                                                    width={16}
                                                    height={16}
                                                >
                                                    <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z" />
                                                </svg>
                                                No
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer"></div>
                            </div>
                        </div>
                    </div>
                }
            </>
        </>

    )

}
