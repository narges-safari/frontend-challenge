import { useState } from "react";
import { Character } from "./ChampionsSquad.types";
import { IChampionsContext } from "./ChampionsSquad.context";
import { GridSelectionModel } from "@mui/x-data-grid";

export const useChampionsSquad = () => {
  const [selectedChampions, setSelectedChampions] = useState<Character[]>([]);
  const [search, setSearch] = useState<string>("");
  const [tagFilter, setTagFilter] = useState<string[]>([]);
  const [myTeam, setMyTeam] = useState<boolean>(false);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const championsContextValue: IChampionsContext = {
    myTeam,
    setMyTeam,
    search,
    setSearch,
    tagFilter,
    setTagFilter,
    selectionModel,
    setSelectionModel,
    selectedChampions,
    setSelectedChampions,
  };

  return {
    championsContextValue,
  };
};
