import { Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { FormattedMessage } from "react-intl";
import { useChampionsContext } from "../../ChampionsSquad.context";
import useCharactersTable from "./CharactersTable.biz";
import { charactersColumns } from "./CharactersTable.const";
import charactersTableMessages from "./CharactersTable.messages";
import useCharactersTableStyle from "./CharactersTable.style";

const CharactersTable = () => {
  const classes = useCharactersTableStyle();
  const { selectionModel } = useChampionsContext();
  const {
    charactersData,
    cellClickHandler,
    isShowSnackbar,
    setIsShowSnackbar,
    selectionModelHandler,
  } = useCharactersTable();

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
        onSelectionModelChange={(id: GridSelectionModel) => {
          if (id.length <= 6) {
            selectionModelHandler(id);
          } else {
            setIsShowSnackbar(true);
          }
        }}
        selectionModel={selectionModel}
      />
      <Snackbar
        open={isShowSnackbar}
        autoHideDuration={6000}
        message={<FormattedMessage {...charactersTableMessages.snackbar} />}
        onClose={() => setIsShowSnackbar(false)}
      />
    </Box>
  );
};

export default CharactersTable;
