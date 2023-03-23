import { Link, Outlet } from '@remix-run/react'

const links = [
	{
		to: '.',
		name: 'Index',
	},
	{
		to: 'host',
		name: 'Host',
	},
	{
		to: 'renter',
		name: 'Renter',
	},
]

export default function Kody() {
	return (
		<div className="mt-36 mb-48">
			<h1 className="text-h1">Kody!! :)</h1>
			<Outlet />
			<ol className="list-inside list-disc">
				{links.map(link => {
					return (
						<li key={link.to}>
							<Link to={link.to}>{link.name}</Link>
						</li>
					)
				})}
			</ol>
		</div>
	)
}
