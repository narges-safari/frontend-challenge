import cls from "classnames";
import useTags from "./Tags.biz";
import useTagsStyle from "./Tags.style";
import { Chip, Box } from "@mui/material";
import { useChampionsContext } from "../../ChampionsSquad.context";
import { FormattedMessage } from "react-intl";
import tagsMessages from "./Tags.messages";

const Tags = () => {
  const classes = useTagsStyle();
  const { tagsArray, onTagClick } = useTags();
  const {
    myTeam,
    setMyTeam,
    tagFilter,
    setTagFilter,
    selectedChampions,
    setSelectionModel,
  } = useChampionsContext();

  return (
    <Box marginX={7} marginBottom={7}>
      {tagsArray.map((tag: string, index: number) => {
        return (
          tag && (
            <Chip
              // Use classname utility to join the classNames conditionally
              className={cls(classes.tag, {
                [classes.selectedTag]: tagFilter.some(
                  (item: string) => item === tag
                ),
              })}
              key={index}
              label={tag}
              color={"primary"}
              variant={"outlined"}
              onClick={() => onTagClick(tag)}
            />
          )
        );
      })}
      <Chip
        label={<FormattedMessage {...tagsMessages.myTeam} />}
        color={"primary"}
        variant={"outlined"}
        className={cls(classes.tag, {
          [classes.selectedTag]: myTeam,
        })}
        onClick={() => {
          setMyTeam((_prevMyTeam) => {
            if (!_prevMyTeam)
              setSelectionModel(selectedChampions.flatMap((_item) => _item.id));
            return !_prevMyTeam;
          });
        }}
      />
      <Chip
        variant={"outlined"}
        className={classes.clearTag}
        label={<FormattedMessage {...tagsMessages.clearAll} />}
        onClick={() => {
          setTagFilter([]);
          setMyTeam(false);
        }}
      />
    </Box>
  );
};

export default Tags;
