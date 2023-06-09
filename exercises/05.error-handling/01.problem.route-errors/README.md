# Handle Route Errors

👨‍💼 If you open <InlineFile file="app/routes/settings+/profile.tsx" /> and
comment in one of the errors 🐨 added for you, then try loading
<LinkToApp to="/settings/profile" />, you'll notice the error looks pretty bad.
We definitely want to customize that!

Could you please add an `ErrorBoundary` component to both
<InlineFile file="app/routes/settings+/profile.tsx" /> and
<InlineFile file="app/routes/users_+/$username.tsx" /> so we can handle errors
that happen in our app?

Please make sure to log the error in the console with `console.error` so we can
see what's going on in our debugging.

Note: 🐨 Kody added a couple commented out errors for you to test things out in
different places throughout
<InlineFile file="app/routes/settings+/profile.tsx" />.

<TouchedFiles>
  <div id="files">
    <ul>
      <li data-state="modified">
        <span>modified</span>

        <InlineFile file="app/routes/settings+/profile.tsx" />
      </li>

      <li data-state="modified">
        <span>modified</span>

        <InlineFile file="app/routes/users_+/$username.tsx" />
      </li>
    </ul>

  </div>
</TouchedFiles>
