export function prayerTable(props) {
  const timings = props.salatSettings.timings;

  return (
    <div
      style={{ maxWidth: props?.maxWidth ? props.maxWidth : null }}
      className="salat-table-container"
    >
      <table className="salat-table">
        {props.showHeader && (
          <thead
            style={{
              backgroundColor: props?.backgroundColor
                ? props.backgroundColor
                : null,
              color: props?.titleTextColor ? props.titleTextColor : null,
            }}
            className="salat-table-header"
          >
            <tr>
              <th>{props?.title}</th>
            </tr>
          </thead>
        )}

        <tbody className="salat-table-body">
          <tr>
            <th>Fajr:</th>
            <td>{timings?.Fajr}</td>
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
