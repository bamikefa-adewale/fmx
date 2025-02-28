// import SubHero from "@/app/product/SubHero";
// import { fruitImages, fruits, tags } from "@/components/constanct/Constant";
// import CustomBtn from "@/components/CustomBtn";
// import SelectedCard from "@/components/SelectedCard";
// import Container from "@/components/ui/Container";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";

// type Fruit = {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   location: string;
//   soldBy: string;
//   currentPrice: number;
//   markPrice: number;
// };

// const FrultsDetailsPage = () => {
//   const { id } = useParams<{ id: string }>();
//   const [fruit, setFruit] = useState<Fruit | null>(null);
//   const [activeTags, setActiveTags] = useState(tags[0]?.title);
//   const [mainImage, setMainImage] = useState<string | null>(null);

//   useEffect(() => {
//     if (id) {
//       const foundFruit = fruits?.find((f) => f.id === Number(id));
//       setFruit(foundFruit || null);
//       setMainImage(foundFruit?.image || null);
//     }
//   }, [id]);
//   if (!fruit) return <p className="text-center mt-10">Fruit not found</p>;
//   console.log(fruit);

//   return (
//     <Container>
//       <div className="bg-[#FCFFFC] my-10 rounded-2xl p-8 ">
//         <div className="">
//           <div className=" grid grid-cols-2 gap-5">
//             {/* first part */}
//             <div className="w-full h-full">
//               <div className="flex gap-5">
//                 <div className="grid ">
//                   {fruitImages.map(({ image }, index) => (
//                     <Image
//                       key={index}
//                       src={image} // ✅ Directly using 'image' without 'imageObj'
//                       alt={fruit.name}
//                       width={155}
//                       height={146}
//                       className="w-[155px] h-[146px] object-cover rounded-lg cursor-pointer border-2 hover:border-[#2C9805]"
//                       onClick={() => setMainImage(image)} // ✅ Set main image on click
//                     />
//                   ))}
//                 </div>
//                 {/* main image */}
//                 <div className="">
//                   <Image
//                     src={mainImage || fruit?.image}
//                     alt={fruit?.name}
//                     width={517}
//                     height={456}
//                     className=" w-full h-[456px] object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* second part */}
//             <div className="">
//               <div className=" border border-gray-300 rounded-lg p-8">
//                 <p className="text-gray-300 text-sm font-normal my-5">
//                   {" "}
//                   {fruit.name}
//                 </p>
//                 <p className="text-black  text-2xl font-normal my-5"> </p>
//                 {fruit.description} <span>{fruit.location}</span>
//                 <div className="flex gap-20 my-4 text-2xl font-medium ">
//                   <span className="text-[#2C9805]">
//                     {" "}
//                     Current Price:: $ {fruit.markPrice}
//                   </span>
//                   <h4 className=" text-gray-400">
//                     Market Price $ :
//                     <span className="line-through"> {fruit.currentPrice} </span>
//                   </h4>
//                 </div>
//               </div>
//               <div>
//                 <SelectedCard />
//                 <CustomBtn label="Add To Cart" />
//               </div>
//               <div className="rounded-lg mt-4 py-10 flex gap-4 px-3 border border-gray-400">
//                 <p> sold by {fruit.soldBy}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* down section */}
//         <div className="border rounded-md border-gray-400 my-5">
//           <div className=" flex gap-5 bg-[#E6E8E6]">
//             {" "}
//             {tags?.map((tag) => (
//               <div key={tag.title}>
//                 <p
//                   className={`cursor-pointer text-lg font-semibold p-5 pb-1 ${
//                     activeTags === tag.title
//                       ? "border-b-2 border-[#2C9805] text-black"
//                       : "text-[#818B80]"
//                   }`}
//                   onClick={() => setActiveTags(tag.title)}
//                 >
//                   {tag.title}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="p-5">
//             {activeTags === tags[0].title ? (
//               <p>{tags.find((tags) => tags.title === activeTags)?.content}</p>
//             ) : (
//               <div>
//                 {tags
//                   .find((tag) => tag.title === activeTags)
//                   ?.content?.split(", ")
//                   .map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* you will like thse section */}
//       <SubHero />
//     </Container>
//   );
// };

// export default FrultsDetailsPage;
