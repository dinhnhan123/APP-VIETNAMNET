import EthnicityReligionHotList from "./EthnicityReligionHotList";
const EthnicityReligionSidebar = ({ hotList }) => {
  return (
    <aside className="politics-sidebar ms-lg-4 mt-4 mt-lg-0">
      <div className="mt-4">
        <EthnicityReligionHotList  hotList={hotList}/>
      </div>
    </aside>
  );
};

export default EthnicityReligionSidebar;
