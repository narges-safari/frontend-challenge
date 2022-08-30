import { createUseStyles } from "react-jss";

const useCharactersTableStyle = createUseStyles(
  () => ({
    tag: {
      fontSize: 18,
    },
    table: {
      "& .MuiDataGrid-iconSeparator": {
        display: "none",
      },
      "& .MuiDataGrid-columnHeaderCheckbox": {
        visibility: "hidden",
      },
    },
  }),
  { name: "characters-table" }
);

export default useCharactersTableStyle;
