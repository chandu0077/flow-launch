"use client"; // This is a client component 👈🏽
import { BsBag } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { product } from "@/interface/product.interface";

interface Props {
  visible: boolean;
  product: product;
  closeModal: Function;
}
const Modal: React.FC<Props> = ({ visible, closeModal, product }) => {
  return (
    visible && (
      <div className="w-screen h-screen fixed top-0 left-0">
        <div className="w-screen h-screen absolute top-0 left-0 opacity-80 bg-black"></div>

        <div className="flex flex-col overflow-scroll lg:overflow-auto items-center lg:flex-row lg:items-center w-[80%] leading-6 bg-white p-[14px] rounded-md h-screen mx-auto relative">
          <div className="w-full lg:w-3/5 h-auto bg-white">
            <div className="flex flex-col p-[8px] lg:p-[34px] h-auto items-center justify-center">
              <img
                src={product.image}
                className="w-[150px] h-[150px] lg:w-[280px] lg:h-[250px]"
                alt="product-image"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/5 h-auto bg-white">
            <div className="w-full h-full p-[4px] lg:p-[32px]">
              <div className="flex">
                <p className="text-[14px] lg:text-[20px] font-medium text-balance text-center text-[#866528]">
                  {product.title}
                </p>
              </div>
              <p className="mt-[12px] text-[#333] text-[12px] lg:text-[18px] font-normal line-camp-2">
                {product.description}
              </p>
              <div className="flex justify-center items-center gap-x-4 mt-[12px]">
                <div className="bg-[#35A742] w-auto lg:w-[52px] h-auto items-center rounded-md gap-x-2 p-[4px] flex">
                  <p className="text-white text-[14px] lg:text-[16px]">
                    {product.rating.rate}
                  </p>
                  <FaStar color="white" size={12} />
                </div>
                <p className="text-[#939393] text-[14px] lg:text-[16px] m-0 font-medium">
                  {product.rating.count} Ratings
                </p>
              </div>
              <div className="flex flex-col items-center mt-[22px]">
                <div className="flex items-center">
                  <FaRupeeSign size={18} />
                  <p className="text-[#454545] text-[18px] lg:text-[24px] font-medium">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="mt-[18px] flex flex-col gap-y-5">
                <div className="flex w-full justify-center bg-[#866528] items-center gap-x-4">
                  <BsBag color="white" size={22} />
                  <button className=" text-white font-medium text-[14px] lg:text-[18px] p-[8px] ">
                    ADD TO BAG
                  </button>
                </div>
                <button className="bg-white text-[#866528] border-2 font-medium border-[#866528] text-[14px] lg:text-[18px] p-[8px] w-full">
                  PRODUCT DETAILS
                </button>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[20px] right-[20px]"
            onClick={() => closeModal()}
          >
            <IoCloseCircleSharp color="black" size={28} cursor={"pointer"} />
          </div>
        </div>
      </div>
    )
  );
};
export default Modal;
