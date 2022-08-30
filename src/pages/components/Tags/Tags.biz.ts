import { useMemo } from "react";
import { Character, CharacterTag } from "../../ChampionsSquad.types";
import charactersJson from "../../../assets/data/characters.json";
import { useChampionsContext } from "../../ChampionsSquad.context";

const data: Character[] = charactersJson as Character[];
const useTags = () => {
  const { tagFilter, setTagFilter } = useChampionsContext();

  const tagsArray = useMemo(() => {
    let flatTags = data.flatMap((_item: Character) => _item?.tags);
    return Array.from(
      new Set(flatTags.flatMap((_item: CharacterTag) => _item?.tag_name))
    );
  }, []);

  const onTagClick = (tag: string) => {
    let isTagSelected = tagFilter.some((item: string) => item === tag);

    if (isTagSelected) {
      let newTagFilter = tagFilter.filter((item: string) => item !== tag);
      setTagFilter(newTagFilter);
    } else {
      setTagFilter((_prev: string[]) => [..._prev, tag]);
    }
  };

  return {
    tagsArray,
    onTagClick,
  };
};

export default useTags;
