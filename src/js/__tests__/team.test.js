import Team from '../team';

test('object has length', () => {
  const team = new Team();
  expect([...team].length).toBeGreaterThan(0);
})