# PostCSS and Tailwind CSS Support

👨‍💼 We already have a <InlineFile file="postcss.config.js" /> file which
configures PostCSS to use Tailwind CSS. We also have a
<InlineFile file="tailwind.config.js" /> file which configures Tailwind CSS. And
we've already got a bunch of Tailwind classes in the code. So all we need to do
is add a `<link>` for <InlineFile file="app/styles/tailwind.css" /> which uses
the Tailwind directives to generate the CSS based on our usage of the tailwind
classes.

And we definitely want this on every page, so it's back to the
<InlineFile file="app/root.tsx" /> file! Pretty sure for this one, it'll be
obvious when you are successful 😅 But if you're unsure, pop open the network
tab and look for the tailwind.css file with the fingerprint hash in the
filename.

- 📜
  [Remix PostCSS Docs](https://remix.run/docs/en/1.14.3/guides/styling#md-postcss)
- 📜
  [Remix TailwindCSS Docs](https://remix.run/docs/en/1.14.3/guides/styling#md-tailwind-css)

<TouchedFiles>
  <div id="files">
    <ul>
      <li data-state="modified">
        <span>modified</span>

        <InlineFile file="app/root.tsx" />
      </li>
    </ul>

  </div>
</TouchedFiles>
