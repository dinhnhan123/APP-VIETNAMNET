import LawHotList from "../law/LawHotList.jsx";

const LawSidebar = () => {
  return (
    <aside className="law-sidebar ms-lg-4 mt-4 mt-lg-0">
      <div className="sidebar-box">HỒ SƠ VỤ ÁN</div>
      <div className="sidebar-box">BỊ CAN – BỊ CÁO</div>
      <div className="sidebar-box">VĂN BẢN PHÁP LUẬT</div>
      <div className="sidebar-box highlight">CẢNH BÁO PHÁP LÝ</div>

      <div className="mt-4">
        <LawHotList />
      </div>
    </aside>
  );
};

export default LawSidebar;
