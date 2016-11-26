import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayouts.jsx';
import App from './App.jsx'

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
				content: (<App />)
		})
	}
});