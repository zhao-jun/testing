module.exports = {
    add: (...args) => args.reduce((prev, curr) => prev + curr),

    mul: (...args) => args.reduce((prev, curr) => prev * curr)
}