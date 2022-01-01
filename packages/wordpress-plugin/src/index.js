import "./frontend/style.scss";

import { registerBlockType } from "@wordpress/blocks";
import { AdminBackEnd } from "./admin/index";
import { ClientSideUI } from "./frontend/index";

registerBlockType("fit/beautiful-salat", {
  edit: AdminBackEnd,
  save: ClientSideUI,
});
