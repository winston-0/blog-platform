import { Spin } from "antd";

const BlurSpinner = () => {
    return (
        <div className="spin-wrapper">
            <div className="blur-background">
                <Spin size="large"></Spin>
            </div> 
        </div>
    )
}

export default BlurSpinner