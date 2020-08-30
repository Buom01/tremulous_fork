// https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus

function getFocuslable()
{
  return (
    document.querySelectorAll(`a[href],
      area[href],
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      iframe,
      [tabindex],
      [contentEditable=true]`)
  );
}

function getFocusedElement()
{
  return (document.activeElement);
}

// or use https://www.npmjs.com/package/arcade-machine
