const formatVolumeIconPath = require('../assets/scripts/main');

describe('icon changes based on volume value', () => {
  test('Volume 0 returns the icon 0', () => {
    expect(formatVolumeIconPath(0)).toContain("0");
  });
  test('Volume 20 returns the icon 1', () => {
    expect(formatVolumeIconPath(20)).toContain("1");
  });
  test('Volume 50 returns the icon 2', () => {
    expect(formatVolumeIconPath(50)).toContain("2");
  });
  test('Volume 70 returns the icon 3', () => {
    expect(formatVolumeIconPath(70)).toContain("3");
  });
});