function openlink(url, target = "_blank") {
  const a = document.createElement("a");
  a.href = url;
  a.target = target;
  a.click();
  a.remove();
}