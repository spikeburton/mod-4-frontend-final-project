export class Log {
  static message(msg) {
    return { type: "message", msg: `${msg}` };
  }

  static warn(msg) {
    return { type: "warn", msg: `WARN: ${msg}` };
  }

  static notify(msg) {
    return { type: "notify", msg: `NOTIFY: ${msg}` };
  }
}
