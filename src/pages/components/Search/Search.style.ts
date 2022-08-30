import { createUseStyles } from "react-jss";

const useSearchStyle = createUseStyles(
  () => ({
    search: {
      width: 500,
      borderRadius: 10,
      background: "white",
    },
  }),
  { name: "characters-table" }
);

export default useSearchStyle;
