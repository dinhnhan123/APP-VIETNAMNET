import React from "react";
import Banner from "../components/home/Banner";
import NewsItemHorizontal from "../components/home/NewsItemHorizontal.jsx";
import NewsItemVertical from "../components/home/NewsItemVertical.jsx";
import MainNews from "../components/home/MainNews.jsx";
import Sidebar from "../components/home/Sidebar.jsx";
import NewsSliderPost from "../components/home/NewsSliderPost.jsx";
import ListNewsGrid from "../components/home/ListNewsGrid.jsx";
import NewsCategoryPost from "../components/home/NewsCategoryPost.jsx";
import AiContestBanner from "../components/home/AiContestBanner.jsx";
import VideoSection from "../components/home/VideoSection.jsx";
import MediaSection from "../components/home/MediaSection.jsx";
import MarketLayout from "../components/home/MarketLayout.jsx";
import { fetchHome } from "../api/rssService.js";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHome()
      .then(data => {
        setHomeData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("HOME API ERROR:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (!homeData) return null;

 const allNews = [
  ...(homeData.politics || []).map(item => ({
    ...item,
    category: "Chính trị",
  })),

  ...(homeData.business || []).map(item => ({
    ...item,
    category: "Kinh doanh",
  })),

  ...(homeData.news || []).map(item => ({
    ...item,
    category: "Thời sự",
  })),

  ...(homeData.ethnicityReligion || []).map(item => ({
    ...item,
    category: "Dân tộc - Tôn giáo",
  })),

  ...(homeData.sport || []).map(item => ({
    ...item,
    category: "Thể thao",
  })),
];
const sections1 = [
  {
    title: "CHÍNH TRỊ",
    items: (homeData.politics || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
  {
    title: "KINH DOANH",
    items: (homeData.business || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
  {
    title: "THỜI SỰ",
    items: (homeData.news || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
  {
    title: "DÂN TỘC - TÔN GIÁO",
    items: (homeData.ethnicityReligion || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
  {
    title: "THỂ THAO",
    items: (homeData.sport || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
];

const sections2 = [
  {
    title: "GIÁO DỤC",
    items: (homeData.education || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
  {
    title: "THẾ GIỚI",
    items: (homeData.world || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
  {
    title: "VĂN HÓA - GIẢI TRÍ",
    items: (homeData.entertainment || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
  {
    title: "ĐỜI SỐNG",
    items: (homeData.life || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
  {
    title: "CÔNG NGHỆ",
    items: (homeData.tech || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
  {
    title: "PHÁP LUẬT",
    items: (homeData.law || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
  {
    title: "XE",
    items: (homeData.car || []).slice(0, 4).map((item, index) => ({
      title: item.title,
      img: index === 0 ? item.image : null,
      link: item.link,
    })),
  },
];

  const mainNews = homeData.politics || [];
  const newsListVertical = homeData.sport?.slice(0,2) || [];
  const techNow = homeData.tech?.slice(1,4) || [];
  const newsListHorizontal = allNews.slice(11,19);
  const newsHot = allNews.slice(19,24);
  const newsGridList = allNews.slice(24, 29);
  const multimedia = homeData.entertainment[0];
  const photo =  homeData.law?.slice(6,8) || [];
  const listMarket =  homeData.business?.slice(7,12) || [];
  const readALot = allNews.slice(10,17);
  const commentALot = allNews.slice(17,25);
  return (
    <div>
      <div className="container-fluid">
        <Banner />
      </div>

      <div className="container mt-4">
        <div className="row g-4">

          <div className="col-md-3">
            {newsListHorizontal.map((item) => (
              <NewsItemHorizontal key={item.id} item={item} />
            ))}
          </div>


          <div className="col-md-6">
            <MainNews data={mainNews} />

            <div className="row mt-3">
              {newsListVertical.map((item) => (
                <div key={item.id} className="col-12 col-sm-6 col-md-6">
                  <NewsItemVertical item={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-3">
            <Sidebar data = {newsHot} />
            <NewsSliderPost data={techNow}/>
          </div>

        </div>
        <div className="mt-4">
          <ListNewsGrid list={newsGridList} />
        </div>
        <div className="mt-4">
          <NewsCategoryPost sections={sections1} />
        </div>
        <div className="mt-4">
          <AiContestBanner data = {techNow} />
        </div>
        <div className="mt-4">
          <NewsCategoryPost sections={sections2} />
        </div>
        
        <div className="mt-4">
          <MediaSection multimedia={multimedia} photo={photo} />
        </div>
        <div className="mt-4">
          <MarketLayout listMarket = {listMarket} readALot = {readALot} commentALot = {commentALot}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
