import { init, roomDoc } from '../../models/room.js';

test('initialize room data', () => {
  init();
  expect(roomDoc).toBeDefined();
});
