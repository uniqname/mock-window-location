export const compose = (...fns) => (data) => fns.reduceRight((last, next) => next(last), data)
export const negate = (fn) => (data) => !fn(data)