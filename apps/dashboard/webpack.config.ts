import path from 'path'
import {Configuration} from 'webpack'
import {webpackConfigFactory} from "./config/webpack/config";
import {BuildPaths} from "./config/webpack/types";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development'
const isDev = mode === 'development';
const port = 3000

const config: Configuration = webpackConfigFactory({
    mode,
    paths,
    port,
    isDev,
})

export default config;