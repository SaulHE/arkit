import { Config } from './config';
import { Files } from './types';
export declare class Parser {
    private config;
    private project;
    private sourceFiles;
    private sourceFolders;
    private tsResolve?;
    private tsConfigFilePath?;
    constructor(config: Config);
    private resolveTsConfigPaths;
    private prepareProject;
    private cleanProject;
    parse(): Files;
    private getImports;
    private getExports;
    private addModule;
    private getModulePath;
    private resolveTsModule;
}
//# sourceMappingURL=parser.d.ts.map