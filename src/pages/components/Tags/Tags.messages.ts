import { defineMessages } from "react-intl";

const scope = "tags";

const tagsMessages = defineMessages({
  myTeam: {
    id: `${scope}.myTeam`,
    defaultMessage: "My Team",
  },
  clearAll: {
    id: `${scope}.clearAll`,
    defaultMessage: "Clear all",
  },
});

export default tagsMessages;
