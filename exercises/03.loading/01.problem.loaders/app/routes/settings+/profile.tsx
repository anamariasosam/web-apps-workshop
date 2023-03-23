import { json, type DataFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { requireUserId } from '~/utils/auth.server'
import { prisma } from '~/utils/db.server'

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

	return json({ user })
}

export default function EditUserProfile() {
	const data = useLoaderData<typeof loader>()

	return <pre className="ml-20">{JSON.stringify(data, null, 2)}</pre>
}
