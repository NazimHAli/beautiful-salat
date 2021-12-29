import { ColorPalette, InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { TextControl, ToggleControl, SelectControl, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";

import { prayerTable } from "./prayerTable";
import { prayerMethods } from "./prayerMethods";
import { getSalatTimes } from "./service";

function BackEndEdit(props) {
  const blockProps = useBlockProps();
  const { setAttributes } = props;
  const posts = useSelect((select) => {
    return select("core").getEntityRecords("postType", "post");
  }, []);

  const onChangeShowHeader = (newValue) => {
    setAttributes({ showHeader: newValue });
  };

  const onCountryChange = (newValue) => {
    getSalatTimes({ ...props.attributes.salatSettings, country: newValue }).then((response) => {
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
    setAttributes({ salatSettings: { ...props.attributes.salatSettings, city: newValue } });
  };

  const onMethodChange = (newValue) => {
    setAttributes({ salatSettings: { ...props.attributes.salatSettings, method: newValue } });
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Salat Settings")} initialOpen={false}>
          <SelectControl
            label="Calculation Method"
            help="Based on country and city"
            value={props.attributes.salatSettings.method}
            options={prayerMethods}
            onChange={onMethodChange}
          />
          <TextControl label="Country" onChange={onCountryChange} value={props.attributes.salatSettings.country} />
          <TextControl label="City" onChange={onCityChange} value={props.attributes.salatSettings.city} />
        </PanelBody>

        <PanelBody title={__("Header")} initialOpen={false}>
          <ToggleControl label="Toggle Header" checked={props.attributes.showHeader} onChange={onChangeShowHeader} />

          <TextControl label="Title" onChange={(newValue) => setAttributes({ title: newValue })} value={props.attributes.title} />

          <p>Title Text Color</p>
          <ColorPalette value={props.attributes.titleTextColor} onChange={(newValue) => setAttributes({ titleTextColor: newValue })} />

          <p>Title Background Color</p>
          <ColorPalette value={props.attributes.backgroundColor} onChange={(newValue) => setAttributes({ backgroundColor: newValue })} />
        </PanelBody>

        <PanelBody title={__("Container")} initialOpen={false}>
          <TextControl label="Title" onChange={(newValue) => setAttributes({ title: newValue })} value={props.attributes.title} />
        </PanelBody>
      </InspectorControls>

      {prayerTable(props.attributes)}

      {!posts && "Loading"}
      {posts && posts.length === 0 && "No Posts"}
      {posts && posts.length > 0 && <a href={posts[0].link}>{posts[0].title.rendered}</a>}
    </div>
  );
}

export { BackEndEdit };
