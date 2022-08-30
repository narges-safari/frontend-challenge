import { createUseStyles } from "react-jss";

const useChampionsBoardStyle = createUseStyles({
  avatar: {
    marginLeft: 6,
    marginRight: 6,
    border: "1px solid #217AFF",
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
