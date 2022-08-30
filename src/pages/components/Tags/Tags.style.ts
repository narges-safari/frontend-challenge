import { createUseStyles } from "react-jss";

const useTagsStyle = createUseStyles({
  tag: {
    margin: 4,
    cursor: "pointer",
    fontSize: 18,
    background: "white",
  },
  selectedTag: {
    background: "#1976d2",
    color: "white",
    borderColor: "white",
    "&:hover": {
      background: "#0e5db7 !important",
    },
  },
  clearTag: {
    margin: 4,
    cursor: "pointer",
    fontSize: 18,
    color: "#999999",
    border: 0,
    "& span": {
      textDecoration: "underline",
    },
  },
});

export default useTagsStyle;
