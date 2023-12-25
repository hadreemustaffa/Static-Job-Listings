import TagButton from "./TagButton";
import PropTypes from "prop-types";

const ListCard = ({ data, tags, handleFilter }) => {
  const {
    logo,
    company,
    new: isNew,
    featured: isFeatured,
    position,
    postedAt,
    contract,
    location,
  } = data;

  const logoUrl = new URL(logo, import.meta.url).href;
  const imgAlt = company + " company logo";

  return (
    <li
      className={`relative flex flex-col rounded-[0.25rem] ${
        isFeatured && "border-l-4 border-l-c-primary"
      } bg-c-neutral-lighter p-4 shadow-lg md:flex-row md:items-center md:justify-between md:gap-4 lg:gap-6 lg:p-8`}
    >
      <div className=" flex flex-row items-center gap-4 border-b border-b-c-neutral-dark md:basis-3/4 md:border-none">
        <div className="absolute -top-6 md:static">
          <img
            className="h-12 w-12 md:h-24 md:w-24"
            src={logoUrl}
            alt={imgAlt}
          />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <div className="flex flex-row flex-wrap gap-4">
            <p className="font-bold">{company}</p>
            <div className="flex flex-row items-center justify-center gap-2">
              {isNew && (
                <p className="rounded-xl bg-c-primary px-2 text-c-neutral-light">
                  NEW!
                </p>
              )}
              {isFeatured && (
                <p className="rounded-xl bg-c-neutral-darker px-2 text-c-neutral-light">
                  FEATURED
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-4">
            <h2 className=" text-lg font-bold text-c-neutral-darker hover:cursor-pointer hover:text-c-primary">
              {position}
            </h2>
            <ul className="flex flex-row flex-wrap items-center gap-x-6 text-c-neutral-dark">
              <li>{postedAt}</li>
              <li className="list-disc">{contract}</li>
              <li className="list-disc">{location}</li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="flex basis-2/4 flex-row flex-wrap gap-4 pt-4 font-bold md:justify-end">
        {tags.map((tag, idx) => (
          <li key={idx}>
            <TagButton handleFilter={handleFilter} tag={tag} />
          </li>
        ))}
      </ul>
    </li>
  );
};

ListCard.propTypes = {
  data: PropTypes.object,
  id: PropTypes.number,
  tags: PropTypes.array,
  handleFilter: PropTypes.func,
};

export default ListCard;
