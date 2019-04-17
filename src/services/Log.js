export class Log {
  static error(msg) {
    return { type: "error", msg: `ERROR: ${msg}` };
  }

  static warn(msg) {
    return { type: "warn", msg: `WARN: ${msg}` };
  }

  static notify(msg) {
    return { type: "notify", msg: `${msg}` };
  }
}
