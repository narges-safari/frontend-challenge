import { Box } from "@mui/material";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import useCharactersTableStyle from "./CharactersTable.style";
import useCharactersTable from "./CharactersTable.biz";
import { charactersColumns } from "./CharactersTable.const";
import { useChampionsContext } from "../../ChampionsSquad.context";

const CharactersTable = () => {
  const classes = useCharactersTableStyle();
  const { selectionModel } = useChampionsContext();
  const { charactersData, cellClickHandler, selectionModelHandler } =
    useCharactersTable();

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
        rows={charactersData}
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
