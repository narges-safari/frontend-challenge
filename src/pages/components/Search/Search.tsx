import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useSearchStyle from "./Search.style";
import searchMessages from "./Search.messages";
import { useChampionsContext } from "../../ChampionsSquad.context";

const Search = () => {
  const classes = useSearchStyle();
  const { setSearch } = useChampionsContext();

  return (
    <Box display={"flex"} justifyContent={"center"} marginBottom={5}>
      <TextField
        className={classes.search}
        size={"small"}
        placeholder={searchMessages.searchPlaceholder.defaultMessage}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
