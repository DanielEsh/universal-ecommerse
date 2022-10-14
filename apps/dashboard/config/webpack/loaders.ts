import {RuleSetRule} from 'webpack';

const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

export const loaders = (): RuleSetRule[] => {
    return [
        typescriptLoader,
    ]
}