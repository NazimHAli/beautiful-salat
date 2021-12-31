import { PanelBody, SelectControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { getSalatTimes } from "./service";
import { prayerMethods } from "./prayerMethods";

function panelSalatSettings(props) {
  const { setAttributes } = props;

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

export { panelSalatSettings };
