import React from "react";

const Sidebar = () => {
  const seaGamesNews = [
    {
      id: 1,
      title: "Kỹ sư SEA Games 33: Thái Lan yên ắng trước khai mạc",
      image: "https://picsum.photos/90/60?1",
      url: "https://vietnamnet.vn/ky-su-sea-games-33-thai-lan-yen-ang-123.html",
    },
    {
      id: 2,
      title: "Bảng tổng sắp huy chương SEA Games 33 hôm nay 8/12",
      image: "https://picsum.photos/90/60?2",
      url: "https://vietnamnet.vn/bang-tong-sap-huy-chuong-sea-games-33-456.html",
    },
    {
      id: 3,
      title:
        "Trực tiếp SEA Games 33 hôm nay 8/12: Bóng chày Việt Nam thua Singapore",
      image: "https://picsum.photos/90/60?3",
      url: "https://vietnamnet.vn/truc-tiep-sea-games-33-789.html",
    },
  ];

  return (
    <div className="bg-dark text-white p-3 rounded-3 shadow-sm">

      <div className="text-center mb-3">
        <img
          src="https://static.vnncdn.net/v1/sea-game-33/title-seagame-33.png"
          alt="SEA Games Logo"
          style={{ width: "150px" }}
          className="mb-2"
        />

        <a
          href="https://vietnamnet.vn/lich-thi-dau-sea-games-33.html"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger btn-sm mt-2"
        >
          Lịch thi đấu
        </a>
      </div>

      {seaGamesNews.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-decoration-none"
        >
          <div className="d-flex mb-3">
            <img
              src={item.image}
              alt=""
              width="80"
              height="60"
              className="rounded me-2 object-fit-cover"
            />
            <p className="small fw-medium m-0">{item.title}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
