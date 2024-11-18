/**
 *
 * 下载文件
 *
 * @example downloadFile('http://www.baidu.com/img/bd_logo1.png', 'logo.png')
 */
export function download(link, name) {
  if (!name) name = link.slice(link.lastIndexOf("/") + 1);

  const eleLink = document.createElement("a");
  eleLink.download = name;
  eleLink.style.display = "none";
  eleLink.href = link;
  eleLink.target = "_blank";
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}
