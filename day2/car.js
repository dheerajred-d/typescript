// IIFE
// Module1
let Car = ((eng) => {
    console.log(`Bhp ${eng.bhp} oilCool - ${eng.oilCool}`)

})(Engine);
// Module2
let Engine = (function() {
    return {
        bhp: 1700,
        oilCool: true
    };
})();