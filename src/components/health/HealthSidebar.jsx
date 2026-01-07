import HealthHotList from "../health/HealthHotList.jsx";

const HealthSidebar = () => {
  return (
    <aside className="health-sidebar ms-lg-4 mt-4 mt-lg-0">
      <div className="sidebar-box">CẨM NANG SỨC KHỎE</div>
      <div className="sidebar-box">DINH DƯỠNG & ĂN UỐNG</div>
      <div className="sidebar-box">BỆNH LÝ PHỔ BIẾN</div>
      <div className="sidebar-box highlight">CHĂM SÓC CƠ THỂ</div>

      <div className="mt-4">
        <HealthHotList />
      </div>
    </aside>
  );
};

export default HealthSidebar;
