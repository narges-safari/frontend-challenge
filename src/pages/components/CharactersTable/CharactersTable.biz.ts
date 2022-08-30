import { GridSelectionModel } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useChampionsContext } from "../../ChampionsSquad.context";
import { Character } from "../../ChampionsSquad.types";
import charactersJson from "../../../assets/data/characters.json";

const data: Character[] = charactersJson as Character[];

const useCharactersTable = () => {
  const {
    myTeam,
    search,
    selectedChampions,
    setSelectedChampions,
    setSelectionModel,
  } = useChampionsContext();

  const selectionModelHandler = (id: GridSelectionModel) => {
    setSelectionModel(id);
  };

  const cellClickHandler = (row: Character) => {
    let foundSelectedChampion = selectedChampions.find(
      (item: Character) => item.id === row.id
    );
    if (foundSelectedChampion?.id) {
      let newSelectedChampions = selectedChampions.filter(
        (item: Character) => item.id !== foundSelectedChampion?.id
      );
      setSelectedChampions(newSelectedChampions);
    } else {
      setSelectedChampions((_prev) => [..._prev, row]);
    }
  };

  const tableRow = useMemo(
    () =>
      myTeam
        ? selectedChampions
        : data.filter((item) =>
            item.name.toLowerCase().includes(search.trim())
          ),
    [myTeam, search, selectedChampions]
  );

  return {
    tableRow,
    cellClickHandler,
    selectionModelHandler,
  };
};

export default useCharactersTable;
