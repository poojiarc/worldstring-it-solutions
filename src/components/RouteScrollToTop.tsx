import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (document.body.dataset.scroll === "preserve") return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

export default RouteScrollToTop;
