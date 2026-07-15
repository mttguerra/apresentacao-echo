// Cada bloco registra suas timelines aqui.
//
// registry[blockId] = {
//   onShow(section)              — entrada no slide
//   onHide(section)              — saída. USE pra .kill() tweens contínuos.
//   onFragmentShown(event)       — avanço de fragmento
//   onFragmentHidden(event)      — volta de fragmento
// }

const registry = new Map();

export function registerBlock(blockId, handlers) {
  registry.set(blockId, handlers);
}

export function getHandlers(blockId) {
  return registry.get(blockId) || null;
}

export function getBlockIdFromSection(section) {
  return section?.dataset?.block || null;
}
