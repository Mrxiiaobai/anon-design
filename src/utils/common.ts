export const getIsTopNavBar = () => {
  let is = false;
  const OTO_SAAS = (window as any).OTO_SAAS;
  if (Object.keys(OTO_SAAS).length) {
    if (
      OTO_SAAS.customer.customize.default.type === 'banner' &&
      typeof OTO_SAAS.customer.customize.default.create === 'function'
    ) {
      is = true;
    }
  }
  return is;
};

export function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P,
): C & P {
  const ret = component as any;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}

export default {};
