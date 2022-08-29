import { defineMessages } from "react-intl";

const scope = "championsBoard";

const championsBoardMessages = defineMessages({
  NoChapmsTitle: {
    id: `${scope}.NoChapmsTitle`,
    defaultMessage: "Select your squad to defend earthrealm",
  },
  fullChampsTitle: {
    id: `${scope}.fullChampsTitle`,
    defaultMessage: "Your Champions!",
  },
  questionMark: {
    id: `${scope}.questionMark`,
    defaultMessage: "?",
  },
  removeChampion: {
    id: `${scope}.removeChampion`,
    defaultMessage: "remove",
  },
  averageNote: {
    id: `${scope}.averageNote`,
    defaultMessage: "* Totals as average for squad",
  },
});

export default championsBoardMessages;
