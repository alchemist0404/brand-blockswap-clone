import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./views/pages/Home'));

export default function Routing() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
		</Routes>
	)
}