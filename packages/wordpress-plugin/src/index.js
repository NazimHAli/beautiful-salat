import "./frontend/style.scss";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { AdminBackEnd } from "./admin/index";
import { prayerTable } from "./frontend/prayerTable";

registerBlockType("fit/beautiful-salat", {
  edit: AdminBackEnd,
  save: (props) => {
    return <>{prayerTable(props.attributes)}</>;
  },
});
