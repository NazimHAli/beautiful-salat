import "./style.scss";

import {
	ColorPalette,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import {
	CheckboxControl,
	RadioControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

function prayerTable(props) {
	return (
		<div
			style={{ maxWidth: props?.maxWidth ? props.maxWidth : null }}
			className="table-container"
		>
			<table className="table">
				<thead
					style={{
						backgroundColor: props?.backgroundColor
							? props.backgroundColor
							: null,
						color: props?.titleTextColor ? props.titleTextColor : null,
					}}
					className="table-header"
				>
					<tr>
						<th>{props?.title}</th>
					</tr>
				</thead>

				<tbody className="table-body">
					<tr>
						<th>Fajr:</th>
						<td>05:00</td>
					</tr>

					<tr>
						<th>Duhr:</th>
						<td>12:00</td>
					</tr>

					<tr>
						<th>Asr:</th>
						<td>04:00</td>
					</tr>

					<tr>
						<th>Maghrib:</th>
						<td>05:30</td>
					</tr>

					<tr>
						<th>Isha:</th>
						<td>06:45</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

registerBlockType("create-block/beautiful-salat", {
	edit: (props) => {
		const {
			checkboxField,
			radioField,
			selectField,
			setAttributes,
			toggleField,
		} = props;

		function onChangeCheckboxField(newValue) {
			setAttributes({ checkboxField: newValue });
		}

		function onChangeRadioField(newValue) {
			setAttributes({ radioField: newValue });
		}

		function onChangeToggleField(newValue) {
			setAttributes({ toggleField: newValue });
		}

		function onChangeSelectField(newValue) {
			setAttributes({ selectField: newValue });
		}

		return (
			<>
				<InspectorControls>
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
						onChange={(newValue) =>
							setAttributes({ backgroundColor: newValue })
						}
					/>

					<CheckboxControl
						heading="Checkbox Field"
						label="Tick Me"
						help="Additional help text"
						checked={checkboxField}
						onChange={onChangeCheckboxField}
					/>

					<RadioControl
						label="Radio Field"
						selected={radioField}
						options={[
							{ label: "Yes", value: "yes" },
							{ label: "No", value: "no" },
						]}
						onChange={onChangeRadioField}
					/>

					<ToggleControl
						label="Toggle Field"
						checked={toggleField}
						onChange={onChangeToggleField}
					/>

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

				<RichText
					allowedFormats={[]}
					placeholder={__("Max container width: none")}
					tagName="p"
					onChange={(newValue) => setAttributes({ maxWidth: newValue })}
					value={props.attributes.maxWidth}
				/>

				{prayerTable(props.attributes)}
			</>
		);
	},
	save: (props) => {
		return <>{prayerTable(props.attributes)}</>;
	},
});
