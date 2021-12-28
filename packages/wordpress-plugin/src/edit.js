import { ColorPalette, InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { TextControl, ToggleControl, SelectControl, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { prayerTable } from "./prayerTable";
import { prayerMethods } from "./prayerMethods";

async function getSalatTimes(args) {
  const API = "https://api.aladhan.com/v1/timingsByCity";
  const API_EXAMPLE = `${API}?city=${args.city}&country=${args.country}`;
  const res = await fetch(API_EXAMPLE);
  const resjson = await res.json();
  console.log(resjson.data);
}

const BackEndEdit = (props) => {
  const blockProps = useBlockProps();
  const { setAttributes } = props;

  const onChangeToggleField = (newValue) => {
    setAttributes({ toggleField: newValue });
  };

  const onCountryChange = (newValue) => {
    setAttributes({ salatSettings: { ...props.attributes.salatSettings, country: newValue } });
    getSalatTimes(props.attributes.salatSettings);
  };

  const onCityChange = (newValue) => {
    setAttributes({ salatSettings: { ...props.attributes.salatSettings, city: newValue } });
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Salat Settings")}>
          <SelectControl
            label="Method"
            value={props.attributes.salatSettings.method}
            options={prayerMethods}
            onChange={(newValue, oldValue) => setAttributes({ ...oldValue, method: newValue })}
          />
          <TextControl label="Country" onChange={onCountryChange} value={props.attributes.salatSettings.country} />
          <TextControl label="City" onChange={onCityChange} value={props.attributes.salatSettings.city} />
        </PanelBody>

        <PanelBody title={__("Header")}>
          <TextControl label="Title" onChange={(newValue) => setAttributes({ title: newValue })} value={props.attributes.title} />

          <p>Title Text Color</p>
          <ColorPalette value={props.attributes.titleTextColor} onChange={(newValue) => setAttributes({ titleTextColor: newValue })} />

          <p>Title Background Color</p>
          <ColorPalette value={props.attributes.backgroundColor} onChange={(newValue) => setAttributes({ backgroundColor: newValue })} />
          <ToggleControl label="Toggle Field" checked={props.attributes.toggleField} onChange={onChangeToggleField} />
        </PanelBody>

        <PanelBody title={__("Container")}>
          <TextControl label="Title" onChange={(newValue) => setAttributes({ title: newValue })} value={props.attributes.title} />
        </PanelBody>
      </InspectorControls>

      {prayerTable(props.attributes)}
    </div>
  );
};

export { BackEndEdit };
