const FeaturedArticle = ({data}) => {
  return (
    <div className="featured-article flex-grow-1">
      <img src={data.image} alt="" className="img-fluid" />
      <h2 className="mt-2">
       {data.title}
      </h2>
      <p>
        {data.description}
      </p>
    </div>
  );
};

export default FeaturedArticle;
