import { ConfigProvider } from "antd";

export const themeProvider = (App) => {
    return () => {
        return (
        <ConfigProvider theme={
            {
                "components": {
                  "Form": {
                    "marginLG": 12
                  }
                },
                "token": {}
            }
        }> 
            <App/>
        </ConfigProvider> 
        )
    }
}