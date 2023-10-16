import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FiGlobe,
  FiBriefcase,
  FiActivity,
  FiAward,
  FiBookmark,
  FiBox,
  FiCpu,
} from "react-icons/fi";
import { BsShieldPlus } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdOutlineSportsBaseball } from "react-icons/md";


import AssideLeftButton from "./AssideLeftButton";
import { NavLink } from "react-router-dom";

function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

function AssideLeft() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const iconLists = {
    world: <FiGlobe />,
    politics: <FiBriefcase />,
    sports: <MdOutlineSportsBaseball />,
    technology: <FiAward />,
    economy: <FiBookmark />,
    entertainment: <AiOutlinePlayCircle />,
    health: <FiActivity />,
    science: <FiBox />,
    culture: <FiCpu />,
    environment: <BsShieldPlus />,
  };

  const Aster = [
    {
     
      icon: <img className="inline" src="logo.svg" alt="Logo"/>,
      path: "/Aster",
      span: "Aster News",
    },
  ];

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://all-api.bitcode.az/api/news/category");
      const category = res.data.map((item) => ({
        ...item,
        icon: iconLists[item.slug] || <span>Unknown</span>, // Fallback to default content
      }));
      setCategories(category);
    } catch (error) {
      console.error("Kategorileri getirme sırasında bir hata oluştu:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="left">
      <div>
        {Aster?.map((item, index) => (
          <div className="TheColor mt-6 p-5" key={index}>
            <NavLink to={item.path} className="block mb-2">
             
              <span className="ml-2 inline">{item.icon}</span>
              <span className="absolute mt-2 spanAster">{item.span}</span>
            </NavLink>
            {loading ? (
              Array(10)
                .fill(null)
                .map((_, index) => <SkeletonLoader key={index} />)
            ) : (
              categories?.map((category, index) => (
                <div key={index}>
                  <NavLink to={`/${category.slug}`} className="block">
                    <div className="flex items-center">
                      <span className="text-xl text-[#072D4B] mr-2 mt-7 ml-3">{category.icon}</span>
                      <span className="mt-7">{category.name}</span>
                    </div>
                  </NavLink>
                </div>
              ))
            )}
          </div>
        ))}
        {/* <AssideLeftButton /> */}
      </div>
    </div>
  );
}

export default AssideLeft;
