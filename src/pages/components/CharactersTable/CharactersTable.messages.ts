import { defineMessages } from "react-intl";

const scope = "charactersTable";

const charactersTableMessages = defineMessages({
  characters: {
    id: `${scope}.characters`,
    defaultMessage: "Characters",
  },
  tags: {
    id: `${scope}.tags`,
    defaultMessage: "Tags",
  },
  mobility: {
    id: `${scope}.mobility`,
    defaultMessage: "Mobility",
  },
  technique: {
    id: `${scope}.technique`,
    defaultMessage: "Technique",
  },
  survivability: {
    id: `${scope}.survivability`,
    defaultMessage: "Survivability",
  },
  power: {
    id: `${scope}.power`,
    defaultMessage: "Power",
  },
  energy: {
    id: `${scope}.energy`,
    defaultMessage: "Energy",
  },
  snackbar: {
    id: `${scope}.snackbar`,
    defaultMessage: "You can't add more than 6 items.",
  },
});

export default charactersTableMessages;
