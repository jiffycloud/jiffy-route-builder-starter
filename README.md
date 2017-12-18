# Jiffy Route Builder Starter

A starter project which uses the [Serverless Framework](https://serverless.com/framework/docs) to deploy a AWS Lambda and API Gateway-based API handler written in NodeJS that uses the tiny [Jiffy Route Builder](https://github.com/jiffycloud/jiffy-route-builder) module, and [webpack](https://webpack.js.org) to create a bundle.



## Usage

Run `npm install` within the starter project folder:

```
git clone https://github.com/jiffycloud/jiffy-route-builder-starter
cd jiffy-route-builder-starter
npm install
```

Build the application bundle:

```
npm run build
```

Use Serverless to deploy the handler:

```
npm run deploy
```



## What's in the starter

- A `handler.js` to serve as a starting point for writing an API handler
- A webpack configuration to compile using BabelJS, and produce a bundle with all dependencies
- A `serverless.yml` file that will configure the API Gateway to proxy all requests to your API (i.e., `/{proxy+}`) to the entrypoint in `handler.js`

Make sure to take a look at the `README.md` in the  [Jiffy Route Builder](https://github.com/jiffycloud/jiffy-route-builder) project to understand how the API handler is setup. 

Note the webpack bundle produced by the starter is configured with `aws-sdk` as an external. This is so that if you do use the AWS SDK in your project, it won't be included in the final bundle. We made this common mistake when writing our own Node.js Lambda functions. The `aws-sdk` module is already available to all functions in the AWS Lambda Node.js environment so you don't need to add it yourself. All it does is add significant unnecessary weight to your bundle. It results in larger bundles, and longer cold starts.