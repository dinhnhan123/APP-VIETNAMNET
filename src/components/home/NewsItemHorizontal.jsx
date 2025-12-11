const NewsItemHorizontal = ({ item }) => {
  return (
    <div className="d-flex mb-3">
      <img
        src={item.image}
        alt=""
        width="90"
        height="80"
        className="rounded me-3 object-fit-cover"
      />
      <p className="small fw-medium m-0">{item.title}</p>
    </div>
  );
};

export default NewsItemHorizontal;
