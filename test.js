import test from 'ava';
import request from 'supertest';
import { app } from './index.js';

function sum (a, b) {
    return a + b;
  }

test('Dummy Test', t => {
	t.pass();
});

test('Object Test', async t => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});

test('Root Request', async t => {
    t.plan(3)
    const response = await request(app)
      .get('/');
      t.pass('dummy pass')
      t.is(response.status, 200);
      t.is(response.body, "Hi")
})

test('Arr Request', async t => {
    t.plan(3)
    const response = await request(app)
      .get('/arr');
      t.pass('dummy pass')
      t.is(response.status, 200);
      //deepEqual used for arr
      t.deepEqual(response.body, [1,2,3,4,5])
})

test('Random Sum Function', t => {
    t.plan(2);
    t.pass('dummy pass');
    t.is(sum(1, 2), 3);
  })