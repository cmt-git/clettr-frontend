export default function SelectBoxComponent(_props: any) {
  return (
    <div
      className={`${_props.style.select_box} ${_props.style.select_box_responsive}`}
    >
      <select
        onChange={(event) => {
          _props.state(event.currentTarget.value);
        }}
      >
        {_props.data.map((value: any) => {
          return <option key={1}>{value}</option>;
        })}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="51"
        viewBox="0 0 25 51"
      >
        <g transform="translate(-1393 -359)">
          <path
            d="M12.5,0,25,19H0Z"
            transform="translate(1393 359)"
            fill="#fff"
          />
          <path
            d="M12.5,0,25,19H0Z"
            transform="translate(1418 410) rotate(180)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
}
