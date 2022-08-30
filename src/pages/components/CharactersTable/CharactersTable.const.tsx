import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import type { Character, CharacterTag } from "../../ChampionsSquad.types";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import charactersTableMessages from "./CharactersTable.messages";

export const charactersColumns: GridColDef[] = [
  {
    field: "name",
    sortable: false,
    width: 260,
    renderHeader: () => (
      <Typography variant={"h6"} fontWeight={700}>
        <FormattedMessage {...charactersTableMessages.characters} />
      </Typography>
    ),
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <>
        <Avatar style={{ border: "1px solid #217AFF" }} src={_item.row.image} />
        <Typography variant={"h6"} fontWeight={700} marginLeft={3}>
          {_item.row.name}
        </Typography>
      </>
    ),
  },
  {
    field: "tags",
    sortable: false,
    width: 290,
    renderHeader: () => (
      <Typography variant={"h6"} fontWeight={700}>
        <FormattedMessage {...charactersTableMessages.tags} />
      </Typography>
    ),
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <>
        {_item.row.tags?.map((tag: CharacterTag, index: number) => (
          <Box key={index} marginRight={1.5}>
            <Chip
              color={"primary"}
              variant={"outlined"}
              label={
                <Typography variant={"h6"} fontWeight={400}>
                  {tag.tag_name}
                </Typography>
              }
            />
          </Box>
        ))}
      </>
    ),
  },
  {
    field: "Mobility",
    sortable: false,
    align: "center",
    headerAlign: "center",
    width: 120,
    renderHeader: () => (
      <Typography variant={"h6"} fontWeight={700}>
        <FormattedMessage {...charactersTableMessages.mobility} />
      </Typography>
    ),
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <Typography
        variant={"h6"}
        fontWeight={700}
        color={_item.row.abilities[0].abilityScore === 10 ? "red" : "black"}
      >
        {_item.row.abilities[0].abilityScore}
      </Typography>
    ),
  },
  {
    field: "Technique",
    sortable: false,
    align: "center",
    headerAlign: "center",
    width: 120,
    renderHeader: () => (
      <Typography variant={"h6"} fontWeight={700}>
        <FormattedMessage {...charactersTableMessages.technique} />
      </Typography>
    ),
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <Typography
        variant={"h6"}
        fontWeight={700}
        color={_item.row.abilities[1].abilityScore === 10 ? "red" : "black"}
      >
        {_item.row.abilities[1].abilityScore}
      </Typography>
    ),
  },
  {
    field: "Survivability",
    sortable: false,
    align: "center",
    headerAlign: "center",
    width: 140,
    renderHeader: () => (
      <Typography variant={"h6"} fontWeight={700}>
        <FormattedMessage {...charactersTableMessages.survivability} />
      </Typography>
    ),
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <Typography
        variant={"h6"}
        fontWeight={700}
        color={_item.row.abilities[2].abilityScore === 10 ? "red" : "black"}
      >
        {_item.row.abilities[2].abilityScore}
      </Typography>
    ),
  },
  {
    field: "Power",
    sortable: false,
    align: "center",
    headerAlign: "center",
    width: 120,
    renderHeader: () => (
      <Typography variant={"h6"} fontWeight={700}>
        <FormattedMessage {...charactersTableMessages.power} />
      </Typography>
    ),
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <Typography
        variant={"h6"}
        fontWeight={700}
        color={_item.row.abilities[3].abilityScore === 10 ? "red" : "black"}
      >
        {_item.row.abilities[3].abilityScore}
      </Typography>
    ),
  },
  {
    field: "Energy",
    sortable: false,
    align: "center",
    headerAlign: "center",
    width: 120,
    renderHeader: () => (
      <Typography variant={"h6"} fontWeight={700}>
        <FormattedMessage {...charactersTableMessages.energy} />
      </Typography>
    ),
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <Typography
        variant={"h6"}
        fontWeight={700}
        color={_item.row.abilities[4].abilityScore === 10 ? "red" : "black"}
      >
        {_item.row.abilities[4].abilityScore}
      </Typography>
    ),
  },
];
