import React from "react";
import Banner from "../components/home/Banner";
import {
  newsListHorizontal,
  newsListVertical,
  mainNews,
  newsGridList,
  sections1,
  sections2,
  mainVideo,
  sideVideos,
  photo,
  multimedia

} from "../fakeApi.jsx";
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
import MarketLayout  from "../components/home/MarketLayout.jsx";
const HomePage = () => {
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
            <Sidebar />
            <NewsSliderPost />
          </div>

        </div>
         <div className="mt-4">
          <ListNewsGrid list={newsGridList} />
        </div>
         <div className="mt-4">
          <NewsCategoryPost sections={sections1} />
        </div>
        <div className="mt-4">
          <AiContestBanner />
        </div>
         <div className="mt-4">
          <NewsCategoryPost sections={sections2} />
        </div>
        <div className="mt-4">
           <VideoSection mainVideo={mainVideo} sideVideos={sideVideos} />
        </div>
        <div className="mt-4">
        <MediaSection multimedia={multimedia} photo={photo} />
        </div>
        <div className="mt-4">
          <MarketLayout />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
