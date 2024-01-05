import { useEffect, useState } from "react";

const NodeItem = (props: any) => {

    const[currentColor, setCurrentColor]: any = useState(null);
    const[gradientID, setGradientID]: any = useState(null);
    const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const grey: any = {
        "svg": {
            "lighter": "#F2F2F2",
            "darker": "#888888"
        },
        "background": {
            "lighter": "#939393",
            "darker": "#3E3E3E"
        }
    };

    const colors: any = {
        "pink": {
            "svg": {
                "lighter": "#FFE6EB",
                "darker": "#D042A5" 
            },
            "background": {
                "lighter": "#FF3F9B",
                "darker": "#96005F"
            }
        },
        "purple": {
            "svg": {
                "lighter": "#F3E6FF",
                "darker": "#9242D0" 
            },
            "background": {
                "lighter": "#AF3FFF",
                "darker": "#460096"
            }
        },
        "blue": {
            "svg": {
                "lighter": "#E6E8FF",
                "darker": "#4264D0" 
            },
            "background": {
                "lighter": "#3F63FF",
                "darker": "#003D96"
            }
        },
        "teal": {
            "svg": {
                "lighter": "#E6F7FF",
                "darker": "#42ACD0" 
            },
            "background": {
                "lighter": "#3FC4FF",
                "darker": "#006D96"
            }
        },
        "lime": {
            "svg": {
                "lighter": "#E6FFEA",
                "darker": "#42D06C" 
            },
            "background": {
                "lighter": "#3FFF81",
                "darker": "#00962C"
            }
        },
        "green": {
            "svg": {
                "lighter": "#F4FFE6",
                "darker": "#96D042" 
            },
            "background": {
                "lighter": "#B6FF3F",
                "darker": "#729600"
            }
        },
        "yellow": {
            "svg": {
                "lighter": "#FFFBE6",
                "darker": "#D0B542" 
            },
            "background": {
                "lighter": "#FFE53F",
                "darker": "#966E00"
            }
        },
        "orange": {
            "svg": {
                "lighter": "#FFF1E6",
                "darker": "#D08842" 
            },
            "background": {
                "lighter": "#FFA13F",
                "darker": "#964000"
            }
        },
        "red": {
            "svg": {
                "lighter": "#FFE8E6",
                "darker": "#D05042" 
            },
            "background": {
                "lighter": "#FF523F",
                "darker": "#960D00"
            }
        },
    };

    useEffect(() => {
        setGradientID(() => {
            let hash = ""
            for(let i = 0; i < 25; i++){
                let rand = Math.floor(Math.random() * 2)

                if (rand == 0){
                    hash += (Math.floor(Math.random() * 9) + 1).toString();
                }
                else {
                    hash += Letters[Math.floor(Math.random() * Letters.length)];
                }
            }
            return "node-gradient-" + hash;
        });

        if (props.mint === true){
            setCurrentColor(grey);
        }
    }, []);

    return(
        <div
            style={{
                display:"flex",
                justifyContent:"center",
                alignContent:"center",
                transform:"scale(1.5)", 
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"
                style={{
                    display:"flex",
                    justifyContent:"center",
                    alignContent:"center",
                }}
            >
                {
                    props.mint !== true ?
                        <defs>
                            <linearGradient id={gradientID} x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                <stop offset="0" stop-color={`${colors[props.data.nft_traits]["background"]["lighter"]}`}/>
                                <stop offset="1" stop-color={`${colors[props.data.nft_traits]["background"]["darker"]}`}/>
                            </linearGradient>
                            <linearGradient id={`${gradientID}-2`} x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                <stop offset="0" stop-color={`${colors[props.data.nft_traits]["svg"]["lighter"]}`}/>
                                <stop offset="1" stop-color={`${colors[props.data.nft_traits]["svg"]["darker"]}`}/>
                            </linearGradient>
                        </defs>
                    :
                        <defs>
                            <linearGradient id={gradientID} x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                <stop offset="0" stop-color={`${grey["background"]["lighter"]}`}/>
                                <stop offset="1" stop-color={`${grey["background"]["darker"]}`}/>
                            </linearGradient>
                            <linearGradient id={`${gradientID}-2`} x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                <stop offset="0" stop-color={`${grey["svg"]["lighter"]}`}/>
                                <stop offset="1" stop-color={`${grey["svg"]["darker"]}`}/>
                            </linearGradient>
                        </defs>
                }
                <g transform="translate(10 90)"
                >
                    <path 
                        style={{
                            filter:"drop-shadow( 0px 3px 3px rgba(0, 0, 0, .3))"
                        }}
                        d="M81.628-40.814,40.814-81.628,0-40.814,40.814,0Z" fill-rule="evenodd" 
                        fill={`url(#${gradientID})`}
                    />
                    <path 
                        style={{
                            filter:"drop-shadow( 0px 5px 3px rgba(0, 0, 0, .3)) drop-shadow( 0px 5px 3px rgba(0, 0, 0, .3)"
                        }}
                        d="M40.814-11.608,54.065-24.859l1.713,1.713L40.814-8.182,25.85-23.146l1.713-1.713Zm0-54.522L29.129-54.445,33.4-50.175l-1.947,1.947L27.182-52.5,15.5-40.814,27.182-29.129,31.453-33.4,33.4-31.453l-4.271,4.271L40.814-15.5,52.5-27.182l-4.271-4.271L50.175-33.4l4.271,4.271L66.13-40.814,54.445-52.5l-4.271,4.271-1.947-1.947L52.5-54.445ZM33.207-27.182l7.607,7.607,7.607-7.607-7.607-7.607Zm3.6,0,4,4,4-4-4-4Zm-13.664-28.6,1.713,1.713L11.608-40.814,24.859-27.562,23.146-25.85,8.182-40.814ZM58.481-25.85l-1.713-1.713L70.02-40.814,56.769-54.065l1.713-1.713L73.445-40.814ZM19.575-40.814l7.607,7.607,7.607-7.607-7.607-7.607Zm27.263,0,7.607,7.607,7.607-7.607-7.607-7.607Zm-6.024-1.947-4.271-4.271L34.6-45.084l4.271,4.271L34.6-36.543,36.543-34.6l4.271-4.271L45.084-34.6l1.947-1.947-4.271-4.271,4.271-4.271-1.947-1.947ZM54.445-36.81l4-4-4-4-4,4Zm-27.263,0,4-4-4-4-4,4ZM40.814-62.053l-7.607,7.607,7.607,7.607,7.607-7.607Zm-4,7.607,4,4,4-4-4-4Zm-9.248-2.323L25.85-58.481,40.814-73.445,55.778-58.481l-1.713,1.713L40.814-70.02Z" fill-rule="evenodd" 
                        fill={`url(#${gradientID}-2)`}
                    />
                </g>
            </svg>
        </div>
    )
}

export default NodeItem;