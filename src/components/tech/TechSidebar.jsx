import TechHotList from "./TechHotList";

const TechSidebar = () => {
  return (
    <aside className="tech-sidebar ms-lg-4 mt-4 mt-lg-0">
      <div className="sidebar-box">HỒ SƠ DOANH NGHIỆP CÔNG NGHỆ</div>
      <div className="sidebar-box">STARTUP NỔI BẬT</div>
      <div className="sidebar-box">AI & CHUYỂN ĐỔI SỐ</div>
      <div className="sidebar-box highlight">CÔNG NGHỆ TƯƠNG LAI</div>

      <div className="mt-4">
        <TechHotList />
      </div>
    </aside>
  );
};

export default TechSidebar;
