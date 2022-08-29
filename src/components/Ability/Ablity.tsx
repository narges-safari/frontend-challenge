import { Box, Typography } from "@mui/material";

const Ablity = ({ name, score }: { name: string; score: number }) => {
  return (
    <Box
      paddingX={2}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography marginBottom={3}>{name}</Typography>
      <Typography variant={"h5"} fontWeight={700}>
        {!!score ? score : "-"}
      </Typography>
    </Box>
  );
};

export default Ablity;
