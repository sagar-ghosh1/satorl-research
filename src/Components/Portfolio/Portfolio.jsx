import { useState } from "react";
import { Link } from "react-router-dom";
import { companies } from "../../data/data";
import Container from "../Container/Container";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="my-32" id="portfolio">
      <Container>
        <div className="text-center">
          <h2 className="text-[33px] md:text-[32px] xl:text-[41px] text-[#441611] font-dmSerifDisplay capitalize leading-[58px]" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">Let’s see Our portfolio</h2>

          <p className="text-[#6F5D5B] text-[20px] font-dmSans capitalize w-full md:w-[58%] xl:w-[58%] 2xl:w-[35%] mx-auto mt-4 mb-10" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">Discover our portfolio for a glimpse into our expertise, showcasing achievements and diverse capabilities.</p>
        </div>

        {/* Render the first 5 to 10 logos */}
        <div className="relative">
          <div className="md:border-b border-[#ebedf0f6] w-[99%] absolute -mt-3 ml-4 "></div>
          <div className="border-t border-[#ebedf0f6] w-16 h-10 absolute mt-[1%] ml-[96.5%] rotate-90"></div>
          <div className="border-t border-[#ebedf0f6] w-16 h-10 absolute mt-[8.8%] ml-[96.5%] rotate-90"></div>
          {
            showMore ? <>
              <div className="border-t border-[#ebedf0f6] w-16 h-10 absolute lg:mt-[17.2%] xl:mt-[17.2%] 2xl:mt-[15.5%] ml-[96.5%] rotate-90"></div>
              <div className="border-t border-[#ebedf0f6] w-16 h-10 absolute lg:mt-[25%] xl:mt-[26.2%] 2xl:mt-[22%] ml-[96.5%] rotate-90"></div>
              <div className="border-t border-[#ebedf0f6] w-16 h-10 absolute lg:mt-[32.5%] xl:mt-[35%] 2xl:mt-[28.8%] ml-[96.5%] rotate-90"></div>
              <div className="md:border-t border-[#ebedf0f6] w-16 h-10 absolute lg:mt-[40%] xl:mt-[44%] 2xl:mt-[35.8%] ml-[76.6%] 2xl:ml-[77.7%] rotate-90"></div>
            </> : ''
          }

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5">
            {companies.slice(0, showMore ? 25 : 10).map((company, index) => (
              <div key={index} className="flex justify-center items-center border-l p-5 relative group">
                <img src={company.logo} alt='Image' className="w-auto h-7 group-hover:scale-110 duration-300 2xl:mt-[7%]" />
                <div className="border-t border-[#ebedf0f6] w-[95%] absolute -mb-[42%] ml-5"></div>
              </div>
            ))}
          </div>

          {/* last three card */}
          {
            !showMore ? '' : (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-subgrid gap-5 lg:w-[59%] mx-auto mt-4">
                  {companies.slice(25, 28).map((company, index) => (
                    <div key={index} className="flex justify-center items-center border-l p-5 relative group">
                      <img src={company.logo} alt='Image' className="w-auto h-7 group-hover:scale-110 duration-300 2xl:mt-[7%]" />
                      <div className="border-t border-[#ebedf0f6] w-[95%] absolute -mb-[42%] ml-5"></div>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        </div>

        {/* Render "See More" button */}
        <div className="flex justify-center mt-[45px] 2xl:mt-[90px]">
          <Link onClick={() => setShowMore(!showMore)} to="/" className="text-[#441611] text-[16px] font-dmSans font-semibold border border-[#E3E3E3] hover:border-[#d8d7d7] hover:bg-[#F6F4F2] w-[150px] py-3 flex justify-center items-center rounded-md group duration-200">
            <span>{showMore ? "Show Less" : "See More"}</span>
            {showMore ? <IoIosArrowUp className='text-[18px] ml-2 duration-300 group-hover:rotate-180' /> : <IoIosArrowDown className='text-[18px] ml-2 duration-300 group-hover:rotate-180' />}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;

