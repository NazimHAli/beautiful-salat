import { registerBlockType } from "@wordpress/blocks";
import { AdminBackEnd } from "./admin/index";
import "./frontend/style.scss";
import SalatMatIcon from "./admin/salatMatIcon";

registerBlockType("fit/beautiful-salat", {
  icon: <SalatMatIcon />,
  edit: AdminBackEnd,
});
