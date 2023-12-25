import PropTypes from "prop-types";
import iconRemove from "/icon-remove.svg";

export default function TagFilterContainer({ tags, clear, remove }) {
  return (
    <div
      className={`${
        tags.length === 0 && "opacity-0"
      } flex w-full -translate-y-6 flex-row items-center justify-between rounded-[0.25rem] bg-c-neutral-lighter px-4 py-2 transition-opacity`}
    >
      <ul className="flex flex-row flex-wrap items-center gap-4">
        {tags.map((tag) => (
          <li
            key={tag}
            className="flex flex-row gap-1 overflow-hidden rounded-[0.25rem] bg-c-neutral-light"
          >
            <p className="px-2">{tag}</p>
            <button
              onClick={() => {
                remove(tag);
              }}
              className=" remove bg-c-primary p-1"
            >
              <img width={16} height={16} src={iconRemove} alt="" />
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clear} className="p-2">
        Clear
      </button>
    </div>
  );
}

TagFilterContainer.propTypes = {
  tags: PropTypes.array,
  clear: PropTypes.func,
  remove: PropTypes.func,
};
