import PropTypes from "prop-types";

export default function TagButton({ tag, handleFilter }) {
  return (
    <button
      onClick={() => {
        handleFilter(tag);
      }}
      className="rounded-[0.25rem] bg-c-neutral-light px-2 transition-colors hover:bg-c-primary hover:text-c-neutral-light active:bg-c-primary"
    >
      {tag}
    </button>
  );
}

TagButton.propTypes = {
  tag: PropTypes.string,
  handleFilter: PropTypes.func,
};
