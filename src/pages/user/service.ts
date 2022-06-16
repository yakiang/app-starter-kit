export function sGetMyself() {
  return new Promise((rs) => {
    setTimeout(() => {
      rs({
        name: 'Szhonger',
      });
    }, 1000);
  });
}
