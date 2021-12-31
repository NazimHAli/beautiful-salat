import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { prayerTable } from "../frontend/prayerTable";
import {
  panelContainerSettings,
  panelHeaderSettings,
  panelSalatSettings,
} from "./editPanels";
import { getSalatTimes } from "./service";

function setInitialPrayerTimes(props, setAttributes) {
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
}

function AdminBackEnd(props) {
  const blockProps = useBlockProps();
  const { setAttributes } = props;

  useEffect(() => {
    setInitialPrayerTimes(props, setAttributes);
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

        {panelContainerSettings(setAttributes, props)}
      </InspectorControls>

      {prayerTable(props.attributes)}
    </div>
  );
}

export { AdminBackEnd };
