import React from "react"


function LogomarkPaths() {
  return (
    <g fill="#FF716B" fillRule="nonzero"><path d="M7.848 17.03a.864.864 0 0 1 0 1.215.85.85 0 0 1-1.205 0L5.05 16.638l-1.595 1.607a.85.85 0 0 1-1.205 0 .864.864 0 0 1 0-1.215l1.595-1.607-1.595-1.607a.864.864 0 0 1 0-1.214.843.843 0 0 1 1.205 0l1.595 1.607 1.594-1.607a.843.843 0 0 1 1.205 0 .864.864 0 0 1 0 1.214l-1.594 1.607 1.594 1.607ZM15.996 10.012a.86.86 0 0 1-.603 1.467.86.86 0 0 1-.605-.252L13.197 9.62l-1.595 1.607a.86.86 0 0 1-.602.252.859.859 0 0 1-.603-1.467l1.595-1.607-1.595-1.607a.859.859 0 0 1 0-1.215.843.843 0 0 1 1.205 0l1.595 1.607 1.591-1.607a.846.846 0 0 1 1.208 0 .864.864 0 0 1 0 1.215l-1.594 1.607 1.594 1.607ZM30.75 20.585a.864.864 0 0 1 0 1.215.847.847 0 0 1-1.204 0l-1.595-1.607-1.594 1.607a.847.847 0 0 1-1.205 0 .859.859 0 0 1 0-1.215l1.594-1.607-1.594-1.607a.859.859 0 0 1 0-1.215.848.848 0 0 1 1.205 0l1.594 1.608 1.595-1.608a.848.848 0 0 1 1.205 0 .864.864 0 0 1 0 1.215l-1.595 1.607 1.595 1.607Z"/><path d="M25.96 4.312 20.8 3.026a.85.85 0 0 0-1.031.627L18.494 8.85a.86.86 0 0 0 .622 1.042.852.852 0 0 0 1.031-.63l.782-3.185.224.375c2.618 4.377 1.217 10.086-3.126 12.727-.304.183-.62.35-.94.496a4.11 4.11 0 0 0-2.705-1.95 4.127 4.127 0 0 0-.86-.092c-1.949 0-3.654 1.398-4.057 3.323a4.18 4.18 0 0 0 .588 3.148A4.117 4.117 0 0 0 13.532 26c1.95 0 3.654-1.398 4.058-3.323.094-.458.114-.92.06-1.37.431-.188.852-.409 1.258-.655 5.147-3.131 6.81-9.898 3.706-15.088l-.224-.373 3.16.788a.851.851 0 0 0 1.031-.627.858.858 0 0 0-.622-1.04ZM15.918 22.324a2.454 2.454 0 0 1-2.893 1.905 2.463 2.463 0 0 1-1.89-2.919 2.457 2.457 0 0 1 2.388-1.96c.17 0 .34.018.508.055a2.433 2.433 0 0 1 1.543 1.063c.358.553.48 1.212.344 1.856Z"/></g>
  )
}

