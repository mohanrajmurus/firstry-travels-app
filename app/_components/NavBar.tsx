"use client";
import React from "react";

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { label: "Home", href: "/", id: "home" },
    { label: "Temples", href: "#temples", id: "temples" },
    { label: "Silk Shopping", href: "#silk-shopping", id: "silk-shopping" },
    { label: "About us", href: "#about-us", id: "about-us" },
  ];

  const scroll2El = (id: string) => {
    const element = document?.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };
  const onBtnClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const goto = (e.currentTarget as HTMLElement).getAttribute("data-goto");
    setTimeout(() => {
      if (goto) {
        scroll2El(goto);
      }
    }, 100);
  };
  return (
    <nav className="bg-white shadow p-2 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-3xl text-brand font-bold">Firstry Travels</div>
        <button
          type="button"
          className="lg:hidden text-heading focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div className="hidden lg:flex space-x-10 items-center">
          {navItems.map((item) => (
            <a
              key={item?.label}
              href={item?.href}
              className="text-heading text-lg font-medium hover:text-brand transition-colors duration-200"
              onClick={onBtnClick}
              data-goto={item?.id}
            >
              {item?.label}
            </a>
          ))}
          <a
            href="#booking-form"
            className="text-btnText bg-brand px-4 py-2 rounded font-medium"
            onClick={onBtnClick}
            data-goto="booking-form"
          >
            Book now
          </a>
        </div>
      </div>
      {open && (
        <>
          <div
            className={`fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden transition-opacity duration-400 ease-in-out ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setOpen(false)}
          />
          <div
            className={`fixed top-0 right-0 h-screen w-3/4 bg-white shadow-lg z-50 transform transition-all duration-400 ease-in-out lg:hidden ${
              open
                ? "translate-x-0 scale-100 opacity-100"
                : "translate-x-full scale-95 opacity-0"
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                type="button"
                className="text-heading focus:outline-none"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col px-6 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`py-2 text-heading font-medium text-base  transition-all duration-00 ease-in-out ${
                    open
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#"
                className={`py-2 text-btnText bg-brand  rounded text-center  transition-all duration-300 ease-in-out ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${navItems.length * 75}ms` }}
                onClick={() => setOpen(false)}
              >
                Book now
              </a>
            </nav>
          </div>
        </>
      )}
    </nav>
  );
};
