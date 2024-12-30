import { disposeModel } from './model/modelLoader';

export function cleanupResources() {
  disposeModel();
}

window.addEventListener('beforeunload', cleanupResources);