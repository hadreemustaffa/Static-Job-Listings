// import removeIcon from "../../assets/images/icon-remove.svg";

export default function TagFilter() {
  return (
    <div className=" invisible flex w-full -translate-y-6 flex-row justify-between gap-2 rounded-[0.25rem] bg-c-neutral-lighter p-4 shadow-md transition-all">
      <ul id="tagList" className="flex flex-wrap gap-4">
        {/* <li className="flex flex-row items-center justify-center gap-2 overflow-hidden rounded-md bg-c-neutral-light pl-2">
          <p className="font-bold">{list[0].languages[0]}</p>
          <button className="flex justify-center bg-c-primary p-2">
            <img width={16} height={16} src={removeIcon} alt="" />
          </button>
        </li> */}
      </ul>
      <button
        type="button"
        className="flex items-center justify-center px-2 font-bold text-c-neutral-dark"
      >
        Clear
      </button>
    </div>
  );
}
