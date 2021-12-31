import {
  ColorPalette,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  TextControl,
  ToggleControl,
  SelectControl,
  PanelBody,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { prayerTable } from "../frontend/prayerTable";
import { prayerMethods } from "./prayerMethods";
import { getSalatTimes } from "./service";

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

function AdminBackEnd(props) {
  const blockProps = useBlockProps();
  const { setAttributes } = props;

  useEffect(() => {
    if (!props.attributes.salatSettings.timings?.Dhuhr) {
      getSalatTimes(props.attributes.salatSettings).then((response) => {
        if (response) {
          setAttributes({
            salatSettings: {
              ...props.attributes.salatSettings,
              method: response?.meta?.method?.id,
              timings: response?.timings,
            },
          });
        }
      });
    }
  }, []);

  const onChangeShowHeader = (newValue) => {
    setAttributes({ showHeader: newValue });
  };

  const onCountryChange = (newValue) => {
    getSalatTimes({
      ...props.attributes.salatSettings,
      country: newValue,
    }).then((response) => {
      if (response) {
        setAttributes({
          salatSettings: {
            ...props.attributes.salatSettings,
            country: newValue,
            method: response?.meta?.method?.id,
            timings: response?.timings,
          },
        });
      }
    });
  };

  const onCityChange = (newValue) => {
    setAttributes({
      salatSettings: { ...props.attributes.salatSettings, city: newValue },
    });
  };

  const onMethodChange = (newValue) => {
    setAttributes({
      salatSettings: { ...props.attributes.salatSettings, method: newValue },
    });
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        {panelSalatSettings(
          props,
          onMethodChange,
          onCountryChange,
          onCityChange
        )}

        {panelHeaderSettings(props, onChangeShowHeader, setAttributes)}

        <PanelBody title={__("Container")} initialOpen={false}>
          <TextControl
            label="Title"
            onChange={(newValue) => setAttributes({ title: newValue })}
            value={props.attributes.title}
          />
        </PanelBody>
      </InspectorControls>

      {prayerTable(props.attributes)}
    </div>
  );
}

export { AdminBackEnd };
