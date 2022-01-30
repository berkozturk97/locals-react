import 'antd/dist/antd.min.css';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      // this is for both less and scss
      test: /.*\.(?:le|c)ss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: false
          }
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }
      ]
    });
    
    // If you wish to use `scss` file
    // Keep in mind to install `sass` which I don't see it as apart of your deps
    // npm i -D sass
    config.module.rules.push({
      // this is for both less and scss
      test: /.*\.(?:sc|c)ss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: false
          }
        },
        'sass-loader',
      ]
    });

    // I don't think you need this anymore since `style-loader` is being used 
    // config.plugins.push(new MiniCssExtractPlugin({
    //   filename: '[name]-[contenthash].css',
    //   chunkFilename: '[id]-[contenthash].css',
    // }));

    return config;
  },
}