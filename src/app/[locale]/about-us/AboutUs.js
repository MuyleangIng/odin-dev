"use client"
import React from 'react';
import {Button, Card} from "flowbite-react";
import Image from "next/image";
import "../about-us/style.css"
import Whoami from "/public/assets/whoami.png"
import Ourmission from "/public/assets/ourmission.png"
import Visions from "/public/assets/visions.png"

import Aboutus from "/public/assets/aboutus.png"
import {FaRegFilePdf} from "react-icons/fa";
import {MdOutlineSpaceDashboard} from "react-icons/md";
import {TbReportAnalytics} from "react-icons/tb";
import CardMentor from "@/app/[locale]/about-us/CardMentor";


function AboutUs () {
    const mentors = [
        {
            name:"កយ សុភា",
            position:"front-end ",
            image: Visions,
            socials:{
                facebook:"https://web.facebook.com/mom.reksmey.12",
                github:"https://github.com/Reksmeys"
            }
        },
        {
            name:"កយ សុភា",
            position:"Back-end ",
            image:Visions,
            socials:{
                facebook:"https://web.facebook.com/profile.php?id=100009996454316",
                github:"https://github.com/keoKAY"
            }
        }
    ]

    return (
        <>
            <section className={"container-img my-10 max-w-screen-xs lg:max-w-screen-xl mx-auto px-5 lg:px-0 py-14 md:py-10 lg:py-0"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div data-aos="zoom-out-right">
                        <div >
                            <div className={"flex items-center flex-col gap-5 "}>
                                <h1 className={"uppercase text-blue-800 dark:text-blue-600 font-extrabold text-3xl"}>អំពី​ពួក​យើង</h1>
                                <p className={"opacity-80 text-lg sm:text-center md:text-left lg:text-left xl:text-left sm:text-lg md:text-xl lg:text-xls"}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"order-1"} data-aos="zoom-in-left">
                        <Image unoptimized width={100} height={100} className={"w-full h-full"}
                               src={Aboutus} alt="report.png"/>
                    </div>
                </div>
            </section>

            {/**/}
            <section className={"h-full bg-cover bg-center bg-fixed"}>
                <div className="relative">
                    <div className={" max-w-screen-xl mx-auto  "}>
                        <div className="max-w-screen-xl mx-auto px-5 md:px-0 my-32">
                            <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row gap-10 items-center justify-evenly md:pt-32">
                                <div className={"md:-mt-52 dark:bg-gray-900 "}
                                      data-aos="flip-left"
                                      data-aos-easing="ease-out-cubic"
                                >
                                    <div className="flex flex-col items-center p-2">
                                        <Image
                                            alt="image"
                                            className="mb-3"
                                            src={Whoami}
                                            width={100} height={100}
                                            unoptimized
                                        />
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white uppercase">
                                            យើង​ជា​នរណា
                                        </h5>
                                        <p className="text-sm text-center  text-gray-500 dark:text-gray-400">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        </p>
                                    </div>
                                </div>
                                <div className={"md:-mt-52 dark:bg-gray-900"}
                                      data-aos="flip-left"
                                      data-aos-easing="ease-out-cubic"
                                >
                                    <div className="flex flex-col items-center p-2">
                                        <Image
                                            alt="image"
                                            className="mb-3"
                                            src={Ourmission}
                                            width={100} height={100}
                                            unoptimized
                                        />
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white uppercase">
                                            បេ​សកម្ម​របស់​យើង
                                        </h5>
                                        <p className="text-sm text-center  text-gray-500 dark:text-gray-400">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text                         </p>
                                    </div>
                                </div>
                                <div className={"md:-mt-52 dark:bg-gray-900  "}
                                      data-aos="flip-left"
                                      data-aos-easing="ease-out-cubic"
                                >
                                    <div className="flex flex-col items-center p-2">
                                        <Image
                                            alt="image"
                                            className="mb-3 "
                                            src={Visions}
                                            width={100} height={100}
                                            unoptimized
                                        />
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white uppercase">
                                            ទស្សនវិស័យ​របស់​យើ​ង
                                        </h5>
                                        <p className="text-sm text-center  text-gray-500 dark:text-gray-400">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 px-5 mx-auto max-w-screen-xl text-center lg:py-16 xl:px-0">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-3xl tracking-tight text-blue-800 font-medium  dark:text-white ">Our Mentors</h2>
                </div>
                <div className="flex justify-center gap-16">
                    {mentors.map((user,i)=>{
                        return <CardMentor key={i}
                                             user={user}
                        />
                    })}
                </div>
            </section>


        </>

    );
};

export default AboutUs;