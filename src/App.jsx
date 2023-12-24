import ListCard from "./components/List";
import Header from "./components/Header";
import "./App.css";
import TagFilterContainer from "./components/List/TagFilterContainer";

import fetchListData from "./services/fetchListData";
import { useState } from "react";

const data = fetchListData();

export default function App() {
  const [tags, setTags] = useState([]);

  function handleClear() {
    setTags([]);
  }

  function handleFilter(tag) {
    if (tags.indexOf(tag) === -1) {
      setTags((current) => [...current, tag]);
    }
  }

  function handleRemoveTag(tag) {
    setTags((current) => current.filter((item) => item !== tag));
  }

  function filterByTags(cardTags, selectedTags) {
    return selectedTags.every((value) => cardTags.includes(value));
  }

  return (
    <>
      <Header />
      <main className=" mx-8 mb-8 transition-all lg:mx-32">
        <TagFilterContainer
          tags={tags}
          clear={handleClear}
          remove={handleRemoveTag}
        />
        <ul className="mt-8 flex flex-col gap-12 md:gap-6">
          {data.map((data) => {
            let cardTags = [
              data.role,
              data.level,
              ...data.languages,
              ...data.tools,
            ];

            return tags.length === 0 ? (
              <ListCard
                key={data.id}
                logo={data.logo}
                company={data.company}
                isNew={data.new}
                isFeatured={data.featured}
                position={data.position}
                postedAt={data.postedAt}
                contract={data.contract}
                location={data.location}
                tags={cardTags}
                handleFilter={handleFilter}
              />
            ) : (
              filterByTags(cardTags, tags) && (
                <ListCard
                  key={data.id}
                  logo={data.logo}
                  company={data.company}
                  isNew={data.new}
                  isFeatured={data.featured}
                  position={data.position}
                  postedAt={data.postedAt}
                  contract={data.contract}
                  location={data.location}
                  tags={cardTags}
                  handleFilter={handleFilter}
                />
              )
            );
          })}
        </ul>
      </main>
    </>
  );
}
