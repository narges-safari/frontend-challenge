import { GridSelectionModel } from "@mui/x-data-grid";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useChampionsContext } from "../../ChampionsSquad.context";
import { Character, CharacterTag } from "../../ChampionsSquad.types";
import charactersJson from "../../../assets/data/characters.json";

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
      setSelectedChampions((_prev: Character[]) => [..._prev, row]);
    }
  };

  const filterTagRegex = useMemo(() => {
    let _preparedRegexString = tagFilter.join("|");
    return new RegExp(_preparedRegexString, "gi");
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
    const filteredData = data.filter((item: Character) => {
      console.log(
        tagFilter,
        item.name.toLowerCase().includes(search.trim()),
        isTagIncluded(item.tags)
      );
      const searchText = search.trim();
      if (!searchText) {
        if (tagFilter?.length > 0) {
          return isTagIncluded(item.tags);
        } else {
          return item.name.toLowerCase().includes(searchText);
        }
      } else {
        return (
          item.name.toLowerCase().includes(searchText) ||
          isTagIncluded(item.tags)
        );
      }
    });
    setCharactersData(filteredData);
  }, [isTagIncluded, search, tagFilter]);

  useEffect(() => {
    filterData();
  }, [filterData, tagFilter]);

  useEffect(() => {
    if (myTeam) setCharactersData(selectedChampions);
    else {
      filterData();
    }
  }, [filterData, myTeam, selectedChampions]);

  return {
    charactersData,
    cellClickHandler,
    selectionModelHandler,
  };
};

export default useCharactersTable;
