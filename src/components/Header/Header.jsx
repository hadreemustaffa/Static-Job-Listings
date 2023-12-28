import desktopHeaderImg from "/bg-header-desktop.svg";
import mobileHeaderImg from "/bg-header-mobile.svg";

export default function Header() {
  return (
    <>
      <header className="h-fit w-full bg-c-primary">
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileHeaderImg} />
          <source media="(min-width: 768px)" srcSet={desktopHeaderImg} />
          <img className="h-36 w-full" src={mobileHeaderImg} alt="" />
        </picture>
      </header>
    </>
  );
}
