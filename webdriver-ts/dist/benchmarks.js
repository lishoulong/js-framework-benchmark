"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webdriverAccess_1 = require("./webdriverAccess");
const common_1 = require("./common");
var BenchmarkType;
(function (BenchmarkType) {
    BenchmarkType[BenchmarkType["CPU"] = 0] = "CPU";
    BenchmarkType[BenchmarkType["MEM"] = 1] = "MEM";
    BenchmarkType[BenchmarkType["STARTUP"] = 2] = "STARTUP";
})(BenchmarkType = exports.BenchmarkType || (exports.BenchmarkType = {}));
;
const SHORT_TIMEOUT = 20 * 1000;
class Benchmark {
    constructor(benchmarkInfo) {
        this.benchmarkInfo = benchmarkInfo;
        this.id = benchmarkInfo.id;
        this.type = benchmarkInfo.type;
        this.label = benchmarkInfo.label;
        this.description = benchmarkInfo.description;
        this.throttleCPU = benchmarkInfo.throttleCPU;
    }
    after(driver, framework) { return null; }
    // Good fit for a single result creating Benchmark
    resultKinds() { return [this.benchmarkInfo]; }
    extractResult(results, resultKind) { return results; }
    ;
}
exports.Benchmark = Benchmark;
const benchRun = new class extends Benchmark {
    constructor() {
        super({
            id: "01_run1k",
            label: "create rows",
            description: "creating 1,000 rows",
            type: BenchmarkType.CPU
        });
    }
    async init(driver) { await webdriverAccess_1.testElementLocatedById(driver, "add", SHORT_TIMEOUT); }
    async run(driver) {
        await webdriverAccess_1.clickElementById(driver, "add");
        await webdriverAccess_1.testElementLocatedByXpath(driver, "//tbody/tr[1000]/td[2]/a");
    }
};
const benchReplaceAll = new class extends Benchmark {
    constructor() {
        super({
            id: "02_replace1k",
            label: "replace all rows",
            description: "updating all 1,000 rows (" + common_1.config.WARMUP_COUNT + " warmup runs).",
            type: BenchmarkType.CPU
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, 'run', SHORT_TIMEOUT);
        for (let i = 0; i < common_1.config.WARMUP_COUNT; i++) {
            await webdriverAccess_1.clickElementById(driver, 'run');
            await webdriverAccess_1.testTextContains(driver, '//tbody/tr[1]/td[1]', (i * 1000 + 1).toFixed());
        }
    }
    async run(driver) {
        await webdriverAccess_1.clickElementById(driver, 'run');
        await webdriverAccess_1.testTextContains(driver, '//tbody/tr[1]/td[1]', '5001');
    }
};
// const benchUpdate = new class extends Benchmark {
//     constructor() {
//         super({
//             id: "03_update10th1k",   // FIXME rename to now 03_update10th10k
//             label: "partial update",
//             description: "Time to update the text of every 10th row (with " + config.WARMUP_COUNT + " warmup iterations) for a table with 10k rows.",
//             type: BenchmarkType.CPU
//         })
//     }
//     async init(driver: WebDriver) {
//         await testElementLocatedById(driver, "runlots", SHORT_TIMEOUT);
//         await clickElementById(driver, 'runlots');
//         await testElementLocatedByXpath(driver, "//tbody/tr[1000]/td[2]/a");
//         for (let i = 0; i < config.WARMUP_COUNT; i++) {
//             await clickElementById(driver, 'update');
//             await testTextContains(driver, '//tbody/tr[9991]/td[2]/a', ' !!!'.repeat(i + 1));
//         }
//     }
//     async run(driver: WebDriver) {
//         await clickElementById(driver, 'update');
//         await testTextContains(driver, '//tbody/tr[9991]/td[2]/a', ' !!!'.repeat(config.WARMUP_COUNT + 1));
//     }
// }
const benchUpdate = new class extends Benchmark {
    constructor() {
        super({
            id: "03_update10th1k_x16",
            label: "partial update",
            description: "updating every 10th row for 1,000 rows (3 warmup runs). 16x CPU slowdown.",
            type: BenchmarkType.CPU,
            throttleCPU: 16
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "run", SHORT_TIMEOUT);
        await webdriverAccess_1.clickElementById(driver, 'run');
        await webdriverAccess_1.testElementLocatedByXpath(driver, "//tbody/tr[1000]/td[2]/a");
        for (let i = 0; i < 3; i++) {
            await webdriverAccess_1.clickElementById(driver, 'update');
            await webdriverAccess_1.testTextContains(driver, '//tbody/tr[991]/td[2]/a', ' !!!'.repeat(i + 1));
        }
    }
    async run(driver) {
        await webdriverAccess_1.clickElementById(driver, 'update');
        await webdriverAccess_1.testTextContains(driver, '//tbody/tr[991]/td[2]/a', ' !!!'.repeat(3 + 1));
    }
};
const benchSelect = new class extends Benchmark {
    constructor() {
        super({
            id: "04_select1k",
            label: "select row",
            description: "highlighting a selected row. (" + common_1.config.WARMUP_COUNT + " warmup runs). 16x CPU slowdown.",
            type: BenchmarkType.CPU,
            throttleCPU: 16
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "run", SHORT_TIMEOUT);
        await webdriverAccess_1.clickElementById(driver, 'run');
        await webdriverAccess_1.testElementLocatedByXpath(driver, "//tbody/tr[1]/td[2]/a");
        for (let i = 0; i <= common_1.config.WARMUP_COUNT; i++) {
            await webdriverAccess_1.clickElementByXPath(driver, `//tbody/tr[${i + 1}]/td[2]/a`);
        }
    }
    async run(driver) {
        await webdriverAccess_1.clickElementByXPath(driver, "//tbody/tr[2]/td[2]/a");
        await webdriverAccess_1.testClassContains(driver, "//tbody/tr[2]", "danger");
    }
};
const benchSwapRows = new class extends Benchmark {
    constructor() {
        super({
            id: "05_swap1k",
            label: "swap rows",
            description: "swap 2 rows for table with 1,000 rows. (" + common_1.config.WARMUP_COUNT + " warmup runs). 4x CPU slowdown.",
            type: BenchmarkType.CPU,
            throttleCPU: 4
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "run", SHORT_TIMEOUT);
        await webdriverAccess_1.clickElementById(driver, 'run');
        await webdriverAccess_1.testElementLocatedByXpath(driver, "//tbody/tr[1]/td[2]/a");
        for (let i = 0; i <= common_1.config.WARMUP_COUNT; i++) {
            let text = await webdriverAccess_1.getTextByXPath(driver, "//tbody/tr[2]/td[2]/a");
            await webdriverAccess_1.clickElementById(driver, 'swaprows');
            await webdriverAccess_1.testTextContains(driver, "//tbody/tr[999]/td[2]/a", text);
        }
    }
    async run(driver) {
        let text = await webdriverAccess_1.getTextByXPath(driver, "//tbody/tr[2]/td[2]/a");
        await webdriverAccess_1.clickElementById(driver, 'swaprows');
        await webdriverAccess_1.testTextContains(driver, "//tbody/tr[999]/td[2]/a", text);
    }
};
const benchRemove = new class extends Benchmark {
    constructor() {
        super({
            id: "06_remove-one-1k",
            label: "remove row",
            description: "removing one row. (" + common_1.config.WARMUP_COUNT + " warmup runs).",
            type: BenchmarkType.CPU
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "run", SHORT_TIMEOUT);
        await webdriverAccess_1.clickElementById(driver, 'run');
        await webdriverAccess_1.testElementLocatedByXpath(driver, "//tbody/tr[1]/td[2]/a");
        for (let i = 0; i < common_1.config.WARMUP_COUNT; i++) {
            await webdriverAccess_1.testTextContains(driver, `//tbody/tr[${common_1.config.WARMUP_COUNT - i + 4}]/td[1]`, (common_1.config.WARMUP_COUNT - i + 4).toString());
            await webdriverAccess_1.clickElementByXPath(driver, `//tbody/tr[${common_1.config.WARMUP_COUNT - i + 4}]/td[3]/a/span[1]`);
            await webdriverAccess_1.testTextContains(driver, `//tbody/tr[${common_1.config.WARMUP_COUNT - i + 4}]/td[1]`, '10');
        }
        await webdriverAccess_1.testTextContains(driver, '//tbody/tr[5]/td[1]', '10');
        await webdriverAccess_1.testTextContains(driver, '//tbody/tr[4]/td[1]', '4');
    }
    async run(driver) {
        await webdriverAccess_1.clickElementByXPath(driver, "//tbody/tr[4]/td[3]/a/span[1]");
        await webdriverAccess_1.testTextContains(driver, '//tbody/tr[4]/td[1]', '10');
    }
};
const benchRunBig = new class extends Benchmark {
    constructor() {
        super({
            id: "07_create10k",
            label: "create many rows",
            description: "creating 10,000 rows",
            type: BenchmarkType.CPU
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "runlots", SHORT_TIMEOUT);
    }
    async run(driver) {
        await webdriverAccess_1.clickElementById(driver, 'runlots');
        await webdriverAccess_1.testElementLocatedByXpath(driver, "//tbody/tr[10000]/td[2]/a");
    }
};
// const benchAppendToManyRows = new class extends Benchmark {
//     constructor() {
//         super({
//             id: "08_create1k-after10k",
//             label: "append rows to large table",
//             description: "Duration for adding 1000 rows on a table of 10,000 rows.",
//             type: BenchmarkType.CPU
//         })
//     }
//     async init(driver: WebDriver) {
//         await testElementLocatedById(driver, "runlots", SHORT_TIMEOUT);
//         await clickElementById(driver, 'runlots');
//         await testElementLocatedByXpath(driver, "//tbody/tr[10000]/td[2]/a");
//     }
//     async run(driver: WebDriver) {
//         await clickElementById(driver, 'add');
//         await testElementLocatedByXpath(driver, "//tbody/tr[11000]/td[2]/a");
//     }
// }
const benchAppendToManyRows = new class extends Benchmark {
    constructor() {
        super({
            id: "08_create1k-after1k_x2",
            label: "append rows to large table",
            description: "appending 1,000 to a table of 10,000 rows. 2x CPU slowdown",
            type: BenchmarkType.CPU,
            throttleCPU: 2
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "run", SHORT_TIMEOUT);
        await webdriverAccess_1.clickElementById(driver, 'run');
        await webdriverAccess_1.testElementLocatedByXpath(driver, "//tbody/tr[1000]/td[2]/a");
    }
    async run(driver) {
        await webdriverAccess_1.clickElementById(driver, 'add');
        await webdriverAccess_1.testElementLocatedByXpath(driver, "//tbody/tr[1100]/td[2]/a");
    }
};
// const benchClear = new class extends Benchmark {
//     constructor() {
//         super({
//             id: "09_clear10k",
//             label: "clear rows",
//             description: "Duration to clear the table filled with 10.000 rows.",
//             type: BenchmarkType.CPU
//         })
//     }
//     async init(driver: WebDriver) {
//         await testElementLocatedById(driver, "runlots", SHORT_TIMEOUT);
//         await clickElementById(driver, 'runlots');
//         await testElementLocatedByXpath(driver, "//tbody/tr[10000]/td[2]/a");
//     }
//     async run(driver: WebDriver) {
//         await clickElementById(driver, 'clear');
//         await testElementNotLocatedByXPath(driver, "//tbody/tr[1]");
//     }
// }
const benchClear = new class extends Benchmark {
    constructor() {
        super({
            id: "09_clear1k_x8",
            label: "clear rows",
            description: "clearing a table with 1,000 rows. 8x CPU slowdown",
            type: BenchmarkType.CPU,
            throttleCPU: 8
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "run", SHORT_TIMEOUT);
        await webdriverAccess_1.clickElementById(driver, 'run');
        await webdriverAccess_1.testElementLocatedByXpath(driver, "//tbody/tr[1000]/td[2]/a");
    }
    async run(driver) {
        await webdriverAccess_1.clickElementById(driver, 'clear');
        await webdriverAccess_1.testElementNotLocatedByXPath(driver, "//tbody/tr[1]");
    }
};
const benchReadyMemory = new class extends Benchmark {
    constructor() {
        super({
            id: "21_ready-memory",
            label: "ready memory",
            description: "Memory usage after page load.",
            type: BenchmarkType.MEM,
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "add", SHORT_TIMEOUT);
    }
    async run(driver) {
        await webdriverAccess_1.testElementNotLocatedByXPath(driver, "//tbody/tr[1]");
    }
    async after(driver, framework) {
        await webdriverAccess_1.clickElementById(driver, 'run');
        await webdriverAccess_1.testElementLocatedByXpath(driver, "//tbody/tr[1]/td[2]/a");
    }
};
const benchRunMemory = new class extends Benchmark {
    constructor() {
        super({
            id: "22_run-memory",
            label: "run memory",
            description: "Memory usage after adding 1000 rows.",
            type: BenchmarkType.MEM,
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "add", SHORT_TIMEOUT);
    }
    async run(driver) {
        await webdriverAccess_1.clickElementById(driver, 'run');
        await webdriverAccess_1.testElementLocatedByXpath(driver, "//tbody/tr[1]/td[2]/a");
    }
};
const benchUpdate5Memory = new class extends Benchmark {
    constructor() {
        super({
            id: "23_update5-memory",
            label: "update eatch 10th row for 1k rows (5 cycles)",
            description: "Memory usage after clicking update every 10th row 5 times",
            type: BenchmarkType.MEM,
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "add", SHORT_TIMEOUT);
    }
    async run(driver) {
        await webdriverAccess_1.clickElementById(driver, 'run');
        for (let i = 0; i < 5; i++) {
            await webdriverAccess_1.clickElementById(driver, 'update');
            await webdriverAccess_1.testTextContains(driver, '//tbody/tr[1]/td[2]/a', ' !!!'.repeat(i));
        }
    }
};
const benchReplace5Memory = new class extends Benchmark {
    constructor() {
        super({
            id: "24_run5-memory",
            label: "replace 1k rows (5 cycles)",
            description: "Memory usage after clicking create 1000 rows 5 times",
            type: BenchmarkType.MEM,
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "add", SHORT_TIMEOUT);
    }
    async run(driver) {
        for (let i = 0; i < 5; i++) {
            await webdriverAccess_1.clickElementById(driver, 'run');
            await webdriverAccess_1.testTextContains(driver, "//tbody/tr[1000]/td[1]", (1000 * (i + 1)).toFixed());
        }
    }
};
const benchCreateClear5Memory = new class extends Benchmark {
    constructor() {
        super({
            id: "25_run-clear-memory",
            label: "creating/clearing 1k rows (5 cycles)",
            description: "Memory usage after creating and clearing 1000 rows 5 times",
            type: BenchmarkType.MEM,
        });
    }
    async init(driver) {
        await webdriverAccess_1.testElementLocatedById(driver, "add", SHORT_TIMEOUT);
    }
    async run(driver) {
        for (let i = 0; i < 5; i++) {
            await webdriverAccess_1.clickElementById(driver, 'run');
            await webdriverAccess_1.testTextContains(driver, "//tbody/tr[1000]/td[1]", (1000 * (i + 1)).toFixed());
            await webdriverAccess_1.clickElementById(driver, 'clear');
            await webdriverAccess_1.testElementNotLocatedByXPath(driver, "//tbody/tr[1000]/td[1]");
        }
    }
};
const benchStartupConsistentlyInteractive = {
    id: "31_startup-ci",
    label: "consistently interactive",
    description: "a pessimistic TTI - when the CPU and network are both definitely very idle. (no more CPU tasks over 50ms)",
    type: BenchmarkType.STARTUP,
    property: "TimeToConsistentlyInteractive"
};
const benchStartupBootup = {
    id: "32_startup-bt",
    label: "script bootup time",
    description: "the total ms required to parse/compile/evaluate all the page's scripts",
    type: BenchmarkType.STARTUP,
    property: "ScriptBootUpTtime"
};
const benchStartupMainThreadWorkCost = {
    id: "33_startup-mainthreadcost",
    label: "main thread work cost",
    description: "total amount of time spent doing work on the main thread. includes style/layout/etc.",
    type: BenchmarkType.STARTUP,
    property: "MainThreadWorkCost"
};
const benchStartupTotalBytes = {
    id: "34_startup-totalbytes",
    label: "total kilobyte weight",
    description: "network transfer cost (post-compression) of all the resources loaded into the page.",
    type: BenchmarkType.STARTUP,
    property: "TotalKiloByteWeight"
};
class BenchStartup extends Benchmark {
    constructor() {
        super({
            id: "30_startup",
            label: "startup time",
            description: "Time for loading, parsing and starting up",
            type: BenchmarkType.STARTUP,
        });
    }
    async init(driver) { await driver.get(`http://localhost:${common_1.config.PORT}/`); }
    async run(driver, framework) {
        await driver.get(`http://localhost:${common_1.config.PORT}/${framework.uri}/`);
        await webdriverAccess_1.testElementLocatedById(driver, "run", SHORT_TIMEOUT);
        return driver.sleep(common_1.config.STARTUP_SLEEP_DURATION);
    }
    extractResult(results, resultKind) {
        return results.reduce((a, v) => { a.push(v[resultKind.property]); return a; }, new Array());
    }
    resultKinds() {
        return [
            benchStartupConsistentlyInteractive,
            benchStartupBootup,
            benchStartupMainThreadWorkCost,
            benchStartupTotalBytes,
        ];
    }
}
const benchStartup = new BenchStartup();
exports.benchmarks = [
    benchRun,
    benchReplaceAll,
    benchUpdate,
    benchSelect,
    benchSwapRows,
    benchRemove,
    benchRunBig,
    benchAppendToManyRows,
    benchClear,
    benchReadyMemory,
    benchRunMemory,
    benchUpdate5Memory,
    benchReplace5Memory,
    benchCreateClear5Memory,
    benchStartup,
];
function fileName(framework, benchmark) {
    return `${framework.fullNameWithKeyedAndVersion}_${benchmark.id}.json`;
}
exports.fileName = fileName;
//# sourceMappingURL=benchmarks.js.map