import NewHotList from "../news/NewHotList.jsx"
const NewsSidebar = () => {
  return (
    <aside className="politics-sidebar ms-lg-4 mt-4 mt-lg-0">
    <div className="event-card">
      {/* Label */}
      <div className="event-label">
        <span>Sự kiện</span>
      </div>

      {/* Title */}
      <h3 className="event-title">
        VỤ NỮ SINH TỬ VONG Ở TỈNH<br />
        VĨNH LONG
      </h3>

      {/* Image */}
      <div className="event-image">
        <img
          src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/11/15/tien-trinh-vien-ksnd-toi-cao-dieu-tra-to-giac-cua-gia-dinh-nu-sinh-o-vinh-long-1711.png?width=360&s=cIZ6o_z_Yb9qSKvh0kuFFA"
          alt="Vụ nữ sinh tử vong Vĩnh Long"
        />
      </div>

      {/* List news */}
      <ul className="event-news-list">
        <li className="event-news-item">
          <a href="#">
            Tiến trình Viện KSND tối cao điều tra tố giác của gia đình
          </a>
          <span className="comment-count">1</span>
        </li>

        <li className="event-news-item">
          <a href="#">
            Viện KSND tối cao phục hồi điều tra tố giác của gia đình nữ
          </a>
          <span className="comment-count">1</span>
        </li>

        <li className="event-news-item">
          <a href="#">
            Đình chỉ điều tra vụ án cha nữ sinh nổ súng bắn tài xế xe
          </a>
        </li>
      </ul>
    </div>

      <div className="mt-4">
        <NewHotList/>
      </div>
    </aside>
  );
};

export default NewsSidebar;
