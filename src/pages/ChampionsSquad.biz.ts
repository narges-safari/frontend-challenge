import { useState } from "react";
import { Character } from "./ChampionsSquad.types";
import { IChampionsContext } from "./ChampionsSquad.context";

export const useChampionsSquad = () => {
  const [selectedChampions, setSelectedChampions] = useState<Character[]>([]);
  const [search, setSearch] = useState<string>("");
  const [tagFilter, setTagFilter] = useState<string[]>([]);
  const [myTeam, setMyTeam] = useState<boolean>(false);

  const championsContextValue: IChampionsContext = {
    myTeam,
    setMyTeam,
    search,
    setSearch,
    tagFilter,
    setTagFilter,
    selectedChampions,
    setSelectedChampions,
  };

  return {
    championsContextValue,
  };
};
