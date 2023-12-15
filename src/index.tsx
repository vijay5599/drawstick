
import {
	DefaultErrorFallback,
	ErrorBoundary,
} from '@tldraw/tldraw'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BasicExample from './BasicExample'


function App() {
	return (
		<div className="examples">
			<BasicExample/>
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	}
])

document.addEventListener('DOMContentLoaded', () => {
	const rootElement = document.getElementById('root')!
	const root = createRoot(rootElement!)
	root.render(
		<StrictMode>
			<ErrorBoundary
				fallback={(error) => <DefaultErrorFallback error={error} />}
				onError={(error) => console.error(error)}
			>
				<RouterProvider router={router} />
			</ErrorBoundary>
		</StrictMode>
	)
})
