import getScreenWidth from '../../../scripts/misc/getScreenWidth';
import style from '../../../styles/component/popup-component/popup-content-style.module.scss'
import { closePopup } from '../../popup-component/popup-container-component';

const SupportPopupComponent = () => {

    const _width = getScreenWidth();

    const AttachmentBlock = () => {
        return(
            <div className={style.input_box}  style={{
                marginBottom:"10px",
                position:"relative"
            }}>
                <div style={{
                    margin:"0px 10px", 
                    marginBottom:"-5px", 
                    transform:"scale(0.9)",
                    position:"absolute",
                    left:"0px"
                }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.05" height="14.048" viewBox="0 0 14.05 14.048"
                        className={style.close_button}
                    >
                        <path d="M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z" fill="#d08080"/>
                    </svg>
                </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.031" height="9.189" viewBox="0 0 8.031 9.189"
                        style={{transform:"scale(1.3)", marginRight:"5px"}}
                    >
                        <g transform="translate(0 12.448)">
                            <path d="M8.031-11.861a.587.587,0,0,0-.172-.415.587.587,0,0,0-.415-.172H.587a.587.587,0,0,0-.415.172A.587.587,0,0,0,0-11.861v8.016a.587.587,0,0,0,.172.415.587.587,0,0,0,.415.172H7.444a.587.587,0,0,0,.415-.172.587.587,0,0,0,.172-.415ZM6.845-6.534a.189.189,0,0,0-.189-.189H1.375a.189.189,0,0,0-.189.189v.644a.189.189,0,0,0,.189.189H6.656a.189.189,0,0,0,.189-.189Zm0-2.065a.189.189,0,0,0-.189-.189H1.375a.189.189,0,0,0-.189.189v.644a.188.188,0,0,0,.189.189H6.656a.189.189,0,0,0,.189-.189Zm0-2.065a.189.189,0,0,0-.189-.189H1.375a.189.189,0,0,0-.189.189v.644a.189.189,0,0,0,.189.189H6.656a.189.189,0,0,0,.189-.189Z" fill="#fff" fillRule="evenodd"/>
                        </g>
                    </svg>
                    <p style={{marginLeft:"5px"}}>
                        1231239d7123123-123123.. (PNG)
                    </p>
                </div>
                <div>
                    {/* leave empty please */}
                </div>
            </div>
        )
    }

    return(
        <div className={style.popup_content_root} style={{maxWidth:"750px"}}>
            <div style={{width:"100%", marginBottom:"15px"}} onClick={() => closePopup()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.05" height="14.048" viewBox="0 0 14.05 14.048"
                    className={style.close_button}
                >
                    <path d="M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z" fill="#d08080"/>
                </svg>
            </div>
            <div style={{display:"flex", flexDirection: _width > 650 ? "row" : "column", justifyContent:"space-between", alignItems:"center", marginBottom:"15px"}}>
                <p style={{fontSize:"15px", marginBottom: _width > 650 ? "0px" : "10px"}}>
                    Support
                </p>
                <p style={{color:"#929295", textAlign:"center" }}>
                    We accept support request in English 🇺🇸🇬🇧 and Tagalog 🇵🇭
                </p>
            </div>
            <div className={style.line} style={{margin:"15px 0px"}}/>
            <p style={{marginBottom:"15px", opacity:0.5}}>
                We would like to ask for your patience as we process your request, please give us 1-7 days to respond. Thank you!
            </p>
            <div style={{marginBottom:"15px"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"10px"}}>
                    <p>
                        Email Address
                    </p>
                    <p style={{opacity:0.5}}>
                        200 Characters Left
                    </p>
                </div>
                <div className={style.input_box} style={{marginBottom:"10px"}}>
                    <input type="text" placeholder="Email Address"/>
                </div>
            </div>
            <div style={{marginBottom:"15px"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"10px"}}>
                    <p>
                        Subject
                    </p>
                    <p style={{opacity:0.5}}>
                        200 Characters Left
                    </p>
                </div>
                <div className={style.input_box} style={{marginBottom:"10px"}}>
                    <input type="text" placeholder="Subject"/>
                </div>
            </div>
            <div style={{marginBottom:"15px"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"10px"}}>
                    <p>
                        Body
                    </p>
                    <p style={{opacity:0.5}}>
                        2000 Characters Left
                    </p>
                </div>
                <div className={style.input_box} style={{marginBottom:"10px", height:"200px"}}>
                    <textarea></textarea>
                </div>
            </div>
            <div style={{marginBottom:"15px"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"10px"}}>
                    <p>
                        Attachment
                    </p>
                    <p style={{opacity:0.5}}>
                        15 Attachments Left
                    </p>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    {
                        [
                            AttachmentBlock(),
                            AttachmentBlock()
                        ]
                    }
                </div>
            </div>
            <div className={style.line} style={{margin:"15px 0px"}}/>
            <div className={`${style.colored_button} ${style.grey_button}`} style={{marginTop:"25px"}}>
                + Add Attachment
            </div>
            <div className={`${style.colored_button} ${style.grey_button}`} style={{marginTop:"10px"}}>
                <p>
                    Send
                </p>
            </div>
        </div>
    )
}

export default SupportPopupComponent;