chrome.storage.local.get("state", ({ state }) => {
  const markdown = `
# Toby Export
${JSON.parse(state).lists.map(({title, cards}) => `## ${title}
${cards.map(({ customTitle, title, url }) => `- [${customTitle || title}](${url})`).join('\n')}`).join('\n\n')}`;
  let e = document.createElement("a");
  e.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(markdown)}`);
  e.setAttribute("download", `TobyBackup${Date.now()}.md`);
  e.click();
});