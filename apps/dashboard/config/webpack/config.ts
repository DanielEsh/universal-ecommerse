import {Configuration} from "webpack";
import {BuildOptions} from "./types";
import {loaders, plugins, resolve} from "../webpack/index";

export const webpackConfigFactory = (options: BuildOptions): Configuration => {
    const {mode, paths} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        resolve: resolve,
        module: {
            rules: loaders(),
        },
        plugins: plugins(options),
    }
}