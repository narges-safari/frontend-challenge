import { createUseStyles } from "react-jss";

const useChampionsBoardStyle = createUseStyles({
  avatar: {
    marginLeft: 6,
    marginRight: 6,
    border: "1px solid #217AFF",
    boxShadow: "0px 0px 10px 2px rgba(61,128,161,0.4)",
    WebkitBoxShadow: " 0px 0px 10px 2px rgba(61,128,161,0.4)",
    "& :hover": {
      cursor: "pointer",
      background: "#217AFF",
      opacity: 0.6,
    },
  },
  avatarContainer: {
    position: "relative",
    "&:hover p": {
      display: "block !important",
    },
  },
  removeChampion: {
    position: "absolute",
    zIndex: 1,
    top: 36,
    pointerEvents: "none",
    display: "none",
  },
});

export default useChampionsBoardStyle;
