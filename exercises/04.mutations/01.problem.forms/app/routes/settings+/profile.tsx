import { json, type DataFunctionArgs } from '@remix-run/node'
import { Form, Link, useLoaderData } from '@remix-run/react'
import { authenticator, requireUserId } from '~/utils/auth.server'
import { prisma } from '~/utils/db.server'
import { Button } from '~/utils/forms'
import { getUserImgSrc } from '~/utils/misc'

export async function loader({ request }: DataFunctionArgs) {
	const userId = await requireUserId(request)
	const user = await prisma.user.findUnique({
		where: { id: userId },
		select: {
			id: true,
			name: true,
			username: true,
			imageId: true,
		},
	})
	if (!user) {
		throw await authenticator.logout(request, { redirectTo: '/' })
	}
	return json({ user })
}

export default function EditUserProfile() {
	const data = useLoaderData<typeof loader>()

	return (
		<div className="container m-auto mt-16 mb-36 max-w-3xl">
			<div className="flex gap-3">
				<Link className="text-night-300" to={`/users/${data.user.username}`}>
					Profile
				</Link>
				<span className="text-night-300">▶️</span>
				<span>Edit Profile</span>
			</div>
			<div className="mt-16 flex flex-col gap-12">
				<div className="flex justify-center">
					<div className="relative h-52 w-52">
						<img
							src={getUserImgSrc(data.user.imageId)}
							alt={data.user.username}
							className="h-full w-full rounded-full object-cover"
						/>
					</div>
				</div>
				<Form method="post">
					<label htmlFor="name">Name:</label>
					<input
						name="name"
						id="name"
						defaultValue={data.user.name ?? ''}
						className="h-16 w-full rounded-lg border border-night-400 bg-night-700 px-4 text-body-xs caret-white outline-none focus:border-accent-purple disabled:bg-night-400"
					/>
					<label htmlFor="username">Username:</label>
					<input
						name="username"
						id="username"
						defaultValue={data.user.username}
						className="h-16 w-full rounded-lg border border-night-400 bg-night-700 px-4 text-body-xs caret-white outline-none focus:border-accent-purple disabled:bg-night-400"
					/>
					<Button variant="primary" size="md-wide" type="submit">
						Save Changes
					</Button>
				</Form>
			</div>
		</div>
	)
}
