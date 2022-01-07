import { prayerTable } from "./prayerTable";

function ClientSideUI(props) {
  return <>{prayerTable(props.attributes)}</>;
}

export { ClientSideUI };
