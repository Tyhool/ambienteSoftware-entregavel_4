function MDC(a, b) {
    if (b === 0) {
      return a;
    }
    return MDC(b, a % b);
  }

  module.exports = MDC;