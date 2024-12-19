"use client";

import Image from "next/image";
import { useState } from "react";
import { FaHome, FaShoppingCart, FaCouch, FaCarrot, FaMoneyBillAlt, FaRegNewspaper } from 'react-icons/fa';
import { ReactTyped } from "react-typed";
import WaitlistModal from "./components/features/WaitListModal";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row bg-gradient-to-r from-purple-500 to-green-500 h-auto md:h-[70%] m-[10px] rounded-[30px] mb-10">
        <div className="w-full md:w-[52%] p-[30px] justify-between gap-16">
          <h1 className="text-[30px] md:text-[50px] text-white mb-5 h-[150px]"><b><p className="text-[#00FF26FF] text-[40px] md:text-[60px]">Claara!</p> <ReactTyped
            strings={['The card that does it all.', 'Earn rewards on your rent.', 'Simplicity and transparency.']}
            typeSpeed={40}
            backSpeed={60}
            loop
          /></b></h1>
          <p className="text-[16px] md:text-[20px] text-white mb-10 md:mb-20">Rewards and  Benefits on everything spent on your rent and home. Without the downsides of a credit card, simplicity and transparency built right in.<br></br> The management and reward card for your property.</p>
          <button
            onClick={openModal}
            type="submit"
            className="w-[200px] rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            <Image
              className="dark:invert"
              src="/globe.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Join the waitlist!
          </button>
          <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div className="w-full md:w-[50%] mt-10 md:mt-0">
          <Image
            className="dark:invert mx-auto"
            src="/gifs/three_cards.gif"
            alt="claara cards"
            width={680}
            height={200}
            unoptimized
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row h-auto md:h-[440px] m-[10px] rounded-[30px] mb-10">
        <div className="w-full md:w-[50%] order-first md:order-first">
          <Image
            className="dark:invert mx-auto"
            src="/images/house.png"
            alt="claara cards"
            width={400}
            height={400}
            unoptimized
          />
        </div>

        <div className="w-full md:w-[45%] p-[30px] rounded-[30px] gap-5 justify-start items-start bg-gradient-to-r from-purple-500 to-green-500">
          <div className="text-2xl mb-4 justify-right text-right px-4 font-bold text-[#00FF26FF]">Earn on your...</div>

          <div className="gap-5 flex flex-row flex-wrap justify-start items-start">
            <div className="rounded-[10px] border border-solid border-white flex items-center justify-center p-2 md:w-[230px] md:h-[100px]">
              <span className="text-white text-2xl">Rent</span>
              <FaHome className="ml-2 text-white" />
            </div>
            <div className="rounded-[10px] border border-solid border-white flex items-center justify-center p-2 md:w-[350px] md:h-[100px]">
              <span className="text-white text-2xl">Shopping</span>
              <FaShoppingCart className="ml-2 text-white" />
            </div>
            <div className="rounded-[10px] border border-solid border-white flex items-center justify-center p-2 md:w-[350px] md:h-[100px]">
              <span className="text-white text-2xl">Furniture</span>
              <FaCouch className="ml-2 text-white" />
            </div>
            <div className="rounded-[10px] border border-solid border-white flex items-center justify-center p-2 md:w-[230px] md:h-[100px]">
              <span className="text-white text-2xl">Groceries</span>
              <FaCarrot className="ml-2 text-white" />
            </div>
            <div className="rounded-[10px] border border-solid border-white flex items-center justify-center p-2 md:w-[230px] md:h-[100px]">
              <span className="text-white text-2xl">Bills</span>
              <FaMoneyBillAlt className="ml-2 text-white" />
            </div>
            <div className="rounded-[10px] border border-solid border-white flex items-center justify-center p-2 md:w-[350px] md:h-[100px]">
              <span className="text-white text-2xl">Subscriptions</span>
              <FaRegNewspaper className="ml-2 text-white" />
            </div>
          </div>
        </div>
      </div>

      <section id="services">
        <div className="flex flex-col md:flex-row h-auto md:h-[70%] m-[10px] rounded-[30px] mb-10">
          <div className="w-full md:w-[50%] p-[30px] justify-between gap-16">
            <h1 className="text-[30px] md:text-[50px] mb-5"><b><p className="text-[#00FF26FF] text-[40px] md:text-[60px]">The Claara</p> Homeowners Card.</b></h1>
            <p className="text-[16px] md:text-[20px] mb-5 md:mb-5">Get Claara rewards on your monthly mortgage related payments as well as on home & everyday purchases made with the Claara Homeowners Card. Benefits at your home. Earn points on your largest expense - rent, bills, groceries and track your expenses. Build credit with every payment, earning even more rewarding.</p>
            <ul className="text-[16px] md:text-[20px] mb-5 md:mb-5 list-disc list-inside">
              <li>Earn points on your property related payments.</li>
              <li>Get Claara rewards on home & everyday purchases made with the Claara Homeowners Card.</li>
              <li>Track your expenses.</li>
              <li>Build credit with every payment, earning even more rewarding.</li>
            </ul>

            <p className="text-[16px] md:text-[20px]">Easy-to-use estate cards, bill payments, accounting, and a whole lot more. All in one place.</p>

            <button
              onClick={openModal}
              type="submit"
              className="w-[200px] rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 mt-10"
            >
              <Image
                className="dark:invert"
                src="/globe.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Join the waitlist!
            </button>
            <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <div className="w-full md:w-[50%] mt-10 md:mt-0">
            <Image
              className="dark:invert mx-auto"
              src="/gifs/multi_card.gif"
              alt="claara cards"
              width={680}
              height={200}
              unoptimized
            />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-purple-500 to-green-500 h-auto md:h-[70%] m-[10px] rounded-[30px] mb-10">
          <div className="w-full md:w-[55%] p-[30px] justify-between gap-16">
            <h1 className="text-[30px] md:text-[50px] mb-5"><b><p className="text-white text-[40px] md:text-[30px]">About Us</p></b></h1>
            <p className="text-[16px] md:text-[20px] mb-10 md:mb-20 text-white">
              Claara is a financial technology company that aims to revolutionize the way homeowners manage their finances. Our mission is to provide innovative solutions that simplify and streamline the homeownership experience, empowering individuals to achieve their financial goals with ease. We offer a range of products and services designed to make homeownership more accessible, affordable, and rewarding. From our innovative Homeowners Card to personalized financial planning tools, we strive to create a seamless and enjoyable experience for our customers.
            </p>
          </div>
          <div className="w-full md:w-[40%] p-[30px] justify-between gap-16">
            <h1 className="text-[30px] md:text-[50px] text-white mb-5"><b><p className="text-white text-[40px] md:text-[30px]">Contact Us</p></b></h1>
            <form className="flex flex-col gap-4" action="/api/contact" method="POST">
              <input
                type="text"
                placeholder="Name"
                className="p-2 rounded-md text-[16px] md:text-[20px]"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-md text-[16px] md:text-[20px]"
                name="email"
                required
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="p-2 rounded-md text-[16px] md:text-[20px]"
                name="message"
                required
              />
              <button
                type="submit"
                className="w-[200px] rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>

  );
}