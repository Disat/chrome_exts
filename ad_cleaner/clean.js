let CSSSelectors = [
  "#div_company_mini", //http://atguigu.com
  ".toutiao_con",
  ".toolbar",
  ".online-left",
  "#hz6d_kf_icon_1",
  "#nav_composition",
  ".video_r_nav>h1",
  ".hint_con",
  ".headerbg",
  "#iframe_company_mini_div",
  ".ad-box--label", //https://oschina.com
  ".detail-toolbar-box",
  ".article-box__group",
  ".ad-wrap",
  "#csdn-toolbar", //https:blog.csdn.net
  "#asideNewComments",
  ".more-toolbox",
  ".GlobalSideBar",
  ".header-box",
  ".section-link-card",
  "#content_right", //www.baidu.com/s,
  ".w-xl-300", //www.https://segmentfault.com/
  "#sf-header",
  "#OA_holder_2",
  "#OA_holder_3",
  "#rightAside",
  "#alert_windows",
  "#_41jdrrvl3uf",
  "#sitefocus",
  ".alert_windows3",
  "footer",
  ".sidebar-content",
  ".sta",
  ".footerad",
  ".adsbygoogle",
  ".code-block.code-block-2",
  "#ai_widget-2",
  "#lig_reverso_smartbox_article_tc",
  "#rca",
  "#bottom-mega-rca-box",
];

CSSSelectors.forEach((CSSSelector) => {
  if (document.querySelector(CSSSelector)) {
    document.querySelector(CSSSelector).remove();
  }
});
