import { useLazyQuery } from "@apollo/client";
import PageBlockComponent from "../../pageblock-component";
import style from "./admin-block-style.module.scss";
import { ADMIN_LOGS_QUERY } from "../../../scripts/graphql/admin-query/admin-logs-query";
import { useEffect } from "react";
import { timeConverter } from "../../../scripts/misc/stringFormatter";

function AdminLogBlockComponent(_props: any) {
  return (
    <div
      className={`${style.grey_info_block} ${style.admin_log_block}`}
      style={{ width: "100%" }}
    >
      <div>
        <h1>Description</h1>
        <p>{_props.description}</p>
      </div>
      <div style={{ maxWidth: "150px" }}>
        <h1>Date and Time</h1>
        <p>{timeConverter(Number(_props.date))}</p>
      </div>
    </div>
  );
}

export default function AdminLogsComponent() {
  const [adminLogsQuery, { loading, error, data }] =
    useLazyQuery(ADMIN_LOGS_QUERY);

  useEffect(() => {
    adminLogsQuery();
  }, []);

  return (
    <div className={style.admins_log_component_root}>
      {data?.admin_logs_entity.length > 0 ? (
        data.admin_logs_entity.map((value: any) => {
          return (
            <AdminLogBlockComponent
              key={0}
              description={value.description}
              date={value.date}
            />
          );
        })
      ) : (
        <p>No Logs</p>
      )}
      <PageBlockComponent query={adminLogsQuery} cut={"settings"} />
    </div>
  );
}
