import React, { useState } from "react";
import { diffWords } from "diff";
import enagramlogo from "./images/enagramlogo.svg";
import checkIcon from "./images/check.svg";
import spellingIcon from "./images/Spelling.svg";
import aligncenterIcon from "./images/aligncenter.svg";
import micIcon from "./images/mic.svg";
import programmingIcon from "./images/programming.svg";
import { FiMenu, FiX } from "react-icons/fi";

const Home = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diffResult, setDiffResult] = useState(null);
  const [activeMenu, setActiveMenu] = useState("ტექსტის შედარება");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCompare = () => {
    const result = diffWords(text1, text2);
    setDiffResult(result);
  };

  const menuItems = [
    { label: "მართლმწერი", icon: checkIcon },
    { label: "ტექსტის შედარება", icon: spellingIcon },
    { label: "ხმა → ტექსტი", icon: micIcon },
    { label: "PDF კონვერტაცია", icon: aligncenterIcon },
    { label: "ტექსტი → ხმა", icon: programmingIcon },
  ];

  const renderMenuItem = (item) => (
    <li
      key={item.label}
      onClick={() => setActiveMenu(item.label)}
      className="relative px-4 py-2 cursor-pointer flex items-center gap-2"
    >
      {activeMenu === item.label && (
        <article className="absolute inset-y-0 left-0 w-[90%] rounded-r-full bg-white"></article>
      )}
      <img
        src={item.icon}
        alt={item.label}
        className={`w-5 h-5 relative z-10 ${
          activeMenu === item.label ? "filter brightness-0" : "opacity-70"
        }`}
      />
      <span
        className={`relative z-10 ${
          activeMenu === item.label
            ? "text-[#0b2a5a] font-medium"
            : "text-white"
        }`}
      >
        {item.label}
      </span>
    </li>
  );

  return (
    <section className="flex h-screen bg-gray-50">
      <aside className="hidden md:flex w-64 bg-[#0b2a5a] text-white flex-col pt-10">
        <article className="flex items-center gap-3 px-6 mb-10">
          <img src={enagramlogo} alt="logo" />
          <h2 className="text-lg font-bold">ENAGRAM</h2>
        </article>

        <nav className="flex-1 flex flex-col gap-y-6">
          <ul className="flex flex-col gap-y-2">
            {menuItems.map(renderMenuItem)}
          </ul>
        </nav>

        <article className="mt-auto px-6 py-4 border-t border-white/20 text-xs">
          თამარ ონიანი
        </article>
      </aside>

      {sidebarOpen && (
        <aside className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
          <section className="w-64 bg-[#0b2a5a] text-white flex flex-col pt-10">
            <article className="flex items-center justify-between px-6 mb-10">
              <article className="flex items-center gap-3">
                <img src={enagramlogo} alt="logo" />
                <h2 className="text-lg font-bold">ENAGRAM</h2>
              </article>
              <FiX
                size={24}
                className="cursor-pointer"
                onClick={() => setSidebarOpen(false)}
              />
            </article>

            <nav className="flex-1 flex flex-col gap-y-6">
              <ul className="flex flex-col gap-y-2">
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => {
                      setActiveMenu(item.label);
                      setSidebarOpen(false);
                    }}
                    className="relative px-4 py-2 cursor-pointer flex items-center gap-2"
                  >
                    {activeMenu === item.label && (
                      <article className="absolute inset-y-0 left-0 w-[90%] rounded-r-full bg-white"></article>
                    )}
                    <img
                      src={item.icon}
                      alt={item.label}
                      className={`w-5 h-5 relative z-10 ${
                        activeMenu === item.label
                          ? "filter brightness-0"
                          : "bg-white"
                      }`}
                    />
                    <span
                      className={`relative z-10 ${
                        activeMenu === item.label
                          ? "text-[#0b2a5a] font-medium"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>

            <article className="mt-auto px-6 py-4 border-t border-white/20 text-xs">
              თამარ ონიანი
            </article>
          </section>
        </aside>
      )}

      <section className="flex flex-col flex-1">
        <header className="flex justify-between items-center p-4 shadow-sm border-b bg-white">
          <article className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded hover:bg-gray-100"
            >
              <FiMenu size={20} />
            </button>

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

        <section className="flex flex-col gap-y-6 p-4">
          <main className="flex flex-col md:flex-row flex-1 gap-4">
            <textarea
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              className="flex-1 p-4 h-[300px] md:h-[500px] rounded-lg bg-blue-50 resize-none focus:outline-none"
              placeholder="დაიწყე წერა..."
            />
            <div className="flex items-center justify-center text-2xl text-gray-400">
              ⇔
            </div>
            <textarea
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              className="flex-1 p-4 h-[300px] md:h-[500px] rounded-lg bg-blue-50 resize-none focus:outline-none"
              placeholder="დაიწყე წერა..."
            />
          </main>

          <article className="flex justify-center">
            <button
              onClick={handleCompare}
              className="w-[142px] bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-md text-center"
            >
              შედარება
            </button>
          </article>

          {diffResult && (
            <article className="p-4">
              <h3 className="font-semibold mb-4">შედარების შედეგი:</h3>
              <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="border rounded p-4 bg-white leading-relaxed">
                  {diffResult.map((part, index) => {
                    let style = "";
                    if (part.removed) style = "text-red-600 line-through";
                    if (!part.removed && !part.added) style = "text-gray-800";
                    return (
                      <span key={index} className={style}>
                        {part.value}
                      </span>
                    );
                  })}
                </article>

                <article className="border rounded p-4 bg-white leading-relaxed">
                  {diffResult.map((part, index) => {
                    let style = "";
                    if (part.added) style = "text-green-600";
                    if (!part.added && !part.removed) style = "text-gray-800";
                    return (
                      <span key={index} className={style}>
                        {part.value}
                      </span>
                    );
                  })}
                </article>
              </article>
            </article>
          )}
        </section>
      </section>
    </section>
  );
};

export default Home;
