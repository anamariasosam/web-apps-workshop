# Route Params

👨‍💼 It wouldn't make much sense if we needed to make a new route for every single
user. Instead, we can use a route parameter to capture the username and use it
in our route handler. We typically call these "params".

With the file-based route convention we're using, we define params by using a
`$`-prefixed filename segment. For example:

| Route File Example                       | Params       | Example Path           |
| ---------------------------------------- | ------------ | ---------------------- |
| `app/routes/ships.$shipId.tsx`           | `$shipId`    | `/ships/1234`          |
| `app/routes/bookings+/$bookingId.tsx`    | `$bookingId` | `/bookings/1234`       |
| `app/routes/chats+/$chatId.messages.tsx` | `$chatId`    | `/chats/1234/messages` |

So in this exercise, let's rename our files to use the `$username` param and
instead of rendering "Kody" we can render the username from params.

💰 You can get the param value from
[`useParams()`](https://remix.run/docs/en/1.14.3/hooks/use-params) which you can
`import` from `@remix-run/react`. For example:

```tsx filename=app/routes/pets.$petName.tsx
import { useParams } from '@remix-run/react'

export function PetRoute() {
	const params = useParams()
	return <h1>Hello {params.petName}</h1>
}
```

Once you've finished with that, you should be able to go to any username and it
will display that username. Here are some to try:

<div>
	* <LinkToApp to="/users/kody" />
	* <LinkToApp to="/users/Marty123" />
	* <LinkToApp to="/users/Alfred" />
	* <LinkToApp to="/users/hannah" />
	* <LinkToApp to="/users/olivia" />
	* <LinkToApp to="/users/peter" />
</div>

<TouchedFiles>
  <div id="files">
    <ul>
      <li data-state="renamed">
        <span>renamed</span>

        <InlineFile file="app/routes/users_+/kody.host.tsx" />
      </li>

      <li data-state="renamed">
        <span>renamed</span>

        <InlineFile file="app/routes/users_+/kody.index.tsx" />
      </li>

      <li data-state="renamed">
        <span>renamed</span>

        <InlineFile file="app/routes/users_+/kody.renter.tsx" />
      </li>

      <li data-state="added">
        <span>added</span>

        <InlineFile file="app/routes/users_+/$username.tsx" />
      </li>

      <li data-state="deleted">
        <span>deleted</span>

        <InlineFile file="app/routes/users_+/kody.tsx" />
      </li>
    </ul>

  </div>
</TouchedFiles>
