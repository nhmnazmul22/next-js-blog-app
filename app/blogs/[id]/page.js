"use client";
import { assets } from "@/assets/assets";
import Footer from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const Page = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const res = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(res.data.blog)
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt="logo"
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-4px_4px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] duration-200">
            Get Started <Image src={assets.arrow} alt="arrow" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 mb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          alt=""
          width={1280}
          height={720}
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.content}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci, voluptas?
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          error in omnis ex numquam alias, architecto beatae, perspiciatis
          consequatur, doloremque laboriosam et temporibus? Iste culpa ex
          praesentium amet ipsum perferendis?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          error in omnis ex numquam alias, architecto beatae, perspiciatis
          consequatur, doloremque laboriosam et temporibus? Iste culpa ex
          praesentium amet ipsum perferendis?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci, voluptas?
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          error in omnis ex numquam alias, architecto beatae, perspiciatis
          consequatur, doloremque laboriosam et temporibus? Iste culpa ex
          praesentium amet ipsum perferendis?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          error in omnis ex numquam alias, architecto beatae, perspiciatis
          consequatur, doloremque laboriosam et temporibus? Iste culpa ex
          praesentium amet ipsum perferendis?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci, voluptas?
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          error in omnis ex numquam alias, architecto beatae, perspiciatis
          consequatur, doloremque laboriosam et temporibus? Iste culpa ex
          praesentium amet ipsum perferendis?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          error in omnis ex numquam alias, architecto beatae, perspiciatis
          consequatur, doloremque laboriosam et temporibus? Iste culpa ex
          praesentium amet ipsum perferendis?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quo
          voluptatibus sint molestiae est. Numquam voluptas illum rerum ex esse
          laborum, cum doloremque soluta ratione ullam adipisci eligendi natus
          praesentium ut sequi et, nesciunt qui ea, beatae consequuntur!
          Voluptatem accusamus quas reiciendis fuga iste cumque magni
          voluptatibus vero voluptate quisquam!
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image
              src={assets.facebook_icon}
              alt=""
              width={50}
              className="cursor-pointer"
            />
            <Image
              src={assets.twitter_icon}
              alt=""
              width={50}
              className="cursor-pointer"
            />
            <Image
              src={assets.googleplus_icon}
              alt=""
              width={50}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default Page;
