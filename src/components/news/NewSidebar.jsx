import PoliticsHotList from "../politics/PoliticsHotList.jsx"
const PoliticsSidebar = () => {
  return (
    <aside className="politics-sidebar ms-lg-4 mt-4 mt-lg-0">
      <div className="sidebar-box">HỒ SƠ ĐẠI BIỂU QUỐC HỘI</div>
      <div className="sidebar-box">HỒ SƠ ỦY VIÊN TRUNG ƯƠNG</div>
      <div className="sidebar-box">TOÀN VĂN PHÁT BIỂU CỦA LÃNH ĐẠO</div>
      <div className="sidebar-box highlight">ĐẠI HỘI ĐẢNG</div>

      <div className="mt-4">
        <PoliticsHotList/>
      </div>
    </aside>
  );
};

export default PoliticsSidebar;
