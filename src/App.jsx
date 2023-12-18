import List from "./components/List";
import Header from "./components/Header";
import "./App.css";
import TagFilter from "./components/List/TagFilter";

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-8 mb-8">
        <TagFilter />
        <List />
      </main>
    </>
  );
}
