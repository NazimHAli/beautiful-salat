import { ColorPalette, InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { CheckboxControl, SelectControl, TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { prayerTable } from "./prayerTable";

const BackEndEdit = (props) => {
  const blockProps = useBlockProps();
  const { checkboxField, selectField, setAttributes } = props;

  function onChangeCheckboxField(newValue) {
    setAttributes({ checkboxField: newValue });
  }

  function onChangeToggleField(newValue) {
    setAttributes({ toggleField: newValue });
  }

  function onChangeSelectField(newValue) {
    setAttributes({ selectField: newValue });
  }

  return (
    <div {...blockProps}>
      <InspectorControls>
        <TextControl label="Title" onChange={(newValue) => setAttributes({ title: newValue })} value={props.attributes.title} />

        <p>Title Text Color</p>
        <ColorPalette value={props.attributes.titleTextColor} onChange={(newValue) => setAttributes({ titleTextColor: newValue })} />

        <p>Title Background Color</p>
        <ColorPalette value={props.attributes.backgroundColor} onChange={(newValue) => setAttributes({ backgroundColor: newValue })} />

        <CheckboxControl
          heading="Checkbox Field"
          label="Tick Me"
          help="Additional help text"
          checked={checkboxField}
          onChange={onChangeCheckboxField}
        />

        <ToggleControl label="Toggle Field" checked={props.attributes.toggleField} onChange={onChangeToggleField} />

        <SelectControl
          label="Select Control"
          value={selectField}
          options={[
            { value: "a", label: "Option A" },
            { value: "b", label: "Option B" },
            { value: "c", label: "Option C" },
          ]}
          onChange={onChangeSelectField}
        />
      </InspectorControls>

      {prayerTable(props.attributes)}
    </div>
  );
};

export { BackEndEdit };
