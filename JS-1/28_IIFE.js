// It's useful for creating a local scope to avoid polluting the global namespace.
// by creating a new, isolated function scope. Any variables or functions defined inside the IIFE will only be available within that function's scope and not in the global scope. This prevents conflicts and unwanted variable leakage into the global environment.

;(()=>{
    console.log(`hello`); 
})();