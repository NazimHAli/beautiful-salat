import { ColorPalette } from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

function panelHeaderSettings(props) {
  const { setAttributes } = props;

  const onChangeShowHeader = (newValue) => {
    setAttributes({ showHeader: newValue });
  };

  return (
    <PanelBody title={__("Header")} initialOpen={false}>
      <ToggleControl
        label="Toggle Header"
        checked={props.attributes.showHeader}
        onChange={onChangeShowHeader}
      />

      <TextControl
        label="Title"
        onChange={(newValue) => setAttributes({ title: newValue })}
        value={props.attributes.title}
      />

      <p>Title Text Color</p>
      <ColorPalette
        value={props.attributes.titleTextColor}
        onChange={(newValue) => setAttributes({ titleTextColor: newValue })}
      />

      <p>Title Background Color</p>
      <ColorPalette
        value={props.attributes.backgroundColor}
        onChange={(newValue) => setAttributes({ backgroundColor: newValue })}
      />
    </PanelBody>
  );
}

export { panelHeaderSettings };
