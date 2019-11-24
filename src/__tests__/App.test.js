import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer'

describe('Customer Feedback snapshot',()=>{
	test('testing app initial state', () => {
		let tree = create(<App />)
		expect(tree.toJSON()).toMatchSnapshot();
	})
})