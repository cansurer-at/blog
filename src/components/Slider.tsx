import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { mockBlogs } from '../mockData';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  return (
    <div className="slider-container mx-auto">
      <Slider {...settings}>
        {mockBlogs.map((blog) => (
          <div key={blog.id} className="slide p-4">
            <Link href={`/blog/${blog.slug}`} passHref>
              <div className="block relative rounded overflow-hidden cursor-pointer">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  layout="responsive"
                  width={800}
                  height={400}
                />
                <div className="absolute inset-0 bg-white opacity-40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="text-gray-300 mt-2">{blog.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      <div className="slider-arrows flex justify-between mt-4">
        <button className="slick-prev">Previous</button>
        <button className="slick-next">Next</button>
      </div>
    </div>
  );
};

export default BlogSlider;
