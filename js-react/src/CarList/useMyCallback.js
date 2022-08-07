const prevState = {
  cb: null,
  deps: null,
};

const depsAreEqual = (prevDeps, deps) => {
  if (prevDeps.length !== deps.length) return false;

  for (let index = 0; index < prevDeps.length; index++) {
    if (prevDeps[index] !== deps[index]) return false;
  }

  return true;
};

export const useMyCallback = (cb, deps) => {
  console.log("useMyCallback start");
  if (!prevState.deps || !deps) {
    prevState.cb = cb;
    prevState.deps = deps;
    return cb;
  }

  if (depsAreEqual(prevState.deps, deps)) {
    return prevState.cb;
  }

  prevState.deps = deps;
  prevState.cb = cb;

  return cb;
};
