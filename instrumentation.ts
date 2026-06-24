export function register() {
  if (typeof window === "undefined" && typeof localStorage !== "undefined") {
    try {
      localStorage.getItem("__test__");
    } catch {
      Object.defineProperty(global, "localStorage", {
        value: undefined,
        writable: true,
        configurable: true,
      });
    }
  }
}
