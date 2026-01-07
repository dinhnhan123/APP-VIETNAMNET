import BusinessHotList from "./BusinessHotList";

const BusinessSidebar = ({ hotList }) => {
  return (
    <aside className="politics-sidebar ms-lg-4 mt-4 mt-lg-0">
      <div className="mt-4">
        <BusinessHotList hotList={hotList} />
      </div>
    </aside>
  );
};

export default BusinessSidebar;
