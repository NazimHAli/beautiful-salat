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
      <ToggleControl label="Toggle Header" checked={props.attributes.showHeader} onChange={onChangeShowHeader} />

      <TextControl
        label={__("Title")}
        onChange={(newValue) => setAttributes({ headerTitle: newValue })}
        value={props.attributes.headerTitle}
      />

      <p>{__("Title Color")}</p>
      <ColorPalette value={props.attributes.headerTitleColor} onChange={(newValue) => setAttributes({ headerTitleColor: newValue })} />

      <p>{__("Background Color")}</p>
      <ColorPalette
        value={props.attributes.headerBackgroundColor}
        onChange={(newValue) => setAttributes({ headerBackgroundColor: newValue })}
      />
    </PanelBody>
  );
}

export { panelHeaderSettings };
