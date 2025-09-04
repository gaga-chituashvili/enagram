import React from "react";
import enagramlogo from "./images/enagramlogo.svg";

const Home = () => {
  return (
    <section className="flex h-screen">
      <aside className="w-60 bg-[#0b2a5a] text-white flex flex-col gap-y-[50px] pl-[24px] pt-[45px]">
        <article className="flex gap-x-[10px] items-center">
          <img src={enagramlogo} alt="" />
          <h2 className="p-4 text-lg font-bold">ENAGRAM</h2>
        </article>
        <nav className="flex-1 flex flex-col gap-y-[28px]">
          <ul className="space-y-2 px-4 text-sm flex flex-col gap-y-[34px]">
            <li className="hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
              მართლმწერი
            </li>
            <li className="hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
              ტექსტის შედარება
            </li>
          </ul>
          <ul className="space-y-2 px-4 text-sm flex flex-col gap-y-[28px]">
            <li className="hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
              ხმა → ტექსტი
            </li>
            <li className="hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
              ტექსტი → ხმა
            </li>
            <li className="hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
              PDF კონვერტაცია
            </li>
          </ul>
        </nav>
        <span className="p-4 border-t border-white/20 text-xs">
          თამარ ონიანი
        </span>
      </aside>

      <section className="flex flex-col flex-1">
        <header className="flex justify-between items-center p-4 shadow-sm border-b">
          <article className="flex items-center gap-3">
            <select className="border rounded p-2 text-sm">
              <option>ქართული</option>
            </select>
            <label className="flex items-center gap-1 text-sm">
              <input type="checkbox" /> ფორმატის შენარჩუნება
            </label>
          </article>
          <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-sm">
            + ახლის დამატება
          </button>
        </header>
        <section className="flex flex-col gap-y-[32px]">
          <main className="flex flex-1 p-6 gap-4 bg-gray-50">
            <textarea
              className="flex-1 p-4 h-[542px] rounded-lg bg-blue-50 resize-none focus:outline-none"
              placeholder="დაიწყე წერა..."
            />
            <div className="flex items-center">
              <span className="text-gray-400 text-2xl">⇔</span>
            </div>
            <textarea
              className="flex-1 p-4 h-[542px] rounded-lg bg-blue-50 resize-none focus:outline-none"
              placeholder="დაიწყე წერა..."
            />
          </main>
          <article className="flex justify-center">
            <button className="w-[142px] bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-md text-center">
              გადატანა
            </button>
          </article>
        </section>
      </section>
    </section>
  );
};

export default Home;
