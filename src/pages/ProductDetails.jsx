import React from "react";
import { useParams } from "react-router-dom";
import { smartphones } from "../constant/data";
import { Heart, Tag, TicketPercent } from "lucide-react";
import ProductList from "./ProductList";

const ProductDetails = () => {
  const { ProductDetailsId } = useParams();
  let product = smartphones.filter(
    (product) => product.id === Number(ProductDetailsId)
  );
  if (!product)
    return (
      <div className="p-10 text-center text-red-600">Product not found </div>
    );
  return (
    <section className="section-con pt-0.">
      <div className="flex justify-center">
        <div className="lg:flex  bg-white gap-4 pt-3">
          {/*muti-images */}
          <div className=" flex lg:ml-4 lg:my-2 justify-center h-[560px]">
            <div className="overflow-y-scroll h-[480px] scrollbar-hide hidden xl:block">
              {Array(12)
                .fill(product[0].imgUrl)
                .map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={product[0].title}
                    className="h-[64px] min-w-[62px] p-2 border border-gray-100"
                  />
                ))}
            </div>
            <div className="relative min-w-[450px] min-h-[200px]">
              {/* img container */}
              <div className="lg:border-[1px] lg:border-gray-200 py-[14px] flex justify-center">
                <img
                  src={product[0].imgUrl}
                  alt={product[0].title}
                  className="w-[360px] h-[420px]"
                />
              </div>
              {/* btn-container */}
              <div className="grid grid-cols-2 gap-1.5 mt-2 w-full">
                <button className="text-[18px] bg-amber-300 text-white py-[14px]">
                  ADD TO CART
                </button>
                <button className="text-[18px] bg-orange-500 text-white py-[8px]">
                  BUY NOW
                </button>
              </div>
              {/* fav-container */}
              <button className="absolute top-1 right-2 bg-white rounded-full p-1.5 shadow-sm hover:scale-105 transition-transform">
                <Heart className="fill-gray-200 text-white w-6 h-6 md:w-7 md:h-7" />
              </button>
            </div>
          </div>

          {/* descreption */}
          <div className="mt-3  flex flex-col gap-[8px] ml-3 lg:h-[560px] lg:overflow-y-auto scrollbar-hide ">
            <h1 className="text-[18px]">{product[0].title}</h1>
            <p className="text-gray-500 text-[14px]">
              {" "}
              <span className="bg-green-700 text-white text-[14px] px-[4px] pt-[2px] pb-0">
                4.4 *
              </span>{" "}
              41,943 Ratings & 1,269 Reviews
            </p>
            <h1 className="text-[28px] font-[550]">
              ₹{product[0].rate.split(" ")[1].split("*")[0].trim()}{" "}
              <span className="text-green-700 text-[16px] pl-1.5">27% off</span>
            </h1>
            <p className="text-gray-600 text-[16px]">
              + ₹79 Protect Promise Fee{" "}
              <span className="text-blue-700 pl-1 text-[1px]">Lean more</span>
            </p>
            <p className="text-gray-600 text-[16px]">
              Secure delivery by 1 Nov, Saturday
            </p>
            <p className=" text-[16px]">Coupons for you</p>
            <div className="flex gap-2">
              <TicketPercent className="text-green-600 fill-green-600" />
              <p className="">
                Special Price{" "}
                <span className="text-gray-500">
                  Get extra ₹500 off on 1 data(s)
                </span>{" "}
                <span className="text-blue-600 pl-1">T&C</span>
              </p>
            </div>
            {/* offers */}
            <div className="flex flex-col gap-[7px]">
              <h1 className="text-[19px]">Available offers</h1>
              <div className="flex gap-2">
                <Tag className="text-green-600 fill-green-600 size-[20px]" />
                <p className="">
                  Bank Offer{" "}
                  <span className="text-gray-500">
                    5% cashback on Axis Bank Flipkart Debit Card up to ₹750
                  </span>{" "}
                  <span className="text-blue-600 pl-1">T&C</span>
                </p>
              </div>
              <div className="flex gap-2">
                <Tag className="text-green-600 fill-green-600 size-[20px]" />
                <p className="">
                  Bank Offer{" "}
                  <span className="text-gray-500">
                    5% cashback on Flipkart SBI Credit Card upto ₹4,000 per
                    calendar quarter{" "}
                  </span>{" "}
                  <span className="text-blue-600 pl-1">T&C</span>
                </p>
              </div>
              <div className="flex gap-2">
                <Tag className="text-green-600 fill-green-600 size-[20px]" />
                <p className="">
                  Bank Offer{" "}
                  <span className="text-gray-500">
                    Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto
                    ₹4,000 per statement quarter{" "}
                  </span>{" "}
                  <span className="text-blue-600 pl-1">T&C</span>
                </p>
              </div>
            </div>
            {/* exchage box */}
            <div className="ml-5">
              <h1 className="text-blue-600 pl-1 mt-2 mb-5">
                View 6 more offers
              </h1>
              <div className="flex justify-between w-[400px] border-1 border-gray-300 p-4 bg-blue-50">
                <div className="">Buy without Exchange</div>
                <div className="">
                  {" "}
                  ₹{product[0].rate.split(" ")[1].split("*")[0].trim()}
                </div>
              </div>
              <div className=" w-[400px] border-1 border-gray-300 p-3">
                <div className="flex justify-between">
                  <div className="">Buy with Exchange</div>
                  <div className="">up to ₹9,400 off</div>
                </div>
                <div className="flex justify-center datas-center  h-10">
                  <div className="text-red-500">
                    {" "}
                    Enter pincode to check if exchange is available
                  </div>
                </div>
              </div>
              <div className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                ducimus architecto doloribus beatae officiis non rerum ut
                dolores laboriosam amet! Accusantium perferendis ipsa excepturi
                sit obcaecati aliquam possimus consequuntur animi dolorum velit
                debitis asperiores, voluptas maxime magnam quod eos facilis.
                Consequatur aliquam nostrum cum tempora incidunt voluptatum
                doloremque iusto facere vel, corporis qui, sapiente, sint veniam
                fugiat illo voluptatibus aperiam veritatis natus ea praesentium
                beatae obcaecati assumenda. Distinctio, cum! Ipsum est, vel,
                iure, perspiciatis labore libero odit neque voluptates nam
                tempora laborum provident alias totam. Molestiae, fugiat.
                Deleniti aut dolore mollitia, doloremque ipsum labore eligendi
                perferendis iure saepe similique quod rem minima nemo autem
                quisquam, ab at? Eaque eius sapiente dolore doloremque
                voluptates corporis vitae quibusdam provident consequatur
                laudantium minima veniam aliquid ratione unde deserunt,
                assumenda voluptas iure fugit dignissimos similique ea vel. Quam
                totam nihil, assumenda maiores beatae eius eaque praesentium.
                Iure molestias eligendi, asperiores at illum vel nam cupiditate
                doloribus fugit repellendus est, dolorum voluptates adipisci
                nihil laborum velit deleniti cum perspiciatis nobis ipsa omnis
                veritatis labore dignissimos! Culpa architecto in ducimus. Rerum
                quos vero, quae dolor asperiores, doloribus pariatur qui harum
                nihil exercitationem libero dolorem blanditiis accusantium
                consequuntur a quisquam voluptatum iure animi expedita culpa ab
                distinctio, non labore maiores? Nisi rem cum praesentium, culpa
                magnam autem dolore nobis quos, quisquam ratione inventore sequi
                expedita excepturi at eaque exercitationem asperiores.
                Consequuntur ipsa et fugiat repellat impedit placeat voluptas
                atque fugit, quo ab ad consequatur eos nemo suscipit, neque
                possimus. Laboriosam animi, beatae ut est vel sunt similique
                reprehenderit nostrum obcaecati voluptatem a, odit quibusdam id,
                recusandae ipsam accusamus incidunt consequuntur culpa ea esse
                voluptatibus eius? Libero, dolorum laboriosam consequatur animi
                soluta amet tenetur unde neque. Blanditiis commodi deleniti
                error laudantium, exercitationem odio iure, nesciunt doloribus
                labore impedit sint quidem rem excepturi nisi? Reprehenderit
                delectus dolore harum vel, impedit dicta natus libero aspernatur
                totam repudiandae temporibus quas inventore eligendi fuga
                consequatur repellendus suscipit quia earum non. Earum facere
                aspernatur saepe quos molestias quam cupiditate, quas fugiat
                eius deleniti quidem in sit amet eaque accusamus nulla nemo,
                tenetur aperiam provident ipsa fugit deserunt modi ducimus.
                Fugit praesentium aspernatur impedit officiis nisi consectetur
                nemo fugiat nihil soluta! Pariatur amet at quod tempora tenetur
                aperiam nemo magni repudiandae aut. Mollitia vitae ut minus
                quasi doloribus? Necessitatibus, nesciunt odio. Ullam, vero?
                Temporibus sequi sint reiciendis dolorum laudantium eos
                necessitatibus deleniti? Soluta eius, saepe ab enim distinctio
                incidunt nemo, cumque atque possimus quos iusto totam
                dignissimos sed quis maxime perspiciatis! Iusto labore natus
                quo! Enim quibusdam officia perspiciatis fugit dolor veritatis,
                eveniet esse labore. Incidunt aliquid ipsa doloremque deserunt
                optio tempora, laudantium voluptates dolore quos vel reiciendis
                placeat omnis quidem beatae qui enim corrupti, quisquam sunt,
                labore facilis? Modi sint iusto nihil explicabo veritatis
                blanditiis unde dolore ullam cum, quis officia sunt quos iste
                ipsa! Necessitatibus repellendus facilis non unde ullam
                voluptatem doloribus, recusandae tempora explicabo nemo
                praesentium sequi neque eaque aut vero saepe at rem dolorum.
                Rem, saepe ea, sint reiciendis dignissimos veniam illo
                consequuntur repudiandae quas corrupti facilis, quos deserunt
                placeat.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 hidden lg:block">
        <ProductList headline={"Similer Products"} />
      </div>
    </section>
  );
};

export default ProductDetails;
