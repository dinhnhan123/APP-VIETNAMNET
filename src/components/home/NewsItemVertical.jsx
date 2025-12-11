const NewsItemVertical = ({ item }) => {
  return (
    <div className="mb-3">
      <img
        src={item.image}
        alt=""
        className="w-100 rounded object-fit-cover"
        style={{ height: "150px" }}
      />
      <p className="fw-medium mt-2">{item.title}</p>
    </div>
  );
};

export default NewsItemVertical;
