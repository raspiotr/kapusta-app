import { useMediaQuery } from "react-responsive";

export const useScreenSize = () => {
  const mobileScreen = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 767px)",
  });
  const tabletScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const desktopScreen = useMediaQuery({ query: "(min-width: 1280px)" });

  return { mobileScreen, tabletScreen, desktopScreen };
};
