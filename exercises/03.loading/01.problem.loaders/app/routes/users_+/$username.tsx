import { Outlet, useLoaderData } from '@remix-run/react'
import { json, type DataFunctionArgs } from '@remix-run/node'
import { prisma } from '~/utils/db.server'
import { getUserId } from '~/utils/auth.server'

export async function loader({ request, params }: DataFunctionArgs) {
	const user = await prisma.user.findUnique({
		where: { username: params.username },
	})
	const loggedInUserId = await getUserId(request)
	return json({ isSelf: user?.id === loggedInUserId })
}

export default function UserRoute() {
	const data = useLoaderData<typeof loader>()

	return (
		<div className="mt-36 mb-48">
			<pre className="mb-40 ml-20">{JSON.stringify(data, null, 2)}</pre>
			<Outlet />
		</div>
	)
}
