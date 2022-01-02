import { registerBlockType } from "@wordpress/blocks";
import { AdminBackEnd } from "./admin/index";
import "./frontend/style.scss";

registerBlockType("fit/beautiful-salat", {
  edit: AdminBackEnd,
});
