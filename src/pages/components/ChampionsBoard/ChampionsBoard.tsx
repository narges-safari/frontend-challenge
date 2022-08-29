import { useCallback, useMemo } from "react";
import { Avatar, Box, Typography } from "@mui/material/";
import { FormattedMessage } from "react-intl";
import championsBoardMessages from "./ChampionsBoard.messages";
import useChampionsBoard from "./ChampionsBoard.biz";
import Ability from "../../../components/Ability";
import useChampionsBoardStyle from "./ChampionsBoard.style";
import { useChampionsContext } from "../../ChampionsSquad.context";
import { initialAbilitiesArray } from "./ChampionsBoard.const";

const ChampionsBoard = () => {
  const classes = useChampionsBoardStyle();
  const { selectedChampions } = useChampionsContext();
  const { removeChampion, abilitiesAverage, selectedAbilitiesArray } =
    useChampionsBoard();

  const fullChampions = useCallback(
    (index: number) => (
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Avatar
          key={selectedChampions?.[index]?.id}
          className={classes.avatar}
          src={selectedChampions?.[index]?.image}
          alt={"avatar"}
          sx={{ height: 88, width: 88 }}
          onClick={() => removeChampion(index)}
        />
        <Typography
          className={classes.removeChampion}
          color={"white"}
          position={"relative"}
          bottom={54}
          variant={"body2"}
          fontWeight={700}
        >
          <FormattedMessage {...championsBoardMessages.removeChampion} />
        </Typography>
      </Box>
    ),
    [classes.avatar, classes.removeChampion, removeChampion, selectedChampions]
  );

  const emptyChampion = useMemo(
    () => (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={88}
        marginX={0.5}
        width={88}
        borderRadius={"50%"}
        border={"1px solid #217AFF"}
      >
        <FormattedMessage {...championsBoardMessages.questionMark} />
      </Box>
    ),
    []
  );

  const renderAbilities = useCallback(
    (array: any) => {
      return array.map((name: string) => (
        <Ability name={name} score={abilitiesAverage(name)} />
      ));
    },
    [abilitiesAverage]
  );

  return (
    <Box
      paddingTop={3}
      paddingBottom={4}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography variant={"h5"} fontWeight={700}>
        {selectedChampions.length === 6 ? (
          <FormattedMessage {...championsBoardMessages.fullChampsTitle} />
        ) : (
          <FormattedMessage {...championsBoardMessages.NoChapmsTitle} />
        )}
      </Typography>
      <Box display={"flex"} paddingY={2}>
        {Array(6)
          .fill("")
          .map((_, index: number) => {
            return !!selectedChampions?.[index]
              ? fullChampions(index)
              : emptyChampion;
          })}
      </Box>
      <Box display={"flex"} marginTop={3}>
        {selectedAbilitiesArray?.length
          ? renderAbilities(selectedAbilitiesArray)
          : renderAbilities(initialAbilitiesArray)}
      </Box>
      <Typography
        position={"relative"}
        marginTop={2}
        right={135}
        variant={"caption"}
        color={"#666666"}
      >
        <FormattedMessage {...championsBoardMessages.averageNote} />
      </Typography>
    </Box>
  );
};

export default ChampionsBoard;
