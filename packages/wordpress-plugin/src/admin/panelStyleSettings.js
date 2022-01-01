import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

function panelStyleSettings(props) {
  const { setAttributes } = props;

  return (
    <PanelBody title={__("Toggle Styling")} initialOpen={false}>
      <ToggleControl
        label={__("All Styling")}
        help={__("Disable to remove all CSS classes.")}
        checked={props.attributes.showAllStyling}
        onChange={(newValue) =>
          setAttributes({
            showAllStyling: newValue,
            showHeaderStyle: newValue,
            showBoxShadow: newValue,
            showContainerStyle: newValue,
          })
        }
      />
      <ToggleControl
        label={__("Header Style")}
        checked={props.attributes.showHeaderStyle}
        onChange={(newValue) => setAttributes({ showHeaderStyle: newValue })}
      />
      <ToggleControl
        label={__("Box Shadow")}
        checked={props.attributes.showBoxShadow}
        onChange={(newValue) => setAttributes({ showBoxShadow: newValue })}
      />
      <ToggleControl
        label={__("Container Style")}
        checked={props.attributes.showContainerStyle}
        onChange={(newValue) => setAttributes({ showContainerStyle: newValue })}
      />
    </PanelBody>
  );
}

export { panelStyleSettings };
