# Error Abstraction

👨‍💼 To keep things consistent, one of our engineers has made a handy abstraction
for error boundaries. You can find it in
<InlineFile file="app/components/error-boundary.tsx" />. Here's how you use it:

```tsx
export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				403: ({ params }) => (
					<p>You're not authorized to look at {params.sandwichId}</p>
				),
			}}
		/>
	)
}
```

Could you please update all our custom ErrorBoundaries to use this abstraction?
Thanks!

<TouchedFiles>
  <div id="files">
    <ul>
      <li data-state="modified">
        <span>modified</span>

        <InlineFile file="app/routes/settings+/profile.tsx" />
      </li>

      <li data-state="modified">
        <span>modified</span>

        <InlineFile file="app/routes/users_+/$username.host.tsx" />
      </li>

      <li data-state="modified">
        <span>modified</span>

        <InlineFile file="app/routes/users_+/$username.index.tsx" />
      </li>

      <li data-state="modified">
        <span>modified</span>

        <InlineFile file="app/routes/users_+/$username.renter.tsx" />
      </li>

      <li data-state="modified">
        <span>modified</span>

        <InlineFile file="app/routes/users_+/$username.tsx" />
      </li>
    </ul>

  </div>
</TouchedFiles>