export function Logomark(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 227 26" fill="none" {...props}>
      <LogomarkPaths />
      <path fill="#2B4273" fillRule="nonzero" d="M47.828 16.5v4.722H45V16.52c0-3.136 2.3-4.836 5.203-4.836.094 0 .226 0 .358.02.132.018.283.056.415.075v2.739a6.312 6.312 0 0 0-.34-.057c-.131-.019-.244-.038-.339-.038-.47 0-.848.057-1.168.151-.528.19-1 .548-1.17 1.115a2.295 2.295 0 0 0-.131.812Zm8.559 2.191c1.376 0 2.168-.812 2.168-2.191 0-1.379-.792-2.191-2.168-2.191-1.377 0-2.168.812-2.168 2.191 0 1.379.791 2.191 2.168 2.191Zm0 2.626c-2.904 0-4.996-1.927-4.996-4.817 0-2.984 2.168-4.817 4.996-4.817 2.922 0 4.995 1.927 4.995 4.817 0 2.966-2.186 4.817-4.995 4.817Zm12.97-9.54h2.828V16.5c0 2.89-1.999 4.817-4.808 4.817-2.884 0-4.807-2.021-4.807-4.817v-4.722h2.828V16.5c0 1.266.641 2.191 1.98 2.191 1.376 0 1.979-.907 1.979-2.191v-4.722ZM83.685 16.5v4.722h-2.828V16.5c0-1.303-.604-2.191-1.98-2.191-1.357 0-1.98.907-1.98 2.191v4.722H74.07V16.5c0-2.909 1.998-4.817 4.807-4.817 2.922 0 4.808 2.003 4.808 4.817Zm8.351 0c0-1.417-.697-2.191-2.13-2.191-.396 0-.735.057-1.018.17-.528.245-.886.604-1.056 1.171a2.51 2.51 0 0 0-.132.85c0 .302.038.586.132.85.15.548.547.944 1.056 1.152.283.132.622.19 1.018.19 1.433 0 2.13-.775 2.13-2.192Zm0-3.778V8h2.828v8.5c0 3.003-2.13 4.817-4.977 4.817-2.903 0-5.015-1.89-5.015-4.78 0-2.663 1.96-4.854 4.638-4.854.999 0 1.866.284 2.526 1.04Zm7.54 3.778c0 1.398.698 2.191 2.112 2.191.396 0 .754-.057 1.037-.189.528-.208.886-.604 1.075-1.152.075-.264.113-.548.113-.85 0-.302-.038-.586-.113-.85-.208-.586-.528-.907-1.075-1.171-.283-.113-.64-.17-1.037-.17-1.414 0-2.111.793-2.111 2.191Zm0 3.778V25H96.75v-8.5c0-3.022 2.13-4.817 4.977-4.817 2.903 0 5.015 1.908 5.015 4.798 0 2.682-2.017 4.836-4.694 4.836-.547 0-1.019-.095-1.414-.284a2.85 2.85 0 0 1-1.056-.755Zm11.312-3.778v4.722h-2.828V16.52c0-3.136 2.3-4.836 5.204-4.836.094 0 .226 0 .358.02.132.018.282.056.414.075v2.739a6.312 6.312 0 0 0-.339-.057c-.132-.019-.245-.038-.34-.038-.47 0-.848.057-1.168.151-.528.19-1 .548-1.169 1.115a2.295 2.295 0 0 0-.132.812Zm6.636-1.133c.283.094.603.17.943.207.339.057.66.076.961.076.377 0 1.339-.076 1.339-.623 0-.586-.83-.605-1.245-.605-.83 0-1.545.19-1.998.945Zm5.335 2.909v2.644c-1.055.246-2.111.416-3.205.416-2.997 0-5.222-1.757-5.222-4.798 0-3.004 2.15-4.855 4.996-4.855 1.942 0 4.185.926 4.185 3.136 0 2.191-2.375 3.003-4.204 3.003-.697 0-1.395-.189-2.036-.453.377 1.058 1.508 1.228 2.489 1.228.509 0 1.018-.02 1.527-.095.471-.038 1.018-.094 1.47-.226Zm4.977-1.776c0 1.398.698 2.191 2.112 2.191.396 0 .754-.057 1.036-.189.528-.208.887-.604 1.075-1.152.075-.264.113-.548.113-.85 0-.302-.038-.586-.113-.85-.207-.586-.528-.907-1.075-1.171-.282-.113-.64-.17-1.036-.17-1.414 0-2.112.793-2.112 2.191Zm0 3.778V25h-2.828v-8.5c0-3.022 2.13-4.817 4.977-4.817 2.904 0 5.015 1.908 5.015 4.798 0 2.682-2.017 4.836-4.694 4.836-.547 0-1.018-.095-1.414-.284a2.85 2.85 0 0 1-1.056-.755Z"/>
    </svg>
  )
}
