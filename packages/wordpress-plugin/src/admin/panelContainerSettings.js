import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

function panelContainerSettings(props) {
  const { setAttributes } = props;

  return (
    <PanelBody title={__("Container")} initialOpen={false}>
      <TextControl
        label="Title"
        onChange={(newValue) => setAttributes({ title: newValue })}
        value={props.attributes.title}
      />
    </PanelBody>
  );
}

export { panelContainerSettings };
