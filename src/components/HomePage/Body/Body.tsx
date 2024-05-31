"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react";
import { RxDividerVertical } from "react-icons/rx";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Modal from "@/components/Modal";
import { product } from "@/interface/product.interface";
import Navbar from "../NavBar/NavBar";

interface Props {}
const Body: React.FC<Props> = ({}) => {
  const [productsData, setProductsData] = useState<any[]>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<product>();
  const [inputEmpty, setInputEmpty] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
      });
  }, []);

  useEffect(() => {
    if (inputEmpty) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProductsData(data);
        });
    }
  }, [inputEmpty]);

  const inputSearch = (input: string) => {
    const filteredProducts = productsData?.filter((productData, indx) => {
      return productData.title.toLowerCase().includes(input.toLowerCase());
    });
    if (input.length <= 0) {
      setInputEmpty(true);
    } else {
      setInputEmpty(false);
      setProductsData(filteredProducts);
    }
  };

  const handleHoverIn = (idx: number) => {
    const el = document.querySelector(`.hover-${idx}`);

    const divElement: HTMLElement = el as HTMLElement;

    if (divElement) {
      divElement.style.display = "block";
    }
  };

  const handleHoverOut = (idx: number) => {
    const el = document.querySelector(`.hover-${idx}`);

    const divElement: HTMLElement = el as HTMLElement;

    if (divElement) {
      divElement.style.display = "none";
    }
  };

  const openModal = (idx: number) => {
    const bodyElement: HTMLBodyElement = document.getElementsByTagName(
      "body",
    )[0] as HTMLBodyElement;

    bodyElement.style.overflow = "hidden";

    const result = productsData?.find((productData, productIdx) => {
      return idx === productIdx;
    });
    setSelectedProduct(result);
    setModalVisible(true);
  };

  const closeModal = () => {
    const bodyElement: HTMLBodyElement = document.getElementsByTagName(
      "body",
    )[0] as HTMLBodyElement;

    bodyElement.style.overflow = "auto";
    setModalVisible(false);
  };

  return (
    <div>
      <Navbar inputSearch={inputSearch} />
      <div className="flex flex-col items-center lg:flex-row bg-[#f6f3f7] w-full h-auto">
        <div className="w-full lg:w-[80%] lg:mx-auto h-auto p-[12px]">
          <div className="w-full mx-auto">
            <p className="text-[34px] text-black text-center text-semibold">
              Products
            </p>
          </div>
          <div className="mt-[8px] bg-[#f9f9f9] w-[150px] p-2 rounded-md">
            <p className="text-black font-semibold">20 Items Found</p>
          </div>

          {/* Items Card  */}
          <div className="flex flex-col lg:flex-row flex-wrap gap-x-4">
            {productsData &&
              productsData.map((products, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => openModal(idx)}
                    onMouseOver={() => handleHoverIn(idx)}
                    onMouseOut={() => handleHoverOut(idx)}
                  >
                    <div className="cursor-pointer w-full lg:w-[350px] h-auto mt-[22px] gap-y-4 bg-[#f6f3f7]">
                      <div className="relative w-full h-[350px] flex flex-col items-center justify-center bg-white  p-[12px]">
                        <img
                          src={products.image}
                          className="w-[180px] h-[180px]"
                          alt="bag-img"
                        />

                        <div
                          className={`absolute left-0 bottom-0 right-0 hidden bg-[#808080] opacity-30 text-white p-[12px] hover-${idx}`}
                        >
                          <p className="text-center">Quick View</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-y-1 p-2">
                        <div className="h-[50px] w-auto">
                          <p className="text-brown line-clamp-1 text-[13px] text-[#866528] font-semibold text-balance text-center">
                            {products.title}
                          </p>
                        </div>

                        <div className="flex items-center bg-[#008526] rounded-md w-auto p-2 text-center">
                          <div className="flex items-center gap-x-1">
                            <p className="text-white text-[12px]  font-bold">
                              {products.rating.rate}
                            </p>
                            <FaStar color="white" size={12} />
                          </div>
                          <RxDividerVertical size={22} color="white" />
                          <p className="text-white text-[12px] tracking-widest">
                            {products.rating.count}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <FaRupeeSign size={12} />
                          <p className="text-black font-bold mr-[8px] text-[13px]">
                            {products.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {/* <div className="lg:w-1/5"></div> */}
      </div>
      {selectedProduct && (
        <Modal
          visible={modalVisible}
          closeModal={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};
export default Body;
