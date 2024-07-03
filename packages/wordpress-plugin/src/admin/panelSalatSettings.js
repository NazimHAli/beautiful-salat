import { useState } from "@wordpress/element";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { prayerMethods } from "./prayerMethods";
import { getSalatTimes } from "./service";
import "./editor.scss";

function panelSalatSettings(props) {
  const { setAttributes } = props;
  const [disableButton, setDisableButton] = useState(true);

  const onCountryChange = (newValue) => {
    setAttributes({
      salatSettings: {
        ...props.attributes.salatSettings,
        country: newValue,
      },
    });
    setDisableButton(false);
  };

  const handleOnSubmit = () => {
    setDisableButton(true);
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
  };

  const onCityChange = (newValue) => {
    setAttributes({
      salatSettings: { ...props.attributes.salatSettings, city: newValue },
    });
    setDisableButton(false);
  };

  return (
    <PanelBody title={__("Salat Settings")} initialOpen={false}>
      <TextControl
        disabled={true}
        label="Selected Calculation Method"
        help="Based on country and city"
        onChange={onCountryChange}
        value={prayerMethods.filter((m) => m.value === props.attributes.salatSettings.method)[0]["label"]}
      />
      <TextControl
        label="Country name or code"
        help="Example: SA or Saudi Arabia"
        onChange={onCountryChange}
        value={props.attributes.salatSettings.country}
      />
      <TextControl label="City" onChange={onCityChange} value={props.attributes.salatSettings.city} />
      <button className="beautiful-salat-submit-btn" disabled={disableButton} onClick={handleOnSubmit}>
        Save settings
      </button>
    </PanelBody>
  );
}

export { panelSalatSettings };
