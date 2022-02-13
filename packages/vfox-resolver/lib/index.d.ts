export interface VfoxResolverOptions {
    /**
     * import style css or sass along with components
     *
     * @default true
     */
    importStyle?: boolean | 'css' | 'sass';
    /**
     * use commonjs lib or es module
     *
     * @default "esm"
     */
    format?: 'esm' | 'cjs';
}
/**
 * Resolver for Vfox
 *
 * @link https://github.com/godxiaoji/vfox
 */
export declare function VfoxResolver(options?: VfoxResolverOptions): {
    type: string;
    resolve: (name: string) => {
        importName: string;
        path: string;
        sideEffects: string | undefined;
    } | undefined;
};
