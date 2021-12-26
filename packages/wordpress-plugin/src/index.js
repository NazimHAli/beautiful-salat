import "./style.scss";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { BackEndEdit } from "./edit";
import { prayerTable } from "./prayerTable";

registerBlockType("create-block/beautiful-salat", {
  edit: BackEndEdit,
  save: (props) => {
    return <>{prayerTable(props.attributes)}</>;
  },
});
