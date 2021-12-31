import { ColorPalette } from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { prayerMethods } from "./prayerMethods";

function panelSalatSettings(
  props,
  onMethodChange,
  onCountryChange,
  onCityChange
) {
  return (
    <PanelBody title={__("Salat Settings")} initialOpen={false}>
      <SelectControl
        label="Calculation Method"
        help="Based on country and city"
        value={props.attributes.salatSettings.method}
        options={prayerMethods}
        onChange={onMethodChange}
      />
      <TextControl
        label="Country Code"
        onChange={onCountryChange}
        value={props.attributes.salatSettings.country}
      />
      <TextControl
        label="City"
        onChange={onCityChange}
        value={props.attributes.salatSettings.city}
      />
    </PanelBody>
  );
}

function panelHeaderSettings(props, onChangeShowHeader, setAttributes) {
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

function panelContainerSettings(setAttributes, props) {
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

export { panelContainerSettings, panelHeaderSettings, panelSalatSettings };
