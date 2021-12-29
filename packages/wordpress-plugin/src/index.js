import "./style.scss";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { useBlockProps } from "@wordpress/block-editor";
import { BackEndEdit } from "./edit";
import { prayerTable } from "./prayerTable";

import blockJson from "../block.json";
const { name, attributes } = blockJson;

registerBlockType(name, {
  title: "Beautiful Salat",
  edit: () => {
    const blockProps = useBlockProps();
    const posts = useSelect((select) => {
      return select("core").getEntityRecords("postType", "post");
    }, []);

    return (
      <div {...blockProps}>
        {!posts && "Loading"}
        {posts && posts.length === 0 && "No Posts"}
        {posts && posts.length > 0 && <a href={posts[0].link}>{posts[0].title.rendered}</a>}
      </div>
    );
  },
});
