const { notificationSuccess } = require('./notification');
const { mentionList } = require('./notification-cfg');
const BUILD_URL =
  process.argv[2] ||
  'https://github.com/RootLinkFE/AutoBuild-React-Native/actions';
const uploadCloud = process.argv[3];
const platform = process.argv[4] || 'Android';
let text = '';

if (uploadCloud === 'true') {
  text = '\n>正在同步到蒲公英平台……';
}
const context = `${platform}构建成功🎉 \n>已上传Github Artifact，[点此下载(需登陆)](${BUILD_URL})${text}`;
notificationSuccess(context, null, mentionList);
