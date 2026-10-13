// const Footer = () => {
//   return (
//     <div className="bg-[#FAF9F6]">
//       <hr className="border-0 border-t border-gray-300" />
//       <div className="container mx-auto flex justify-between text-[14px] text-gray-400 py-7 ">
//         <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
//         <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-[#FAF9F6]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-center text-[12px] leading-6 text-gray-500 sm:px-6 sm:py-6 sm:text-[13px] md:flex-row md:gap-6 md:text-left lg:px-8 lg:py-7 lg:text-[14px]">
        <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>

        <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
      </div>
    </footer>
  );
};

export default Footer;
