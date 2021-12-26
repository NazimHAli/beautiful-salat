export function prayerTable(props) {
  return (
    <div style={{ maxWidth: props?.maxWidth ? props.maxWidth : null }} className="table-container">
      <table className="table">
        <thead
          style={{
            backgroundColor: props?.backgroundColor ? props.backgroundColor : null,
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
