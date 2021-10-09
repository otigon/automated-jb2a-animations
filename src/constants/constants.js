//const log = console.log.bind(window.console);
const log = () => { };
export default log;

export function aaDebugger(...args) {
    console.log(`DEBUG | Automated Animations |`, ...args);
}