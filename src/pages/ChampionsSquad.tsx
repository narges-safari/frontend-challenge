import { Box, Avatar } from "@mui/material";
import Chip from "./components/Tags";
import ChampionsBoard from "./components/ChampionsBoard";
import CharactersTable from "./components/CharactersTable";
import { ChampionsProvider } from "./ChampionsSquad.context";
import { useChampionsSquad } from "./ChampionsSquad.biz";
import DragonAvatar from "../assets/images/Mortal-Kombat-Logo.png";
import Search from "./components/Search";
import useChampionsSquadStyle from "./ChampionsSquad.style";

const ChampionsSquad = () => {
  const { championsContextValue: value } = useChampionsSquad();
  const classes = useChampionsSquadStyle();

  return (
    <ChampionsProvider {...{ value }}>
      <Box height={"100vw"} bgcolor={"#F5FDFF"}>
        <Box
          height={76}
          zIndex={1}
          width={"100%"}
          bgcolor={"black"}
          display={"flex"}
          position={"fixed"}
          justifyContent={"center"}
        >
          <Avatar
            src={DragonAvatar}
            alt={"dragon-avatar"}
            className={classes.avatar}
            sx={{ height: 88, width: 88 }}
          />
        </Box>
        <ChampionsBoard />
        <Search />
        <Chip />
        <CharactersTable />
      </Box>
    </ChampionsProvider>
  );
};

export default ChampionsSquad;
