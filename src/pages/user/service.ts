import { getIntl } from 'umi';

export function sGetMyself() {
  return new Promise((rs) => {
    setTimeout(() => {
      rs({
        name: getIntl().formatMessage({ id: 'services.user.szhonger' }),
      });
    }, 1000);
  });
}
