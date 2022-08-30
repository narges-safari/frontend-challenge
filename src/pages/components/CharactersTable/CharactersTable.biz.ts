import { GridSelectionModel } from "@mui/x-data-grid";
import { useChampionsContext } from "../../ChampionsSquad.context";
import { Character } from "../../ChampionsSquad.types";
import { ICharactersTableProps } from "./CharactersTable.types";

const useCharactersTable = (props: ICharactersTableProps) => {
  const { selectedChampions, setSelectedChampions, setSelectionModel } =
    useChampionsContext();

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

  return {
    cellClickHandler,
    selectionModelHandler,
  };
};

export default useCharactersTable;
