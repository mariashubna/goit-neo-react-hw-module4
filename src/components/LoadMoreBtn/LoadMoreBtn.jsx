import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ loadMore }) => {
  return (
    <>
      <button type="button" onClick={loadMore}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
