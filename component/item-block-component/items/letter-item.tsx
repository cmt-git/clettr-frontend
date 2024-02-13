import { useEffect, useState } from "react";

const LetterItem = (props: any) => {
  const colors: any = {
    pink: {
      lighter: "#E443C8",
      darker: "#AC0F74",
    },
    purple: {
      lighter: "#9E52D8",
      darker: "#6B23C3",
    },
    blue: {
      lighter: "#3479CD",
      darker: "#184B8B",
    },
    teal: {
      lighter: "#56C9E2",
      darker: "#24879C",
    },
    lime: {
      lighter: "#0BE243",
      darker: "#00991A",
    },
    green: {
      lighter: "#7CE228",
      darker: "#51922B",
    },
    yellow: {
      lighter: "#ECDA35",
      darker: "#AB8930",
    },
    orange: {
      lighter: "#E09017",
      darker: "#98530A",
    },
    red: {
      lighter: "#E93528",
      darker: "#990F1C",
    },

    grey: {
      lighter: "#A1A1A1",
      darker: "#707070",
    },
  };

  const striped_pattern = (_color: string) => {
    const color = colors[_color]?.["darker"];

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42.659"
        height="42.659"
        viewBox="0 0 42.659 42.659"
      >
        <g transform="translate(-5.649 45.975)">
          <path
            d="M12.39-35.432l2.426-10.543H19.1Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M5.649-31.648v-4.815L9.217-40.5Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M5.649-9.477V-22.109L16.583-35.024Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M16.721-3.316l16.307-31.76L8.066-4.232a5.4,5.4,0,0,0,3.017.915Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M28.286-3.316h-6.7L37.7-29.612Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M39.364-3.316H35.125L46.792-17.481Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M18.98-26.854,25.3-45.975H36.656Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M40.207-45.975,36.764-31.962l8.757-13.323a5.376,5.376,0,0,0-2.648-.691Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M48.308-37.725v10.7L35.578-14.3Z"
            fill={color}
            fill-rule="evenodd"
          />
        </g>
      </svg>
    );
  };

  const spotted_pattern = (_color: string) => {
    const color = colors[_color]?.["darker"];

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42.659"
        height="42.659"
        viewBox="0 0 42.659 42.659"
      >
        <g transform="translate(0 42.659)">
          <path
            d="M16.6-42.659A5.273,5.273,0,0,1,11.4-38.223a5.273,5.273,0,0,1-5.206-4.436Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M2.42-41.745A5.24,5.24,0,0,1,3.9-38.091,5.273,5.273,0,0,1,0-33v-4.224A5.425,5.425,0,0,1,2.42-41.745Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M4.675-30.781a2.881,2.881,0,0,1,2.88,2.88,2.881,2.881,0,0,1-2.88,2.88A2.881,2.881,0,0,1,1.8-27.9,2.881,2.881,0,0,1,4.675-30.781Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M12.244-24.907a4.442,4.442,0,0,1,4.44,4.44,4.442,4.442,0,0,1-4.44,4.44,4.442,4.442,0,0,1-4.44-4.44A4.442,4.442,0,0,1,12.244-24.907Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M18.329-35.436a5.042,5.042,0,0,1,5.04,5.04,5.042,5.042,0,0,1-5.04,5.04,5.042,5.042,0,0,1-5.04-5.04A5.042,5.042,0,0,1,18.329-35.436Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M29.391-29.694a3.121,3.121,0,0,1,3.12,3.12,3.121,3.121,0,0,1-3.12,3.12,3.121,3.121,0,0,1-3.12-3.12A3.121,3.121,0,0,1,29.391-29.694Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M32.285-42.659a4.679,4.679,0,0,1,.25,1.519,4.8,4.8,0,0,1-4.8,4.8,4.8,4.8,0,0,1-4.8-4.8,4.679,4.679,0,0,1,.25-1.519Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M20.062-15.014a3.121,3.121,0,0,1,3.12,3.12,3.121,3.121,0,0,1-3.12,3.12,3.122,3.122,0,0,1-3.12-3.12A3.122,3.122,0,0,1,20.062-15.014Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M25.788-21.215a1.921,1.921,0,0,1,1.92,1.92,1.921,1.921,0,0,1-1.92,1.92,1.921,1.921,0,0,1-1.92-1.92A1.921,1.921,0,0,1,25.788-21.215Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M40.459-41.584a5.4,5.4,0,0,1,2.2,4.36v4.553l-.239.012a4.682,4.682,0,0,1-4.68-4.68A4.67,4.67,0,0,1,40.459-41.584Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M0-17.691a3.9,3.9,0,0,1,2.045,3.43A3.9,3.9,0,0,1,0-10.831Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M6.984-10.375A3.18,3.18,0,0,1,10.162-7.2,3.18,3.18,0,0,1,6.984-4.018,3.18,3.18,0,0,1,3.805-7.2,3.18,3.18,0,0,1,6.984-10.375Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M10.91,0a3.316,3.316,0,0,1-.024-.41,3.66,3.66,0,0,1,3.659-3.659A3.66,3.66,0,0,1,18.2-.41a3.335,3.335,0,0,1-.024.41Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M23.881-6.717a2.94,2.94,0,0,1,2.939,2.939A2.94,2.94,0,0,1,23.881-.84a2.94,2.94,0,0,1-2.939-2.939A2.94,2.94,0,0,1,23.881-6.717Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M30.35,0a4.485,4.485,0,0,1-.2-1.333,4.5,4.5,0,0,1,4.5-4.5,4.5,4.5,0,0,1,4.5,4.5,4.266,4.266,0,0,1-.121,1.021,5.265,5.265,0,0,1-1.8.312Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M32.16-15.924a3.66,3.66,0,0,1,3.659,3.659A3.66,3.66,0,0,1,32.16-8.607,3.66,3.66,0,0,1,28.5-12.265,3.66,3.66,0,0,1,32.16-15.924Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M42.659-13.674V-5.84a5.084,5.084,0,0,1-1.838-3.917A5.084,5.084,0,0,1,42.659-13.674Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M42.659-26.926v8.351a4.494,4.494,0,0,1-2.832-4.176A4.494,4.494,0,0,1,42.659-26.926Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M32.093-35.375a1.921,1.921,0,0,1,1.92,1.92,1.921,1.921,0,0,1-1.92,1.92,1.921,1.921,0,0,1-1.92-1.92A1.921,1.921,0,0,1,32.093-35.375Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M36.173-19.775a1.921,1.921,0,0,1,1.92,1.92,1.921,1.921,0,0,1-1.92,1.92,1.921,1.921,0,0,1-1.92-1.92A1.921,1.921,0,0,1,36.173-19.775Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M9.053-35.616a1.921,1.921,0,0,1,1.92,1.92,1.921,1.921,0,0,1-1.92,1.92,1.921,1.921,0,0,1-1.92-1.92A1.921,1.921,0,0,1,9.053-35.616Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M5.213-17.855a1.921,1.921,0,0,1,1.92,1.92,1.921,1.921,0,0,1-1.92,1.92,1.921,1.921,0,0,1-1.92-1.92A1.921,1.921,0,0,1,5.213-17.855Z"
            fill={color}
            fill-rule="evenodd"
          />
        </g>
      </svg>
    );
  };

  const zigzag_pattern = (_color: string) => {
    const color = colors[_color]?.["darker"];

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42.659"
        height="42.659"
        viewBox="0 0 42.659 42.659"
      >
        <g transform="translate(0 42.659)">
          <path
            d="M33.235-40.906l-4.557-1.753H12.833L8.275-40.906,4.139-42.5a5.367,5.367,0,0,0-3.063,2.036l7.2,2.769,12.48-4.8,12.48,4.8L41.312-40.8a5.389,5.389,0,0,0-3.585-1.835Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M0-27.2v3.214L8.275-20.8l12.48-4.8,12.48,4.8,9.424-3.624v-3.214l-9.424,3.625-12.48-4.8-12.48,4.8Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M0-10.315V-7.1L8.275-3.918l12.48-4.8,12.48,4.8,9.424-3.625v-3.214L33.235-7.132l-12.48-4.8-12.48,4.8Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M0-35.645v3.214l8.275,3.183,12.48-4.8,12.48,4.8,9.424-3.624v-3.214l-9.424,3.625-12.48-4.8-12.48,4.8Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M0-18.758v3.214l8.275,3.183,12.48-4.8,12.48,4.8,9.424-3.624V-19.2l-9.424,3.624-12.48-4.8-12.48,4.8Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M29.825,0H21.468l-.713-.274L20.042,0H11.685l9.07-3.488Z"
            fill={color}
            fill-rule="evenodd"
          />
        </g>
      </svg>
    );
  };

  const checkered_pattern = (_color: string) => {
    const color = colors[_color]?.["darker"];

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42.659"
        height="42.659"
        viewBox="0 0 42.659 42.659"
      >
        <g transform="translate(0 42.659)">
          <path
            d="M8.532-42.659h-3.1A5.435,5.435,0,0,0,0-37.224v3.1H8.532Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M0-5.435A5.435,5.435,0,0,0,5.435,0h3.1V-8.532H0Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path d="M0-17.064H8.532V-25.6H0Z" fill={color} fill-rule="evenodd" />
          <path
            d="M17.064-34.127H25.6v-8.532H17.064Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M17.064,0H25.6V-8.532H17.064Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M17.064-17.064H25.6V-25.6H17.064Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M37.224-42.659h-3.1v8.532h8.532v-3.1A5.434,5.434,0,0,0,37.224-42.659Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M42.659-8.532H34.127V0h3.1a5.435,5.435,0,0,0,5.435-5.435Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M34.127-17.064h8.532V-25.6H34.127Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M8.532-25.6h8.532v-8.532H8.532Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M8.532-8.532h8.532v-8.532H8.532Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M25.6-25.6h8.532v-8.532H25.6Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M25.6-8.532h8.532v-8.532H25.6Z"
            fill={color}
            fill-rule="evenodd"
          />
        </g>
      </svg>
    );
  };

  const cross_pattern = (_color: string) => {
    const color = colors[_color]?.["darker"];

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42.659"
        height="42.659"
        viewBox="0 0 42.659 42.659"
      >
        <g transform="translate(0 42.659)">
          <path
            d="M38.329-40.667l1.388-1.388A5.454,5.454,0,0,1,41.4-40.7l-1.553,1.553,2.814,2.814v3.032l-4.33-4.33L31.1-30.41,38.3-23.219l4.363-4.363v3.032L39.812-21.7l2.847,2.847v3.032L38.3-20.187l-6.742,6.742L38.3-6.7l4.363-4.363v3.032L39.812-5.186l2.243,2.244a5.457,5.457,0,0,1-1.324,1.66l-.027.022L38.3-3.67,34.626,0H31.594l5.186-5.186-6.742-6.742L22.846-4.737,27.582,0H24.55L21.33-3.221,18.109,0H15.077l4.737-4.737-7.192-7.191L5.879-5.186,11.065,0H8.033L4.363-3.67,1.954-1.261,2-1.224A5.453,5.453,0,0,1,.5-3.153q.049.107.1.211L2.847-5.186,0-8.033v2.677Q0-5.4,0-5.435v-30.9l2.814-2.814L1.261-40.7l.022-.027a5.454,5.454,0,0,1,1.66-1.324L4.33-40.667l1.991-1.991H9.353L5.846-39.152l7.225,7.225,6.743-6.742-3.99-3.99h3.032l2.474,2.474L23.8-42.659h3.032l-3.99,3.99,6.742,6.742,7.225-7.225-3.507-3.507h3.032ZM5.346,0h.022ZM37.313,0h-.022ZM5.276,0H5.3ZM37.383,0h-.026ZM5.209,0h.016ZM37.434,0h.016Zm-32.292,0h.013Zm32.362,0h.013Zm-32.428,0,.026,0Zm32.506,0-.026,0Zm-32.572,0,.024,0Zm32.637,0-.024,0ZM4.946-.022h.016Zm32.768,0H37.7ZM4.865-.03l.016,0Zm32.929,0-.016,0Zm-33-.008.023,0Zm33.074,0-.023,0ZM4.726-.046l.026,0Zm33.207,0-.026,0ZM4.661-.055l.026,0-.012,0Zm33.324,0-.012,0,.026,0ZM4.6-.064l.026,0-.015,0Zm33.456,0-.015,0,.026,0ZM4.532-.075l.024,0Zm33.594,0-.024,0ZM4.469-.086l.02,0Zm33.721,0-.02,0ZM4.323-.114l.02,0Zm34.013,0-.02,0ZM4.256-.128l.024.005Zm34.146,0-.024.005ZM4.193-.143l.025.006Zm34.274,0-.025.006ZM4.13-.158l.025.006-.013,0Zm34.387,0-.013,0,.025-.006ZM4.068-.173l.024.006Zm34.523,0-.024.006ZM4.006-.19l.022.006Zm34.646,0-.022.006ZM3.945-.207l.014,0Zm34.769,0L38.7-.2ZM3.871-.228l.013,0Zm34.918,0-.013,0ZM3.8-.25l.021.007Zm35.055,0-.021.007ZM3.74-.27l.023.008Zm35.18,0L38.9-.262ZM3.679-.29,3.7-.282Zm35.3,0-.024.008ZM3.619-.311,3.642-.3Zm35.421,0L39.016-.3ZM3.559-.332l.023.008Zm35.54,0-.023.008ZM3.5-.354l.019.007Zm35.658,0-.019.007ZM3.442-.377h0Zm35.775,0h0ZM3.365-.408,3.384-.4Zm35.93,0L39.275-.4ZM3.3-.434l.023.01Zm36.053,0-.023.01ZM3.244-.46l.024.011-.01,0ZM39.4-.453l-.01,0,.024-.011ZM3.187-.485l.024.011L3.2-.48ZM39.461-.48l-.013.006.024-.011ZM3.13-.512,3.154-.5Zm36.4,0L39.505-.5ZM3.073-.539,3.1-.528Zm36.513,0-.023.011ZM3.017-.566l.019.009Zm36.625,0-.019.009ZM2.943-.6l.02.01Zm36.774,0-.02.01ZM2.883-.635l.025.013Zm36.892,0-.025.013ZM2.827-.665l.026.014-.009,0Zm36.988.009-.009,0,.026-.014ZM2.772-.7,2.8-.681,2.787-.688Zm37.1.008-.013.007L39.887-.7ZM2.718-.727l.027.016L2.73-.72ZM39.929-.72l-.016.009.027-.016ZM2.664-.758l.028.016-.02-.011Zm37.322,0-.02.011.028-.016ZM2.611-.79l.029.017L2.616-.787Zm37.431,0-.024.014.029-.017ZM2.561-.821,2.592-.8,2.561-.821,2.524-.844Zm37.538,0L40.067-.8,40.1-.821l.036-.023ZM2.478-.874l.033.021-.006,0Zm37.675.018-.006,0,.033-.021ZM2.427-.907l.032.021L2.451-.892Zm37.781.015L40.2-.886l.032-.021ZM2.377-.941l.033.022L2.4-.928Zm37.886.013-.013.009.033-.022ZM2.326-.976l.033.023L2.342-.965Zm37.991.011L40.3-.953l.033-.023ZM2.276-1.012l.035.025L2.289-1ZM40.37-1l-.023.016.035-.025ZM2-1.223q.129.106.266.2Q2.129-1.117,2-1.223Zm38.66,0q-.129.106-.265.2Q40.53-1.117,40.659-1.223Zm.022-.018-.02.017.044-.036Zm1.477-1.912q-.049.107-.1.211l.036-.07.035-.071Zm.021-.045-.018.039.028-.062ZM.47-3.221.5-3.159.48-3.2Zm41.736-.037-.011.025.026-.059ZM.439-3.292l.026.059L.453-3.258Zm41.793-.027-.007.016.028-.067ZM.405-3.371.434-3.3.427-3.319Zm41.9-.145q-.027.072-.056.143l.029-.073ZM.375-3.446.4-3.373Q.376-3.444.349-3.516Zm41.954-.12-.013.035.02-.055ZM.323-3.586l.02.055L.33-3.566Zm42.029-.043-.008.023.019-.053ZM.3-3.658l.019.053L.307-3.629Zm42.076-.033,0,.014.02-.059ZM.271-3.736l.02.059,0-.014Zm42.145-.086-.023.073Zm-42.172,0,.023.073Zm42.191-.061-.017.057.02-.067ZM.222-3.893l.02.067L.225-3.882Zm42.231-.054-.01.033.015-.052ZM.2-3.965l.015.052-.01-.033Zm42.27-.047-.006.022.013-.05ZM.181-4.039l.013.05L.188-4.011Zm42.307-.038,0,.014.014-.054ZM.161-4.117l.014.054,0-.014ZM42.52-4.209c-.006.025-.011.049-.018.074Zm-42.381,0,.018.074Zm42.4-.064-.013.057.015-.066ZM.122-4.282l.015.066L.124-4.273Zm42.426-.057-.007.034.01-.051ZM.107-4.356l.01.051L.11-4.339Zm42.455-.049,0,.023.009-.049ZM.092-4.432.1-4.383l0-.023Zm42.482-.041,0,.014.009-.053ZM.078-4.511l.009.053,0-.014Zm42.518-.1-.012.075Zm-42.534,0,.012.075C.07-4.558.066-4.583.063-4.608Zm42.544-.066-.009.059.01-.068ZM.052-4.683l.01.068L.053-4.674Zm42.564-.059,0,.035.007-.051ZM.042-4.759l.007.051,0-.035Zm42.582-.052,0,.023.006-.049ZM.033-4.836l.006.049,0-.023Zm42.6-.043,0,.015.005-.053ZM.024-4.917l.005.053,0-.015Zm42.619-.1c0,.026,0,.051-.006.076Zm-42.627,0,.006.076C.02-4.966.018-4.991.016-5.017Zm42.632-.069,0,.064,0-.072ZM.011-5.094l0,.072,0-.064Zm42.641-.061,0,.036,0-.052ZM.006-5.171l0,.052,0-.036ZM0-5.25l0,.05v-.025Zm42.652.025V-5.2l0-.05ZM0-5.332v.037Zm42.656.037v-.037Zm0-.07v-.07Zm-28.521-8.08L21.33-6.253l7.191-7.191L21.33-20.636ZM0-15.823v4.758L4.363-6.7l6.742-6.742L4.363-20.187Zm22.846-6.328,7.191,7.191L36.779-21.7l-7.191-7.191ZM5.879-21.7l6.742,6.743,7.192-7.191-6.743-6.743Zm-3.032,0L0-18.856V-24.55ZM0-33.306v5.723l4.363,4.363,7.192-7.191L4.33-37.635Zm14.587,2.9,6.743,6.742,6.742-6.742L21.33-37.153ZM0-37.312v.022Zm42.657,0v.022ZM0-37.383v.026Zm42.654,0v.026ZM0-37.45v.016Zm42.65.016v-.016ZM.008-37.517v.013Zm42.644.013v-.013ZM.012-37.583l0,.026Zm42.636,0,0,.026ZM.016-37.648l0,.024Zm42.626,0,0,.024ZM.022-37.713v.016Zm42.615,0v.016ZM.03-37.794l0,.016Zm42.6,0,0,.016ZM.038-37.866l0,.023Zm42.584,0,0,.023ZM.046-37.933l0,.026Zm42.567,0,0,.026ZM.055-38l0,.026,0-.012Zm42.551.014,0,.012,0-.026ZM.064-38.063l0,.026,0-.015Zm42.532.011,0,.015,0-.026ZM.075-38.126l0,.024Zm42.51,0,0,.024ZM.086-38.19l0,.02Zm42.488,0,0,.02ZM.114-38.336l0,.02Zm42.431,0,0,.02ZM.128-38.4l-.005.024Zm42.4,0,.005.024ZM.143-38.466l-.006.025Zm42.374,0,.006.025ZM.158-38.529.152-38.5l0-.013Zm42.346.012,0,.013-.006-.025ZM.173-38.591l-.006.024Zm42.312,0,.006.024ZM.19-38.653l-.006.022Zm42.28,0,.006.022ZM.207-38.714l0,.014Zm42.246,0,0,.014ZM.228-38.788l0,.013Zm42.2,0,0,.013ZM.25-38.857l-.007.021Zm42.16,0,.007.021ZM.27-38.919.262-38.9Zm42.12,0,.008.023ZM.29-38.98l-.008.024Zm42.079,0,.008.024ZM.311-39.04.3-39.016Zm42.037,0,.008.024ZM.332-39.1l-.008.023Zm41.994,0,.008.023ZM.354-39.159l-.007.019Zm41.95,0,.007.019ZM.377-39.217h0Zm41.9,0h0ZM.408-39.294.4-39.275Zm41.843,0,.008.019ZM.434-39.356l-.01.023Zm41.791,0,.01.023ZM.46-39.415l-.011.024,0-.01Zm41.746.014,0,.01-.01-.024ZM.485-39.472l-.011.024.006-.013Zm41.693.011.006.013-.011-.024ZM.512-39.529.5-39.505Zm41.636,0,.011.024ZM.539-39.586l-.011.023Zm41.582,0,.011.023ZM.566-39.642l-.009.019Zm41.527,0,.009.019ZM.6-39.716l-.01.02Zm41.451,0,.01.02ZM.635-39.776l-.013.025Zm41.389,0,.013.025ZM.665-39.832l-.014.026,0-.009ZM42-39.815l0,.009-.014-.026ZM.7-39.887l-.015.027.007-.013Zm41.276.014.007.013-.015-.027ZM.727-39.941l-.016.027.009-.016Zm41.212.011.009.016-.016-.027ZM.758-39.994l-.016.028.011-.02Zm41.148.008.011.02-.016-.028ZM.79-40.048l-.017.029.014-.024Zm41.082.005.014.024-.017-.029ZM.821-40.1.8-40.067.821-40.1l.023-.036Zm41.017,0,.019.031-.019-.031-.023-.036ZM.874-40.181l-.021.033,0-.006Zm40.929.027,0,.006-.021-.033Zm-40.9-.078L.886-40.2l.006-.009Zm40.86.023.006.009-.021-.032ZM.941-40.282l-.022.033.009-.013Zm40.789.019.009.013-.022-.033ZM.976-40.333.953-40.3l.012-.017Zm40.718.016.012.017-.023-.033ZM1.012-40.383l-.025.035L1-40.37Zm40.645.013.016.023-.025-.035ZM1.223-40.659q-.106.129-.2.265Q1.117-40.53,1.223-40.659Zm40.212,0q.106.129.2.265Q41.542-40.53,41.436-40.659ZM1.261-40.7l-.036.044.017-.02Zm40.157.024.017.02L41.4-40.7Zm-1.912-1.477q.107.049.211.1l-.07-.036-.071-.035Zm-36.422.033-.071.035-.07.036q.1-.054.211-.1Zm36.377-.053.039.018-.062-.028Zm-36.24-.01-.062.028.039-.018ZM39.4-42.206l.025.011-.059-.026ZM3.292-42.22l-.059.026.025-.011Zm36.048-.012.016.007-.067-.028ZM3.371-42.253l-.067.028.016-.007Zm35.772-.057.143.056-.073-.029Zm-35.7.027-.073.029.143-.056Zm35.647-.046.035.013-.055-.02ZM3.586-42.336l-.055.02.035-.013Zm35.444-.015.023.008L39-42.362Zm-35.372-.01-.053.019.023-.008Zm35.309-.012.014,0-.059-.02ZM3.736-42.388l-.059.02.014,0Zm35.1-.027.073.023Zm-35.016,0-.073.023Zm34.955-.018.057.017-.067-.02Zm-34.884,0-.067.02.057-.017Zm34.819-.016.034.01-.052-.015ZM3.965-42.458l-.052.015.033-.01Zm34.683-.013.022.006-.05-.013ZM4.039-42.478l-.05.013.022-.006Zm34.544-.01.014,0-.054-.014ZM4.117-42.5l-.054.014.014,0ZM38.45-42.52l.074.018Zm-34.241,0-.074.018Zm34.177-.014.057.013-.066-.015Zm-34.1,0-.066.015.057-.013Zm34.037-.012.034.007-.051-.01Zm-33.963,0-.051.01.034-.007Zm33.9-.01.023,0-.049-.009Zm-33.821,0-.049.009.023,0Zm33.755-.007.014,0-.053-.009ZM4.511-42.581l-.053.009.014,0Zm33.54-.016.075.012Zm-33.443,0-.075.012Zm33.376-.01.059.009-.068-.01Zm-33.3,0-.068.01.059-.009Zm33.233-.008.035,0-.051-.007Zm-33.158,0-.051.007.035,0Zm.077-.009-.049.006.023,0Zm33.012,0,.023,0-.049-.006ZM4.917-42.634l-.053.005.015,0Zm32.863,0,.015,0-.053-.005ZM5.017-42.643l-.076.006Zm32.625,0,.076.006ZM5.094-42.648l-.072,0,.064,0Zm32.48,0,.064,0-.072,0Zm-32.4,0-.052,0,.036,0Zm32.333,0,.036,0-.052,0Zm-32.254,0-.05,0h.025Zm32.185,0h.025l-.05,0Zm-32.1,0H5.294Zm32.033,0h-.037Zm-31.93,0h-.07Zm31.86,0h-.07Z"
            fill={color}
            fill-rule="evenodd"
          />
        </g>
      </svg>
    );
  };

  const sharp_pattern = (_color: string) => {
    const color = colors[_color]?.["darker"];

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42.659"
        height="42.659"
        viewBox="0 0 42.659 42.659"
      >
        <g
          id="Group_17"
          data-name="Group 17"
          transform="translate(-1599 -476.659)"
        >
          <g
            id="Group_16"
            data-name="Group 16"
            transform="translate(1596.617 521.323)"
          >
            <path
              id="Path_68"
              data-name="Path 68"
              d="M15.734-44.665h9.691L29.9-41.77,10.945-38.731Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_69"
              data-name="Path 69"
              d="M36.752-44.665l1.213,9.54,7.077,1.945v-6.05a5.255,5.255,0,0,0-.1-1.04l-3.546-4.088a5.27,5.27,0,0,0-1.786-.307Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_70"
              data-name="Path 70"
              d="M9.152-34.674l-6.769,1.3v-5.386Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_71"
              data-name="Path 71"
              d="M25.55-32.421,28.285-14.25,7.175-32.229Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_72"
              data-name="Path 72"
              d="M8.427-13.746l-6.045-.01V-18.73Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_73"
              data-name="Path 73"
              d="M45.042-23.18v5.124L35.456-21l8.67-3.561Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_74"
              data-name="Path 74"
              d="M35.653-18.989l2.5,4.783L30.893-16.44Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_75"
              data-name="Path 75"
              d="M7.945-40.832l-3-3A5.407,5.407,0,0,0,2.618-40.81Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_76"
              data-name="Path 76"
              d="M45.042-30.858V-27.9L41.7-26.331l1.809-5.087Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_77"
              data-name="Path 77"
              d="M30.723-2.006h-7.14l-4.7-1.445,8.656-4.637Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_78"
              data-name="Path 78"
              d="M8.809-24.421l5.145,2.78L5.338-19.715Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_79"
              data-name="Path 79"
              d="M2.383-29.409l2.209.6-.726,5.8-1.482-2.21Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_80"
              data-name="Path 80"
              d="M35.8-32.421l1.9,8.509-9.983-5.226Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_81"
              data-name="Path 81"
              d="M26.871-38.711l7.856,3.022L20.315-33.432Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_82"
              data-name="Path 82"
              d="M45.042-9.912V-7.44a5.361,5.361,0,0,1-.853,2.915l-12.1.494,9.764-8.114Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_83"
              data-name="Path 83"
              d="M10.949-2.006,5.181-6.051,3.273-4.465A5.42,5.42,0,0,0,7.817-2.006Z"
              fill={color}
              fill-rule="evenodd"
            />
            <path
              id="Path_84"
              data-name="Path 84"
              d="M11.17-17.148l11.3,3.382L7.175-6.054Z"
              fill={color}
              fill-rule="evenodd"
            />
          </g>
        </g>
      </svg>
    );
  };

  const question_pattern = (_color: string) => {
    const color = colors[_color]?.["darker"];

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42.659"
        height="42.659"
        viewBox="0 0 42.659 42.659"
      >
        <g
          id="Group_30"
          data-name="Group 30"
          transform="translate(-3.286 42.89)"
        >
          <path
            d="M19.38-.341a1.98,1.98,0,0,1-1.313-.78,1.778,1.778,0,0,1-.317-1.415,1.778,1.778,0,0,1,.786-1.219,1.98,1.98,0,0,1,1.5-.278,1.911,1.911,0,0,1,1.279.774,1.8,1.8,0,0,1,.306,1.413,1.8,1.8,0,0,1-.775,1.221A1.911,1.911,0,0,1,19.38-.341Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M23.767-16.49a5.547,5.547,0,0,1,3.544,1.944,4.515,4.515,0,0,1,.806,3.755A4.159,4.159,0,0,1,26.1-7.679a5.847,5.847,0,0,1-3.966.489l-.4,1.717-2.769-.493.569-3.847,1.013.181a7.144,7.144,0,0,0,3.108.02,1.944,1.944,0,0,0,1.4-1.7,2.187,2.187,0,0,0-.293-1.678,2.124,2.124,0,0,0-1.46-.864,2.237,2.237,0,0,0-1.71.276,2.108,2.108,0,0,0-.851,1.451l-2.971-.53a4.828,4.828,0,0,1,1.023-2.349,4.258,4.258,0,0,1,2.09-1.369A6.1,6.1,0,0,1,23.767-16.49Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M11.149-9.1a1.98,1.98,0,0,1-1.466.426,1.778,1.778,0,0,1-1.25-.735A1.778,1.778,0,0,1,8.08-10.82,1.98,1.98,0,0,1,8.9-12.107a1.911,1.911,0,0,1,1.439-.405,1.8,1.8,0,0,1,1.241.742,1.8,1.8,0,0,1,.362,1.4A1.911,1.911,0,0,1,11.149-9.1Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M41.127-9.536a1.98,1.98,0,0,1-1.408-.592,1.778,1.778,0,0,1-.509-1.358,1.777,1.777,0,0,1,.611-1.315,1.98,1.98,0,0,1,1.448-.482,1.911,1.911,0,0,1,1.373.59,1.8,1.8,0,0,1,.5,1.358,1.8,1.8,0,0,1-.6,1.316A1.911,1.911,0,0,1,41.127-9.536Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M27.5-20.943a1.98,1.98,0,0,1-1.462-.44,1.778,1.778,0,0,1-.649-1.3,1.778,1.778,0,0,1,.469-1.372,1.98,1.98,0,0,1,1.39-.632,1.911,1.911,0,0,1,1.428.443,1.8,1.8,0,0,1,.637,1.3,1.8,1.8,0,0,1-.458,1.371A1.911,1.911,0,0,1,27.5-20.943Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M27.864-37.673a5.547,5.547,0,0,1,3.908,1.032,4.514,4.514,0,0,1,1.687,3.45,4.159,4.159,0,0,1-1.208,3.507,5.847,5.847,0,0,1-3.731,1.431l.027,1.763L25.74-26.3l-.375-3.871,1.027-.069a7.144,7.144,0,0,0,3.022-.73,1.944,1.944,0,0,0,.944-1.988,2.187,2.187,0,0,0-.689-1.558A2.124,2.124,0,0,0,28.043-35a2.236,2.236,0,0,0-1.593.68,2.108,2.108,0,0,0-.476,1.613l-3.011.2a4.827,4.827,0,0,1,.426-2.526,4.258,4.258,0,0,1,1.7-1.833A6.1,6.1,0,0,1,27.864-37.673Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M11.721-27.262A1.98,1.98,0,0,1,10.387-28a1.778,1.778,0,0,1-.357-1.406,1.778,1.778,0,0,1,.751-1.24,1.98,1.98,0,0,1,1.493-.321,1.911,1.911,0,0,1,1.3.737,1.8,1.8,0,0,1,.346,1.4,1.8,1.8,0,0,1-.74,1.242A1.911,1.911,0,0,1,11.721-27.262Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M39.869-28.26A1.98,1.98,0,0,1,38.535-29a1.778,1.778,0,0,1-.357-1.405,1.777,1.777,0,0,1,.751-1.24,1.98,1.98,0,0,1,1.493-.321,1.911,1.911,0,0,1,1.3.737,1.8,1.8,0,0,1,.346,1.4,1.8,1.8,0,0,1-.74,1.242A1.911,1.911,0,0,1,39.869-28.26Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M11.149-9.1a1.98,1.98,0,0,1-1.466.426,1.778,1.778,0,0,1-1.25-.735A1.778,1.778,0,0,1,8.08-10.82,1.98,1.98,0,0,1,8.9-12.107a1.911,1.911,0,0,1,1.439-.405,1.8,1.8,0,0,1,1.241.742,1.8,1.8,0,0,1,.362,1.4A1.911,1.911,0,0,1,11.149-9.1Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M3.286-23.942A5.1,5.1,0,0,1,6.191-24.6a4.514,4.514,0,0,1,3.293,1.976,4.159,4.159,0,0,1,.895,3.6,5.845,5.845,0,0,1-2.351,3.231l.982,1.464L6.758-12.644,4.337-15.687l.824-.616A7.143,7.143,0,0,0,7.3-18.561a1.944,1.944,0,0,0-.29-2.181,2.187,2.187,0,0,0-1.426-.932,2.124,2.124,0,0,0-1.628.476,2.783,2.783,0,0,0-.668.685Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M3.466-18.149l-.18.135v-.419Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M19.38-.341a1.98,1.98,0,0,1-1.313-.78,1.778,1.778,0,0,1-.317-1.415,1.778,1.778,0,0,1,.786-1.219,1.98,1.98,0,0,1,1.5-.278,1.911,1.911,0,0,1,1.279.774,1.8,1.8,0,0,1,.306,1.413,1.8,1.8,0,0,1-.775,1.221A1.911,1.911,0,0,1,19.38-.341Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M23.767-16.49a5.547,5.547,0,0,1,3.544,1.944,4.515,4.515,0,0,1,.806,3.755A4.159,4.159,0,0,1,26.1-7.679a5.847,5.847,0,0,1-3.966.489l-.4,1.717-2.769-.493.569-3.847,1.013.181a7.144,7.144,0,0,0,3.108.02,1.944,1.944,0,0,0,1.4-1.7,2.187,2.187,0,0,0-.293-1.678,2.124,2.124,0,0,0-1.46-.864,2.237,2.237,0,0,0-1.71.276,2.108,2.108,0,0,0-.851,1.451l-2.971-.53a4.828,4.828,0,0,1,1.023-2.349,4.258,4.258,0,0,1,2.09-1.369A6.1,6.1,0,0,1,23.767-16.49Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M37.857-.231a2.021,2.021,0,0,0,.678-1.657,2.187,2.187,0,0,0-.579-1.6,2.124,2.124,0,0,0-1.588-.6,2.236,2.236,0,0,0-1.636.568,2.108,2.108,0,0,0-.587,1.576l-3.018-.007a4.829,4.829,0,0,1,.6-2.491,4.259,4.259,0,0,1,1.822-1.711,6.1,6.1,0,0,1,2.825-.611,5.548,5.548,0,0,1,3.827,1.3A4.515,4.515,0,0,1,41.645-1.9a5.267,5.267,0,0,1-.228,1.591,4.872,4.872,0,0,1-.907.082Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M4.084-2.842a3.875,3.875,0,0,1,.372-.891A4.259,4.259,0,0,1,6.277-5.444,6.1,6.1,0,0,1,9.1-6.054a5.547,5.547,0,0,1,3.827,1.3A4.515,4.515,0,0,1,14.373-1.2a5.575,5.575,0,0,1-.08.964H11.1a2.543,2.543,0,0,0,.165-.948,2.186,2.186,0,0,0-.579-1.6,2.124,2.124,0,0,0-1.588-.6,2.236,2.236,0,0,0-1.636.568,2.108,2.108,0,0,0-.587,1.576l-1.3,0A5.335,5.335,0,0,1,4.084-2.842Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M41.127-9.536a1.98,1.98,0,0,1-1.408-.592,1.778,1.778,0,0,1-.509-1.358,1.777,1.777,0,0,1,.611-1.315,1.98,1.98,0,0,1,1.448-.482,1.911,1.911,0,0,1,1.373.59,1.8,1.8,0,0,1,.5,1.358,1.8,1.8,0,0,1-.6,1.316A1.911,1.911,0,0,1,41.127-9.536Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M45.945-17.232a6.448,6.448,0,0,1-3.034.534l-.159,1.756-2.81-.107.034-3.888L41-18.9a7.143,7.143,0,0,0,3.082-.409,1.944,1.944,0,0,0,1.147-1.878,2.187,2.187,0,0,0-.521-1.622,2.124,2.124,0,0,0-1.565-.655,2.236,2.236,0,0,0-1.655.509,2.108,2.108,0,0,0-.643,1.554l-3.016-.115a4.828,4.828,0,0,1,.689-2.468A4.259,4.259,0,0,1,40.4-25.626a6.1,6.1,0,0,1,2.845-.509,6.164,6.164,0,0,1,2.7.664Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M27.5-20.943a1.98,1.98,0,0,1-1.462-.44,1.778,1.778,0,0,1-.649-1.3,1.778,1.778,0,0,1,.469-1.372,1.98,1.98,0,0,1,1.39-.632,1.911,1.911,0,0,1,1.428.443,1.8,1.8,0,0,1,.637,1.3,1.8,1.8,0,0,1-.458,1.371A1.911,1.911,0,0,1,27.5-20.943Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M27.864-37.673a5.547,5.547,0,0,1,3.908,1.032,4.514,4.514,0,0,1,1.687,3.45,4.159,4.159,0,0,1-1.208,3.507,5.847,5.847,0,0,1-3.731,1.431l.027,1.763L25.74-26.3l-.375-3.871,1.027-.069a7.144,7.144,0,0,0,3.022-.73,1.944,1.944,0,0,0,.944-1.988,2.187,2.187,0,0,0-.689-1.558A2.124,2.124,0,0,0,28.043-35a2.236,2.236,0,0,0-1.593.68,2.108,2.108,0,0,0-.476,1.613l-3.011.2a4.827,4.827,0,0,1,.426-2.526,4.258,4.258,0,0,1,1.7-1.833A6.1,6.1,0,0,1,27.864-37.673Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M11.721-27.262A1.98,1.98,0,0,1,10.387-28a1.778,1.778,0,0,1-.357-1.406,1.778,1.778,0,0,1,.751-1.24,1.98,1.98,0,0,1,1.493-.321,1.911,1.911,0,0,1,1.3.737,1.8,1.8,0,0,1,.346,1.4,1.8,1.8,0,0,1-.74,1.242A1.911,1.911,0,0,1,11.721-27.262Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M17.728-42.89a4.812,4.812,0,0,1,1.515,1.2,4.514,4.514,0,0,1,.913,3.73,4.159,4.159,0,0,1-1.928,3.169,5.846,5.846,0,0,1-3.95.6l-.35,1.728-2.782-.414.459-3.861,1.018.151a7.142,7.142,0,0,0,3.108-.069,1.944,1.944,0,0,0,1.346-1.741,2.187,2.187,0,0,0-.341-1.669,2.124,2.124,0,0,0-1.484-.822,2.236,2.236,0,0,0-1.7.325,2.108,2.108,0,0,0-.809,1.475l-2.985-.444a4.83,4.83,0,0,1,.955-2.378,3.866,3.866,0,0,1,1.117-.984Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M39.869-28.26A1.98,1.98,0,0,1,38.535-29a1.778,1.778,0,0,1-.357-1.405,1.777,1.777,0,0,1,.751-1.24,1.98,1.98,0,0,1,1.493-.321,1.911,1.911,0,0,1,1.3.737,1.8,1.8,0,0,1,.346,1.4,1.8,1.8,0,0,1-.74,1.242A1.911,1.911,0,0,1,39.869-28.26Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M45.23-40.142a5.36,5.36,0,0,1,.715,2.687v1.894a6.122,6.122,0,0,1-3.519.377l-.35,1.728-2.782-.414.459-3.861,1.018.152a7.144,7.144,0,0,0,3.108-.069,1.944,1.944,0,0,0,1.346-1.742A2.39,2.39,0,0,0,45.23-40.142Z"
            fill={color}
            fill-rule="evenodd"
          />
          <path
            d="M38.849-42.89H40.51A5.363,5.363,0,0,1,43.769-41.8l-.37-.085a2.236,2.236,0,0,0-1.7.325,2.108,2.108,0,0,0-.809,1.475L37.9-40.527A4.819,4.819,0,0,1,38.849-42.89Z"
            fill={color}
            fill-rule="evenodd"
          />
        </g>
      </svg>
    );
  };

  let return_html: any =
    props.mint !== true ? (
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          transform: "scale(1.8)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42.842"
          height="50.695"
          viewBox="0 0 42.842 50.695"
          style={{
            filter: "drop-shadow( 0px 3px 3px rgba(0, 0, 0, .3))",
          }}
        >
          <g transform="translate(0 50.695)">
            <path
              d="M42.659-37.224a5.434,5.434,0,0,0-5.435-5.435H5.435A5.435,5.435,0,0,0,0-37.224v31.79A5.435,5.435,0,0,0,5.435,0h31.79a5.435,5.435,0,0,0,5.435-5.435Z"
              fill={(() => {
                let current_color = props.data?.nft_traits.split("-")[1];
                return colors[current_color]?.["darker"];
              })()}
              fill-rule="evenodd"
            />
            <path
              d="M42.842-45.261A5.435,5.435,0,0,0,37.408-50.7H5.618A5.435,5.435,0,0,0,.183-45.261v31.79A5.435,5.435,0,0,0,5.618-8.036h31.79a5.435,5.435,0,0,0,5.435-5.435Z"
              fill={(() => {
                let current_color = props.data?.nft_traits.split("-")[1];
                return colors[current_color]?.["lighter"];
              })()}
              fill-rule="evenodd"
            />
          </g>
        </svg>
        <div style={{ position: "absolute", top: "0px" }}>
          {(() => {
            let current_color = props.data?.nft_traits.split("-")[1];
            let current_pattern = props.data?.nft_traits.split("-")[2];

            return current_pattern == "striped"
              ? striped_pattern(current_color)
              : current_pattern == "spotted"
              ? spotted_pattern(current_color)
              : current_pattern == "zigzag"
              ? zigzag_pattern(current_color)
              : current_pattern == "checkered"
              ? checkered_pattern(current_color)
              : current_pattern == "cross"
              ? cross_pattern(current_color)
              : sharp_pattern(current_color);
          })()}
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "42.659px",
            height: "42.659px",
            position: "absolute",
            top: "4px",
            textShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)",
            fontSize: "28px",
            fontWeight: "800",
            color: "white",
          }}
        >
          {props.data?.nft_traits.substring(0, 1)}
        </p>
      </div>
    ) : (
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          transform: "scale(1.8)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42.842"
          height="50.695"
          viewBox="0 0 42.842 50.695"
          style={{
            filter: "drop-shadow( 0px 3px 3px rgba(0, 0, 0, .3))",
          }}
        >
          <g transform="translate(0 50.695)">
            <path
              d="M42.659-37.224a5.434,5.434,0,0,0-5.435-5.435H5.435A5.435,5.435,0,0,0,0-37.224v31.79A5.435,5.435,0,0,0,5.435,0h31.79a5.435,5.435,0,0,0,5.435-5.435Z"
              fill={(() => {
                return colors["grey"]?.["darker"];
              })()}
              fill-rule="evenodd"
            />
            <path
              d="M42.842-45.261A5.435,5.435,0,0,0,37.408-50.7H5.618A5.435,5.435,0,0,0,.183-45.261v31.79A5.435,5.435,0,0,0,5.618-8.036h31.79a5.435,5.435,0,0,0,5.435-5.435Z"
              fill={(() => {
                return colors["grey"]?.["lighter"];
              })()}
              fill-rule="evenodd"
            />
          </g>
        </svg>
        <div style={{ position: "absolute", top: "0px" }}>
          {question_pattern("grey")}
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "42.659px",
            height: "42.659px",
            position: "absolute",
            top: "4px",
            textShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)",
            fontSize: "28px",
            fontWeight: "800",
          }}
        >
          ?
        </p>
      </div>
    );

  return return_html;
};

export default LetterItem;
