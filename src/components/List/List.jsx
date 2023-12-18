import fetchListData from "./fetchListData";
import PropTypes from "prop-types";

const ListData = fetchListData();

function ListImg({ logo }) {
  return (
    <div className="absolute -top-6">
      <img width={48} height={48} src={logo} alt="" />
    </div>
  );
}

function ListCardTop({
  company,
  newTag,
  featuredTag,
  position,
  postedAt,
  contract,
  location,
}) {
  return (
    <div className="flex flex-col gap-2 pt-4">
      <div className="flex flex-row flex-wrap gap-4">
        <p>{company}</p>
        <div className="flex flex-row items-center justify-center gap-2">
          {newTag && (
            <p className="rounded-xl bg-c-primary px-2 text-c-neutral-light">
              NEW!
            </p>
          )}
          {featuredTag && (
            <p className="rounded-xl bg-c-neutral-darker px-2 text-c-neutral-light">
              FEATURED
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 border-b border-b-c-neutral-dark pb-4">
        <p className=" text-c-neutral-darker">{position}</p>
        <ul className="flex flex-row flex-wrap gap-x-6 text-c-neutral-dark">
          <li>{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </ul>
      </div>
    </div>
  );
}

function ListCardBottom({ role, level, languages, tools }) {
  return (
    <ul className="flex flex-row flex-wrap gap-4 pt-4">
      <li className="rounded-md bg-c-neutral-light p-2">
        <button>{role}</button>
      </li>

      <li className="rounded-md bg-c-neutral-light p-2">
        <button>{level}</button>
      </li>

      {languages.map((language) => (
        <li key={language} className="rounded-md bg-c-neutral-light p-2">
          <button>{language}</button>
        </li>
      ))}

      {tools.map((tool) => (
        <li key={tool} className="rounded-md bg-c-neutral-light p-2">
          <button>{tool}</button>
        </li>
      ))}
    </ul>
  );
}

ListImg.propTypes = {
  logo: PropTypes.string,
};
ListCardTop.propTypes = {
  company: PropTypes.string,
  newTag: PropTypes.bool,
  featuredTag: PropTypes.bool,
  position: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  location: PropTypes.string,
};
ListCardBottom.propTypes = {
  role: PropTypes.string,
  level: PropTypes.string,
  languages: PropTypes.array,
  tools: PropTypes.array,
};

const ListItem = ListData.map((data) => (
  <li
    key={data.id}
    className="relative rounded-[0.25rem] border-l-4 border-l-c-primary p-4 shadow-md"
  >
    <div>
      <ListImg logo={data.logo} />
      <ListCardTop
        company={data.company}
        newTag={data.new}
        featuredTag={data.featured}
        position={data.position}
        postedAt={data.postedAt}
        contract={data.contract}
        location={data.location}
      />
    </div>
    <ListCardBottom
      role={data.role}
      level={data.level}
      languages={data.languages}
      tools={data.tools}
    />
  </li>
));

export default function List() {
  return <ul className="mt-8 flex flex-col gap-16">{ListItem}</ul>;
}
