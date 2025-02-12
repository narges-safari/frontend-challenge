import { GridSelectionModel } from "@mui/x-data-grid";
import { FC, Dispatch, useContext, createContext, SetStateAction } from "react";
import { Character } from "./ChampionsSquad.types";

export type IChampionsContext = {
  selectedChampions: Character[];
  setSelectedChampions: Dispatch<SetStateAction<Character[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  tagFilter: string[];
  setTagFilter: Dispatch<SetStateAction<string[]>>;
  myTeam: boolean;
  setMyTeam: Dispatch<SetStateAction<boolean>>;
  selectionModel: GridSelectionModel;
  setSelectionModel: Dispatch<SetStateAction<GridSelectionModel>>;
};

type IChampionsProvider = FC<{ value: IChampionsContext }>;

const ChampionsContext = createContext<IChampionsContext>({
  selectedChampions: [],
  setSelectedChampions: () => undefined,
  search: "",
  setSearch: () => undefined,
  tagFilter: [],
  setTagFilter: () => undefined,
  myTeam: false,
  setMyTeam: () => undefined,
  selectionModel: [],
  setSelectionModel: () => undefined,
});

export const useChampionsContext = () =>
  useContext<IChampionsContext>(ChampionsContext);

export const ChampionsProvider: IChampionsProvider = ({ ...props }) => (
  <ChampionsContext.Provider {...{ ...props }} />
);
