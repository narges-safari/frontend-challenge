import { FC } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import useCharactersTableStyle from "./CharactersTable.style";
import useCharactersTable from "./CharactersTable.biz";
import { ICharactersTableProps } from "./CharactersTable.types";
import charactersJson from "../../../assets/data/characters.json";
import type { Character } from "../../ChampionsSquad.types";
import { charactersColumns } from "./CharactersTable.const";
import { useChampionsContext } from "../../ChampionsSquad.context";

const data: Character[] = charactersJson as Character[];

const CharactersTable: FC<ICharactersTableProps> = (props) => {
  const classes = useCharactersTableStyle(props);
  const { cellClickHandler, selectionModelHandler } = useCharactersTable(props);
  const { search, myTeam, selectionModel, selectedChampions } =
    useChampionsContext();

  return (
    <Box
      bgcolor={"White"}
      height={600}
      marginX={7}
      borderRadius={1}
      boxShadow={"0px 2px 4px 0px #00000040"}
    >
      <DataGrid
        className={classes.table}
        rows={
          myTeam
            ? selectedChampions
            : data.filter((item) =>
                item.name.toLowerCase().includes(search.trim())
              )
        }
        columns={charactersColumns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
        rowHeight={80}
        disableColumnMenu={true}
        onCellClick={(_cell) => cellClickHandler(_cell.row)}
        onSelectionModelChange={(id: GridSelectionModel) =>
          selectionModelHandler(id)
        }
        selectionModel={selectionModel}
      />
    </Box>
  );
};

export default CharactersTable;
