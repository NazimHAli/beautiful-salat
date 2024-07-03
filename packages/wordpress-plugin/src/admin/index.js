import { BlockControls, InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarItem, __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { prayerTable } from "../frontend/prayerTable";
import { panelHeaderSettings } from "./panelHeaderSettings";
import { panelSalatSettings } from "./panelSalatSettings";
import { panelStyleSettings } from "./panelStyleSettings";
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

  return (
    <div {...blockProps}>
      {
        <BlockControls>
          <ToolbarGroup>
            <ToolbarItem
              as={UnitControl}
              onChange={(newValue) => setAttributes({ maxWidth: newValue })}
              value={props.attributes.maxWidth}
              size="medium"
              label="Set max width"
              min={18}
            />
          </ToolbarGroup>
        </BlockControls>
      }

      <InspectorControls>
        {panelSalatSettings(props)}
        {panelHeaderSettings(props)}
        {panelStyleSettings(props)}
      </InspectorControls>

      {prayerTable(props.attributes)}
    </div>
  );
}

export { AdminBackEnd };
