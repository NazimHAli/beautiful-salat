export function prayerTable(props) {
  const timings = props.salatSettings.timings;
  const rootDivCSS = () => {
    let css = undefined;
    if (props.showBoxShadow) {
      css = "salat-table-shadow";
    }

    return css;
  };

  return (
    <div
      style={{ maxWidth: props?.maxWidth ? props.maxWidth : undefined }}
      className={rootDivCSS()}
    >
      <table className={props.showContainerStyle ? "salat-table" : undefined}>
        {props.showHeader && (
          <thead
            style={{
              backgroundColor:
                props?.headerBackgroundColor && props.showAllStyling
                  ? props.headerBackgroundColor
                  : undefined,
              color:
                props?.headerTitleColor && props.showAllStyling
                  ? props.headerTitleColor
                  : undefined,
            }}
            className={props.showHeaderStyle ? "salat-table-header" : undefined}
          >
            <tr>
              <th>{props?.headerTitle}</th>
            </tr>
          </thead>
        )}

        <tbody
          className={props.showContainerStyle ? "salat-table-body" : undefined}
        >
          <tr>
            <th>Fajr:</th>
            <td>{timings?.Fajr}</td>
          </tr>

          <tr>
            <th>Sunrise:</th>
            <td>{timings?.Sunrise}</td>
          </tr>

          <tr>
            <th>Dhuhr:</th>
            <td>{timings?.Dhuhr}</td>
          </tr>

          <tr>
            <th>Asr:</th>
            <td>{timings?.Asr}</td>
          </tr>

          <tr>
            <th>Maghrib:</th>
            <td>{timings?.Maghrib}</td>
          </tr>

          <tr>
            <th>Isha:</th>
            <td>{timings?.Isha}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
