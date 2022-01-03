import { PanelBody, SelectControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { prayerMethods } from "./prayerMethods";
import { getSalatTimes } from "./service";

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

  return (
    <PanelBody title={__("Salat Settings")} initialOpen={false}>
      <TextControl
        disabled={true}
        label="Selected Calculation Method"
        help="Based on country and city"
        onChange={onCountryChange}
        value={
          prayerMethods.filter(
            (m) => m.value === props.attributes.salatSettings.method
          )[0]["label"]
        }
      />
      <TextControl
        label="Country name or code"
        help="Example: SA or Saudi Arabia"
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
