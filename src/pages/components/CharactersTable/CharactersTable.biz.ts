import { GridSelectionModel } from "@mui/x-data-grid";
import { useCallback, useEffect, useMemo, useState } from "react";
import charactersJson from "../../../assets/data/characters.json";
import { useChampionsContext } from "../../ChampionsSquad.context";
import { Character, CharacterTag } from "../../ChampionsSquad.types";

const data: Character[] = charactersJson as Character[];

const useCharactersTable = () => {
  const {
    myTeam,
    search,
    selectedChampions,
    tagFilter,
    setSelectedChampions,
    setSelectionModel,
  } = useChampionsContext();
  const [charactersData, setCharactersData] = useState<Character[]>(data);
  const [isShowSnackbar, setIsShowSnackbar] = useState(false);
  const selectionModelHandler = (id: GridSelectionModel) => {
    setSelectionModel(id);
  };

  const cellClickHandler = useCallback(
    (row: Character) => {
      let foundSelectedChampion = selectedChampions.find(
        (item: Character) => item.id === row.id
      );
      if (foundSelectedChampion?.id) {
        let newSelectedChampions = selectedChampions.filter(
          (item: Character) => item.id !== foundSelectedChampion?.id
        );
        setSelectedChampions(newSelectedChampions);
      } else if (selectedChampions.length < 6) {
        setSelectedChampions((_prev: Character[]) => [..._prev, row]);
      }
    },
    [selectedChampions, setSelectedChampions]
  );

  const filterTagRegex = useMemo(() => {
    let _preparedRegexString = tagFilter.join(")(?=.*");
    return new RegExp(`(?=.*${_preparedRegexString})`, "gi");
  }, [tagFilter]);

  const isTagIncluded = useCallback(
    (tagsItem: CharacterTag[]) => {
      if (!tagsItem) return false;
      let knittedTag = "";
      const flattedTag = tagsItem?.flatMap((_tag) => _tag.tag_name);
      knittedTag = flattedTag.join(",");
      return filterTagRegex.test(knittedTag);
    },
    [filterTagRegex]
  );

  const filterData = useCallback(() => {
    const searchText = search.trim();
    if (!tagFilter.length && !searchText) {
      setCharactersData(data);
      return;
    }
    const filteredData = data.filter((item: Character) => {
      if (!searchText) return isTagIncluded(item.tags);
      return (
        item.name.toLowerCase().includes(searchText) && isTagIncluded(item.tags)
      );
    });
    setCharactersData(filteredData);
  }, [isTagIncluded, search, tagFilter]);

  useEffect(() => {
    filterData();
  }, [filterData, tagFilter]);

  const updateMyTeam = useCallback(() => {
    if (myTeam) setCharactersData(selectedChampions);
    else {
      filterData();
    }
  }, [filterData, myTeam, selectedChampions]);

  useEffect(() => {
    updateMyTeam();
  }, [myTeam, updateMyTeam]);

  return {
    filterData,
    updateMyTeam,
    charactersData,
    cellClickHandler,
    isShowSnackbar,
    selectionModelHandler,
    setIsShowSnackbar,
  };
};

export default useCharactersTable;
