import { ConfigProvider } from 'antd'

export const ThemeProvider = (App) => {
  return () => {
    return (
      <ConfigProvider
        theme={{
          components: {
            Form: {
              marginLG: 12,
            },
          },
          token: {},
        }}
      >
        <App />
      </ConfigProvider>
    )
  }
}
