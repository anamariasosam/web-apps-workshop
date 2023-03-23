import { KCDShopIFrameSync } from '@kentcdodds/workshop-app/iframe-sync'
import { type LinksFunction } from '@remix-run/node'
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import { useId, useState } from 'react'
// 🐨 import the ./styles/app.css file here to get the appStylesheetUrl
import appStylesheetUrl from './styles/app.css'
import { ButtonLink } from './utils/forms'
import { generateStarsSvg } from './utils/starfield.server'

export const links: LinksFunction = () => {
	return [
		{ rel: 'stylesheet', href: '/fonts/nunito-sans/font.css' },
		// 🐨 Add a link to the appStylesheetUrl here
		{ rel: 'stylesheet', href: appStylesheetUrl },
	]
}

export default function App() {
	return (
		<html lang="en" className="h-full">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="flex h-full flex-col justify-between bg-night-700 text-white">
				<header className="container mx-auto py-6">
					<nav className="flex justify-between">
						<Link to="/">
							<div className="font-light">rocket</div>
							<div className="font-bold">Rental</div>
						</Link>
						<div className="flex items-center gap-10">
							<Link to="/search">🔍</Link>
							<ButtonLink to="/login" size="sm" variant="primary">
								Log In
							</ButtonLink>
						</div>
					</nav>
				</header>

				<div className="flex-1">
					<Outlet />
				</div>

				<div className="container mx-auto">
					<Link to="/">
						<div className="font-light">rocket</div>
						<div className="font-bold">Rental</div>
					</Link>
				</div>
				<div className="h-5" />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
				<KCDShopIFrameSync />
				<NoHydrate className="fixed inset-0 -z-10" getHTML={generateStarsSvg} />
			</body>
		</html>
	)
}

function NoHydrate({
	getHTML,
	...rest
}: { getHTML?: () => string } & JSX.IntrinsicElements['div']) {
	const id = useId()
	const [html] = useState(() => {
		if (typeof document === 'undefined') return getHTML?.() ?? ''
		const el = document.getElementById(id)
		if (!el) return getHTML?.() ?? ''
		return el.innerHTML
	})
	return <div {...rest} id={id} dangerouslySetInnerHTML={{ __html: html }} />
}
