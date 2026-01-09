import CarHotList from "../car/CarHotList.jsx";

const CarSidebar = () => {
  return (
    <aside className="car-sidebar ms-lg-4 mt-4 mt-lg-0">
      <div className="sidebar-box">HỒ SƠ HÃNG XE</div>
      <div className="sidebar-box">HỒ SƠ DÒNG XE</div>
      <div className="sidebar-box">TOÀN CẢNH THỊ TRƯỜNG Ô TÔ</div>
      <div className="sidebar-box highlight">XE HOT</div>

      <div className="mt-4">
        <CarHotList />
      </div>
    </aside>
  );
};

export default CarSidebar;
